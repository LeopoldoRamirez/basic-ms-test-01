const { Router } = require('express');
const noteRouter = require('./notes.route');

const router = Router();

router.use('/notes', noteRouter);

//default route must be the last one
router.get('/', (request, response) => {
    response.send('First microservice application with Node JS');
});


module.exports = router;