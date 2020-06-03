import Vue from 'vue'

export default {
    title: 'Button',
    component: MyButton,
    parameters: { docs: { page: null } },
    decorators: [withKnobs],
}

import { withKnobs, text, select, boolean } from '@storybook/addon-knobs'

import MyButton from './Button.vue'

Vue.component('MyButton', MyButton)

export const withText = () => '<div class="m-10"><my-button>Foobar</my-button></div>'

export const withEmoji = () => ({
    template: '<div class="m-10"><my-button>😀 😎 👍 💯</my-button></div>',
})

export const exampleWithKnobs = () => ({
    components: { MyButton },

    decorators: [withKnobs],

    props: {
        isDisabled: {
            default: boolean('Disabled', false),
        },
        color: {
            default: select('Colors', ['teal', 'red', 'green', 'blue', 'pink', 'orange', 'gray'], 'teal'),
        },
        shadow: {
            default: select('Shadow', ['shadow', 'shadow-md', 'shadow-lg', 'shadow-xl', 'shadow-2xl'], 'shadow-md'),
        },
        text: {
            default: text('Text', 'Foobar'),
        }
    },

    template: `
        <div class="m-10">
            <my-button
                :class="{ 'opacity-50' : isDisabled }"
                :color="color"
                :isDisabled="isDisabled"
                :shadow="shadow"
            >
                {{ text }}
            </my-button>
        </div>
    `
})
