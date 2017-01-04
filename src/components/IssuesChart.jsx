import React, { Component } from 'react';
import Chart, { Axis, Base, Layers, Line } from 'grommet/components/chart/Chart';
import Moment from 'moment';

class IssuesChart extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   sortIndex: 0,
    //   sortAscending: true,
    // };

    // this.onSort = this.onSort.bind(this);
    // this.filter = this.filter.bind(this);
    this.getLabels = this.getLabels.bind(this);
  }

  getLabels() {
    const { issues } = this.props;

    const labels = issues
      .map(i => new Moment(i.submissionTimestamp).format('YYYY-MM'))
      .sort()
      .reduce((a, month) => {
        if (a.length) {
          const lastElem = a[a.length - 1];
          if (lastElem.label === month) {
            lastElem.count++;
            return a;
          }
        }

        a.push({ index: a.length, label: month, count: 1 });

        return a;
      }, []);

    return labels;
  }

  render() {
    const xLabels = this.getLabels();
    let values = xLabels.map(l => l.count);
    const max = Math.max(...values);
    const yLabels = [{ index: 0, label: '0' }, { index: 1, label: max }];
    values = values.map(m => (m / max * 100));

    console.log(xLabels, values, yLabels);

    // return (
    //   <Chart>
    //     <Axis vertical={true}
    //       count={3}
    //       ticks={true} />
    //     <Base />
    //     <Layers>
    //       <Line values={[2, 1, 2, 0, 1]} />
    //     </Layers>
    //   </Chart>

    // );

    return ( <Chart>
        <Axis
          count={2}
          labels={yLabels}
          vertical
          ticks
          />
        <Chart vertical>
          <Base
            height="medium"
            width="medium"
            />
          <Layers>
            <Line
              values={values}
              colorIndex="accent-1"
              points
              />
          </Layers>
          <Axis
            count={xLabels.length}
            labels={xLabels}
            ticks
            />
        </Chart>
      </Chart>
    );
  }
}

export default IssuesChart;
