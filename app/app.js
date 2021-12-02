const TelegramBot = require('node-telegram-bot-api')
require('dotenv').config();

const bot = new TelegramBot(process.env.TELEGRAM_API_TOKEN, {polling:true})
// command /start
bot.onText(/\/start/,message=>{
    let sender = message.chat.id
    bot.sendMessage(sender,"Welcome to nodejs telegram echo bot!")
})

bot.on('message',(message)=>{
    let sender = message.chat.id
    let text = message.text
    bot.sendMessage(sender,text)
})
