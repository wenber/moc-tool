/**
 * @file 数字类工具函数
 * @author Ming Liu(wenbo.fe@gmail.com)
 * @date 2015-02-09
 */

define(function (require, module, exports) {
    'use strict';

    /**
     * 获取随机整数
     * @param  {?number} min 最小取值
     * @param  {number} max 最大取值
     * @public
     * @return {number} 随机数值
     */
    exports.number = function (min, max) {
        // 修正参数
        if ('undefined' === typeof max) {
            max = min;
            min = 0;
        }

        // 修正两个数的位置
        if (min > max) {
            min = max - min;
            max = max - min;
            min = max + min;
        }

        // 生成并返回随机数
        var num = min + parseInt(Math.random() * (max - min), 10);
        return num;
    };

    /**
     * 将整数转换成指定位数的小数。若整数不存在或为0，则返回-。
     * @param {(number|string)} number 待format的目标数字.
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
