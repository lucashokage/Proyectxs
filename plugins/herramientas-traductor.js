// Lista de números autorizados para usar este comando (con código de país, sin espacios ni '+')
const numerosAutorizados = [
    '51992621601',
    // '51987654321' // Puedes agregar más números separados por comas
];

let handler = async (m, { conn, args, usedPrefix, command }) => {
    // Obtener el número de quien ejecuta el comando
    let remitente = (m.sender || m.from || '').split('@')[0].replace(/[^0-9]/g, '');

    // Verificar si el remitente está en la lista de números permitidos
    if (!numerosAutorizados.includes(remitente)) {
        return m.reply('No tienes autorización para usar este comando.');
    }

    if (!args[0] || isNaN(args[0])) {
        return m.reply(*Formato incorrecto.*\n\nUsa: *${usedPrefix + command} <días>*\nEjemplo: *${usedPrefix + command} 30*);
    }

    let dias = parseInt(args[0]);
    if (dias < 1) return m.reply('El número de días debe ser al menos 1.');

    let chat = global.db.data.chats[m.chat];
    if (!chat) chat = global.db.data.chats[m.chat] = {};

    let duracionMs = dias * 24 * 60 * 60 * 1000;
    let tiempoExpiracion = +new Date() + duracionMs;

    chat.expired = tiempoExpiracion;

    let fechaFin = new Date(tiempoExpiracion).toLocaleDateString('es-PE', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });

    await m.reply(*Tiempo establecido con éxito.*\n\n*Días asignados:* ${dias} día(s)\n*Fecha de salida:* ${fechaFin}\n\nEl bot se retirará automáticamente al cumplirse el plazo.);
};

// Verificador automático cada vez que se envía un mensaje en el grupo
handler.before = async function (m, { conn }) {
    if (!m.isGroup) return;

    let chat = global.db.data.chats[m.chat];
    if (!chat || !chat.expired) return;

    if (+new Date() >= chat.expired) {
        await conn.reply(m.chat, 'El tiempo de permanencia asignado a este grupo ha expirado.\n\n_El bot se retirará ahora. ¡Hasta luego!_', null);
        
        chat.expired = 0;
        await conn.groupLeave(m.chat);
    }
};

handler.help = ['dias <número>'];
handler.tags = ['group'];
handler.command = ['dias', 'tiempo'];

handler.group = true; // Solo dentro de grupos
handler.rowner = false; // Desactivado para no exigir ser el Owner del config.js

export default handler;