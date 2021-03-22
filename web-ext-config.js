module.exports = {
  verbose: false,
  ignoreFiles: [
    'test/',
    'testTarget/',
    'web-ext-artifacts/',
    '*.ps1',
    'package.json',
    'package-lock.json',
    'web-ext-config.js',
    'yarn.lock',
    'note/',
  ],
  build: {
    overwriteDest: true,
  },
};
