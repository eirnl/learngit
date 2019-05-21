import Vue from 'vue'
import Vuex from 'vuex'
//1导入axios
import axios from 'axios'

import { isContext } from 'vm';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    goods:[{name:'小米8'},{name:'小米9'},{name:'小米电视42'}]
  },
  mutations: {
    initGoods:function(state,data){
      state.goods = data;  
   
  },
  addToCart:function(state,data){
    //如果state里面的goods里有data
    var ind = null;
    state.goods.forEach((item,index)=>{
      if(item,name==data.name){
        ind = index;
        item.num++;
        // if(item.num>item.buy_limit){
        //   item.num=item.
        // }
      
      }
    })
  }
  },
  actions: {
    getGoods:function(context){
       //发起ajax请求
      //获取接口数据
       axios.get("http://biger.applinzi.com/cart.php")
       .then(res=>{
         context.commit("initGoods",res.data)
       })
    }
  },
  getters:{
    cartNum:function(state){
      return state.goods.length;
    }
  }
})
