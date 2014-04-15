require.config({
  baseUrl: '',
  paths: {
    jquery: 'bower_components/jquery/dist/jquery',
    handlebars: 'bower_components/handlebars/handlebars',
    jasmineJquery: 'bower_components/jasmine-jquery/lib/jasmine-jquery'
  },
  shim: {
    'handlebars': {
      exports: 'Handlebars'
    }
  }
});
