MIGRATED TO https://github.com/meteor/chromatic

=== Steps for updating the font.

1. Create a new font with http://icomoon.io/ [in Chrome]
2. Place output in /VERSION/
3. Replace edited-style.css with /VERSION/style.css and update the font urls to be prefixed with /packages/percolate-icons/VERSION/
4. Update `Version` in `package.js` with the new version
