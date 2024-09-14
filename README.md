# The Daily Planets

**The Daily Planets** is a Discord bot that delivers NASA's **Astronomy Picture of the Day (APOD)** to a specified Discord channel every morning at 8:00 AM AST (Bahrain time). With beautiful space imagery and insightful explanations from NASA, this bot is perfect for astronomy lovers and space enthusiasts alike.

## Features

- **Daily APOD Delivery**: Automatically sends NASA's Astronomy Picture of the Day at 8:00 AM AST (UTC+3) to your Discord channel.
- **Space Facts**: Each APOD image comes with a detailed explanation to help you learn more about the wonders of the universe.
- **Set-and-Forget**: After initial setup, the bot will run daily without any further interaction.

## Prerequisites

Before setting up the bot, make sure you have:

1. **Node.js** installed on your system. You can download it [here](https://nodejs.org/).
2. A **Discord bot** created through the [Discord Developer Portal](https://discord.com/developers/applications).
3. Your NASA API Key from [NASA's APOD API](https://api.nasa.gov/).

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/akhaled01/the-daily-planets.git
   ```
2. Navigate to the project directory:

   ```bash
   cd the-daily-planets
   ```
3. Install the necessary dependencies:

   ```bash
   npm install
   ```

## Setup

1. **Create a Discord Bot:**

   - Go to the [Discord Developer Portal](https://discord.com/developers/applications) and create a new bot.
   - Copy the **bot token** and replace the placeholder in `index.js`.
2. **Get Your NASA API Key:**

   - Visit [NASA's API portal](https://api.nasa.gov/) and generate an API key.
   - Place it in a `.env` file.
3. **Configure Your Discord Channel:**

   - Copy the ID of the Discord channel where you want the bot to send APOD information. You can get the channel ID by enabling Developer Mode in Discord and right-clicking on the channel.
   - Replace the placeholder `CHANNEL_ID` in `index.js` with the copied ID inside the `.env` file.
4. **Replace the placeholders in `index.js`:**

   - `YOUR_DISCORD_BOT_TOKEN`: Replace this with your bot's token from the Discord Developer Portal.
   - `YOUR_CHANNEL_ID`: Replace this with the ID of the Discord channel.
   - `DEMO_KEY`: Replace this with your NASA API Key.

> Make a copy of the `.env.example` file to know what placeholders to replace!

## Running the Bot

To run the bot, simply execute the following command:

```bash
node -env-file .env index.js
```

The bot will log in to Discord, wait until 8:00 AM AST, and then start sending the Astronomy Picture of the Day daily.

## Customization

- **Time of Delivery**: The bot is currently set to deliver APOD at 8:00 AM AST (UTC+3). If you need to change the delivery time, you can modify the time calculations in the `getTimeUntilNext8AM` function in `index.js`.
- **Channel**: You can specify any Discord channel by changing the `CHANNEL_ID` to another channel's ID inside the `.env` file.

## Example Usage

Once the bot is running, it will post messages like this to your Discord channel every day:


```markdown
# The Horsehead Nebula
## Astronomy Picture Of The Day!

This close-up view shows the famous dark nebula silhouetted against a brighter region of the sky. The Horsehead Nebula is one of the most identifiable nebulae because of its resemblance to a horse's head. It is located just south of the bright star Alnitak, on the easternmost side of Orion's Belt. The dark cloud is approximately 1,500 light-years away from Earth and is a region where star formation is currently happening.

https://apod.nasa.gov/apod/image/2104/horsehead_hubble_960.jpg
```

> [!TIP]
> You may customize this layout in your own way!

## Troubleshooting

- **Bot Not Sending Messages**: Make sure the bot has permission to send messages in the specified channel. You may need to adjust the bot's role in the Discord server.
- **Invalid Token**: If you receive an invalid token error, double-check that you've copied the bot token correctly from the Discord Developer Portal.
- **Timezone Issues**: The bot is configured to work for AST (UTC+3). If you're in a different timezone, adjust the logic in the `getTimeUntilNext8AM` function accordingly.

## Contributing

This is an open source project! Feel free to fork this repository and contribute improvements! Pull requests are welcome.

## License

This project is licensed under the MIT License.

#### Made by akhaled01
