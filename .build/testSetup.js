// Set test ENV
process.env.NODE_ENV = 'test';

// Disable webpack-specific features for tests since
// Mocha doesn't know what to do with them.
require.extensions['.css'] = function () {return null;};
require.extensions['.png'] = function () {return null;};
require.extensions['.jpg'] = function () {return null;};
require.extensions['.html'] = function () {return null;};

// Use chai BDD assertion style
global.expect = require('chai').expect;