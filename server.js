const mongoose = require("mongoose");

const app = require("./app");

const { PORT = 3000 } = process.env;
const {
    DB_HOST = "mongodb+srv://serhijT:iYOdf8gcoM2E34pU@cluster0.byino4x.mongodb.net/db-contacts",
} = process.env;

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
