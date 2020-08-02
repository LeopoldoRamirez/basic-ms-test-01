const { Router } = require('express');
const noteRouter = require('./notes.route');
const userRouter = require('./user.routes');

const router = Router();

router.use('/notes', noteRouter);
router.use('/users', userRouter);

//default route must be the last one
router.get('/', (request, response) => {
    response.send('First microservice application with Node JS');
});


module.exports = router;