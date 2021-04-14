const { 
    index, show, create, update, destroy
} = require('../controllers/dishes');

module.exports = router => {
    router.get('/dishes', index);
    router.get('/dishes/:id', show);
    router.post('/dishes', create);
    router.put('/dishes', update);
    router.delete('/dishes', destroy);
}