# 📱 Appium WDIO Framework

A cross-platform **mobile test automation framework** built with **WebdriverIO (WDIO)** and **Appium**.  
This project supports **Android** and **iOS** testing and follows a clear **Page Object Model (POM)** architecture for scalability and maintainability.

---

## 🚀 Features

- 🧩 Built on **WebdriverIO v9** and **Appium v2**
- 📲 Supports both **Android** and **iOS** platforms
- 🧱 Modular **Page Object Model** structure (`screenobjects` + `specs`)
- ⚙️ Configurable setup with environment-specific WDIO configs
- ✅ Uses **Mocha** test framework
- 💡 **ESLint (with WDIO plugin)** integrated for code quality
- 🧰 **Babel** for modern JavaScript support
- 🧪 Ready for **CI/CD** integration (Jenkins, GitHub Actions, GitLab)

---

## 🗂️ Project Structure

```bash
APPPIUM-WDIO-FRAMEWORK
├── app/
│   ├── android/
│   │   ├── ApiDemos-debug.apk
│   │   └── ColorNote Notepad.apk
│   └── ios/
│       ├── MVCTodo.app
│       └── UIKitCatalog.app
│
├── config/
│   ├── wdio.android.conf.js
│   ├── wdio.ios.conf.js
│   └── wdio.shared.conf.js
│
├── test/
│   ├── data/
│   │   └── .gitkeep
│   ├── screenobjects/
│   │   ├── android/
│   │   │   ├── add-note.screen.js
│   │   │   └── edit-note.screen.js
│   │   └── ios/
│   │       ├── item.screen.js
│   │       └── list.screen.js
│   └── specs/
│       ├── android/
│       │   ├── add-note-screen.spec.js
│       │   ├── add-note.spec.js
│       │   ├── delete-note-screen.spec.js
│       │   └── delete-note.spec.js
│       └── ios/
│           ├── android-findElements.spec.js
│           ├── android-native.spec.js
│           ├── ios-findElements.spec.js
│           └── ios-native.spec.js
│
├── utils/
│   └── .gitkeep
│
├── babel.config.js
├── eslint.config.mjs
├── jsconfig.json
├── package.json
├── package-lock.json
└── .gitignore
```
### Clone the repository
`git clone https://github.com/YehorYehorychev/Appium-Wdio-Framework.git`

### Navigate into the project folder
`cd Appium-Wdio-Framework`

### Install dependencies
`npm install`

## 🧪 Running Tests

Before running tests, make sure the Appium server is up and running.

- ▶️ Run Android Tests
`npx wdio config/wdio.android.conf.js`

- 🍏 Run iOS Tests
`npx wdio config/wdio.ios.conf.js`

## 🧠 Linting

This project uses ESLint v9 with the official WDIO plugin to enforce best practices.

- Check code style
`npx eslint test/`

- Auto-fix issues
`npx eslint test/ --fix`

## 🧩 Framework Design

- Organized by platform (Android/iOS) under /test/
- Uses Page Object Model (POM) for readability and reusability
- Shared configurations under /config/
- Each screen is represented as a separate class in /screenobjects/
- Each test spec is stored in /specs/

## 🧰 Requirements

Tool	Version:
- Node.js	≥ 18 (tested on v24)
- Appium	v2+
- WebdriverIO	v9+
- Android SDK	Required for Android automation
- Xcode tools	Required for iOS automation
