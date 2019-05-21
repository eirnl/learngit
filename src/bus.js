//bus.js记录用户是否登录
import Vue from 'vue';
var bus = new Vue();
bus.islog = false;//默认不登录
export default bus;
//导出bus