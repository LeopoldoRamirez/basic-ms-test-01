const { buildResponse } = require('./controllerUtils')


const getAllUsers = async( request, response )=>{
    
    try {
        return buildResponse( response, 200, [] );
    } catch (error) {
        return buildResponse( response, 500, {} ); ;    
    }

}

const getUserById = async(request, response)=>{
    try {
        return buildResponse( response, 200, { msg: "get user by id" } );
    } catch (error) {
        return buildResponse( response, 500, {} ); ;    
    }
}


const saveUser = async( request, response )=>{
    try {
        return buildResponse( response, 201, {msg:"user saved"} );
    } catch (error) {
        return buildResponse( response, 500, {} ); ;    
    }
}

const updateUser = async(request, response)=>{
    try {
        return buildResponse( response, 200, {msg: "user updated"} );
    } catch (error) {
        return buildResponse( response, 500, {} ); ;    
    }
}


const deleteUser = async( request, response )=>{
    try {
        return buildResponse( response, 200, { msg: "user deleted" } );
    } catch (error) {
        return buildResponse( response, 500, {} ); ;    
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    saveUser,
    updateUser,
    deleteUser
}