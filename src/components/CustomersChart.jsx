import React, { Component } from 'react';
import Chart, { Axis, Base, Layers, Line } from 'grommet/components/chart/Chart';
import Moment from 'moment';

class CustomersChart extends Component {
  constructor(props) {
    super(props);

    this.getSteps = this.getSteps.bind(this);
  }

  getSteps() {
    const { customers } = this.props;

    if (!customers) return [];

    const labels = customers
      .map(i => new Moment(i.transactionTimestamp).format('YYYY-MM'))
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
    const steps = this.getSteps();

    if (!steps.length) return <div>No customers available</div>;

    const xLabels = [{ index: 0, label: steps[0].label }, { index: 1, label: steps[steps.length - 1].label }];
    const values = steps.map(l => l.count);
    const min = Math.min(...values);
    const max = Math.max(...values);
    const yLabels = [{ index: 0, label: '0' }, { index: 1, label: max }];

    return (<Chart full>
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
            min={min}
            max={max}
            values={values}
            colorIndex="accent-1"
            points
            />
        </Layers>
        <Axis
          count={2}
          labels={xLabels}
          ticks
          />
      </Chart>
    </Chart>
    );
  }
}

export default CustomersChart;

