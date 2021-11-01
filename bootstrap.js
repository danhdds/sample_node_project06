/**
 * To bootstrap the server
 */

const { appRouter } = require('./routes/tasks.js');
router = require('./routes/tasks.js');

const PORT = process.env.PORT || 5000;

module.exports = (app, router) => {

    appRouter(router);
    app.listen(PORT, ()=>{
        
        console.log(`server running on port ${PORT}`);

    });

} // end module.exports