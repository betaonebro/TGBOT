const { Telegraf } = require('telegraf')
require ('dotenv').config()
const bot = new Telegraf(process.env.TOKEN)

bot.start((ctx) => {
    console.log(ctx.message)
})

bot.on('sticker', (ctx) => {
    ctx.reply(`Классный стикер - ${ctx.message.sticker.emoji}`)
})




bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('Классный стикер'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))

