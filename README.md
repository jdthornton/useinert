# @jdthornton/useinert

[![npm (scoped)](https://img.shields.io/npm/v/@jdthornton/useinert.svg)](https://www.npmjs.com/package/@jdthornton/useinert)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@jdthornton/useinert.svg)](https://www.npmjs.com/package/@jdthornton/useinert)

React inert hook.

## Install

```
$ npm install @jdthornton/useinert
```

## Usage

```js
import useInert from "@jdthornton/useinert";

function App({ removeInert }){

  // '#root' element will be set to inert
  useInert("#root")

  return null
}
```
