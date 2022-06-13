# gcp-miniappkit-jssdk

[![NPM](https://img.shields.io/npm/v/gcp-miniappkit-jssdk.svg)](https://www.npmjs.com/package/gcp-miniappkit-jssdk) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

## Resources
- [Specifications](https://opn-ooo.atlassian.net/wiki/spaces/GCP/pages/156598324/JSSDK+specs+and+JS-Native+communications)
- [Local setup manual](https://github.com/opn-ooo/gcp-miniappkit-jssdk/wiki/Setup-and-running)

## Install

```bash
npm install --save gcp-miniappkit-jssdk
```

## Supported platforms

From iOS11 and Android Marshmallow(6.0)

- iOS Safari 11
- Chrome mobile at least 49, strongly recommended from 69

## Usage

### React

```jsx
import React from 'react'
import SDK from 'gcp-miniappkit-jssdk'

SDK.init('mock') // will be only mocks, use real bundle id for real response

const SomeComponents = () => {
  const [result, setResult] = React.useState()
  const [error, setError] = React.useState()

  const getUserInfo = () => {
    SDK.getUserInfo('userId').then(setResult).catch(setError)
  }

  return (
    <div>
      <button onClick={getUserInfo} />
      <div>Result: {result}</div>
      <div>Error: {error}</div>
    </div>
  )
}
```

## Examples
- [Example MiniApp](examples/miniapp/README.md)

## Local Development

[Setup and running WIKI](https://github.com/omiselabs/gcp-miniappkit-jssdk/wiki/Setup-and-running)

Have few examples how to use library, it also used for testing purposes. Run `yarn start` or `yarn build` first and run example with:

- [Example React](src/__tests__/example-react/README.md)  with current dev version of SDK will be deployed to https://gcp-miniappkit.omiselab.dev/
- [Example React with Typescript](src/__tests__/example-typescript/README.md)
- [Example Next.js](src/__tests__/example-nextjs/README.md)

## License

MIT ??? © [OPN](https://github.com/opn-ooo)
By [asmyshlyaev177](https://github.com/asmyshlyaev177)
