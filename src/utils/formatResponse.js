module.exports = function formatResponse(info) {
  return `
Npub: ${info.npub}
Connected Relays: ${info.connectedRelays || 'N/A'}
Top Relays: ${info.topRelays ? info.topRelays.join(', ') : 'N/A'}
  `;
};
