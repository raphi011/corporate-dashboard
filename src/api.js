import fetch from 'isomorphic-fetch';
import papa from 'papaparse';

const issuesUrl = 'https://www.mockaroo.com/09b134d0/download?count=100&key=c8505e10';

export function getIssues() {
  return fetch(issuesUrl)
    .then(response => response.text())
    .then(csv => papa.parse(csv, { header: true, skipEmptyLines: true }).data);
}

const branchesUrl = 'http://mockaroo.com/3c6c7580/download?count=50&key=c8505e10';

export function getBranches() {
  return fetch(branchesUrl)
    .then(response => response.json());
}

const customersUrl = 'https://mockaroo.com/43ecb650/download?count=50&key=c8505e10';

export function getCustomers() {
  return fetch(customersUrl)
    .then(response => response.json());
}
