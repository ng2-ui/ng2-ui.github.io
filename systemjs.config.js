(function(global) {

  var map = {
    app: "app",
    '@angular':  'https://npmcdn.com/@angular', // sufficient if we didn't pin the version
    'rxjs':      'https://npmcdn.com/rxjs@5.0.0-beta.6',
    'ts':        'https://npmcdn.com/plugin-typescript@4.0.10/lib/plugin.js',
    'typescript': 'https://npmcdn.com/typescript@1.9.0-dev.20160409/lib/typescript.js',
    // 'ng2-ui':     'ng2-ui/dist'
    'ng2-ui':    'https://npmcdn.com/ng2-ui/dist'
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
