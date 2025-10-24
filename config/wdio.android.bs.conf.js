require('dotenv').config();
const path = require('path');
const { config } = require('./wdio.shared.conf');

// ============
// BrowserStack Credentials
// ============
config.user = process.env.BROWSERSTACK_USER;
config.key = process.env.BROWSERSTACK_KEY;

// =========
// Test Specs
// =========
config.specs = [
    path.join(process.cwd(), './test/specs/android/add-note-screen.spec.js')
];

// =========
// Capabilities
// =========
config.capabilities = [
    {
        platformName: 'Android',
        'appium:platformVersion': '12.0',
        'appium:deviceName': 'Google Pixel 6',
        'appium:automationName': 'UIAutomator2',
        'appium:app': 'bs://9605c7e00c359dc03b21e58accccb9929060ab98',
        'appium:autoGrantPermissions': true,

        'bstack:options': {
            projectName: 'Appium WDIO Framework',
            buildName: 'Android Automation Build',
            sessionName: 'Add Note Test',
            appiumVersion: '2.0.0',
            deviceOrientation: 'portrait',
            networkLogs: true,
            debug: true,
            local: false
        }
    }
];

// =========
// Services
// =========
config.services = ['browserstack'];

exports.config = config;