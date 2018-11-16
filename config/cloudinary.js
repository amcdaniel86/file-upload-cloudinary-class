const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');
const multer = require('multer');
// needed for cloudinary to work

cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret
});
//  above keys cannot be changed.
// values come from env file.

const storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: 'folder-name', // The name of the folder in cloudinary
  allowedFormats: ['jpg', 'png'],
  filename: function (req, file, cb) {
    cb(null, file.originalname); // The file on cloudinary would have the same name as the original file name
    // names file above name and folder comes from folder key: above above.
  }
});

const uploadCloud = multer({ storage: storage });

module.exports = uploadCloud;