const axios = require('axios');

module.exports = {
  async getNostrInfo(npub) {
    // Mocked Nostr info retrieval. You would replace this with actual calls to the Nostr network.
    return {
      npub,
      connectedRelays: 3,
      topRelays: ['wss://relay1.example.com', 'wss://relay2.example.com']
    };
  }
};
