const fs = require('fs');
const path = require('path');

// Create .nojekyll file to prevent GitHub Pages from ignoring files that begin with an underscore
const nojekyllPath = path.join(process.cwd(), 'out', '.nojekyll');
fs.writeFileSync(nojekyllPath, '');
console.log('Created .nojekyll file');

// Check if _next directory exists and create a symlink if needed
const nextPath = path.join(process.cwd(), 'out', '_next');
if (fs.existsSync(nextPath)) {
  console.log('_next directory exists');
} else {
  console.log('_next directory not found');
}

// Add any other post-build steps here
console.log('Post-build script completed'); 