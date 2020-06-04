import Vue from 'vue'

import { boolean, select, text, withKnobs } from '@storybook/addon-knobs'
import { withTests } from '@storybook/addon-jest'
import results from '../../../.jest-test-results.json'

const Button = () => import('./Button.vue')

Vue.component('Button', Button)

export default {
    title: 'Button',
    component: Button,
    decorators: [
        withKnobs,
        withTests({ results }),
    ],
}

export const base = () => ({

    components: { Button },

    props: {
        disabled: {
            default: boolean('Disabled', false),
        },
        outline: {
            default: boolean('Outline', false),
        },
        shadow: {
            default: boolean('Shadow', false),
        },
        color: {
            default: select('Color', ['blue', 'gray', 'green', 'indigo', 'orange', 'pink', 'red', 'teal', 'white'], 'indigo'),
        },
        label: {
            default: text('Label', 'Label'),
        }
    },

    template: `
        <Button
            :color="color"
            :disabled="disabled"
            :outline="outline"
            :shadow="shadow"
        >
            {{ label }}
        </Button>
    `

})

base.story = {
    parameters: {
        jest: ['button.test.js'],
    },
}
