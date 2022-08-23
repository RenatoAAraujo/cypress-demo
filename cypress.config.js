const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: "cypress_demo",
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'cypress/results/output.xml',
  },
  e2e: {
    // baseUrl: 'http://localhost:8080',
    supportFile: 'cypress/support/e2e.js',
    supportFile: false,
  },
  component: {
    supportFile: false,
  },
  env: {
    LAB_URL: "https://custmgmtapp.eng.alticeusa.net"
  },
  retries: {
    runMode: 1,
    openMode: 3
  },
  watchForFileChanges: true,
  responseTimeout: 10000,
  screenshotOnRunFailure: true,
  screenshotsFolder: "cypress/screenshots",
  trashAssetsBeforeRuns: false,
  video: true,
  videoCompression: 32,
  videosFolder: "cypress/videos",
  videoUploadOnPasses: true
})
