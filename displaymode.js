Hooks.on('ready', () => {
    $('#logo').click(ev => {
        window.hideUI = !window.hideUI;
        if (window.hideUI) {
            $('#sidebar').hide();
            $('#navigation').hide();
            $('#controls').hide();
            $('#players').hide();
            $('#hotbar').hide();
            $('#fvtt-party-resources-status-bar').hide();
            $('#fsc-eg').hide();
            $('#tokenbar-move-handle').hide();
        } else {
            $('#sidebar').show();
            $('#navigation').show();
            $('#controls').show();
            $('#players').show();
            $('#hotbar').show();
            $('#fvtt-party-resources-status-bar').show();
            $('#fsc-eg').show();
            $('#tokenbar-move-handle').show();
        }
    });
});

Hooks.on('renderSceneNavigation', (app, html) => {
    if (window.hideUI) {
        html.hide();
    }
});

Hooks.on('renderSceneControls', (app, html) => {
    if (window.hideUI) {
        html.hide();
    }
});

Hooks.on('renderSidebarTab', (app, html) => {
    if (window.hideUI) {
        html.hide();
    }
});

Hooks.on('renderCombatTracker', (app, html) => {
    if (window.hideUI) {
        html.hide();
    }
});

Hooks.on('fvtt-party-resources-status-bar', (app, html) => {
    if (window.hideUI) {
        html.hide();
    }
});

Hooks.on('fsc-eg', (app, html) => {
    if (window.hideUI) {
        html.hide();
    }
});

Hooks.on('tokenbar', (app, html) => {
    if (window.hideUI) {
        html.hide();
    }
});