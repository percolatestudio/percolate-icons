var Version = "v2.0";

Package.describe({
  summary: "Icons for Percolate, version" + Version
});

Package.on_use(function(api) {
  var path = Npm.require("path");
  var assetPath = path.join(Version);

  api.add_files(path.join(assetPath, "fonts", "percolate.eot"), "client");
  api.add_files(path.join(assetPath, "fonts", "percolate.svg"), "client");
  api.add_files(path.join(assetPath, "fonts", "percolate.ttf"), "client");
  api.add_files(path.join(assetPath, "fonts", "percolate.woff"), "client");

  api.add_files(path.join("edited-style.css"), "client");
});
