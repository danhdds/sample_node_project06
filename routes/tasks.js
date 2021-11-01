
const tasks = require('../services/tasksService.js');

exports.appRouter = router => {

    router.get('/', function(req, res, next){

        try {

            res.json(tasks.getMultiple(req.query.page));

        } catch (err) {
            
            console.error(`Error while getting tasks `, err.message);
            next(err)

        } // end try catch

    }); // end router.get
 
} // end router