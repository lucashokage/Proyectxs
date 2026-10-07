import { generateBrat } from '@xayz/brat-generator'

let handler = async (m, { conn, text }) => {
    if (!text) {
        return m.reply('*✏️ Escribe un texto para crear tu sticker.*\n\n*Ejemplo:*\n.brat Hola mundo 🌷')
    }

    try {
        await m.react('🌷')

        // Generar imagen estilo Brat
        let image = await generateBrat({
            text: text,
            theme: 'white',
            blur: 0
        })

        // Enviar como sticker
        await conn.sendMessage(
            m.chat,
            {
                sticker: image
            },
            {
                quoted: m
            }
        )

        await m.react('✅')

    } catch (e) {
        console.error(e)
        await m.react('❌')
        return m.reply('*❌ Ocurrió un error al crear el sticker Brat.*')
    }
}

handler.help = ['brat <texto>']
handler.tags = ['sticker']
handler.command = ['brat']

export default handler
