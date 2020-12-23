/////////////////////////////ROBOT/////////////////////////////


const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

const config = require("./config.json")

// AGREGAR AL BOT / (ACTIVIDAD Y ESTADO)

client.on("ready", () => {
  client.user.setPresence({

      activity: { 
          name: 'nombre de la precense',
          type: 'tipo de precense'
      },
      status: 'ESTADO DEL BOT'
  })
})

// Aplicar Prefijo
let prefix = "AQUI APLICAR EL PREFIJO";
client.on("message", message => {
  // NO MOVER AQUI
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  if (message.content.startsWith(prefix + "COMANDO BASICO")) {
    message.channel.send("RESPUESTA DEL BOT");

    //////////////DIVISOR DE COMANDOS//////////////

  } else if (message.content.startsWith(prefix + "COMANDO BASICO")) {
    message.channel.send("RESPUESTA DEL BOT");
  }
});

////////////////////TOKEN (NO MOVER)////////////////////

client.login(config.token);