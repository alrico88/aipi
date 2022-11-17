# aipi

Get IP information from any [echoip](https://github.com/mpolden/echoip) instance

## Installation

Using npm `npm i aipi`

Using yarn `yarn add aipi`

## Usage

In CommonJS env

```javascript
const { IPInfoFetcher } = require('aipi');
```

Using imports

```javascript
import { IPInfoFetcher } from 'aipi';
```

Then

```javascript
const ipInfoFetcher = new IPInfoFetcher('https://MY_EXAMPLE_ECHOIP_INSTANCE/json'); // If not provided, it uses ifconfig.co by default

const myIpInfo = await ipInfoFetcher.getInfo(); // myIpInfo is the current IP's info

const customIpInfo = await ipInfoFetcher.getInfo('9.9.9.9'); // customIpInfo is '9.9.9.9' info
```

Similar geo data to geoip-lite can be obtained via the `getGeo` method.

## Documentation

See [DOCS](./docs/modules.md)
