// https://github.com/khirayama/micro-emitter/blob/master/src/index.js

export class EventEmitter<T> {
  _listeners: any = {};

  /**
   * Adds a listener function to the specified event.
   * @param {String} type
   * @param {Function} listener
   * @param {Boolean} once
   */
  _addListener(type: T, listener, once) {
    this._listeners[type] = this._listeners[type] || [];
    this._listeners[type].push({ listener, once });
    return this;
  }

  /**
   * Adds a listener function to the specified event.
   * @param {String} type
   * @param {Function} listener
   * @return {Object} Current instance of MicroEmitter for chaining.
   */
  addListener(type: T, listener: Function) {
    return this._addListener(type, listener, false);
  }

  /* Alias of addListener */
  on(type: T, listener: Function) {
    return this.addListener(type, listener);
  }

  addOnceListener(type: T, listener: Function) {
    return this._addListener(type, listener, true);
  }

  /* Alias of addOnceListener */
  once(type: T, listener: Function) {
    return this.addOnceListener(type, listener);
  }

  /**
   * Removes a listener function to the specified event.
   * @param {String} type
   * @param {Function} listener
   * @return {Object} Current instance of MicroEmitter for chaining.
   */
  removeListener(type: T, listener: Function) {
    // alias
    if (!this._listeners[type]) {
      return this;
    }
    if (!this._listeners[type].length) {
      return this;
    }
    if (!listener) {
      delete this._listeners[type];
      return this;
    }
    this._listeners[type] = this._listeners[type].filter(
      _listener => !(_listener.listener === listener)
    );
    return this;
  }

  /* Alias of removeListener */
  off(type: T, listener: Function) {
    return this.removeListener(type, listener);
  }

  /**
   * Emits an specified event.
   * @param {String} type
   * @param {Object} payload
   * @return {Object} Current instance of MicroEmitter for chaining.
   */
  emit(type: T, ...args) {
    if (!this._listeners[type]) {
      return this;
    }
    this._listeners[type].forEach(_listener => {
      _listener.listener.apply(this, args);
      if (_listener.once) {
        this.removeListener(type, _listener.listener);
      }
    });
    return this;
  }

  /* Alias of emit */
  trigger(type: T, ...args) {
    return this.emit(type, ...args);
  }
}
