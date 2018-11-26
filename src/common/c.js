/**
 * @file className 管理
 * @author xiaozhihua
 * @date 2018-11-26 13:24:21
 */

import Classnames from 'classnames'

let defaultPrefix = ''

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
export const C = (prefix, className) => {
  if (typeof prefix === 'string' && defaultPrefix) {
    return Classnames(`${defaultPrefix}-${prefix}`, className)
  }

  return Classnames(prefix)
}

export const SetPrefix = prefix => {
  defaultPrefix = prefix
}
