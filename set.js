const fs = require('fs');
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname + '/.env' });

// ================= UNIVERSAL SETTINGS =================
// 1. You can set these in your Panel "Variables" tab.
// 2. OR you can edit the "Default" values (the string after ||) directly here.

const sessionName = 'session';
const session = process.env.SESSION || '';
const appname = process.env.APP_NAME || '';
const herokuapi = process.env.HEROKU_API || '';

// 🔹 BOT IDENTITY
const botname = process.env.BOTNAME || '🅺🅾🅾🅺🆈';
const author = process.env.STICKER_AUTHOR || '🅺🅾🅾🅺🆈';
const packname = process.env.STICKER_PACKNAME || '🅺🅾🅾🅺🆈';

// 🔹 OWNER SETTINGS
// Add your number below inside the quotes (No '+' sign)
// If you have multiple owners, separate them with commas: '2547XXXX,2547YYYY'
const dev = process.env.DEV || '254708583813';
const owner = dev.split(",");
const mycode = process.env.CODE || '254';
const port = process.env.PORT || 8641;

// 🔹 DATABASE
// This is the Backup/Display URL. 
// Note: The actual connection logic is handled in config.js (Hybrid Mode).
const databaseUrl = process.env.DATABASE_URL || "postgresql://neondb_owner:npg_lSc0PpxgeYn6@ep-rapid-forest-a4hm0939-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require";

// 🔹 VISUALS & MENUS
const menulink = process.env.MENU_LINK || 'https://files.catbox.moe/as1b4c.png';
const menu = process.env.MENU_TYPE || 'VIDEO'; // Options: IMAGE, VIDEO, GIF

// 🔹 MESSAGES
const bad = process.env.BAD_WORD || 'fuckvcd';
const admin = process.env.ADMIN_MSG || 'ᴄᴏᴍᴍᴀɴᴅ ʀᴇsᴇʀᴠᴇᴅ ꜰᴏʀ ᴀᴅᴍɪɴs!';
const group = process.env.GROUP_ONLY_MSG || '👥 ᴄᴏᴍᴍᴀɴᴅ ᴍᴇᴀɴᴛ ꜰᴏʀ ɢʀᴏᴜᴘs!';
const botAdmin = process.env.BOT_ADMIN_MSG || '🧃 ʏᴏᴜ ɴᴇᴇᴅ ᴀɴ ᴀᴅᴍɪɴ ᴊᴜɪᴄᴇ ʀᴇꜰɪʟʟ ʙᴇꜰᴏʀᴇ sɪᴘᴘɪɴɢ ᴏɴ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ!';
const NotOwner = process.env.NOT_OWNER_MSG || '👮 ᴄᴏᴍᴍᴀɴᴅ ᴍᴇᴀɴᴛ ꜰᴏʀ ᴛʜᴇ ᴏᴡɴᴇʀ!';

module.exports = {
  session,
  sessionName,
  author,
  packname,
  dev,
  owner,
  bad,
  group,
  NotOwner,
  botname,
  botAdmin,
  menu,
  menulink,
  admin,
  mycode,
  herokuapi,
  port,
  appname,
  databaseUrl
};

// ================= WATCHER =================
// This reloads the file automatically if you edit it while the bot is running.
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update '${__filename}'`);
  delete require.cache[file];
  require(file);
});
