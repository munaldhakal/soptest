const Room = require('../models/room');
const debug = require('debug')('app');
const mongoose = require('mongoose');

exports.roomList = (req, res) => {
    Room.find()
      .exec()
      .then(result => {
        console.log(result);
        res.status(200).json(result);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  };
  
exports.createRoom = (req, res, next) => {
    debug("Inside POST-----****--====**>>>>>"+req.body+"-->>>>>>.."+req.json);
    const room = new Room({
      _id: new mongoose.Types.ObjectId(),
      title: req.body.title,
      shortDescription: req.body.shortDescription,
      description: req.body.description,
      location: req.body.location,
      weeklyPayement: req.body.weeklyPayement,
      contact: req.body.contact
    });
    room.save()
      .then(result => {
        console.log(result);
        res.status(201).json({
          message: 'Room added successfully',
          postedRoom: result
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
        return null;
      });
  };
  
  // ASYNCRONOUS Promise*
  exports.roomDetails =  (req, res) => {
    const id = req.params.roomId;
    Room.findById(id)
      .exec()
      .then(result => {
        console.log(result);
        if (result) {
          res.status(200).json(result);
        } else {
          res.status(404).json({
            message: 'No any Room for the provided entry'
          });
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  };
  
  exports.editRoom = (req, res) => {
    const id = req.params.roomId;
    const updateOps = {};
    for (const ops of req.body) {
      updateOps[ops.propName] = ops.value;
      /*
      *
        [
          {
            "propName":"name","value":"Soap"
          }
        ]
        */
    }
    Room.update({
      _id: id
    }, {
      $set: updateOps
    })
      .exec()
      .then(result => {
        console.log(result);
        res.status(200).json({
          message: 'Room updated successfully'
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  };
  
  exports.deleteRoom = (req, res) => {
    const id = req.params.roomId;
    Room.remove({
      _id: id
    })
      .exec()
      .then(result => {
        res.status(200).json({
          message: 'room deleted successfully'
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  };
  