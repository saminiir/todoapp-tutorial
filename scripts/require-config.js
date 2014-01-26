require.config({
  baseUrl: '',
  paths: {
    jquery: 'bower_components/jquery/jquery',
    handlebars: 'bower_components/handlebars/handlebars'
  },
  shim: {
    'handlebars': {
      exports: 'Handlebars'
    }
  }
});
