module.exports = {
  verbose: false,
  ignoreFiles: [
    'test/',
    'testTgt/',
    'web-ext-artifacts/',
    '*.ps1',
    'package.json',
    'package-lock.json',
    'web-ext-config.js',
    'yarn.lock',
  ],
  build: {
    overwriteDest: true,
  },
};
