//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibU9MWGVhOGJSYlhqMGtTbEI5cmFUSjRRRjlReGtJZkZwZWJsR1Bqd0xGRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieXh5OTlKbmdOa2pra3doMGR3RDhHWHE1cUhtdG1ubTdqMzhNMytPT053TT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnQytVR0JsSk1rQm96anZEaVE1UkVSSXVQamovbStHVHA2d1Y3TTVLYkVRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1U0xVODM3MmI2bG9RbkV2R0hFeGl3Q2ZrUHBsK0l0bEVhM3lzSGIzSmpnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9CeGdMNFhKSXg3S1JneFB6RkFvam9tclo1ZGMyUTVodi9Na0JaaFpkSGM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVudWZ0TVBaN2JjdzZhWjhLUU41dzljdzdEcjZ4c3hKenNuWmh1T1JGVEU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNE96Y3lxMWZLNVBsZ1huMEJkdFJncnI2emhwb1VqckRjUWlrRHlOYVhuaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU09ORU12V2dPQXh5UFRWZ0NqTEhSd2l3S2hTOVZLUVpvaXk1L0w2OE5rND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBRN1IxT2hEUTNqSkthOS80UWY2K1FGdUpJOS9xVlFScjZoYTJBZjZqWmxDYkxNOGdJM2dYam1obTBDZmZueks1cDh5eFhuaFN6c2dhSDBtaGNCdUN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjIyLCJhZHZTZWNyZXRLZXkiOiJxcTJ1bjdxN3VneFE5VGJ2SisxUktDZ3liSHY2N2lTUnV6S2RKZ0VRMndNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzcyNDA0MTA1QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkVBRjVGNUNBMkM0RkE0MkQyMDBDQjIzRTY1RDU1RjUyIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTIyOTUzNjB9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzcyNDA0MTA1QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjhBNkQ0MTU2MkI4QTlBOEY0QkFFQUI3Mjc4QzQzQkFFIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTIyOTUzNjB9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImcxQXFFck1IU1dxdld6WHRjTFF6WFEiLCJwaG9uZUlkIjoiMDI0OGQ0MDItNzAwZS00NTRjLWFiZjYtMjgxYWNkZDRhYWNiIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVEQWdqa3RpdjRWUlhtQUl5TVZaSXJady9xbz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNYU5EeFFCRDRsbHNkMUdmTTRJZ1pkM3BGaDg9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRDFSRVNMNkgiLCJtZSI6eyJpZCI6Ijk0NzcyNDA0MTA1OjE3QHMud2hhdHNhcHAubmV0IiwibmFtZSI6InNhdGhpcmEiLCJsaWQiOiIyNjMxNjYxODU0NTU4NjY6MTdAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOajA2UFFIRUxEUHg4TUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJxYkcxa0NpQzhSU1RRN3dqcTNLZlVlY2cwc1J2b1R1UjVOa0U2UnVybVJFPSIsImFjY291bnRTaWduYXR1cmUiOiJQR216aHo3N0JhMExiVGRZMDhLUk0zYjNvWVNtNVE0aHJtMWFQdS9vUnRYSUhEV2VtOWc0emJrM2RkQjRFMm1HUGc4NmV3aElycDh5YjVHODJIR3BBUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoieGNqclZZT1lPa3ZheDkvUEhCMkFRUjc0azhIM3Q4bzB1VFdKeitNNHBKQW92ZGJ1U0J5bXBkTXkwRms0Zk5SNnNlWlVxSms5WkFSTjQ4WUN0aWxBQlE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc3MjQwNDEwNToxN0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhbXh0WkFvZ3ZFVWswTzhJNnR5bjFIbklOTEViNkU3a2VUWkJPa2JxNWtSIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJQWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTIyOTUzNTcsImxhc3RQcm9wSGFzaCI6IlBXazVCIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFPSk0ifQ==",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94726455848",
  PASSWORD: 
    process.env.PASSWORD || "sathira20553",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
