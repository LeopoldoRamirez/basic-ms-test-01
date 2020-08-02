/**
 * 
 * @param {*} response 
 * @param {*} statudCode 
 * @param {*} body 
 */
function buildResponse( response, statudCode, body ){
    response.status(statudCode).json(body);
}


module.exports = {
    buildResponse
}