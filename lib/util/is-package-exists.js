/**
 * @file 判断包是否已导入
 * @author errorrik[errorrik@gmail.com]
 */


/**
 * 判断包在当下是否存在
 * 
 * @param {string} name 包名称
 * @param {string} version 包版本
 * @param {string} dir 当前目录
 * @return {boolean}
 */
module.exports = function ( name, version, dir ) {
    var existPkgs = require( './get-manifest' )( dir );
    var existVers = [];
    if ( existPkgs[ name ] ) {
        existVers = Object.keys( existPkgs[ name ] );
    }

    return require( 'semver' ).maxSatisfying( existVers, version );
};
