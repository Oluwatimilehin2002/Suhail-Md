const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://tiimmzzyy:Ud9X4aZl1V5p58QO@cluster0.h7e8llf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://tiimmzzyy:Ud9X4aZl1V5p58QO@cluster0.h7e8llf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349124114857";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 0
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/758549f0de2219884f387.jpg,https://telegra.ph/file/9498496b010dfb5900b80.jpg,https://telegra.ph/file/59bf80efbb6e6576b5a52.jpg,https://telegra.ph/file/ee0e191363161e88e4743.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_31_05_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTk0LFxuICAgICAgICAzMyxcbiAgICAgICAgMyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDU4LFxuICAgICAgICAxNjksXG4gICAgICAgIDU0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTY4LFxuICAgICAgICA3NyxcbiAgICAgICAgNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDg3LFxuICAgICAgICAxOSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDExNixcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTU3LFxuICAgICAgICA0MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDgwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDI4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDc5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDExMixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTY3LFxuICAgICAgICAxMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDkzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDUsXG4gICAgICAgIDQxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNSxcbiAgICAgICAgNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDU5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDk3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDYxLFxuICAgICAgICAxODUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNSxcbiAgICAgICAgMjUwLFxuICAgICAgICA4MixcbiAgICAgICAgMTk3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgODEsXG4gICAgICAgIDI0LFxuICAgICAgICAyMTksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjIyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDg2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDI4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDg0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDcsXG4gICAgICAgIDUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDM4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNCxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjIzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDM3LFxuICAgICAgICA5NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA1NCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIzMixcbiAgICAgICAgNDgsXG4gICAgICAgIDU2LFxuICAgICAgICAxNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDkzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDk2LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyNixcbiAgICAgICAgOTUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDQwLFxuICAgICAgICA3NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQyLFxuICAgICAgICA4NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNixcbiAgICAgICAgMjI4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDQwLFxuICAgICAgICAyMDksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxOSxcbiAgICAgICAgOTcsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA4NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgODFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjksXG4gICAgICAgIDIwMyxcbiAgICAgICAgNixcbiAgICAgICAgMTc5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDcwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDUzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDgxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjIxLFxuICAgICAgICA5OCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjUsXG4gICAgICAgIDE1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDksXG4gICAgICAgIDgsXG4gICAgICAgIDk3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDYsXG4gICAgICAgIDE2NixcbiAgICAgICAgNjQsXG4gICAgICAgIDE1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDk3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAzNixcbiAgICAgICAgODQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgOSxcbiAgICAgICAgMTcxLFxuICAgICAgICA5NCxcbiAgICAgICAgMjEzLFxuICAgICAgICA5NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDYwLFxuICAgICAgICAxNDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJiN2JvczhDMFNtYklyNjdEVVZ3RjBKMWpGNDNtVnJKZ2FwM0ZZQXd1TzFJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJSZmxYb0RScFFKeVJTS2w0dmNpNEtRXCIsXG4gIFwicGhvbmVJZFwiOiBcImYxYWM2NmY3LTVjNmEtNDg4ZC04ZjNlLTY0Zjc4OWUxNTMwMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTUsXG4gICAgICAxNzYsXG4gICAgICAxMyxcbiAgICAgIDQsXG4gICAgICAxNDcsXG4gICAgICAyMDQsXG4gICAgICAyMTIsXG4gICAgICAxNTMsXG4gICAgICAxMDYsXG4gICAgICAyNDksXG4gICAgICAyMTAsXG4gICAgICAxNDUsXG4gICAgICA2OCxcbiAgICAgIDc5LFxuICAgICAgNDMsXG4gICAgICA0OCxcbiAgICAgIDEwNixcbiAgICAgIDEwMixcbiAgICAgIDEyMixcbiAgICAgIDE3OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjgsXG4gICAgICA5NCxcbiAgICAgIDE3NSxcbiAgICAgIDQ2LFxuICAgICAgMTYxLFxuICAgICAgMTQzLFxuICAgICAgNTAsXG4gICAgICA3NCxcbiAgICAgIDE5MyxcbiAgICAgIDE0MSxcbiAgICAgIDIxMSxcbiAgICAgIDE2MixcbiAgICAgIDIxNSxcbiAgICAgIDE4MyxcbiAgICAgIDU4LFxuICAgICAgNjQsXG4gICAgICAxNjAsXG4gICAgICAxLFxuICAgICAgMjI1LFxuICAgICAgODhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMzIzNTc3OTdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMjQxMTQ4NTc6NTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI2NzM5NjUxMDE0MjU5OTo1MEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJvb1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05HeTFvMEZFS2JxMDdFR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibEFPbnh6a0dGOElQZ1daNVFjNFF6M3B4REZjNG5NNG9DT2JHdWxxVmREMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ6Q0ppTGRWbFlicGFjV2I5NjVVV2FGQ2pDQXhCb09Ob2pLZU05eUYxSXU0OW5wSThyZzRFOWRwZVNRUXJVTzBDdGlTYWNKRVZLb1JGbFllU3lHTjFCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJNMGQyK1V5elRKaElKQXRTaFQ1YmlIUmkyc3BhaFBhOC8xQkxyR0sxenpZKzNSZGdXR0RHdVE2TXY2VWZBaEt3ZThYU1F4cWdYV0JmelpxVzh5bVFqUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTI0MTE0ODU3OjUwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNDc0NjY3OVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0=" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Beekeeper",
  packname: process.env.PACK_NAME || "beevy",
  botname : process.env.BOT_NAME  || "Beekeeper 🐝🐝🐝🐝",
  ownername:process.env.OWNER_NAME|| "Beekeeper 🐝🐝🐝",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};

























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
