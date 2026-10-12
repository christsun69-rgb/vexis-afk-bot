const express = require('express');
const mineflayer = require('mineflayer');
const app = express();

app.get('/', (req, res) => res.send('VexisSMP Bot is awake!'));
app.listen(process.env.PORT || 3000);

const bot = mineflayer.createBot({
  host: 'vexismp.play.hosting',
  username: 'Vexis_AFK_Bot', 
  version: false 
});

bot.on('spawn', () => {
  console.log('Bot joined VexisSMP!');
  setTimeout(() => {
    bot.chat('/register vexisafkbot123 vexisafkbot123'); 
    bot.chat('/login vexisafkbot123');
  }, 2000);
});

bot.on('end', () => {
  console.log('Disconnected. Reconnecting in 10 seconds...');
  setTimeout(() => process.exit(1), 10000);
});
