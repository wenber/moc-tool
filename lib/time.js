/**
 * @file 时间类工具函数
 * @author Ming Liu(wenbo.fe@gmail.com)
 * @date 2015-02-09
 */

define(function (require, model, exports) {
    'use strict';

    var number = require('./number');
    var booleans = require('./boolean');

    /**
     * 一天的时间值
     * @const
     * @type {number}
     */
    var ONE_DAY = 86400000;

    /**
     * 获取随机时间戳
     * @param  {number} pre   当前时间之前多少天
     * @param  {number} after 当前时间之后多少天
     * @return {number}       时间戳值
     */
    exports.timestamp = function (pre, after) {
        // 两个时间
        var prev = -1 * number(0, pre);
        var next = number(0, after);
        var time = [prev, next];

        // 取其中一个时间
        var type = booleans();
        var num = time[+type];

        var timestamp = new Date() + ONE_DAY * num;
        return (timestamp).toString(10);
    };

    /**
     * 将整数转换成指定位数的小数。若整数不存在或为0，则返回-。
     * @param {(number|string)} number 待format的目标数字。
     * @param {number} fixed 指定的小数位数。
     * @return {string} 如果数字不存在或者为0，则返回"-"。如果有数字，则返回format的结果###.##
     */
    exports.formatInt2Float = function (number, fixed) {
        if (!isNaN( parseFloat(number) ) && isFinite( number )) {
            return Number(number).toFixed(fixed || 2);
        }
        return '-';
    };
});
