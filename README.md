# Snorkel
:swimmer: Event Dispatcher

[![Build Status](https://img.shields.io/codeship/e7ea1c30-0b2a-0133-a0cd-7a3dfede6987.svg)](https://codeship.com/projects/90768)
[![Dependency Status](https://gemnasium.com/migme/snorkel.svg)](https://gemnasium.com/migme/snorkel)
[![Code Quality](https://img.shields.io/codacy/62a8a546130e4c8590438bfa48a3e4ec.svg)](https://www.codacy.com)
[![Code Coverage](http://codecov.io/github/migme/snorkel/coverage.svg?branch=master)](http://codecov.io/github/migme/snorkel?branch=master)

## Usage

```js
import EventDispatcher from 'snorkel'

// Listen for an event
EventDispatcher.on('welcome', (data) => {
  console.log('The welcome event happened with ' + data)
})

function isReady {
  console.log('The thing is ready')
}
// Listen for an event only once
EventDispatcher.once('ready', isReady)

// Emit an event
EventDispatcher.emit('welcome', 'emit', 'as', 'many', 'params', 'as', 'you', 'like')

// Remove event listener
EventDispatcher.off('ready', isReady)

// Clear all event dispatchers
EventDispatcher.clear()
```
