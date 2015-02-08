/**
 * @file 布尔类工具函数
 * @author Ming Liu(wenbo.fe@gmail.com)
 * @date 2015-02-09
 */

define(function (require, module, exports) {
    'use strict';

    exports.boolean = function () {
        return !!require('./number').numbers(0, 1);
    };
});
