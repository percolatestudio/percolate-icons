var Version = "v2.4";

Package.describe({
  summary: 'Icons for Percolate, version' + Version
});

Package.onUse(function(api) {
  var path = Npm.require('path');
  var assetPath = path.join(Version);

  api.addFiles(path.join(assetPath, 'fonts', 'percolate.eot'), 'client', {isAsset: true});
  api.addFiles(path.join(assetPath, 'fonts', 'percolate.svg'), 'client', {isAsset: true});
  api.addFiles(path.join(assetPath, 'fonts', 'percolate.ttf'), 'client', {isAsset: true});
  api.addFiles(path.join(assetPath, 'fonts', 'percolate.woff'), 'client', {isAsset: true});

  api.use(['less']);
  api.addFiles(path.join('edited-style.less'), 'client');
});
