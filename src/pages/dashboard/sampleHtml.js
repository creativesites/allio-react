module.exports = {
    path: 'sampleHtml',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./sampleHtml').default);
        }
        );
    },
};