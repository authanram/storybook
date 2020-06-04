import { describe } from 'storybook-addon-specifications'
import { shallowMount } from '@vue/test-utils'
import Button from './Button.vue'

let wrapper = null

beforeEach(() => {
    wrapper = shallowMount(Button)
})

afterEach(() => {
    wrapper.destroy()
})

export default describe('Button', () => {
    it('Expect tag name to be of type button', () => {
        expect(wrapper.element.tagName.toLowerCase()).toBe('button')
    })
})
