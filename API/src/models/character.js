import {Schema,model} from 'mongoose';


const characterSchema = new Schema({
    birthday: {
        type: Date,
    },
    firstnam: {
        type: String,
    },
    lastname:{
        type: String,
    },
    nickname:{
        type: String,
    },
    description:{
        type: String,
    },
    hobby:{
        type: String,
    },
    profilPicture:{
        type: String,
    },
    likedBehavior:[], 
    dislikedBehavior:[], 
    acceptedCatch:[], 
    refusedCatch:[], 

});

const Character= model('Character',characterSchema);

export default Character;