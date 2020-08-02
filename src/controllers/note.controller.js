const { buildResponse } = require('./controllerUtils');
 

const getAllNotes = async( request, response )=>{
    
    try {
        return buildResponse( response, 200, [] );
    } catch (error) {
        return buildResponse( response, 500, {} ); ;    
    }

}

const getNoteById = async(request, response)=>{
    try {
        return buildResponse( response, 200, { msg: "get note by id" } );
    } catch (error) {
        return buildResponse( response, 500, {} ); ;    
    }
}


const saveNote = async( request, response )=>{
    try {
        return buildResponse( response, 201, {msg:"note saved"} );
    } catch (error) {
        return buildResponse( response, 500, {} ); ;    
    }
}

const updateNote = async(request, response)=>{
    try {
        return buildResponse( response, 200, {msg: "note updated"} );
    } catch (error) {
        return buildResponse( response, 500, {} ); ;    
    }
}


const deleteNote = async( request, response )=>{
    try {
        return buildResponse( response, 200, { msg: "note deleted" } );
    } catch (error) {
        return buildResponse( response, 500, {} ); ;    
    }
}

module.exports = {
    getAllNotes,
    getNoteById,
    saveNote,
    updateNote,
    deleteNote
}