const { 
    index, show, create, update, destroy
} = require('../controllers/dishes');

const passport = require('passport');

module.exports = router => {
    router.get('/dishes', index);
    router.get('/dishes/:id', show);
    router.post('/dishes', passport.authenticate('jwt', {session: false}), create);
    router.put('/dishes', passport.authenticate('jwt', {session: false}), update);
    router.delete('/dishes', passport.authenticate('jwt', {session: false}), destroy);
}