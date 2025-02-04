const mongoose = require("mongoose");

const app = require("./app");

const { PORT = 3000 } = process.env;
const { DB_HOST } = process.env;

const connection = mongoose.connect(DB_HOST);

connection
    .then(() => {
        console.log("Database connection successful");
        app.listen(PORT, () => {
            console.log(`Server running. Use our API on port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(`Server not running. Error message: ${error.message}`);
        process.exit(1);
    });
