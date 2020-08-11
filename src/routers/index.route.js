const { Router } = require('express');
const noteRouter = require('./notes.route');

const router = Router();

router.use('/notes', noteRouter);

//default route must be the last one
router.get('/', (request, response) => {
    const welcomeMessage = process.env.APP_MESSAGE;
    response.send( welcomeMessage );
});


module.exports = router;