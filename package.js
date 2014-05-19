var Version = "v1";

Package.describe({
  summary: "Icons for Percolate, version" + Version
});

Package.on_use(function (api) {
  var path = Npm.require('path');
  var asset_path = path.join(Version);

  api.add_files(path.join(asset_path, 'fonts', 'percolate.eot'), 'client');
  api.add_files(path.join(asset_path, 'fonts', 'percolate.svg'), 'client');
  api.add_files(path.join(asset_path, 'fonts', 'percolate.ttf'), 'client');
  api.add_files(path.join(asset_path, 'fonts', 'percolate.woff'), 'client');

  api.add_files(path.join('edited-style.css'), 'client');
});