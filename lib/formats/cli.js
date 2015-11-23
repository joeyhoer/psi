'use strict';
const _ = require('lodash');
const chalk = require('chalk');
const repeating = require('repeating');
const utils = require('../utils');

module.exports = (overview, statistics, ruleSetResults) => {
  const renderOverview = item => {
    const color = item.label === 'Score' ? utils.scoreColor(item.value) : chalk.cyan;
    return item.label + ':' + utils.buffer(item.label, 16) + color(item.value);
  };

  const renderSection = item => {
    if (['robotedUrls','transientFetchFailureUrls'].indexOf(item.label) >= 0 ) {
      item.value = (item.value+'').split(',').join('\n'+repeating(' ', 43)+chalk.grey('| '));
    }
    return utils.labelize(item.label) + chalk.cyan(item.value);
  };

  return [
    utils.divider,
    _.map(overview, renderOverview).join('\n') + '\n',
    _.map(statistics, renderSection).join('\n'),
    '',
    _.map(ruleSetResults.filter(x => x.value > 0), renderSection).join('\n'),
    utils.divider
  ].join('\n');
};
