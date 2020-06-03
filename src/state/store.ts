import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
import VuexORM from '@vuex-orm/core'
import VuexORMAxios from '@vuex-orm/plugin-axios'
import VuexPersist from 'vuex-persist'
import * as models from '@/state/models'

Vue.use(Vuex)

const database = new VuexORM.Database()
Object.values(models).forEach((model: any) => database.register(model))

VuexORM.use(VuexORMAxios, {
    axios,
    headers: { 'Accept': 'application/json', 'X-Requested-With': 'XMLHttpRequest' },
    withCredentials: true,
})

const vuexPersist = new VuexPersist({
    key: 'storage',
    storage: window.localStorage,
    reducer: (state: any) => ({ entities: { Session: state.entities.Session } }),
})

const store = new Vuex.Store({
    actions: {},
    mutations: {},
    plugins: [
        VuexORM.install(database),
        // vuexPersist.plugin,
    ],
})

Vue.prototype.$state = store

export default store
