System.config({
  transpiler: 'typescript',
  typescriptOptions: {
    emitDecoratorMetadata: true
  },
  //map tells the System loader where to look for things
  map: {
    app: "./src",
    '@angular': 'https://npmcdn.com/@angular',
    'rxjs': 'https://npmcdn.com/rxjs@5.0.0-beta.6',
    //'ng2-utils': 'https://npmcdn.com/ng2-utils',
    //'ng2-sticky': 'https://npmcdn.com/ng2-sticky@0.1.1'
  },
  //packages defines our app package
  packages: {
    app: { main: './main.ts', defaultExtension: 'ts' },
    '@angular/core': { main: 'bundles/core.umd.js', defaultExtension: 'js' },
    '@angular/compiler': { main: 'bundles/compiler.umd.js', defaultExtension: 'js' },
    '@angular/common': { main: 'bundles/common.umd.js', defaultExtension: 'js' },
    '@angular/platform-browser-dynamic': { main: 'bundles/platform-browser-dynamic.umd.js', defaultExtension: 'js' },
    '@angular/platform-browser': { main: 'bundles/platform-browser.umd.js', defaultExtension: 'js' },
    //'ng2-utils': { main: 'dist/index.js', defaultExtension: 'js' },
    //'ng2-sticky': { main: 'dist/index.js', defaultExtension: 'js' },
    rxjs: { defaultExtension: 'js' }
  }
});

