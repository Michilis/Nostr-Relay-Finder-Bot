const axios = require('axios');

module.exports = {
  async getNostrInfo(npub) {
    // Mocked Nostr info retrieval. Replace with actual Nostr network calls.
    return {
      npub,
      connectedRelays: 3,
      topRelays: ['wss://relay1.example.com', 'wss://relay2.example.com'],
    };
  },

  async getTopRelays(npub) {
    // Mocked relay recommendation. Replace with actual Nostr network calls.
    return {
      npub,
      recommendedRelays: ['wss://relay1.example.com', 'wss://relay2.example.com', 'wss://relay3.example.com'],
    };
  }
};
