var Version = "v1.9";

Package.describe({
  summary: "Icons for Percolate, version" + Version
});

Package.on_use(function (api) {
  var path = Npm.require('path');
  var asset_path = path.join(Version);

  api.add_files(path.join(asset_path, 'fonts', 'percolate.eot'), 'client', {isAsset: true});
  api.add_files(path.join(asset_path, 'fonts', 'percolate.svg'), 'client', {isAsset: true});
  api.add_files(path.join(asset_path, 'fonts', 'percolate.ttf'), 'client', {isAsset: true});
  api.add_files(path.join(asset_path, 'fonts', 'percolate.woff'), 'client', {isAsset: true});

  api.add_files(path.join('edited-style.css'), 'client');
});