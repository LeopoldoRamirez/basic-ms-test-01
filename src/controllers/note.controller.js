
const getAllNotes = async( request, response )=>{
    return response.json( [] );
}

const getNoteById = async( request, response ) =>{
    const id = request.params.id || "";

    console.log( `ID to find is ${id}`);

    return response.json({ name: "foo", id  });

}


const saveNote = async( request, response) =>{
    const note = request.body;

    console.log("saving note ", note );

    note.id = 100;

    return response.status(201).json( note );

}

const updateNote = async(request, response )=>{
    const id = request.params.id;
    const note = request.body;


    note.isUpdated = true;

    return response.status(200).json(note);
}

const deleteNote = async(request, response )=>{
    const id = request.params.id;
    const msg  = `note with id ${id} was deleted`;
    
    return response.status(200).json({ msg });
}


module.exports = {
    getAllNotes,
    getNoteById,
    saveNote,
    updateNote,
    deleteNote
}