const { config } = require('./wdio.shared.conf');

config.specs = [
    path.join(process.cwd(), './test/specs/android/add-note-screen.spec.js')
];

config.capabilities = [
    {
        'appium:platformName': 'Android',
        'appium:platformVersion': '12.0',
        'appium:deviceName': 'Pixel_6',
        'appium:automationName': 'UIAutomator2',
        'appium:app': "bs://9605c7e00c359dc03b21e58accccb9929060ab98",
        'appium:autoGrantPermissions': true,
    }
]

config.services = [['appium', {
    args: {
        address: 'localhost',
        port: 4723,
        relaxedSecurity: true
    },
    logPath: './'
}]];

// Test runner services
config.services = ['browserstack'];
exports.config = config;