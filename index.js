'use strict';
const googleapis = require('googleapis');
const prependHttp = require('prepend-http');
const pify = require('pify');
const output = require('./lib/output');

var mobileready = pify(googleapis.pagespeedonline('v3beta1').mobilereadyapi.runmobileready);

function handleOpts(url, opts) {
  opts = Object.assign({strategy: 'mobile'}, opts);
  // The environment variable GOOGLE_API_KEY can hold a default API key
  if (process.env.GOOGLE_API_KEY) {
    opts = Object.assign({key: process.env.GOOGLE_API_KEY}, opts);
  }
  opts.nokey = opts.key === undefined;
  opts.url = prependHttp(url);
  return opts;
}

const psi = (url, opts) => Promise.resolve().then(() => {
  if (!url) {
    throw new Error('URL required');
  }

  return mobileready(handleOpts(url, opts));
});

module.exports = psi;

module.exports.output = (url, opts) => psi(url, opts).then(data => output(handleOpts(url, opts), data));
