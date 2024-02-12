const { spawn } = require("child_process");
const { readFileSync } = require("fs-extra");
const http = require("http");
const axios = require("axios");
const semver = require("semver");
const logger = require("./utils/log");
const chalk = require("chalk");
const chalkercli = require("chalkercli");
const chalkAnimation = require('chalkercli');
var randomColor = Math.floor(Math.random()*16777215).toString(16);
const CFonts = require('cfonts');
/*const str = require('karaoke');
const logo = require('rainbow');
setTimeout(async() => {
    await karaoke.start()
    await rainbow1.start()
    console.clear()
}, 8000);

setTimeout(() => {
    karaoke.stop()
    rainbow1.stop()
}, 11800);*/
/////////////////////////////////////////////
//========= Check node.js version =========//
/////////////////////////////////////////////

// const nodeVersion = semvecfonts@latestr.parse(process.version);
// if (nodeVersion.major < 13) {
//     logger(`Your Node.js ${process.version} is not supported, it required Node.js 13 to run bot!`, "error");
//     return process.exit(0);
// };

///////////////////////////////////////////////////////////
//========= Create website for dashboard/uptime =========//
///////////////////////////////////////////////////////////

const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

// sendFile will go here
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port);
console.log('Server started at http://localhost:' + port);

logger("Hệ thống Bot được Milo duy trì và phát triển", "🛠 VN");
logger("The System are create and running by Milo", "🛠 US")
logger("Contact Facebook: https://www.facebook.com/danghoangbaohuy.milo", "Facebook");
logger("Contact Zalo: https://zalo.me/0372768928", "Zalo");
logger("Website: dhbh.vn", "Website");
logger("Donate MBBank : 0372768928", "DONATE");


const rainbow = chalkercli.rainbow('\n[=== 𝐒𝐄𝐓𝐓𝐈𝐍𝐆 𝐒𝐇𝐈𝐊𝐈𝐌𝐎𝐑𝐈 𝐏𝐫𝐨𝐣𝐞𝐜𝐭 ===]\n').stop();

rainbow.render(); 

const frame = rainbow.frame(); 
console.log(frame);
logger("SHIKIMORI BOT SUCCESSFULLY INITIALIZED", "Milo");
logger("Welcome back to SHIKIMORI System", "Milo");
logger("SHIKIMORI BOT PROJECT start running...", "Milo Team");
logger("Checking the version...", "UPDATE");
logger("Your version is the latest!", "UPDATE");

/////////////////////////////////////////////////////////
//========= Create start bot and make it loop =========//
/////////////////////////////////////////////////////////

function startBot(message) {
    (message) ? logger(message, "SHIKIMORI BOT STARTING") : "";

    const child = spawn("node", ["--trace-warnings", "--async-stack-traces", "BOTJRT.js"], {
        cwd: __dirname,
        stdio: "inherit",
        shell: true
    });

    child.on("close",async (codeExit) => {
      var x = 'codeExit'.replace('codeExit',codeExit);
        if (codeExit == 1) return startBot("BOT RESTARTING!!!");
         else if (x.indexOf(2) == 0) {
           await new Promise(resolve => setTimeout(resolve, parseInt(x.replace(2,'')) * 1000));
                 startBot("Bot has been activated please wait a moment!!!");
       }
         else return; 
    });

    child.on("error", function (error) {
        logger("An error occurred: " + JSON.stringify(error), "Starting");
    });
};
////////////////////////////////////////////////
//========= Check update from Github =========//
////////////////////////////////////////////////


