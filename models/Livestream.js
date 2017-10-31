const mongoose = require('mongoose');

const livestreamSchema = new mongoose.Schema({
  name: String,
  ankeiler: String,
  rtmp: {
    facebook: String,
    youtube: String,
    instagram: String
  },
  live: Boolean
}, { timestamps: true });

/**
 * Password hash middleware.
 */

const Livestream = mongoose.model('Livestream', livestreamSchema);

module.exports = Livestream;
