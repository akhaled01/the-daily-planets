const axios = require("axios");
const { Client, GatewayIntentBits } = require("discord.js");

const NASA_API_URL = process.env.NASA_API_URL;
const NASA_API_KEY = process.env.NASA_API_KEY;
const DISCORD_TOKEN = process.env.DISCORD_TOKEN;
const CHANNEL_ID = process.env.CHANNEL_ID;

// Create a new Discord client instance
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
      await channel.send(md(title, explanation.trim(), url));
    } else {
      console.error("Channel not found!");
    }
  } catch (error) {
    console.error("Error fetching APOD:", error);
  }
};

exports.sendDailyAPOD = async (req, res) => {
  try {
    // Log in to Discord with your bot token
    await client.login(DISCORD_TOKEN);

    // Fetch APOD and send it to the Discord channel
    await fetchAPOD();

    res.status(200).send("APOD sent successfully!");
  } catch (error) {
    console.error("Error sending APOD:", error);
    res.status(500).send("Failed to send APOD.");
  }
};
