const express = require('express');
const router = express.Router();
const controllerEtnia = require('../../controllers/Etnia');


//router.get('/etnia', () => { console.log('get one etnia') });
//router.get('', () => {console.log('get all etnias')});
router.post('/etnia', controllerEtnia.create);
//router.put('', () => {console.log('edit one etnia')});
//router.delete('', () => {console.log('delete one etnia')});

module.exports = router;