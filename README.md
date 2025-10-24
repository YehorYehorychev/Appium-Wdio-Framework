# 📱 Appium WDIO Framework

A cross-platform **mobile test automation framework** built with **WebdriverIO (WDIO)** and **Appium**.  
This project supports **Android**, **iOS**, and **cloud-based execution on BrowserStack** with complete CI/CD automation using **GitHub Actions**.  
It’s designed for scalability, modularity, and clean architecture following the **Page Object Model (POM)** pattern.

---

## 🚀 Features

- 🧩 Built on **WebdriverIO v9** and **Appium v2**
- 📲 Supports **Android** and **iOS** platforms
- ☁️ **Cloud Testing with BrowserStack** — run tests on real Android/iOS devices
- ⚙️ **GitHub Actions CI/CD** — automatically runs BrowserStack tests on push and pull requests
- 🧱 Follows the **Page Object Model (POM)** structure (`screenobjects` + `specs`)
- 💡 **ESLint (with WDIO plugin)** and **Babel** for modern, clean JavaScript
- 🧰 Environment-based configuration stored under `/config`
- ✅ Uses **Mocha** test framework
- 🧪 Ready for integration with **Jenkins**, **GitHub Actions**, and **GitLab CI**
- 📊 Automatic log uploads for failed runs in GitHub Actions

---

## ☁️ BrowserStack Integration

This framework supports **BrowserStack App Automate**, enabling cloud-based execution on **real Android and iOS devices**.

### 🧠 Setup

Add your BrowserStack credentials to the `.env` file:
```yaml
BROWSERSTACK_USER=<your_user>
BROWSERSTACK_KEY=<your_key>
```

### 🔐 Setting up BrowserStack Secrets

To run tests through **GitHub Actions**, you need to add your BrowserStack credentials as **repository secrets**:

1. Go to your GitHub repository → **Settings → Secrets and variables → Actions**
2. Click **New repository secret**
3. Add the following two secrets:
   - **BS_USER** → your BrowserStack username  
   - **BS_KEY** → your BrowserStack access key  
4. These secrets are securely injected into the workflow via:
   ```yaml
   BROWSERSTACK_USER: ${{ secrets.BS_USER }}
   BROWSERSTACK_KEY: ${{ secrets.BS_KEY }}

---

## 🗂️ Project Structure

```
APPPIUM-WDIO-FRAMEWORK
├── app/
│   ├── android/
│   └── ios/
│
├── config/
│   ├── wdio.android.conf.js
│   ├── wdio.android.bs.conf.js
│   ├── wdio.ios.conf.js
│   └── wdio.shared.conf.js
│
├── test/
│   ├── data/
│   ├── screenobjects/
│   │   ├── android/
│   │   └── ios/
│   └── specs/
│       ├── android/
│       └── ios/
│
├── .github/workflows/
│   └── ci.yml
│
├── utils/
├── .env
├── babel.config.js
├── eslint.config.mjs
├── jsconfig.json
├── package.json
├── package-lock.json
└── README.md
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

- 🌐 Run Android test on BrowserStack
`npx wdio config/wdio.android.bs.conf.js`

## 🧠 Linting

This project uses ESLint v9 with the official WDIO plugin to enforce best practices.

- Check code style
`npx eslint test/`

- Auto-fix issues
`npx eslint test/ --fix`

## ⚙️ GitHub Actions CI/CD

- The project includes a pre-configured CI pipeline that automatically:
- Checks out the repository
- Installs dependencies
- Runs Android WDIO tests on BrowserStack
- Uploads logs as artifacts on failure

### 🧩 Example workflow: `.github/workflows/ci.yml`
```
name: CI

on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 18
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Run WDIO Android test on BrowserStack
        env:
          BROWSERSTACK_USER: ${{ secrets.BS_USER }}
          BROWSERSTACK_KEY: ${{ secrets.BS_KEY }}
        run: npx wdio config/wdio.android.bs.conf.js --spec test/specs/android/add-note-screen.spec.js

      - name: Upload logs on failure
        if: failure()
        uses: actions/upload-artifact@v4
        with:
          name: logs
          path: logs
```

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
- BrowserStack Account Required for cloud testing
