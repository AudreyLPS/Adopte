import {Schema,model} from 'mongoose';


const characterSchema = new Schema({
    birthday: {
        type: String,
        required: true,
    },
    firstname: {
        type: String,
        required: true,
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
    acceptedCatch:String, 
    refusedCatch:String, 

});

const Character= model('Character',characterSchema);

export default Character;