/**
 * @file 模板类工具函数
 * @author Ming Liu(wenbo.fe@gmail.com)
 * @date 2015-02-09
 */

define(function (require, module, exports) {
    'use strict';

    /**
     * 返回成功时的模板
     * @public
     * @return {Object}
     */
    exports.success = function () {
        return {
            status: 200,
            data: {},
            errorCode: null
        };
    };

    /**
     * 返回失败时的模板
     * @param  {number} status 失败类型状态码
     * @param  {number} errorCode 失败错误码
     * @public
     * @return {Object}        [description]
     */
    exports.fail = function (status, errorCode) {
        return {
            status: status || 400,
            data: {},
            errorCode: errorCode || null
        };
    };
});
