const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: "cypress_demo",
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'cypress/results/output.xml',
  },
  e2e: {
    // baseUrl: 'http://localhost:8080',
    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: false,
    supportFile: 'cypress/support/e2e.js',
    // env: {
    // },
    setupNodeEvents(on, config) {
      // https://github.com/bahmutov/cypress-failed-log
      require('cypress-failed-log/on')(on)
    },
  },
  component: {
    supportFile: false,
    // specPattern: 'cypress/**/*.cy.js'
  },
  retries: {
    runMode: 1,
    openMode: 3
  },
  args: [],
  watchForFileChanges: true,
  responseTimeout: 10000,
  screenshotsFolder: "cypress/screenshots",
  screenshotOnRunFailure: true,
  screenshotUploadOnPasses: false,
  trashAssetsBeforeRuns: false,
  video: true,
  videoCompression: 32,
  videosFolder: "cypress/videos",
  videoOnRunFailure: true,
  videoUploadOnPasses: false
})
