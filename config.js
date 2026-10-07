import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

global.owner = [
   ['+51992621601', 'KaisenBot 🐼', true],
   ['+51992621601', 'KaisenBot', true],
   ['+51992621601','KaisenBot', true],
   ['+51992621601', 'KaisenBot', true],
]

global.creator = [
   ['+51992621601', 'KaisenBot 🐼', true]
]

global.mods = 
global.prems = 


global.packname = 'KaisenBot MD'
global.botname = 'KaisenBot'
global.wm = 'KaisenBot - MD'
global.author = 'KaisenBot MD'
global.dev = 'KaisenBot'
global.errorm = 'Error: ${error.message}'
global.namebot = 'KaisenBot'
global.nameai = 'KaisenBot Ai'
global.textbot = 'KaisenBot MD'
global.textmain = 'KaisenBot'
global.textmain2 = 'KaisenBot MD'
global.vs = '2.1.0'
global.emotg = '🌷'
global.msgtagall = '💜⋆ 𝗘𝗧𝗜𝗤𝗨𝗘𝗧𝗔 𝗚𝗘𝗡𝗘𝗥𝗔𝗟 ⋆💜\n🛍️𝗔𝗱𝗾𝘂𝗶𝗲𝗿𝗲 𝗲𝗹 𝗯𝗼𝘁 𝗰𝗼𝗻 ⨾\n↳ wa.me/51992621601‬'
global.moneda = 'KaisenBotCoins'

global.sessions = 'KaisenBotSession'
global.jadi = 'JadiBots'
global.nameqr = 'KaisenBot'


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