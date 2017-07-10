var onShutdown = function(context) {
  // event on the plugin that's being updated
}

var onStartup = function(context) {
  // event on the plugin that is installed
}

var onRun = function(context) {
  var document = context.document;
  var pluginName = 'Updating Plugins';

  document.showMessage(pluginName + ' is saying: Hello!');
}

//onRun(context)
