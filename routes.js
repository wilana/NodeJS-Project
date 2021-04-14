module.exports = router => {
    require('./routes/cuisines')(router);
    require('./routes/dishes')(router);

    return router;
}