module.exports = function validateNpub(npub) {
  // Simple validation for Npub format. Adjust according to the actual format requirements.
  return /^npub[a-zA-Z0-9]{59}$/.test(npub);
};
