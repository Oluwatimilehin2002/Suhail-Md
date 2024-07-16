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
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_46_07_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDQxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTEwLFxuICAgICAgICA3NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA3LFxuICAgICAgICAxMTksXG4gICAgICAgIDUsXG4gICAgICAgIDE3LFxuICAgICAgICA5NixcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDMzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxODYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTAsXG4gICAgICAgIDg1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjM3LFxuICAgICAgICA3MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgODQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTA1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTU0LFxuICAgICAgICA5LFxuICAgICAgICA1MyxcbiAgICAgICAgMjQyLFxuICAgICAgICA1MixcbiAgICAgICAgMTg5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTg4LFxuICAgICAgICA4MCxcbiAgICAgICAgOTksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTMsXG4gICAgICAgIDg5LFxuICAgICAgICAxODMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAzMCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDgxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTk4LFxuICAgICAgICA1MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDc1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDU4LFxuICAgICAgICA4LFxuICAgICAgICAxODYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMixcbiAgICAgICAgMTA5LFxuICAgICAgICAyNDksXG4gICAgICAgIDIxMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDk5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTQxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDI1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDc1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTYyLFxuICAgICAgICAzNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA0OCxcbiAgICAgICAgNixcbiAgICAgICAgMjUxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDY3LFxuICAgICAgICA5NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTcyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjExLFxuICAgICAgICA5MCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNyxcbiAgICAgICAgMjA4LFxuICAgICAgICA3OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDQzLFxuICAgICAgICA2NCxcbiAgICAgICAgMjE4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxODcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDI5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjExLFxuICAgICAgICAyMzUsXG4gICAgICAgIDQ3LFxuICAgICAgICA1NixcbiAgICAgICAgMjMxLFxuICAgICAgICAyMTksXG4gICAgICAgIDkyLFxuICAgICAgICA2NixcbiAgICAgICAgNTksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjIxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDUwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDQxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDM5LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA3M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjU1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxODcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgODUsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjksXG4gICAgICAgIDQ5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDc1LFxuICAgICAgICA1MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDk0LFxuICAgICAgICA3NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE0LFxuICAgICAgICA4MyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDgxLFxuICAgICAgICA2LFxuICAgICAgICA5NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjM5LFxuICAgICAgICA4OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTM2LFxuICAgICAgICA0MixcbiAgICAgICAgMTY0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTg3LFxuICAgICAgICA0OCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDkwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDY2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI4LFxuICAgICAgICAzNSxcbiAgICAgICAgMjAzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDc0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNDcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidWc2VkNxU2FoT0FIYS9OUVl6aERabTJFUzdNNStyaXhPZzVrRGJCbXdKUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiS1VwazgzMXlRN2lfaEpQQVEzRFJWQVwiLFxuICBcInBob25lSWRcIjogXCI4YjdiNTFiZS03MmY2LTQzZmQtYWQ0Yi1hYzhhODg1MTUxNGZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM4LFxuICAgICAgOTcsXG4gICAgICAyMjYsXG4gICAgICAyLFxuICAgICAgMTE5LFxuICAgICAgMjA1LFxuICAgICAgMjQzLFxuICAgICAgNTAsXG4gICAgICAxMjQsXG4gICAgICA2OCxcbiAgICAgIDE5NSxcbiAgICAgIDE4NixcbiAgICAgIDYxLFxuICAgICAgMjQ4LFxuICAgICAgMTExLFxuICAgICAgOSxcbiAgICAgIDExNyxcbiAgICAgIDE2MSxcbiAgICAgIDE5MixcbiAgICAgIDEzMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzcsXG4gICAgICA5MSxcbiAgICAgIDIsXG4gICAgICA5NyxcbiAgICAgIDk5LFxuICAgICAgMjE4LFxuICAgICAgMTI0LFxuICAgICAgNDksXG4gICAgICAxNDEsXG4gICAgICAxMjIsXG4gICAgICAxNTYsXG4gICAgICAyOCxcbiAgICAgIDE2OSxcbiAgICAgIDYxLFxuICAgICAgMjUzLFxuICAgICAgOTksXG4gICAgICAxMDQsXG4gICAgICAxMyxcbiAgICAgIDcyLFxuICAgICAgMTAyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkxZUjVCWlQ4XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTI0MTE0ODU3OjE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMjAwODc3ODg5NDk2Mzk6MTZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUFd5MW8wRkVMdU0zTFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJjMjNEVEFDbENnUWI1Vk1oNyt1TUs1SlllaVFaM1ByUi9yU3FVc0I3R3hJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlZhWlJhNkMycE9sSDJkOUt3ZGdjbXVaZ0NHbW1zQ0VOWFJFNkpxTy82SDYwTGxpbmdmQWxSYUVwN05EaWs2VDJXR2tZRFY4a2M1cnJMakZJd0IwZUR3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk8rSUFNM3RTTEVuNHFXQlpvajlQZ3VaWmgzQnRNZDIzeHgxaDExQ2pLZVRtWllIVnZJbXpFRTU2SFVCOGxFQ3FvWjZwNlpjMEw5enBYSUdJbHJYNGhnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMjQxMTQ4NTc6MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTE3MzU2NlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0=" ;


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
