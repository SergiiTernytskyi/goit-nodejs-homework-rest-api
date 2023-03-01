const fs = require("fs").promises;
const path = require("path");

const {
    users: { updateUserById },
} = require("../../service");
const { avatarJimpModify } = require("../../helpers");

const AVATAR_DIR = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async (req, res) => {
    const { path: tmpDestination, filename } = req.file;
    const { _id: userId } = req.user;

    const finalDestination = path.join(AVATAR_DIR, filename);

    await avatarJimpModify(tmpDestination);

    try {
        await fs.rename(tmpDestination, finalDestination);

        const avatarURL = path.join("public", "avatars", filename);

        await updateUserById(userId, { avatarURL });

        res.status(200).json({
            avatarURL,
        });
    } catch (error) {
        await fs.unlink(tmpDestination);
        throw error;
    }
};

module.exports = updateAvatar;
