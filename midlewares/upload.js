const multer = require("multer");
const path = require("path");

const TEMP_DIR = path.join(__dirname, "../", "tmp");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, TEMP_DIR);
    },
    filename: (req, file, cb) => {
        const [, extension] = file.originalname.split(".");
        const { _id: userId } = req.user;
        cb(null, `${userId}.${extension}`);
    },
    limits: {
        fileSize: 2000000,
    },
});

const upload = multer({ storage: storage });

module.exports = upload;
