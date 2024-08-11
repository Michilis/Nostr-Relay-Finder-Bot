module.exports = function formatUserInfo(info) {
  return `
Npub: ${info.npub}
Connected Relays: ${info.connectedRelays}
Top Relays: ${info.topRelays.join(', ')}
  `;
};
