const axios = require('axios')

async function banCommand (ctx) {
  try {
    await ctx.deleteMessage()

    const args = ctx.message.text.slice(ctx.message.entities[0].length)

    const member = await ctx.telegram.getChatMember(
      process.env.ADMIN_CH_ID,
      ctx.from.id
    )

    const toBeBanned = await ctx.telegram.getChatMember(
      process.env.ADMIN_CH_ID,
      ctx.message.reply_to_message.from.id
    )

    const isMember = member && !(member.status === 'kicked' || member.status === 'left')
    const isAdmin = toBeBanned && !(toBeBanned.status === 'kicked' || toBeBanned.status === 'left')

    if (!isAdmin && isMember && ctx.message.reply_to_message) {
      const userName = ctx.message.reply_to_message.from.username
      const firstName = ctx.message.reply_to_message.from.first_name
      const lastName = ctx.message.reply_to_message.from.last_name
      const userId = ctx.message.reply_to_message.from.id

      const request = await axios.get('http://api.eksicode.org/telegrams')
      const groups = request.data

      groups.map(async e => {
        await ctx.telegram.kickChatMember(e.channelID, userId)
      })

      await ctx.telegram.sendMessage(process.env.ADMIN_CH_ID,
        `${userId} numaralı kullanıcı (${userName || (firstName + ' ' + (lastName || ''))}) başarıyla tüm gruplardan uçuruldu. ${args ? `Sebep: ${args}` : ''}`,
        {
          reply_markup: {
            inline_keyboard: [
              [
                {
                  text: 'Geri Al',
                  callback_data: `unban: ${userId}`
                }
              ]
            ]
          }
        })
    } else {
      console.log('Ban Error: Yetkisiz İşlem / Hatalı Kullanım')
    }
  } catch (err) {
    console.log('Ban Error: Hata aşağıdadır.')
    console.error(err)
  }
}

module.exports = banCommand
