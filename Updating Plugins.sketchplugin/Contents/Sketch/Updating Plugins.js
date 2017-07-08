var pluginVersion;

var onShutdown = function(context) {
  var action = context.actionContext;
  var document = action.document;

  document.hideMessage();
  document.showMessage('Shutdown');
}

var onStartup = function(context) {
  pluginVersion = '1.2';
}

var onRun = function(context) {
  var document = context.document;
  var pluginName = 'Updating Plugins';

  document.showMessage(pluginName + ' ' + pluginVersion + ' is saying: Hello!');
}

//onRun(context)
