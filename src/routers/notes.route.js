const router = require('express').Router();
const  noteController  = require('../controllers/note.controller');


router.get( '/', noteController.getAllNotes );

router.get( "/:id" , noteController.getNoteById );

router.post("/", noteController.saveNote );

router.put( "/:id" , noteController.updateNote );

router.delete( "/:id" , noteController.deleteNote );

module.exports = router;