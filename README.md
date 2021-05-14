# Adonis Imgix
> adonis, imgix

[![npm-image]][npm-url] [![license-image]][license-url] [![typescript-image]][typescript-url]

An Imgix provider for Adonis 5.x

## Installation

You may install this package via:
```
npm i @bitkidd/adonis-imgix
# or
yarn add @bitkidd/adonis-imgix
```

After installation you have to configure it:
```
node ace configure @bitkidd/adonis-imgix
```

This will create `/config/imgix.ts` file where you can configure the provider.

This package depends on one main `ENV` variable, `IMGIX_DOMAIN`, please add it to your `env.ts` file and actual `.env` file.

## Usage

To use IMgix provider you should call it via import
```javascript
import Imgix from '@ioc:Adonis/Addons/Imgix'

const url = Imgix.buildUrl('/test.jpg')
```

To properly configure the provider, follow the docs here: [`@imgix/core-js`](https://github.com/imgix/js-core)

[npm-image]: https://img.shields.io/npm/v/Anonymous.svg?style=for-the-badge&logo=npm
[npm-url]: https://npmjs.org/package/Anonymous "npm"

[license-image]: https://img.shields.io/npm/l/Anonymous?color=blueviolet&style=for-the-badge
[license-url]: LICENSE.md "license"

[typescript-image]: https://img.shields.io/badge/Typescript-294E80.svg?style=for-the-badge&logo=typescript
[typescript-url]:  "typescript"
