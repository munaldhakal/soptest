const mongoose = require('mongoose');
const { Schema } = mongoose;

const roomSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
  title: { type: String, required: true },
  shortDescription:{ type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  weeklyPayement: { type: Number, required: true },
  contact: { type: String, required: true },
  imageUrls: [{ type: String, required: false }]
});

module.exports = mongoose.model('Room', roomSchema);