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
      for (let i = 0, l = listeners[event_name].length; i < l; i++) {
        if (listeners[event_name][i] === callback) {
          listeners[event_name].splice(i, 1)
          return
        }
      }
    }
  },
  emit: function (event_name) {
    if (listeners.hasOwnProperty(event_name)) {
      const callbacks = listeners[event_name]
      const args = Array.prototype.slice.call(arguments, 1)
      for (let i = 0, l = callbacks.length; i < l; i++) {
        callbacks[i].apply(this, args)
      }
    }
  },
  clear: function () {
    listeners = {}
  }
}
