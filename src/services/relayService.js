module.exports = {
  async getPaidRelays() {
    // Mocked list of paid relays. Replace with actual data source.
    return ['wss://paid-relay1.com', 'wss://paid-relay2.com'];
  },

  async getFreeRelays() {
    // Mocked list of free relays. Replace with actual data source.
    return ['wss://free-relay1.com', 'wss://free-relay2.com'];
  },

  async pingRelay(relayUrl) {
    // Mocked ping result. Replace with actual ping implementation.
    return Math.floor(Math.random() * 100) + 1;
  },

  async getRelayUptime(relayUrl) {
    // Mocked uptime result. Replace with actual uptime data.
    return (Math.random() * 100).toFixed(2);
  }
};
