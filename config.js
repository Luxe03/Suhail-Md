const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347036275697";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_31_06_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDYyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTcwLFxuICAgICAgICA0OCxcbiAgICAgICAgMCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwLFxuICAgICAgICA1MixcbiAgICAgICAgMjA4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNDksXG4gICAgICAgIDQ4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM0LFxuICAgICAgICAwLFxuICAgICAgICAxMSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDgyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDc4LFxuICAgICAgICA5NixcbiAgICAgICAgMTAzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTksXG4gICAgICAgIDE5LFxuICAgICAgICAyNDksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQzLFxuICAgICAgICA4MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDQwLFxuICAgICAgICA4MyxcbiAgICAgICAgODAsXG4gICAgICAgIDgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDQxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNDksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxODQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTg3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDk4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDExNixcbiAgICAgICAgMjM4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDU5LFxuICAgICAgICA3OCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDUzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDc3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDg3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgODksXG4gICAgICAgIDQxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzLFxuICAgICAgICA4MCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDczLFxuICAgICAgICAxNDksXG4gICAgICAgIDE4NixcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE2LFxuICAgICAgICAzNixcbiAgICAgICAgMjE3LFxuICAgICAgICAxODUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDc3LFxuICAgICAgICA4NSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMzksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxODYsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDUzLFxuICAgICAgICA2MixcbiAgICAgICAgMjUxLFxuICAgICAgICA0NyxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjMyLFxuICAgICAgICA2OCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDM3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDY4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDUsXG4gICAgICAgIDI5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjE3LFxuICAgICAgICA0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgODgsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNzUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTc2LFxuICAgICAgICA4NixcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDg1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MixcbiAgICAgICAgMTQ4LFxuICAgICAgICA3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTgzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTIzLFxuICAgICAgICA5MixcbiAgICAgICAgNzUsXG4gICAgICAgIDg1LFxuICAgICAgICAyMzksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTc1LFxuICAgICAgICAzNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAzMixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDM0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4MixcbiAgICAgICAgNjEsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjAyLFxuICAgICAgICA2NixcbiAgICAgICAgODIsXG4gICAgICAgIDcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTM4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNjYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVXF0Uk44M1EvZmhzakowVWVtMVV5eTFET2ZMWjgzWWVxMHRFUHkwQlVydz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ3MDM2Mjc1Njk3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3N0IwQjU0MzU5OEM0RkI5MkM1RjAzOTIxQkE2QkM4QlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTk3MzI2NTFcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUnRjSWk0ZTlRSHl6cnNNU0dRQWdZd1wiLFxuICBcInBob25lSWRcIjogXCI1NGIxZmQ2ZC1iNDkyLTRhMDItYTY4OS00NzYwNjE2Mzg1OTlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE1LFxuICAgICAgMTEzLFxuICAgICAgMTgsXG4gICAgICAyNTIsXG4gICAgICAyNTMsXG4gICAgICAwLFxuICAgICAgOTEsXG4gICAgICAyMzcsXG4gICAgICAxNzEsXG4gICAgICAxMDMsXG4gICAgICA5MCxcbiAgICAgIDExMCxcbiAgICAgIDE0OSxcbiAgICAgIDUsXG4gICAgICAxMjgsXG4gICAgICAxNDQsXG4gICAgICAxMzcsXG4gICAgICAxOTEsXG4gICAgICA4NixcbiAgICAgIDUzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjMsXG4gICAgICA0NyxcbiAgICAgIDM1LFxuICAgICAgMjQsXG4gICAgICA3MixcbiAgICAgIDIwOCxcbiAgICAgIDQwLFxuICAgICAgNjQsXG4gICAgICAxODUsXG4gICAgICAxOTIsXG4gICAgICAyMzAsXG4gICAgICA3NyxcbiAgICAgIDU3LFxuICAgICAgMjEzLFxuICAgICAgMTAwLFxuICAgICAgMTc3LFxuICAgICAgMTM1LFxuICAgICAgODAsXG4gICAgICAyMDIsXG4gICAgICAxMzBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLT245ZHdDRUtTVGhMUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlVpYXZyZkE1ZmFRVTFqaGVETjZuVnRNZE9zMXM4dExyY3oxM2paNlk1VHM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQ28xQTZJNXZCWTNqMDBUZ0RwWEhpZVZZMC9rdVFLa0hSR1ptaytQY2lTNGp6MXJmSFZSb2Y3RkVmbjd3LzA1bnNRM0EyLzBaa3pjaEpreU8zVFAwQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidW5wNTU1WTRtb0lPZWtKeUx4QlR2ZjVCRUtscmhaMFN1d2FvZENyVlp6OTJwRkhHUWlaMSt6aFJRRjNLUEdiUURuTmI1NGNxWnBRZ1lTbWxuM2Q4aGc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDM2Mjc1Njk3OjMxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNzEyNjIzMDc0OTE4Nzg6MzFAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDM2Mjc1Njk3OjMxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA1OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5NzMyNjQ4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBR2lvXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHaW8uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJJV3lna1RwQUtOVUk4SHdaWlJXU1dlWHZRNzVHazlqSWhpQzU1Mm5XS1JFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjczMTczMDg1MCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR2lwLmpzb24iOiAie1wia2V5RGF0YVwiOlwiYktHTDV4ZXdpWlN0cGRLZUM5SkkrOFF5SDdaWVJPcWpFTXdpNDhYbkZiYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MzE3MzA4NTAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTk3MzI1OTUwNzZcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
