# whatscode.mongo

Custom MongoDb database support for [whatscode.js](https://github.com/JastinXyz/whatscode.js).

> Uh? you don't know what [**whatscode.js**](https://github.com/JastinXyz/whatscode.js) is? whatscode.js is a package to create Whatsapp bots easily and quickly, even coding experience is not really needed...

⚠️ To use a custom database in whatscode.js you need the version of whatscode.js installed from github. Because for now in the npm version, whatscode.js doesn't support custom databases yet (custom databases will be added in the next version of npm)

```bash
npm i github:JastinXyz/whatscode.js
```

## Instalation

```bash
npm i whatscode.mongo
```

## Setup

It's simple, you just need to add `customDatabase` option in whatscode.js client. Make sure you have defined whatscode.mongo correctly. Look at the example below.

```javascript
const { Client } = require("whatscode.js");
const WhatscodeMongo = require('whatscode.mongo')
const mongo = new WhatscodeMongo("Your MongoDb URL")

const bot = new Client({
  name: "Your bot name",
  prefix: "Your bot prefix",
  customDatabase: mongo
});

// ...
```

All done, you can use whatscode.js as usual. And the variables you created will be saved to MongoDb.

<hr/>
<div align="center">
<a href="https://discord.gg/CzqHbx7rdU" target="_blank">
  <img alt="Discord" src="https://img.shields.io/discord/973324613851422730?color=%235865F2&label=whatscode.js Discord&logo=discord&style=for-the-badge">
</a>
</div>
