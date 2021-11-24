/*
 * @Description:
 * @Author: Hexon
 * @Date: 2021-08-25 16:42:09
 * @LastEditors: Zhang jie
 * @LastEditTime: 2021-11-24 19:37:03
 */

const baseConfig = require('./webpack.base');
const { merge } = require('webpack-merge');
const Webpack = require('webpack');
const ESLintPlugin = require('eslint-webpack-plugin');

const eslintPluginOptions = {
  extensions: ['js', 'ts', 'tsx'],
};
const config = merge(baseConfig, {
  devServer: {
    port: 'auto',
    hot: true,
    compress: true,
    static: './dist',
  },
  plugins: [new Webpack.HotModuleReplacementPlugin(), new ESLintPlugin(eslintPluginOptions)],
});

module.exports = config;
