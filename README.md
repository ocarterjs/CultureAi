# CultureAi Browser Extension Interview Project

A simple project illustrating the QA vison on how an automation suite can be integrated with a browser extension.

[Time illustration & Project Assumptions](./docs/time-illustration.md)

# Prerequisites
- NodeJS Installed version 20.10.0

# Getting Started

To get started please follow the steps:

## Step 1: Clone The Repository
Cloning the repsoitory will download it to the current directory.

```bash
git clone https://github.com/yourusername/yourproject.git
```

## Step 2: Install The Node Modules
This installs project dependencies locally for your project.
```bash
npm install
```

## Step 3: Setup Playwright Browsers
> For more information on browser installation: [See Playwright Browser Installation](https://playwright.dev/docs/browsers)

This Command Installs All Browsers

```bash
npm run setup
```

### Step 4: Run Playwright Tests
```bash
npm test
```

## Sources
* [How to Test Playwright Browser Extensions](https://playwright.dev/docs/chrome-extensions#introduction)
* [XSS Payload List](https://github.com/payloadbox/xss-payload-list/blob/master/Intruder/xss-payload-list.txt)
