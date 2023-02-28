const getAll = require("./getAll");
const getById = require("./getById");
const add = require("./add");
const update = require("./update");
const remove = require("./remove");
const updateStatusContact = require("./updateFavorite");

const { ctrlWrapper } = require("../../helpers");

module.exports = {
    getAll: ctrlWrapper(getAll),
    getById: ctrlWrapper(getById),
    add: ctrlWrapper(add),
    update: ctrlWrapper(update),
    remove: ctrlWrapper(remove),
    updateStatusContact: ctrlWrapper(updateStatusContact),
};
