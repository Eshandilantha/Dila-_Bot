const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ApBDDIgZ#3ksSe6m-O8dTFEY6GJSnIPvPk_NYCcJh15plHlGiucw",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/DANUWA-MD/DANUWA-MD/blob/main/images/DANUWA-MD.png?raw=true",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 DilaBot Is Alive Now😍*",
BOT_OWNER: '94784398732',  // Replace with the owner's phone number



};
