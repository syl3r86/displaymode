Hooks.on('ready', () => {
    $('#logo').click(ev => {
        $('#sidebar').toggle();
        $('#navigation').toggle();
        $('#controls').toggle();
        $('#players').toggle();
    });
});