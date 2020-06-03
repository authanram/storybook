// import Vue from 'vue'

import '@storybook/addon-console'
import '@storybook/addon-knobs'

import '../src/styles/tailwind.css'

import { configure } from '@storybook/vue'

//import Vuex from 'vuex'

//Vue.use(Vuex)

configure(require.context('../src', true, /\.stories\.js$/), module)
