const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventSchema = new Schema({
    name: { type: String,required:true },
    location: { type: String },
    dateToHappen: { type: Date, default: Date.now },
    // date: { type: Date }
});

const Event = mongoose.model('Event',eventSchema);

module.exports = Event;