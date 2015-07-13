let listeners = {}
export default {
  on: function (evt_name, callback) {
    if (!Object.prototype.hasOwnProperty.call(listeners, evt_name)) {
      listeners[evt_name] = []
    }
    listeners[evt_name].push(callback)
  },
  once: function (evt_name, callback) {
    const once = function () {
      try {
        return callback.apply(this, arguments)
      } finally {
        this.off(evt_name, once)
      }
    }
    this.on(evt_name, once)
  },
  off: function (evt_name, callback) {
    if (listeners.hasOwnProperty(evt_name)) {
      for (let i = 0, l = listeners[evt_name].length; i < l; i++) {
        if (listeners[evt_name][i] === callback) {
          listeners[evt_name].splice(i, 1)
          return
        }
      }
    }
  },
  emit: function (evt_name) {
    if (listeners.hasOwnProperty(evt_name)) {
      const callbacks = listeners[evt_name]
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
