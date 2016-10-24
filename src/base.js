/**
 * base.js
 * @author  yongbing
 * @email   yongbingz@qq.com
 */

let Base = {};

Base = {

  getWinSize: function() {
   let w = window, inner = 'inner';
      if (!('innerWidth' in w )){
          inner = 'client';
          w = document.documentElement || document.body;
      }
      return { width:w[inner+'Width'], height:w[inner+'Height'] };
  },
   /**
   * 绑定事件
   * @param  {object}   element dom
   * @param  {string}   type    事件名
   * @param  {function} fn      回调函数
   */
  addEvent: function(element, type, fn) {
    var _addEvent = null;
    if (element.addEventListener) {
        _addEvent = function(element, type, fn){
        element.addEventListener(type, fn, false);
      }
    } else {
      if (element.attachEvent) {
        _addEvent = function(element, type, fn){
          element.attachEvent('on' + type, fn);
        }
      } else {
        _addEvent = function(element, type, fn){
          element['on' + type] = fn;
        }
      }
    }
    _addEvent(element, type, fn);
    this.addEvent = _addEvent;
  },
  /**
   * 移除绑定的事件
   * @param  {object}   element dom
   * @param  {string}   type    事件名
   * @param  {function} fn      回调函数
   */
  removeEvent: function(element, type, fn) {
    var _removeEvent = null;
    if (element.removeEventListener) {
      _removeEvent = function(element, type, fn){
        element.removeEventListener(type, fn, false);
      }
    } else {
      if (element.detachEvent) {
        _removeEvent = function(element, type, fn){
          element.detachEvent('on' + type, fn);
        }
      } else {
        _removeEvent = function(element, type, fn){
          element['on' + type] = null;
        }
      }
    }
    _removeEvent(element, type, fn);
    this.removeEvent = _removeEvent;
  }
}

export default Base;