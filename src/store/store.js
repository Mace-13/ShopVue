import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const product = {
    namespaced: true,
    state: {
        datas: []
    },
    mutations: {
        addMany(state, products){
            state.datas = products
        }
    },
    actions: {
        fetchDatas(context){
            axios.get('products.json').then( res => {
                    const data = res.data
                    context.commit('addMany', Object.keys(data).map( key => data[key]))

                })
        }
    }
}

const cart ={
    state: {
        datas: []
    }
}

const store = Vuex.Store({
    modules:{
        product,
        cart
    }
})