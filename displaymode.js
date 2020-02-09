Hooks.on('ready', () => {
    $('#logo').click(ev => {
        window.hideUI = !window.hideUI;
        if (window.hideUI) {
            $('#sidebar').hide();
            $('#navigation').hide();
            $('#controls').hide();
            $('#players').hide();
            $('#hotbar').hide();
        } else {
            $('#sidebar').show();
            $('#navigation').show();
            $('#controls').show();
            $('#players').show();
            $('#hotbar').show();
        }
    });
});