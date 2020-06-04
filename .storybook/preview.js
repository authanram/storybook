//import Vue from 'vue'
//import Vuex from 'vuex'

import { addDecorator } from '@storybook/vue'
import { addParameters } from '@storybook/vue'
import { configure } from '@storybook/vue'
import { withPaddings } from 'storybook-addon-paddings'

import '../src/styles/tailwind.css'

//Vue.use(Vuex)

addDecorator(
    withPaddings,
)

addParameters({
    options: {
        showRoots: false,
    },
    paddings: [
        { name: 'Small', value: '16px' },
        { name: 'Medium', value: '32px', default: true },
        { name: 'Large', value: '64px' },
        { name: 'Extra Large', value: '96px' },
    ],
})

configure(require.context('../src', true, /\.stories\.js$/), module)
