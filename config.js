module.exports = {
    events: {
        GREET: 'greet',
        JUMP: 'jummp'
    }
}

emtr.on(config.events.GREET, () => {
    console.log('Somewhere, someone said hello.');
});