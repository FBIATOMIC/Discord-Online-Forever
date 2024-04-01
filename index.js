const Discord = require('/opt/render/project/src/index.js');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { //Credits to himika#0001 and never#0001
  const date = new Date();
  const options = {
    timeZone: 'America/New_York', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1222190500086546543')
    .setType('STREAMING')
    .setURL('https://www.youtube.com/watch?v=5qDJLLqY1YI') //Must be a youtube video link 
    .setState('☣ [King of Hackers] ☣')
    .setName('⚠◥◣_◢◤ "HACKER" ◥◣_◢◤⚠')
    .setDetails(`💢 "ATOMIC-Tier Hacker" 💢`)
    .setStartTimestamp(Date.now())
    .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1200466842582528011/1206185675083358288/0210.gif?ex=661275f2&is=660000f2&hm=b4adbd96734894f007e8a3d8b3bfc56e50d1cea1eb34d03dd0c8ca6d0a7aa685&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('⚠ Classified as a national Threat ⚠') //Text when you hover the Large image
    .setAssetsSmallImage('https://cdn.discordapp.com/attachments/1200466842582528011/1205903176923091015/a_c4d8fd75846ec1f6f3128dc94800ae4a_1.gif?ex=66083459&is=65f5bf59&hm=6d7b9a7e651082b6043071f7993eca89ab5fdae33dc7498c578fd7202241c945&') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('Verified!') //Text when you hover the Small image
    .addButton('♠ "Am I a Psychopath!?" ♠', 'https://www.youtube.com/watch?v=0hzpe-XgOeM')
    .addButton('⚠ "ATOMIC! [full AMVs]" ⚠', 'https://youtube.com/playlist?list=PLQBUreVNNjUgKhBL0eM-2Ak66xEuvsPAj&si=813wdMtDkjhK_pZb');

  client.user.setActivity(r);
  client.user.setPresence({ status: "online" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `💢 "ATOMIC-Tier Hacker" 💢`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
