# react.container

[![Build Status](https://travis-ci.org/React-Components-Organization/react-container.svg?branch=master)](https://travis-ci.org/React-Components-Organization/react-container)
[![npm version](https://badge.fury.io/js/react.container.svg)](https://badge.fury.io/js/react.container)

A flexible and reusable react component, build with ES2015.

## Installation

Install the module directly from npm:

```
npm install react.container --save
```

## Usage

```js
import ReactContainer from 'react.container';

// config is an object containing javascript styling properties only
const config = {
  backgroundColor: 'blue',
  height: 300
};

// direction can be 'vertical' or 'horizontal'
// hidden define if the container is visible or not, if hidden is not set container is // visible
<ReactContainer scrollable direction={'vertical'} config={config} hidden>
  ...
</ReactContainer>
```

### Properties

#### scrollable {boolean}

>**NOTE:** Configuration options to make this Container scrollable.

```js
<ReactContainer scrollable={true} />
```

#### direction {string}

>**NOTE:** 'horizontal', 'vertical' to enabling scrolling for that direction.

```js
<ReactContainer scrollable={true} direction={'horizontal'} />
```

#### hidden {boolean}

>**NOTE:** Whether or not this Component is hidden (its CSS display property is set to none).

```js
<ReactContainer hidden={true} />
```

#### cls {string}

>**NOTE:** The CSS class to add to this component's element, in addition to the baseCls 'container'.

```js
<ReactContainer cls={'myCustomCls'} />
```

#### floating {object}

>**NOTE:** true to make this Container floatable. This will make your Container in position 'absolute'.

```js
const floatingObject = {
  top: 10,
  bottom: 10,
  right: 10,
  left: 10
};

<ReactContainer floating={floatingObject} />
```

#### height {number}

>**NOTE:** The height of this Component; must be a valid CSS length value, e.g: 300, 100px, 30%, etc. By default, if this is not explicitly set, this Component's element will simply have its own natural size.

```js
<ReactContainer height={100} />
```

#### width {number}

>**NOTE:** The height of this Component; must be a valid CSS length value, e.g: 300, 100px, 30%, etc. By default, if this is not explicitly set, this Component's element will simply have its own natural size.

```js
<ReactContainer width={100} />
```

#### config {object}

>**NOTE:** The most important property, object CSS styles that will be rendered into an inline style attribute when the Component is rendered. Any CSS style can be set in config.

```js
const configObj = {
  backgroundColor: red,
  height: 100,
  width: 100,
  position: 'relative'
};

<ReactContainer config={configObj} />
```

## License

The MIT License (MIT)

Copyright (c) 2016 React-Components-Organization

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
