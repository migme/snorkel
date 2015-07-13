let listeners = {}
export default {
  on: function (event_name, callback) {
    if (!listeners.hasOwnProperty(event_name)) {
      listeners[event_name] = []
    }
    listeners[event_name].push(callback)
  },
  once: function (event_name, callback) {
    const once = function () {
      try {
        return callback.apply(this, arguments)
      } finally {
        this.off(event_name, once)
      }
    }
    this.on(event_name, once)
  },
  off: function (event_name, callback) {
    if (listeners.hasOwnProperty(event_name)) {
      listeners[event_name].forEach((val, i) => {
        if (val === callback) {
          listeners[event_name].splice(i, 1)
          return
        }
      })
    }
  },
  emit: function (event_name) {
    if (listeners.hasOwnProperty(event_name)) {
      const callbacks = listeners[event_name]
      const args = Array.prototype.slice.call(arguments, 1)
      callbacks.forEach(val => {
        val.apply(this, args)
      })
    }
  },
  clear: function () {
    listeners = {}
  }
}
