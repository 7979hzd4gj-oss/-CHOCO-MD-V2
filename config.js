const fs = require("fs");

if (fs.existsSync("config.env")) {
    require("dotenv").config({ path: "./config.env" });
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "",
    PREFIX: ".",
    EXTRA_PREFIX: "🍫",
    CHATBOT: "on",
    BOT_NAME: "CHOCO-MD V2",
    MODE: "public",

    REPO: "https://github.com/7979hzd4gj-oss/-CHOCO-MD-V2",
    BAILEYS: "@whiskeysockets/baileys",

    OWNER_NUMBER: "224611257942",
    OWNER_NAME: "CHOCO",
    DEV: "224611257942",
    DEVELOPER_NUMBER: "224611257942@s.whatsapp.net",

    AUTO_REPLY: "false",
    AUTO_STATUS_REPLY: "false",
    AUTO_STATUS_MSG: "CHOCO A VU TON STATUT",

    READ_MESSAGE: "false",
    REJECT_MSG: "APPEL BLOQUE PAR CHOCO MD",

    AUTO_REACT: "false",
    OWNER_REACT: "true",
    CUSTOM_REACT_EMOJIS: "🍫,🔥,😎,❤️,💙",

    STICKER_NAME: "ITACHI CHOCO MD",
    STICKER_AUTHOR: "BY CHOCO",
    AUTO_STICKER: "false",

    AUTO_RECORDING: "false",
    AUTO_TYPING: "true",
    MENTION_REPLY: "true",

    MENU_IMAGE_URL: "https://files.catbox.moe/ykfu82.png",

    ANTI_DELETE: "true",
    ANTI_CALL: "true",
    ANTI_BAD_WORD: "false",
    ANTI_LINK: "true",
    ANTI_VV: "true",
    DELETE_LINKS: "false",
    ANTI_DEL_PATH: "same",
    ANTI_BOT: "true",
    PM_BLOCKER: "true",
    ANTI_MARABOUT: "true",

    RESPONDER: "true",
    ANTI_STATUT: "true",

    DESCRIPTION: "ITACHI CHOCO MD BY CHOCO - ULTIMATE BOT",

    PUBLIC_MODE: "true",
    ALWAYS_ONLINE: "true",

    AUTO_STATUS_REACT: "true
        
