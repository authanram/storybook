// import Vue from 'vue'

import '../src/style/tailwind.css'

import { configure } from '@storybook/vue'

//import Vuex from 'vuex'

//Vue.use(Vuex)

configure(require.context('../src', true, /\.stories\.js$/), module)
