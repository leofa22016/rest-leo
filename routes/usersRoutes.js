const {Router} = require('express');

const {Userget, Userput, Userpost, Userdelete, Userpatch} = require('../controllers/userController');

const router = Router();

router.get('/', Userget);

router.put('/:id', Userput);

router.post('/ ' , Userpost);

router.delete('/', Userdelete);

router.patch('/', Userpatch);






module.exports = router;
