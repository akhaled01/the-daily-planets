const axios = require("axios");
const { Client, GatewayIntentBits } = require("discord.js");

const NASA_API_URL = process.env.NASA_API_URL;
const NASA_API_KEY = process.env.NASA_API_KEY;
const DISCORD_TOKEN = process.env.DISCORD_TOKEN;
const CHANNEL_ID = process.env.CHANNEL_ID;

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const md = (title, explanation, url) => `
# ${title}
## Astronomy Picture Of The Day!

${explanation}

${url}
`;

// Fetch APOD from NASA API
const fetchAPOD = async () => {
  try {
    const response = await axios.get(NASA_API_URL, {
      params: { api_key: NASA_API_KEY },
    });
    const { title, explanation, url } = response.data;

    // Get the channel and send the APOD information
    const channel = client.channels.cache.get(CHANNEL_ID);
    if (channel) {
      channel.send(md(title, explanation.trim(), url));
    } else {
      console.error("Channel not found!");
    }
  } catch (error) {
    console.error("Error fetching APOD:", error);
  }
};

const getTimeUntilNext8AM = () => {
  const now = new Date();
  const next8AM = new Date(now);

  next8AM.setUTCHours(5, 0, 0, 0); // 5:00 UTC is 8:00 AM AST

  if (now > next8AM) {
    next8AM.setDate(next8AM.getDate() + 1);
  }

  return next8AM - now; // Time in milliseconds until next 8:00 AM
};

// Function to start the daily APOD fetch using setTimeout
const startDailyAPODFetch = () => {
  const timeUntilNext8AM = getTimeUntilNext8AM();

  setTimeout(() => {
    fetchAPOD();
    setInterval(fetchAPOD, 24 * 60 * 60 * 1000);
  }, timeUntilNext8AM);
};

// Log in to Discord with your bot token
client.once("ready", () => {
  console.log("The daily planets is online!");
  startDailyAPODFetch()
});

client.login(DISCORD_TOKEN);
