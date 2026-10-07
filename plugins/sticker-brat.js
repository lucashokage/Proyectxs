import { createCanvas } from 'canvas'
import { sticker } from '../lib/sticker.js' // Asegúrate de que la ruta a tu librería de stickers sea correcta

let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) return m.reply(`*⚠️ Por favor, ingresa un texto para crear tu sticker estilo Brat.*\n\nEjemplo:\n*${usedPrefix + command} Hola mundo*`)

    m.reply('*⌛ Generando sticker local con brat...*')

    try {
        const width = 512
        const height = 512
        const canvas = createCanvas(width, height)
        const ctx = canvas.getContext('2d')

        // 1. Fondo blanco
        ctx.fillStyle = '#ffffff'
        ctx.fillRect(0, 0, width, height)

        // 2. Aplicar un toque ligero de desenfoque (blur sutil de 3px)
        ctx.filter = 'blur(3px)'

        ctx.fillStyle = '#000000'
        ctx.textBaseline = 'top'
        ctx.textAlign = 'left' // Alineado a la izquierda exacto al ejemplo

        let maxWidth = 430
        let maxHeight = 440
        let fontSize = 120 // Tamaño inicial máximo a probar
        let lines = []
        let lineHeight = 0
        let startX = 45 // Margen izquierdo fijo

        // 3. Bucle para calcular el tamaño de fuente ideal de forma automática
        while (fontSize > 15) {
            ctx.font = `${fontSize}px "Arial Narrow", Arial, sans-serif`
            lineHeight = fontSize * 1.15

            let words = text.split(' ')
            let line = ''
            let testLines = []
            let fits = true

            for (let n = 0; n < words.length; n++) {
                let testLine = line + words[n] + ' '
                let metrics = ctx.measureText(testLine)
                if (metrics.width > maxWidth && n > 0) {
                    testLines.push(line.trim())
                    line = words[n] + ' '
                } else {
                    line = testLine
                }
            }
            testLines.push(line.trim())

            let totalHeight = testLines.length * lineHeight
            
            // Verificar si el ancho y la altura total caben dentro del canvas
            for (let l of testLines) {
                if (ctx.measureText(l).width > maxWidth) {
                    fits = false
                    break
                }
            }

            if (fits && totalHeight <= maxHeight) {
                lines = testLines
                break
            }

            fontSize -= 2 // Reduce el tamaño progresivamente hasta que encaje perfecto
        }

        // Valor de respaldo por si el texto es sumamente largo
        if (lines.length === 0) {
            fontSize = 35
            ctx.font = `${fontSize}px "Arial Narrow", Arial, sans-serif`
            lineHeight = fontSize * 1.15
            lines = [text]
        }

        // Aplicar la fuente con el tamaño final calculado
        ctx.font = `${fontSize}px "Arial Narrow", Arial, sans-serif`

        let totalHeight = lines.length * lineHeight
        let startY = Math.max(40, (height - totalHeight) / 2)

        // 4. Dibujar cada línea alineada a la izquierda
        for (let i = 0; i < lines.length; i++) {
            ctx.fillText(lines[i], startX, startY + (i * lineHeight))
        }

        // 5. Convertir el canvas a Buffer PNG
        let buffer = canvas.toBuffer('image/png')

        // 6. Transformar a sticker y enviar
        let stiker = await sticker(buffer, false, global.packname || 'Bot', global.author || 'Aleizn')
        
        if (stiker) {
            await conn.sendMessage(m.chat, { sticker: stiker }, { quoted: m })
        } else {
            await conn.sendFile(m.chat, buffer, 'brat.webp', '', m)
        }

    } catch (e) {
        console.error(e)
        m.reply(`*❌ Ocurrió un error al generar el sticker con Canvas:* ${e.message}`)
    }
}

handler.help = ['brat <texto>']
handler.tags = ['maker', 'sticker']
handler.command = /^(brat)$/i

export default handler