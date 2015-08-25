define(['jquery', 'underscore'], function (jquery, _) {
  var modules = [];
  var statesToConfigure = [];
  var modulesToLoad = [];
  var scriptsToLoad = [];

  //Generates a string array with all the needed modules to load
  function generateModulesToLoad(globalDependencies) {
    for (var i = 0; i < modules.length; i++) {
      var moduleDependencies = modules[i].moduleDependencies;
      var moduleName = modules[i].moduleName;
      if (moduleName !== null) {
        globalDependencies.push(moduleName);
      }
      if (moduleDependencies !== null) {
        globalDependencies = _.union(globalDependencies, moduleDependencies);
      }
    }
    return globalDependencies;
  }

  var init = function () {
    jquery.ajax({
      url: "../../../extensions/modules.json",
      dataType: 'json',
      async: false,
      success: function (data) {
        modules = data;
        modulesToLoad = generateModulesToLoad([]);
        statesToConfigure = generateStatesToConfigure();
        scriptsToLoad = generateScriptsToLoad();

      },
      error: function (xhr, ajaxOptions, thrownError) {
        alert(xhr.status);
        alert(thrownError);
      }

    });

  };

  function generateStatesToConfigure() {
    var states = [];
    for (var i = 0; i < modules.length; i++) {
      var moduleStates = modules[i].moduleStates;
      if (moduleStates !== null) {
        states = _.union(states, moduleStates);
      }
    }
    return states;
  }

  function generateScriptsToLoad() {
    var scripts = [];
    for (var i = 0; i < modules.length; i++) {
      var scriptDependencies = modules[i].scriptDependencies;
      if (scriptDependencies !== null) {
        scripts = _.union(scripts, scriptDependencies);
      }
      var exports = modules[i].moduleExports;
      if (exports !== null) {
        scripts = _.union(scripts, exports);
      }
    }
    return scripts;

  }

  init();
  return {
    scriptsToLoad: scriptsToLoad,
    statesToConfigure: statesToConfigure,
    modulesToLoad: modulesToLoad,
    modules: modules
  }
});






