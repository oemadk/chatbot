import {
    AutojoinRoomsMixin,
    LogLevel,
    LogService,
    MatrixClient,
    PantalaimonClient,
    RichConsoleLogger, RichReply,
    SimpleFsStorageProvider
} from "matrix-bot-sdk";
import * as path from "path";
import config from "./config";
import CommandHandler from "./commands/handler";
const https = require("https")
const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000
const TOKEN = process.env.LINE_ACCESS_TOKEN
import * as htmlEscape from "escape-html";

// First things first: let's make the logs a bit prettier.
LogService.setLogger(new RichConsoleLogger());

// For now let's also make sure to log everything (for debugging)
LogService.setLevel(LogLevel.DEBUG);

// Print something so we know the bot is working
LogService.info("index", "Bot starting...");


//This is the startup closure where we give ourselves an async context
// (async function () {
//     // Prepare the storage system for the bot
//     const storage = new SimpleFsStorageProvider(path.join(config.dataPath, "bot.json"));
//
//     // Create the client
//     let client: MatrixClient;
//     if (config.pantalaimon.use) { // create a client with Pantalaimon if pantalaimon.use set to true.
//         const pantalaimon = new PantalaimonClient(config.homeserverUrl, storage);
//         client = await pantalaimon.createClientWithCredentials(config.pantalaimon.username, config.pantalaimon.password);
//     } else { // else use Matrix client.
//         client = new MatrixClient(config.homeserverUrl, config.accessToken, storage);
//     }
//
//     // Setup the autojoin mixin (if enabled)
//     if (config.autoJoin) {
//         AutojoinRoomsMixin.setupOnClient(client);
//     }
//
//     // Prepare the command handler
//     const commands = new CommandHandler(client);
//
//
//     await commands.start();
//     LogService.info("index", "Starting sync...");
//     await client.start(); // This blocks until the bot is killed
// })();

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.get("/", (req, res) => {
    res.sendStatus(200)
})

app.post("/webhook", function(req, res) {
    console.log(req.body);
    const client2 = new MatrixClient("https://yashfiichat.eastus.cloudapp.azure.com", "syt_ZHJib3Q_WbpKtNthdHDXZyWlnYwC_2G0ZcG");
    AutojoinRoomsMixin.setupOnClient(client2);
    client2.sendMessage("!mxmSbSapJxYEXVMPgS:yashfiichat.eastus.cloudapp.azure.com", {
        "msgtype": "m.notice",
        "body": "it's working! i got called by a weebhook to send this message!",
    })

    res.send("HTTP POST request sent to the webhook URL!")
})

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})
