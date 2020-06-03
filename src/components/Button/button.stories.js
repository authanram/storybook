import Vue from 'vue'

export default { title: 'Button' };

import MyButton from './Button.vue'

Vue.component('MyButton', MyButton)

export const withText = () => '<MyButton>with text1</MyButton>'

export const withEmoji = () => '<MyButton>😀 😎 👍 💯</MyButton>'
