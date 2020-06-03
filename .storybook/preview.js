import Vue from 'vue'

import { configure } from '@storybook/vue'

//import Vuex from 'vuex'

//Vue.use(Vuex)

configure(require.context('../src', true, /\.stories\.ts$/), module)
