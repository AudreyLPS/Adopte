import {Router} from 'express';
import CharatersController from '../controllers/characters.controller';
import UserController from '../controllers/users.controller';

const router = Router();

router.get('/hello', (reg,res)=>{
    console.log('Hello');
    res.send('Hello');
});

//Characters
router.get('/characters', CharatersController.list);
router.post('/characters',CharatersController.create);
router.get('/characters/:id', CharatersController.details);
router.delete('/characters/:id', CharatersController.delete);
router.put('/characters/:id', CharatersController.update);

//Users
router.get('/users', UserController.list);
router.post('/users',UserController.create);
router.get('/users/:id', UserController.details);
router.delete('/users/:id', UserController.delete);
router.put('/users/:id', UserController.update);

//authentification
router.post('/auth', UserController.authentification);
export default router;
