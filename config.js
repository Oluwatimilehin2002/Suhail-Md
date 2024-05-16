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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_50_05_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDQwLFxuICAgICAgICA4MSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNzksXG4gICAgICAgIDk3LFxuICAgICAgICA2NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDU4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDM5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDgxLFxuICAgICAgICA1LFxuICAgICAgICAyMTksXG4gICAgICAgIDIxOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDkxLFxuICAgICAgICAxMTksXG4gICAgICAgIDIyMixcbiAgICAgICAgNjIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIsXG4gICAgICAgIDksXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTY0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjI5LFxuICAgICAgICA2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDYzLFxuICAgICAgICAxMSxcbiAgICAgICAgODYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDM2LFxuICAgICAgICAxODIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxODEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDk2LFxuICAgICAgICAxODEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTYsXG4gICAgICAgIDg0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjA4LFxuICAgICAgICA5OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzYsXG4gICAgICAgIDcxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDI4LFxuICAgICAgICA1NSxcbiAgICAgICAgMTAyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxODEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTA4LFxuICAgICAgICAzNixcbiAgICAgICAgMTUxLFxuICAgICAgICA3NCxcbiAgICAgICAgMTAxLFxuICAgICAgICA1LFxuICAgICAgICAxOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjI2LFxuICAgICAgICA5OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDg5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxODcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzksXG4gICAgICAgIDU5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE5NixcbiAgICAgICAgNzcsXG4gICAgICAgIDQsXG4gICAgICAgIDYzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE3MixcbiAgICAgICAgOTMsXG4gICAgICAgIDcxLFxuICAgICAgICAzNSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzNixcbiAgICAgICAgNTUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTUzLFxuICAgICAgICA1MixcbiAgICAgICAgMjAwLFxuICAgICAgICA2MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQxLFxuICAgICAgICA0OCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTksXG4gICAgICAgIDcwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDQzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTI2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDYzLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMTksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODQsXG4gICAgICAgIDk4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQ4LFxuICAgICAgICAzOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgODEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDU0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDQ2LFxuICAgICAgICA2MixcbiAgICAgICAgMjE0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDMsXG4gICAgICAgIDgyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjI1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTY5LFxuICAgICAgICA0MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTI2LFxuICAgICAgICA3MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTIyLFxuICAgICAgICAxNjksXG4gICAgICAgIDE4NixcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMixcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTMzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJRNHB5c3BSb0N4aW1pemk2Smo2bzB1cDBHSWcya0pQWE1lZFI5R0dSMk9jPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJyUlcyUmVmS1JDZXU5Sk9CTFE1N013XCIsXG4gIFwicGhvbmVJZFwiOiBcImNkNTEzNGMzLTVkNmEtNGU5NS1iMDA2LTgzNzcwZjIxZWNhNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzOSxcbiAgICAgIDMxLFxuICAgICAgNDMsXG4gICAgICAxNDYsXG4gICAgICAxODMsXG4gICAgICAyNDYsXG4gICAgICAxNTEsXG4gICAgICAxMTEsXG4gICAgICAxMDEsXG4gICAgICAyMjAsXG4gICAgICA0MixcbiAgICAgIDI5LFxuICAgICAgNTcsXG4gICAgICA4NSxcbiAgICAgIDI3LFxuICAgICAgMjQ1LFxuICAgICAgMzMsXG4gICAgICAxNDgsXG4gICAgICAxNjQsXG4gICAgICA5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMSxcbiAgICAgIDI1LFxuICAgICAgNjcsXG4gICAgICA2MixcbiAgICAgIDYxLFxuICAgICAgMjM3LFxuICAgICAgMTc1LFxuICAgICAgMTIwLFxuICAgICAgMjIxLFxuICAgICAgMjI2LFxuICAgICAgMTgwLFxuICAgICAgMjA0LFxuICAgICAgNzEsXG4gICAgICAxODEsXG4gICAgICAzNyxcbiAgICAgIDI0LFxuICAgICAgODYsXG4gICAgICAxNTAsXG4gICAgICAwLFxuICAgICAgNzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVjhKRVpGNzlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMjQxMTQ4NTc6NTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI2NzM5NjUxMDE0MjU5OTo1OUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOYXkxbzBGRUlhTjg3RUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImxBT254emtHRjhJUGdXWjVRYzRRejNweERGYzRuTTRvQ09iR3VscVZkRDA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiV1YzRmRYTFhvZjU2bXh6bVVBVUxqKzl6cDR5UXFaQ3A3OEVGdUUybVd2b2s5S0tqZmljOUY0RFFtTTNDWTAybjJxWkgyelM5alVld3ZjSkc5dTN5QUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiemRnY0JvMWMxampLbjRhTTYrVTk3dTVwSVBLWnMvREc3dkdRVmdkQkZlVDdGS2F3OU9HQVViVmNBd0V3NXBwNjAvYXZUYVZJMEFta2hTaDBjMlJxaHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTEyNDExNDg1Nzo1OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDYxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTUyNTkwMThcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9" ;


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
