/**
 * Gulp file for scaffolding
 */

const fs = require('fs');
const gulp = require('gulp');
const path = require('path');
const yargs = require('yargs');
const rename = require('gulp-rename');
const template = require('gulp-template');

const root = './src';

// TASK TO CREATE NEW COMPONENT
gulp.task('component',() => {
  let { name, destPath, parentPath, shouldCreateUnitTestFile } = _prepareParams( yargs , 'components' );
  let destTestPath = path.join('__tests__/components', parentPath);
  const parent = destPath.split('\\')[3];
  return _startTask(
    _setPath(`component`), 
    name, 
    destPath,
    shouldCreateUnitTestFile,
    _setPath(`component-test`),
    destTestPath,
  );
});

// TASK TO CREATE NEW CONTAINER
gulp.task('container',() => {
  let { name, destPath } = _prepareParams( yargs , 'containers' );
  return _startTask(_setPath('container'), name, destPath);
});

// TASK TO CREATE NEW MODULE
gulp.task('module',() => {
  let { name, destPath } = _prepareParams( yargs , 'store/modules' );
  return _startTask(_setPath('module'), name, destPath);
});

//==============================================================================

const _getFolders = dir => {
    return fs.readdirSync(dir)
      .filter(function(file) {
        return fs.statSync(path.join(dir, file)).isDirectory();
      });
}

const _setPath = (dest = '') => {
  return { blankTemplates: path.join( './', 'generators', `${dest}/*.**`) }
}

const _capitalize = (name = '') => name.charAt(0).toUpperCase() + name.slice(1);

const _resolveToPath = (pathCreate = '', glob = '') => path.join(root, pathCreate, glob);

const _startTask = (paths, name, destPath, shouldCreateUnitTestFile = false, testPaths = '', destTestPath = '') => {
  gulp.src(paths.blankTemplates)
    .pipe(template({
      name: name,
      upCaseName: _capitalize(name),
    }))
    .pipe(gulp.dest(destPath));

  if (shouldCreateUnitTestFile) {
    gulp.src(testPaths.blankTemplates)
      .pipe(template({
        name: name,
        upCaseName: _capitalize(name)
      }))
      .pipe(rename((path) => {
        path.basename = path.basename.replace('temp', `${_capitalize(name)}.spec`);
      }))   
      .pipe(gulp.dest(destTestPath));
  }
}

const  _prepareParams = (yargs = {}, dest = '') => {
  const name = yargs.argv.name;
  const parentPath = yargs.argv.parent || '';
  const destPath = path.join(_resolveToPath(dest), parentPath, _capitalize(name));
  const shouldCreateUnitTestFile = yargs.argv.test || false;
  return { name, destPath, parentPath, shouldCreateUnitTestFile };
}
