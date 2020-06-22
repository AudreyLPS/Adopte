import Character from "../models/character";

class CharacterController{

    //Liste Characters
    static async list(request,response){
       
        let status=200;
        let body={};

        try {
            let characters = await Character.find();
            body={characters, 'message':'Liste des personnages'};

        } catch (error) {
            status=500;
            body={'message':error.message};
        }
        return response.status(status).json(body);

    }
    // creation Characters
    static async create(request,response){
        let status=200;
        let body={};

        try {
            let character=await Character.create({
                birthday:request.body.birthday,
                firstname:request.body.firstname,
                lastname:request.body.lastname,
                nickname:request.body.nickname,
                description: request.body.description,
                hobby:request.body.hobby,
                profilPicture:request.body.profilPicture,
                likedBehavior:request.body.likedBehavior,
                dislikedBehavior:request.body.dislikedBehavior,
                acceptedCatch: request.body.acceptedCatch,
                refusedCatch: request.body.refusedCatch
            });
            body={character,'message':'Personnage créé'}
        } catch (error) {
            status=500;
            body={'message':error.message};
        }
        return response.status(status).json(body);
    }

    //details characters 
    static async details ( request,response){
        let status=200;
        let body={};
        try {
            let id=request.params.id;
            let character= await character.findById(id);
            body={character,'message': 'un personnage'}

        } catch (error) {
            status=500;
            body={'message':error.message};
        }
        return response.status(status).json(body);
    }

    // delete character
    static async delete ( request, response){
        let status=200; 
        let body={};
        try{
            let id= request.params.id; 
            await character.deleteOne({_id: id});
            body={'message':'personnage Supprimé'};

        }
        catch(error){
            status=500;
            body={'message': error.message}
        }
        return response.status(status).json(body);
    }

    
    // update character 
    static async update ( request, response){
        let status=200; 
        let body={};
        try{
            let id= request.params.id; 
            let character = await character.findById(id);
            await character.update(request.body);
            body={character, 'message':'un personnage modifié'};

        }
        catch(error){
            status=500;
            body={'message': error.message}
        }
        return response.status(status).json(body);
    }
}

export default CharacterController;