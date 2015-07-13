/* global describe, it */
import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import EventDispatcher from '../src/snorkel'

chai.use(sinonChai)

describe('EventDispatcher', function () {
  describe('on', () => {
    it('should call the callback', () => {
      const callback = () => {}
      const noop = { callback }
      const spy = sinon.spy(noop, 'callback')
      EventDispatcher.on('welcome', noop.callback)
      EventDispatcher.emit('welcome')
      EventDispatcher.emit('welcome')
      expect(spy).to.have.been.called
      expect(spy).to.have.been.calledTwice
      spy.restore()
    })
  })

  describe('once', () => {
    it('should call the callback once', () => {
      const callback = () => {}
      const noop = { callback }
      const spy = sinon.spy(noop, 'callback')
      EventDispatcher.once('once', noop.callback)
      EventDispatcher.emit('once')
      EventDispatcher.emit('once')
      expect(spy).to.have.been.called
      expect(spy).to.have.been.calledOnce
      spy.restore()
    })
  })

  describe('off', () => {
    it('should not call the callback', () => {
      const callback = () => {}
      const noop = { callback }
      const spy = sinon.spy(noop, 'callback')
      EventDispatcher.on('welcome', noop.callback)
      EventDispatcher.off('welcome', noop.callback)
      EventDispatcher.emit('welcome')
      expect(spy).to.not.have.been.called
      spy.restore()
    })
  })

  describe('emit', () => {
    it('should emit and call the callback', () => {
      const callback = () => {}
      const noop = { callback }
      const noop2 = { callback }
      const spy = sinon.spy(noop, 'callback')
      const spy2 = sinon.spy(noop2, 'callback')
      EventDispatcher.on('welcome', noop.callback)
      EventDispatcher.on('welcome', noop2.callback)
      EventDispatcher.emit('welcome')
      expect(spy).to.have.been.called
      expect(spy2).to.have.been.called
      spy.restore()
    })
  })
})
