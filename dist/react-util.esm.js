import React from 'react';
import Classnames from 'classnames';

/**
 * @file el
 * @author xiaozhihua
 * @date 2018-11-26 13:27:46
 */
var El = function El() {
  return React.createElement.apply(React, arguments);
};

/**
 * @file className 管理
 * @author xiaozhihua
 * @date 2018-11-26 13:24:21
 */
var defaultPrefix = '';
/**
 * @param {*} prefix
 * @param {*} className
 * @example
 * C(
 * 'button',
 *   {
 *     true: true,
 *     false: false,
 *     undefined: undefined,
 *     null: null,
 *     string: '123'
 *   }
 * )
 *
 * react-button true string
 */

var C = function C(prefix, className) {
  if (typeof prefix === 'string' && defaultPrefix) {
    return Classnames("".concat(defaultPrefix, "-").concat(prefix), className);
  }

  return Classnames(prefix);
};
var SetPrefix = function SetPrefix(prefix) {
  defaultPrefix = prefix;
};

/**
 * @file index
 * @author xiaozhihua
 * @date 2018-11-24 20:56:27
 */

export { El, C, SetPrefix };
