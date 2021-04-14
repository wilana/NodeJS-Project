const {
    index, show, create, update, destroy
} = require('../controllers/cuisines');

module.exports = router => {
    router.get('/cuisines', index);
    router.get('/cuisines/:id', show);
    router.post('/cuisines', create);
    router.put('/cuisines', update);
    router.delete('/cuisines', destroy);
}