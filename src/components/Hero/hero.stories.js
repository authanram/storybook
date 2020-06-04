import Vue from 'vue'

import { withKnobs, text, select, boolean } from '@storybook/addon-knobs'

const Pattern = () => import('../Pattern/Pattern.vue')
const Hero = () => import('./Hero.vue')

Vue.component('hero', Hero)
Vue.component('hero-pattern', Pattern)

export default {
    title: 'Hero',
    component: Hero,
    parameters: {
        paddings: [],
    },
    decorators: [withKnobs],
}

export const HeroStory = () => ({
    components: { Hero },

    decorators: [withKnobs],

    props: {
        pattern: {
            default: boolean('Pattern', true),
        },
        signInLabel: {
            default: text('SignIn Label', 'Login'),
        },
        signInTarget: {
            default: text('SignIn Target', '#'),
        },
        blackLeft: {
            default: text('Black (left)', 'Mess with the best...'),
        },
        indigoRight: {
            default: text('Indigo (right)', 'die like the rest!'),
        },
        caption: {
            default: text('Caption', 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.'),
        },
        actionPrimaryLabel: {
            default: text('Action Primary Label', 'Get Started'),
        },
        actionPrimaryTarget: {
            default: text('Action Primary Target', '#'),
        },
        actionSecondaryLabel: {
            default: text('Action Secondary Label', 'Live Demo'),
        },
        actionSecondaryTarget: {
            default: text('Action Secondary Target', '#'),
        },
    },

    template: `
        <hero
            :action-primary-label="actionPrimaryLabel"
            :action-primary-target="actionPrimaryTarget"
            :action-secondary-label="actionSecondaryLabel"
            :action-secondary-target="actionSecondaryTarget"
            :sign-in-label="signInLabel"
            :sign-in-target="signInTarget"
        >
            <template
                v-if="pattern"
                slot="pattern"
            >
                <hero-pattern />
            </template>
            {{ caption }}
            <template slot="left">
                {{ blackLeft }}
            </template>
            <template slot="right">
                {{ indigoRight }}
            </template>
        </hero>
    `
})
