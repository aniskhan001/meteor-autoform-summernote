Package.describe({
  name: 'aniskhan001:autoform-summernote',
  summary: 'Summernote editor for aldeed:autoform@6.3.0',
  version: '0.5.5',
  git: 'https://github.com/aniskhan001/meteor-autoform-summernote'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use([
    'templating',
    'underscore',
    'reactive-var',
    'aldeed:autoform@6.3.0',
    'summernote:standalone@0.8.1'
  ], 'client');

  api.addFiles([
    'lib/client/templates.html',
    'lib/client/templates.js',
    'lib/client/autoform-summernote.js'  
  ], 'client');
});
