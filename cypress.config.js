const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    cchromeWebSecurity:false,
    specPattern:"./cypress/e2e/*.js"
    
  },
});
