'use strict';
const chalk = require('chalk');

const humanizeTitleMap = {
  numberResources: 'Resources',
  numberHosts: 'Hosts',
  totalRequestBytes: 'Total size of request bytes sent',
  numberStaticResources: 'Static resources',
  htmlResponseBytes: 'HTML size',
  cssResponseBytes: 'CSS size',
  imageResponseBytes: 'Image size',
  javascriptResponseBytes: 'JavaScript size',
  otherResponseBytes: 'Other size',
  numberJsResources: 'JS resources',
  numberCssResources: 'CSS resources',
  AvoidLandingPageRedirects: 'Avoid landing page redirects',
  AvoidPlugins: 'Avoid plugins',
  ConfigureViewport: 'Configure viewport',
  EnableGzipCompression: 'Enable GZIP compression',
  LeverageBrowserCaching: 'Leverage browser caching',
  MainResourceServerResponseTime: 'Main resource server response time',
  MinifyCss: 'Minify CSS',
  MinifyHTML: 'Minify HTML',
  MinifyJavaScript: 'Minify JavaScript',
  MinimizeRenderBlockingResources: 'Minimize render blocking resources',
  OptimizeImages: 'Optimize images',
  PrioritizeVisibleContent: 'Prioritize visible content',
  SizeContentToViewport: 'Size content to viewport',
  SizeTapTargetsAppropriately: 'Size tap targets appropriately',
  UseLegibleFontSizes: 'Use legible font sizes',
  // Mobile Ready
  cms: 'CMS',
  numberRobotedResources: 'Disallowed resources',
  numberTransientFetchFailureResources: 'Resource fetch failures',
  robotedUrls: 'Disallowed URLs',
  // A temporary error occurred. X resources on this page could not be loaded.
  // The results and screenshot may be incorrect. You may want to try again later.
  transientFetchFailureUrls: 'Failed fetch URLs',
  AvoidInterstitials: 'App interstitials',
};

exports.divider = '\n' + chalk.grey('-'.repeat(56)) + '\n';

exports.buffer = (msg, length) => {
  let ret = '';

  if (length === undefined) {
    length = 44;
  }

  length = length - msg.length - 1;

  if (length > 0) {
    ret = ' '.repeat(length);
  }

  return ret;
};

exports.scoreColor = score => {
  let color = chalk.yellow;
  color = score < 21 ? chalk.red : color;
  color = score > 79 ? chalk.green : color;
  return color;
};

exports.labelize = str => {
  const label = humanizeTitleMap[str] || str;
  return label + exports.buffer(label) + chalk.grey('| ');
};
