module.exports = {
  verbose: false,
  ignoreFiles: [
    'images/',
    'test/',
    'testTarget/',
    'web-ext-artifacts/',
    '*.log',
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
