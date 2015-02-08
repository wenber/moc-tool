/**
 * @file 字符类工具函数
 * @author Ming Liu(wenbo.fe@gmail.com)
 * @date 2015-02-09
 */

define(function (require, module, exports) {
    'use strict';

    var numbers = require('./number');
    /**
     * 取以下17字作为基础汉字字符(简体)
     * @const
     * @type {string}
     */
    var ZH_J = '让人们最平等便捷地获取信息找到所求';

    /**
     * 取以下17字作为基础汉字字符(繁体)
     * @const
     * @type {string}
     */
    var ZH_F = '讓們簡單賴獲華國鳳聯組織問網薦給邊';

    /**
     * 17为基础汉字的长度
     * @const
     * @type {number}
     */
    var ZH_LEN = 17;

    /**
     * 取以下26个字母为基础英文字符(小写)
     * @const
     * @type {string}
     */
    var EN_L = 'abcdefghijklmnopqrstuvwxyz';

     /**
     * 取以下26个字母为基础英文字符(大写)
     * @const
     * @type {string}
     */
    var EN_U = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    /**
     * 26为基础英文字符的长度
     * @const
     * @type {number}
     */
    var EN_LEN = 26;

    /**
     * 基础数字
     * @const
     * @type {string}
     */
    var NUM = '0123456789';

    /**
     * 10为基础数字字符的长度
     * @const
     * @type {number}
     */
    var NUM_LEN = 10;

    /**
     * 混合类型
     * @const
     * @type {string}
     */
    var MIX = '让人们abc讓們簡ABC012';

    /**
     * 15为混合类型字符的长度
     * @const
     * @type {number}
     */
    var MIX_LEN = 15;

    /**
     * 获得随机中文字符
     * @param  {?string} type 字符类型，如上面列举的四种类型,默认为混合
     * @param  {number} maxNum 最大字符长度
     * @public
     * @return {string} 随机字符串
     */
    exports.char = function (type, maxNum) {
        // 修正默认情况
        if ('undefined' === typeof number) {
            maxNum = type;
            type = 'ZH_J';
        }

        // 获取字符类型
        var TYPE = '';
        var len = 0;
        switch (type.toUpperCase()) {
            case 'ZH_F':
                TYPE = ZH_F;
                len = ZH_LEN;
                break;
            case 'EN_L':
                TYPE = EN_L;
                len = EN_LEN;
                break;
            case 'EN_U':
                TYPE = EN_U;
                len = EN_LEN;
                break;
            case 'NUM':
                TYPE = NUM;
                len = NUM_LEN;
                break;
            case 'ZH_J':
                TYPE = ZH_J;
                len = ZH_LEN;
                break;
            default :
                TYPE = MIX;
                len = MIX_LEN;
        }

        // 生成并返回所需字符串
        var num = numbers(1, maxNum);
        var result = [];
        var pos = 0;
        for (var i = 0; i < num; i++) {
            pos = numbers(0, len);
            result.push(TYPE[pos]);
        }

        return result.join(',');
    };
});
