/**
 * @file moc工具函数
 * @author Ming Liu(wenbo.fe@gmail.com)
 * @date 2015-02-09
 */

/* globals exports */

'use strict';

exports.mocTool = function () {
    return {
        'boolean': require('./lib/boolean'),
        'char': require('./lib/char'),
        'number': require('./lib/number'),
        'time': require('./lib/time'),
        'tpl': require('./lib/tpl')
    };
};
