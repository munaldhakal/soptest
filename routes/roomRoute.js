const express = require('express');
const router = express.Router();
const roomController = require('../controllers/room');

router.get('/getList', roomController.roomList);
router.get('/getSingleRoom/:id',roomController.roomDetails);
router.post('/createRoom',roomController.createRoom);
router.patch('/editRoom/:id',roomController.editRoom);
router.delete('/deleteRoom/:id',roomController.deleteRoom);

module.exports = router;