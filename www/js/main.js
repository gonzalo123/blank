require.config({

    paths: {
        'domReady': '../assets/requirejs-domready/domReady',
        'angular': '../assets/angular/angular',
        "uiRouter": "../assets/angular-ui-router/release/angular-ui-router",
        "uiBootstrap": "../assets/angular-bootstrap/ui-bootstrap-tpls"
    },

    shim: {
        'angular': {exports: 'angular'},
        'uiRouter': {deps: ['angular']},
        'uiBootstrap': {deps: ['angular']}
    },

    deps: [
        './bootstrap'
    ]
});