// axios.get("https://raw.githubusercontent.com/J-JRT/JRT_main/mainV2/package.json").then((res) => {
//     logger(res['data']['name'], "NAME");
//     logger("version: " + res['data']['version'], "VERSION");
//     logger(res['data']['description'], "DESCRIPTION");
//     logger(res['data']['author'], "AUTHOR");
//     logger(res['data']['license'], "LICENSE");
// })
setTimeout(async function () {
  /*await new Promise((_0x596ec3) => setTimeout(_0x596ec3, 500))
  logger.banner(
    String.raw`***********************************************************`
  )
  await new Promise((_0x431797) => setTimeout(_0x431797, 70))
  logger.banner(
    String.raw`*                                                         *`
  )
  await new Promise((_0x20452f) => setTimeout(_0x20452f, 70))
  logger.banner(
    String.raw`*        ░░░░░██╗░░░░░░░░░░░██╗██████╗░████████╗          *`
  )
  await new Promise((_0x5cacc1) => setTimeout(_0x5cacc1, 70))
  logger.banner(
    String.raw`*        ░░░░░██║░░░░░░░░░░░██║██╔══██╗╚══██╔══╝          *`
  )
  await new Promise((_0x2ded72) => setTimeout(_0x2ded72, 70))
  logger.banner(
    String.raw`*        ░░░░░██║█████╗░░░░░██║██████╔╝░░░██║░░░          *`
  )
  await new Promise((_0x270ee7) => setTimeout(_0x270ee7, 70))
  logger.banner(
    String.raw`*        ██╗░░██║╚════╝██╗░░██║██╔══██╗░░░██║░░░          *`
  )
  await new Promise((_0x5c8440) => setTimeout(_0x5c8440, 70))
  logger.banner(
    String.raw`*        ╚█████╔╝░░░░░░╚█████╔╝██║░░██║░░░██║░░░          *`
  )
  await new Promise((_0x328aeb) => setTimeout(_0x328aeb, 70))
  logger.banner(
    String.raw`*        ░╚════╝░░░░░░░░╚════╝░╚═╝░░╚═╝░░░╚═╝░░░          *`
  )
  await new Promise((_0x59da1f) => setTimeout(_0x59da1f, 70))
  logger.banner(
    String.raw`*                                                         *`
  )
  await new Promise((_0x18a1ed) => setTimeout(_0x18a1ed, 70))
  logger.banner(
    String.raw`* → HoangChecker -> version 2.0                             *`
  )
  await new Promise((_0x45b78c) => setTimeout(_0x45b78c, 70))
  logger.banner(
    String.raw`* → Facebook: https:www.facebook.com/fanqzhuang03          *`
  )
  await new Promise((_0x5a1b64) => setTimeout(_0x5a1b64, 70))
  logger.banner(
    String.raw`* → Zalo/Donate Momo/Donate Mbbank: 0836620317            *`
  )
  await new Promise((_0x49e8c5) => setTimeout(_0x49e8c5, 70))
  logger.banner(
    String.raw`***********************************************************`
  )
  await new Promise((_0x5a201f) => setTimeout(_0x5a201f, 1000))*/
  /*await new Promise((_0x596ec3) => setTimeout(_0x596ec3, 500))
  logger.banner(
    String.raw``
  )
  await new Promise((_0x431797) => setTimeout(_0x431797, 70))
  logger.banner(
    String.raw`██████╗  ██████╗ ████████╗         ██╗██████╗ ████████╗`
  )
  await new Promise((_0x20452f) => setTimeout(_0x20452f, 70))
  logger.banner(
    String.raw`██╔══██╗██╔═══██╗╚══██╔══╝         ██║██╔══██╗╚══██╔══╝`
  )
  await new Promise((_0x5cacc1) => setTimeout(_0x5cacc1, 70))
  logger.banner(
    String.raw`██████╔╝██║   ██║   ██║            ██║██████╔╝   ██║   `
  )
  await new Promise((_0x2ded72) => setTimeout(_0x2ded72, 70))
  logger.banner(
    String.raw`██╔══██╗██║   ██║   ██║       ██   ██║██╔══██╗   ██║   `
  )
  await new Promise((_0x270ee7) => setTimeout(_0x270ee7, 70))
  logger.banner(
    String.raw`██████╔╝╚██████╔╝   ██║       ╚█████╔╝██║  ██║   ██║   `
  )
  await new Promise((_0x5c8440) => setTimeout(_0x5c8440, 70))
  logger.banner(
    String.raw`╚═════╝  ╚═════╝    ╚═╝        ╚════╝ ╚═╝  ╚═╝   ╚═╝   `
  )
  await new Promise((_0x328aeb) => setTimeout(_0x328aeb, 70))
  logger.banner(
    String.raw``
  )*/
  /*const rainbow = chalkercli.rainbow('***********************************************************\n*                                                         *\n*        ██╗░░██╗░█████╗░░█████╗░███╗░░██╗░██████╗░
██║░░██║██╔══██╗██╔══██╗████╗░██║██╔════╝░
███████║██║░░██║███████║██╔██╗██║██║░░██╗░
██╔══██║██║░░██║██╔══██║██║╚████║██║░░╚██╗
██║░░██║╚█████╔╝██║░░██║██║░╚███║╚██████╔╝
╚═╝░░╚═╝░╚════╝░╚═╝░░╚═╝╚═╝░░╚══╝░╚═════╝░         *\n*                                                         *\n* → BOT ArB x ViegoCK -> version 2.0                           *\n* → Facebook: https:www.facebook.com/fanqzhuang03      *\n* → Zalo/Donate Momo/Donate Mbbank: 0836620317           *\n***********************************************************').stop();

rainbow.render(); 

const frame = rainbow.frame(); 
console.log(frame);*/
CFonts.say('Shikimori', {
		font: 'block',
    	align: 'center',
  gradient: ['red', 'magenta']
		})
CFonts.say(`Bot Messenger Created By Milo`, {
		font: 'console',
		align: 'center',
		gradient: ['red', 'magenta']
		})
  const rainbow = chalkercli.rainbow('\n[=== 𝐀𝐂𝐓𝐈𝐕𝐄 𝐁𝐎𝐓 𝐒𝐇𝐈𝐊𝐈𝐌𝐎𝐑𝐈 ===]\n').stop();

rainbow.render(); 

const frame = rainbow.frame(); 
console.log(frame);
  
  logger('Bắt đầu load source code', 'LOAD')
  startBot()
}, 70)
/*const karaoke = chalkAnimation.karaoke(`
LOADING SUCCESSFULL BOT ArB x ViegoCK[▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒] 
`);
const rainbow1 = chalkAnimation.rainbow(`
             +-+ +-+ +-+ +-+ +-+ +-+ +-+
             |H| |O| |A| |N| |G| |D| |Z|
             +-+ +-+ +-+ +-+ +-+ +-+ +-+


`);*/