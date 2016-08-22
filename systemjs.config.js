(function(global) {

  var map = {
    app: "app",
    '@angular':  'https://npmcdn.com/@angular', // sufficient if we didn't pin the version
    'rxjs':      'https://npmcdn.com/rxjs@5.0.0-beta.6',
    'ts':        'https://npmcdn.com/plugin-typescript@4.0.10/lib/plugin.js',
    'typescript': 'https://npmcdn.com/typescript@1.9.0-dev.20160409/lib/typescript.js',
    'ng2-ui':     'https://npmcdn.com/ng2-ui/dist'
  };

  var packages = {
    app: { main: './main.ts', defaultExtension: 'ts' },
    '@angular/common': { main: 'bundles/common.umd.js', defaultExtension: 'js' },
    '@angular/compiler': { main: 'bundles/compiler.umd.js', defaultExtension: 'js' },
    '@angular/core': { main: 'bundles/core.umd.js', defaultExtension: 'js' },
    '@angular/forms': { main: 'bundles/forms.umd.js', defaultExtension: 'js' },
    '@angular/http': { main: 'bundles/http.umd.js', defaultExtension: 'js' },
    '@angular/router': { main: 'bundles/router.umd.js', defaultExtension: 'js' },
    '@angular/platform-browser': { main: 'bundles/platform-browser.umd.js', defaultExtension: 'js' },
    '@angular/platform-browser-dynamic': { main: 'bundles/platform-browser-dynamic.umd.js', defaultExtension: 'js' },
    rxjs: { defaultExtension: 'js' },
    'ng2-ui': {main: 'index.js', defaultExtension: 'js'}
  };

  // var ngPackageNames = [
  //   'common',
  //   'compiler',
  //   'core',
  //   'http',
  //   'platform-browser',
  //   'platform-browser-dynamic',
  //   'upgrade',
  // ];
  //
  // // Add map entries for each angular package
  // // only because we're pinning the version with `ngVer`.
  // ngPackageNames.forEach(function(pkgName) {
  //   map['@angular/'+pkgName] = 'https://npmcdn.com/@angular/' + pkgName + ngVer;
  // });
  //
  // // Add package entries for angular packages
  // ngPackageNames.forEach(function(pkgName) {
  //
  //   // Bundled (~40 requests):
  //   packages['@angular/'+pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  //
  //   // Individual files (~300 requests):
  //   //packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
  // });
  //
  // // No umd for router yet
  // packages['@angular/router'] = { main: 'index.js', defaultExtension: 'js' };
  //
  // // Forms not on rc yet
  // packages['@angular/forms'] = { main: 'index.js', defaultExtension: 'js' };
  //
  // // Temporarily until we update the guides
  // packages['@angular/router-deprecated'] = { main: '/bundles/router-deprecated' + '.umd.js', defaultExtension: 'js' };
  //
  // var config = {
  //   // DEMO ONLY! REAL CODE SHOULD NOT TRANSPILE IN THE BROWSER
  //   transpiler: 'ts',
  //   typescriptOptions: {
  //     tsconfig: true
  //   },
  //   meta: {
  //     'typescript': {
  //       "exports": "ts"
  //     }
  //   },
  //   map: map,
  //   packages: packages
  // };
  //
  // System.config(config);

  System.config({
    transpiler: 'ts',
    typescriptOptions: {
      experimentalDecorators: true,
      emitDecoratorMetadata: true
    },
    meta: {
      'typescript': {
        "exports": "ts"
      }
    },
    map: map,
    packages: packages
  });
})(this);
