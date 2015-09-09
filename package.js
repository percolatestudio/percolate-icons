var Version = 'v2.4';

Package.describe({
  summary: 'Icons for Percolate, version' + Version
});

Package.onUse(function(api) {
  var path = Npm.require('path');
  var assetPath = path.join(Version);

  api.addAssets(path.join(assetPath, 'fonts', 'percolate.eot'), 'client');
  api.addAssets(path.join(assetPath, 'fonts', 'percolate.svg'), 'client');
  api.addAssets(path.join(assetPath, 'fonts', 'percolate.ttf'), 'client');
  api.addAssets(path.join(assetPath, 'fonts', 'percolate.woff'), 'client');

  api.use(['less']);
  api.addFiles(path.join('edited-style.less'), 'client');
});
