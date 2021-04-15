module.exports = {
  prefix: '<',
  // This is the prefix of the bot which is how the bot knows you want it.
  // eg. If the prefix is "<" then you must do "<ping" to ping the bot, "!ping" won't work.
  ping:'444876468158464001',
  // Set this to the id of the thing you wanna ping
  // That's the big number when you ping them and put  backslash(\) behind the mention
  // eg. \@Nerdopedia#5378 would become <@444876468158464001> so 444876468158464001 is the ping
  pingprefix:'<@',
  // set the ping prefix to the following for different situations
  // <@& - Pinging Roles
  // <@ - Pinging single users
  pool: [
            "You will soon know something that you will wish you didn't.",
            "Time will teach you a lesson that nobody else could.",
            "You shouldn't continue with your plans. They shall not end well.",
            "You will die alone!",
            "You are throwing your life away!",
            "1+1=3!",
            "1+1=2.",
            "We will all die one day. Make all the rest count",
            "Your hair smells nice",
            "Think for yourself. It will be your greatest asset.",
            "She sells sea shells on the sea shore",
            "Call your mother",
            "Your problem just got bigger. Think about what you have done",
            "It’s already inside of you. You just don’t know it yet.",
            "Tragedy. Death. Loss. Desire. Darkness. Corruption. Repeat.",
            "Thank Sigurd" // No seriously, Thanks for this list u/sigurd131
        ],
  // These are the little sentences that appear when you do "<ping". 
  // They are chosen randomly so don't take it too seriously
  token: process.env.TOKEN
  // This is the token in the file ".env"
  // Use https://www.writebots.com/discord-bot-token/ to get a token and then paste it in the .env file where it's written "Your token"
};
