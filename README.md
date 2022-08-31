# NASA APOD

![screenshot](/img/screenshot.png)

Fetching the APOD API from NASA.

# Installation

Clone the repository 

```bash 
git clone <SSH/HTTPS link>
```

Change directory

```bash 
cd NASA-APOD
```

Install npm dependencies

```bash
npm install
```

Run build compilation step

```bash 
npm run build
```

Run server

```bash 
npm run server
```

# API Key

You can use the demo key if you don't want to sign up for a developer key.

In `index.ts`, change 

```ts 
const api_key: string = config.API_KEY;
```

to 

```ts
const api_key: string = 'DEMO_KEY';
```

Otherwise, create a `key.ts` file containing an object with your developer key. Note that this is **unsafe**, and it is preferred that you store it on the server-side using an environment (`.env`) file instead. If you are using this method, make sure to ignore the `key.ts` file in your `.gitignore`.

```bash
cd NASA-APOD/src

touch key.ts
```

```ts
//key.ts

const config = {
    API_KEY: 'your developer api key'
};

export default config;
```

Import your key

```ts
import config from './key.js'
```