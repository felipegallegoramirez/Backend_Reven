const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, `${__dirname}/../storage`)
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      const ext = path.extname(file.originalname);
      cb(null, file.fieldname + '-' + uniqueSuffix + ext)
    }
  })

  const fileFilterImage = function (req, file, cb) {
    // Solo permitir archivos con extensiones de imagen
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('El archivo no es una imagen'), false);
    }
  };


  const fileFilterPDF = function (req, file, cb) {
    // Solo permitir archivos con extensiones PDF
    if (file.mimetype === 'application/pdf') {
      cb(null, true);
    } else {
      cb(new Error('El archivo no es un PDF'), false);
    }
  };
  
  const uploadimage = multer({ storage: storage , fileFilter: fileFilterImage})
  const uploadpdf = multer({ storage: storage , fileFilter: fileFilterPDF})

  module.exports = { uploadimage, uploadpdf };