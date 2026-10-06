import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

global.owner = [
   ['+51992621601', 'AleiznBot 🐼', true],
   ['+51992621601', 'AleiznBot', true],
   ['+51992621601','AleiznBot', true],
   ['+51992621601', 'AleiznBot', true],
]

global.creator = [
   ['+51992621601', 'AleiznBot 🐼', true]
]

global.mods = 
global.prems = 


global.packname = 'AleiznBot MD'
global.botname = 'AleiznBot'
global.wm = 'AleiznBot - MD'
global.author = 'AleiznBot MD'
global.dev = 'AleiznBot'
global.errorm = 'Error: ${error.message}'
global.namebot = 'AleiznBot'
global.nameai = 'AleiznBot Ai'
global.textbot = 'AleiznBot MD'
global.textmain = 'AleiznBot'
global.textmain2 = 'AleiznBot MD'
global.vs = '2.1.0'
global.emotg = '🌷'
global.msgtagall = '💜⋆ 𝗘𝗧𝗜𝗤𝗨𝗘𝗧𝗔 𝗚𝗘𝗡𝗘𝗥𝗔𝗟 ⋆💜\n🛍️𝗔𝗱𝗾𝘂𝗶𝗲𝗿𝗲 𝗲𝗹 𝗯𝗼𝘁 𝗰𝗼𝗻 ⨾\n↳ wa.me/51992621601‬'
global.moneda = 'AleiznBotCoins'

global.sessions = 'AleiznBotSession'
global.jadi = 'JadiBots'
global.nameqr = 'AleiznBot'


global.catalogo = fs.readFileSync('./media/catalogo.jpg')


global.grupo = 
global.comu = 
global.channel = 
global.ig = 


global.estilo = 


global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment        


global.multiplier = 69 
global.maxwarn = '3'


let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})