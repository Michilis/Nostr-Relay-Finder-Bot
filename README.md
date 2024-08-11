# Nostr Relay Finder Bot

This is a Telegram bot that helps users find the best Nostr relays to connect to, based on their Npub (Nostr public key) and the relays their contacts are using.

## Features

- **Set and Manage Npub**: Users can set and manage their Npub (Nostr public key) using the `/setpub` command.
- **Relay Recommendations**: Get a list of recommended relays based on the relays connected to by the user's contacts.
- **View Paid Relays**: Check a list of paid Nostr relays with the `/paidrelays` command.
- **View Top Free Relays**: Get a list of the top free relays using the `/freerelays` command.
- **Ping a Relay**: Ping a specific relay to check its latency and uptime with the `/ping relay_url` command.
- **Check Relay Uptime**: Check the historical uptime of a relay using the `/checkrelay relay_url` command.
- **Get User Info**: Retrieve Nostr information based on your Npub or Telegram username. The `/userinfo` command can be used in various ways:
  - `/userinfo` - Shows the information of the user who sent the command.
  - `/userinfo npub...` - Checks the information for a specific Npub.
  - `/userinfo @username` - Retrieves Nostr information for a specific Telegram user by username.
- **Monitor Relay Uptime**: The bot periodically pings saved relays to monitor their uptime.

## Commands

- `/start` - Start the bot and get basic instructions.
- `/setpub npub...` - Set your Npub.
- `/getrelays` - Get the top 10 recommended relays.
- `/userinfo` - Get your own Npub and relay information.
- `/userinfo npub...` - Get information for a specific Npub.
- `/userinfo @username` - Get information for a specific Telegram user.
- `/paidrelays` - View a list of paid relays.
- `/freerelays` - View the top free relays.
- `/ping relay_url` - Ping a relay to check its latency and uptime.
- `/checkrelay relay_url` - Check the historical uptime of a relay.
- `/help` - Get help on how to use the bot.

## Data Management

- **User Data**: The bot securely stores user Npubs, linked Telegram usernames, and associated Nostr information.
- **Caching**: Frequently accessed data, such as popular relays and user contact information, is cached for optimized performance.

## Error Handling

The bot handles various error scenarios, including:
- **Invalid Npub**: If a user inputs an invalid Npub format, the bot provides feedback and instructions to correct it.
- **Unknown Username**: If a Telegram username is not linked to any Npub in the bot's database, the bot informs the user.
- **No Npub Set**: If a user tries to access their info without setting an Npub, the bot prompts them to do so.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to contribute to the project by submitting issues or pull requests. Your feedback and contributions are welcome!
