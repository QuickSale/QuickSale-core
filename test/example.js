define('testFile', [], function () {

    return function init(sandbox) {
        var app, application = app = sandbox.app
            , globals = sandbox.globals;

        return {
            some: 'module'
        };
    };

});