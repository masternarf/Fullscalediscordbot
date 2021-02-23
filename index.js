const discord = require('discord.js');
const bot = new discord.Client();
const token = 'NzcwNjU4MTg3OTQ2NDkxOTA1.X5gxXg.tO2G0pwooQQKA9dind3DyWc4-HI'
const prefix = '?';


bot.on('ready', () => {
    console.log('Your bot is now online.');
    bot.user.setActivity('Stocks on Fullscale', { type: "WATCHING"})
        .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
        .catch(console.error);        
})

bot.on('message',message => {
    if(message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLocaleLowerCase();
    if (command === 'subscribe') {
        const testEmbed = new discord.RichEmbed()
            .setColor(0x6509ed)
            .setTitle('Register for a Free Trial Today!')
            .setDescription('Clike here to start trading today! 7 days completely Free')
            .setAuthor(message.author.username)
            .addField('This embed work1','you did a good job making.')
            .setThumbnail('https://www.fullscaletrading.com/_nuxt/img/FS_logo_long.b195cc2.png')
            .setFooter('This embed was created nicely')
            .setTimestamp()
        try {
            message.author.sendEmbed(testEmbed) ;
        } catch {
            message.reply('Sorry <@${message.author.username}> I cannot message you, make sure your dms are turned to public')
        }
    } else

    if (command === 'buy') {
        message.reply('Buying shares to have a “long” position in a company');
    } else
    if (command === 'sell') {
        message.reply('Getting rid of the shares you own to take profits or to sell thinking a stock may fall');
    } else
    if (command === 'ask') {
        message.reply('Ask is what people who are looking to sell their stocks are looking to get for their shares');
    } else
    if (command === 'spread') {
        message.reply(' Spread is the difference between what people want to spend and what people want to get.');
    } else
    if (command === 'ticker') {
        message.reply('Other words for a Stock Symbol – 1-5 Letter Symbol to represent a company trading on the Stock Market');
    } else
    if (command === 'bull') {
        message.reply('A bull market is a market condition where investors are expecting prices to rise (Use Bullish as a term to represent how a ticker/chart appear)');
    } else
    if (command === 'markethours') {
        message.reply('In the United States, the stock market opens at 9:30 AM EST. and closes at 4 PM EST. on a standard weekday Monday-Friday.');
    } else
    if (command === 'afterhours') {
        message.reply('Pre-Market trading begins at 4 AM EST. before market open and After-Hours trading takes place after market close until 8 PM EST. (Extended Hours trading is not available on Full Scale Trading');
    } else
    if (command === 'warrant') {
        message.reply('represents the right to purchase a companys stock at a specific price and at a specific date. A stock warrant is issued directly by a company to an investor');
    } else
    if (command === 'otc') {
        message.reply('Over the counter stocks, securities are traded for companies not listed on a formal exchange. OTCs are traded via a dealer network instead of a centralized exchange. They are higher risk micro or nanocap stocks that typically have less liquidity, market cap and a wider bid-ask than penny stock');
    } else
    if (command === 'pennystock') {
        message.reply('refers to a small companys shares that typically trade for lower than $5 per share, higher-risk due to their low price, lack of liquidity, low float, small market cap, and wide bid-ask spread');
    } else
    if (command === 'bluechip') {
        message.reply('The stocks that are behind industry leading companies. These companies usually offer stable dividends and usually are managed very well financially. Examples include Apple, Microsoft, and Facebook.');
    } else
    if (command === 'bear') {
        message.reply('A bear market is a market condition where investors are expecting prices to fall (Use Bearish as a term to represent how a ticker/chart appear)');
    } else
    if (command === 'pt') {
        message.reply('Price Target set as a trader’s goal to achieve when entering a position');
    } else
    if (command === 'sl') {
        message.reply('Stop loss is setting an activation price for a stock to be sold if it dips to, or below that selected price. (A way to protect yourself, a safety net to protect from selloffs on stocks');
    } else
    if (command === 'volume') {
        message.reply('The number of shares being traded on any given symbol');
    } else
    if (command === 'dmla') {
        message.reply('Daily Max Loss allowed before a risk manager will cover positions in the account');
    } else
    if (command === 'scalp') {
        message.reply('Also known as a Day-Trade or quick swing trade. Quickly getting in and out of a stock while scalping profits off a momentum change without being part of the fundamental reason the momentum changed.');
    } else
    if (command === 'daytrade') {
        message.reply('buying and selling a stock in the same day');
    } else
    if (command === 'long') {
        message.reply('Buying a stock at an entry and holding for a period of time');
    } else
    if (command === 'averagingdown') {
        message.reply('This is when an investor buys as the stock goes down so as to average the price at which purchased to a better new price');
    } else
    if (command === 'float') {
        message.reply('This is the number of shares which can be actually traded after deducting the shares held by insiders (Low-Float are good indicators for Penny Tickers)');
    } else
    if (command === 'dividend') {
        message.reply('Portion of the companies earning which is paid to the shareholders Portfolio: A collection of investments owned by you');
    } else
    if (command === 'sector') {
        message.reply('A group of stocks in the same group Ex. EV Sector, Biotech Sector, Cannabis Sector, Entertainment Sector, etc.');
    } else
    if (command === 'exchange') {
        message.reply('An exchange is a place where different types of investment are traded (Dow Jones or DOW, S&P 500 or SPY, NASDAQ are examples)');
    } else
    if (command === 'ipo') {
        message.reply('Initial Public Offering that happens when the private company becomes a publicly traded company');
    } else
    if (command === 'offering') {
        message.reply('This is another offering in order to sell more stocks and to raise more money from the public (IPO’s are solid, Secondary Offerings are not good)');
    } else
    if (command === 'dpo') {
        message.reply('direct public offering, allows the issuing company to sell its securities directly to investors without using a middleman, such as an investment bank');
    } else
    if (command === 'spac') {
        message.reply('Special Acquisition Company (Popular Tickers/Mergers)');
    } else
    if (command === 'lmt') {
        message.reply('Limit Order, only fills you at your given price');
    } else
    if (command === 'orderexample') {
        message.reply('https://cdn.discordapp.com/attachments/807264712231747594/808740341506244648/unknown.png');
    } else
    if (command === 'test') {
        message.channel.send('nothing')
    } 
    
})

bot.login(token);
