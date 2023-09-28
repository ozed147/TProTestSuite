const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'tihvk3',
  video: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});


