# ember-cli-famous

[![Greenkeeper badge](https://badges.greenkeeper.io/ming-codes/ember-cli-famous.svg)](https://greenkeeper.io/)

The goal of this project is to make developing ember apps using famous easier.
Currently we provide famous to be imported and used. We are working on creating
a collection of components similar to
[famous-angular](https://github.com/Famous/famous-angular) to make it even
easier to use.

## Installation

* `npm install --save-dev ember-cli-famous`
* `ember generate ember-cli-famous`

## Usage

In your app you can import the famous library wherever you want to use it:

```js
import Surface from 'famous/core/Surface';
// Then use famous directly. Likely this will be in your components.
```

# In Progress 

Everything below here is in development and not released on npm yet. It's mainly
the various components we are adding.

## Examples

Currently our only examples are within the `tests/dummy/app` directory. They can
also be found at our [gh-pages](http://poetic.github.io/ember-cli-famous/) site.

## Project Development Resources

Sources we're referencing when developing this addon

* [s4dc/hafem](https://github.com/s4dc/hafem)
* [Famous/famous-angular](https://github.com/Famous/famous-angular)
