import fetch from 'isomorphic-fetch';
import papa from 'papaparse';

const issuesUrl = 'https://www.mockaroo.com/09b134d0/download?count=10&key=c8505e10';

export function getIssues() {
  return fetch(issuesUrl)
    .then(response => response.text())
    .then(csv => papa.parse(csv, { header: true }).data);
}
