/**
 * Created by Tal on 27 May,2016.
 */
'use strict'
var multer = require('multer');
var memoryStorage = multer.memoryStorage();

/*
Filters received files by type, valid files are .pdf, .docx and .doc.
Parameters:
    req - necessary by multer, contains the request itself.
    file -  the file object that multer creates.
    callback - a callback for the result, the signature is function callback(error, result) - result is a boolean
               true for valid and false for invalid.

 */
function CVFileFilter (req, file, callback) {
    // .pdf, .docx, .doc
    return callback(null, true); // had some issues where the mimetype wasn't inferred correctly
    const validMimeTypes = ['application/pdf',
        'application/msword', // .doc
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document']; //.docx
    //File is one of the abovem drop it.
    if (validMimeTypes.indexOf(file.mimetype) > -1) {
        //Valid file
        return callback(null, true);
    } else {
        //Invalid file
        return callback(null, false);
    }
}


function CSVFileFilter (req, file, callback) {
    return callback(null, true); // had some issues where the mimetype wasn't inferred correctly
    const validMimeTypes = ['text/csv'];
    //File is one of the abovem drop it.
    if (validMimeTypes.indexOf(file.mimetype) > -1) {
        //Valid file
        return callback(null, true);
    } else {
        //Invalid file
        return callback(null, false);
    }
}
/*
Creates multer object with the given configuration.
 */
var CVFileReceiver = multer({
    storage: memoryStorage,
    fileFilter: CVFileFilter,
    limits: {
        fieldNameSize: 100, //(In bytes)
        fieldSize: 10000, //~10KB
        fields: 30,
        fileSize: 6000000, //~6 MB
        files: 1, //only one file.
        parts: 100
    }
});


/*
Creates multer object with the given configuration.
 */
var CSVFileReceiver = multer({
    storage: memoryStorage,
    fileFilter: CSVFileFilter,
    limits: {
        fieldNameSize: 100, //(In bytes)
        fieldSize: 10000, //~10KB
        fields: 30,
        fileSize: 6000000, //~6 MB
        files: 1, //only one file.
        parts: 100
    }
});

/*
Defines the middleware for receiving files.
 */
var CSVFileReceiverMiddleware = function(req, res, next) {
    var upload = CSVFileReceiver.single('QualiFile');
    upload(req, res, function(err) {
        if (err) {
            return console.log(err);
        }
        return next();
    });
};


var CVFileReceiverMiddleware = function(req, res, next) {
    var upload = CVFileReceiver.single('QualiFile');
    upload(req, res, function(err) {
        if (err) {
            return console.log(err);
        }
        return next();
    });
};

function imageFileFilter (req, file, callback) {
    const validMimeTypes = ['image/jpeg', 'image/png'];
    //File is one of the abovem drop it.
    if (validMimeTypes.indexOf(file.mimetype) > -1) {
        //Valid file
        return callback(null, true);
    } else {
        //Invalid file
        return callback(null, false);
    }
}

/*
Creates multer object with the given configuration.
 */
var imnageFileReceiver = multer({
    storage: memoryStorage,
    fileFilter: imageFileFilter,
    limits: {
        fieldNameSize: 100, //(In bytes)
        fieldSize: 10000, //~10KB
        fields: 30,
        fileSize: 6000000, //~6 MB
        files: 1, //only one file.
        parts: 100
    }
});

var imageFileReceiverMiddleware = function(req, res, next) {
    var upload = imnageFileReceiver.single('QualiFile');
    upload(req, res, function(err) {
        if (err) {
            return console.log(err);
        }
        return next();
    });
};

module.exports = {CVFileReceiverMiddleware, imageFileReceiverMiddleware, CSVFileReceiverMiddleware};