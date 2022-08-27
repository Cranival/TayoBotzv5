let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Axis [083893144467]
╰────

╭─「 Donasi • Non Pulsa 」
│ • Gopay [083893144467]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
