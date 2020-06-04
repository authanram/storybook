//import Vue from 'vue'
//import Vuex from 'vuex'

import { addDecorator } from '@storybook/vue'
import { addParameters } from '@storybook/vue'
import { configure } from '@storybook/vue'
import { withPaddings } from 'storybook-addon-paddings'
import { withTests } from '@storybook/addon-jest'

import '@storybook/addon-console'
import '@storybook/addon-knobs'

import '../src/styles/tailwind.css'

import results from '../.jest-test-results.json'

//Vue.use(Vuex)

addDecorator(
    withPaddings,
    withTests({
        results,
        filesExt: '((\\.specs?)|(\\.tests?))?(\\.ts)?$',
    })
)

addParameters({
    paddings: [
        { name: 'Small', value: '16px' },
        { name: 'Medium', value: '32px', default: true },
        { name: 'Large', value: '64px' },
        { name: 'Extra Large', value: '96px' },
    ],
})

configure(require.context('../src', true, /\.stories\.js$/), module)
