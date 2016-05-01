var util = require('util');

function escapeGlobStringOrArray(escapeFn) {
  return function(glob) {
    if (util.isString(glob)) {
      return escapeFn(glob);
    }
    if (util.isArray(glob)) {
      return glob.map(escapeFn);
    }
    throw new Error('glob pattern needs to be a string or array');
  };
}

function escapeGlob(glob) {
  return glob
    .replace(/\\/g, '\\\\')
    .replace(/\*/g, '\\*')
    .replace(/\?/g, '\\?')
    .replace(/\[/g, '\\[')
    .replace(/\]/g, '\\]')
    .replace(/\{/g, '\\{')
    .replace(/\}/g, '\\}')
    .replace(/\)/g, '\\)')
    .replace(/\(/g, '\\(')
    .replace(/\!/g, '\\!');
}

module.exports = escapeGlobStringOrArray(escapeGlob);
