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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_22_04_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEwNixcbiAgICAgICAgNDEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjA2LFxuICAgICAgICA0MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwMixcbiAgICAgICAgOSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDcwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDMwLFxuICAgICAgICA3OSxcbiAgICAgICAgMjIxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTIyLFxuICAgICAgICA1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI2LFxuICAgICAgICAyMTksXG4gICAgICAgIDYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAzOSxcbiAgICAgICAgODEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyLFxuICAgICAgICA5MixcbiAgICAgICAgMTEwLFxuICAgICAgICA3MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDYyLFxuICAgICAgICAzNixcbiAgICAgICAgMTgzLFxuICAgICAgICAzNixcbiAgICAgICAgMjIyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTksXG4gICAgICAgIDEyLFxuICAgICAgICAzNixcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDMsXG4gICAgICAgIDg4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1MixcbiAgICAgICAgNTksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDY2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMixcbiAgICAgICAgMjEsXG4gICAgICAgIDY2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDgwLFxuICAgICAgICAyMjksXG4gICAgICAgIDM0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDQ3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMzMsXG4gICAgICAgIDcyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMixcbiAgICAgICAgMzcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNyxcbiAgICAgICAgMTU1LFxuICAgICAgICA2MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMixcbiAgICAgICAgNjksXG4gICAgICAgIDY3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDkzLFxuICAgICAgICA3MixcbiAgICAgICAgOTAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTEsXG4gICAgICAgIDMsXG4gICAgICAgIDEzNixcbiAgICAgICAgOTYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDMwLFxuICAgICAgICAxLFxuICAgICAgICA5MixcbiAgICAgICAgNDMsXG4gICAgICAgIDExOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTY5LFxuICAgICAgICA2MyxcbiAgICAgICAgODgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAzMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE5MixcbiAgICAgICAgODAsXG4gICAgICAgIDEzLFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMjNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzIsXG4gICAgICAgIDMyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDM2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDY3LFxuICAgICAgICA0NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIzMixcbiAgICAgICAgOTEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgODgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDYzLFxuICAgICAgICAyOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDk0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDg2LFxuICAgICAgICA0MixcbiAgICAgICAgMzcsXG4gICAgICAgIDUzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTMsXG4gICAgICAgIDExMixcbiAgICAgICAgODEsXG4gICAgICAgIDUzLFxuICAgICAgICA4MSxcbiAgICAgICAgMjUzLFxuICAgICAgICA5MSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgODIsXG4gICAgICAgIDEzOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTM0LFxuICBcImFkdlNlY3JldEtleVwiOiBcInBlOHVMSzZKbEVaR1RxMytCTEdkem9HbnVSSEQ4MjIxbm5SY2VubkVXQ1U9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImNvb1RxRUJiUnRtSEdQNndiVWpsY0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiNWUwZWNiNGQtMjllZC00YTEyLTllNWUtMzg2NTdkYTgxODM3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0NyxcbiAgICAgIDE5MSxcbiAgICAgIDM1LFxuICAgICAgNzYsXG4gICAgICAyMjIsXG4gICAgICAxMTEsXG4gICAgICAxNDAsXG4gICAgICAxOSxcbiAgICAgIDQzLFxuICAgICAgMjI0LFxuICAgICAgODcsXG4gICAgICAxNjMsXG4gICAgICAxODcsXG4gICAgICAxNzgsXG4gICAgICAyMjgsXG4gICAgICA4MixcbiAgICAgIDIzMCxcbiAgICAgIDgsXG4gICAgICAxOSxcbiAgICAgIDI0OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2OSxcbiAgICAgIDE3LFxuICAgICAgMTAsXG4gICAgICAxNjQsXG4gICAgICAyMzksXG4gICAgICAxNjUsXG4gICAgICAyNDMsXG4gICAgICA0LFxuICAgICAgMTI3LFxuICAgICAgMTIzLFxuICAgICAgMTgxLFxuICAgICAgNDYsXG4gICAgICAyNTUsXG4gICAgICA0MCxcbiAgICAgIDY0LFxuICAgICAgMjU0LFxuICAgICAgMTYwLFxuICAgICAgMTkxLFxuICAgICAgMjMsXG4gICAgICA2MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJROEtKVFdHVFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTEyNDExNDg1Nzo0MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjY3Mzk2NTEwMTQyNTk5OjQyQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIm9vXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT1RhdVpvREVMS3h2YkVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJJTnZIMVFmMTdldDFLRFF6Nnk2QmVqV01zNVNZQXBkOE5NM094NVg2Q21NPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm9rZC9DNEtPM1pSYlRIcGtTcDIvWjBtSlZCNUhITFY3T29VS1A2NW0vNXpyakx5b01xczh4ZkowS29xdW5NbklCSWVqR0lqVkRXUDNiMWRCQzlwZ0J3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkFHRkhxa2dUSW5yVEgrTkZUSjdkUk4yZWMwaUozWVZwM3dXVjlpSnJIeEduOEVmREd2M3hCQytyaFFwWGRNb0FQeGV1OXkrbzNZSk03MXlaUGQwWmp3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMjQxMTQ4NTc6NDJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgOTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNDM3ODkzNVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0=" ;


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
