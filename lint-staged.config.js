module.exports = {
  '*.{js,ts,tsx}': (filenames) => ['yarn format:write', 'yarn validate'],
}
