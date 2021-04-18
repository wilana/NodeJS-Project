module.exports = router => {
    require('./routes/cuisines')(router);
    require('./routes/dishes')(router);
    require('./routes/users')(router);
    require('./routes/sessions')(router);
    return router;
    
}