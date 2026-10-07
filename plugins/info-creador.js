let handler = async (m, { conn, usedPrefix, command }) => {
    let vcard1 = `BEGIN:VCARD\nVERSION:3.0\nN:;Aleizn;;;\nFN:Aleizn\nitem1.TEL;waid=51992621601:+51 992 621 601\nitem1.X-ABLabel:Propietario / Owner\nEND:VCARD`
    let vcard2 = `BEGIN:VCARD\nVERSION:3.0\nN:;Anto;;;\nFN:Anto\nitem1.TEL;waid=56927280073:+56 9272 80073\nitem1.X-ABLabel:Propietario / Owner\nEND:VCARD`

    await conn.sendMessage(m.chat, {
        contacts: {
            displayName: 'Propietarios / Owners',
            contacts: [
                { vcard: vcard1 },
                { vcard: vcard2 }
            ]
        }
    }, { quoted: m })
}

handler.help = ['owner', 'creator', 'dueño']
handler.tags = ['main']
handler.command = /^(owner|creator|dueño)$/i

export default handler