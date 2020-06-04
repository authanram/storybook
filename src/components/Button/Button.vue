<template>
    <button
        :class="{ 'opacity-25' : disabled }"
        class="focus:outline-none active:outline-none rounded-md"
    >
        <a
            :href="hrefAttribute"
            :class="classAttribute"
            class="rounded-lg px-4 md:px-5 xl:px-4 py-3 md:py-4 xl:py-3 md:text-lg xl:text-base text-white font-semibold leading-tight"
        >
            <slot />
        </a>
    </button>
</template>

<script>
    export default {
        props: {
            color: {
                default: 'indigo',
                type: String,
            },
            disabled: {
                default: false,
                type: Boolean,
            },
            outline: {
                default: false,
                type: Boolean,
            },
            shadow: {
                default: false,
                type: Boolean,
            },
            target: {
                default: null,
                type: String,
            },
        },

        computed: {
            classAttribute () {
                return [
                    this.classAttributeBackground,
                    this.classAttributeForeground,
                    this.classAttributeOutline,
                    this.classAttributePseudo,
                    this.classAttributeShadow,
                ]
            },

            classAttributeBackground () {
                return !this.outline
                    ? `bg-${this.color}-500`
                    : `text-${this.color}-600`
            },

            classAttributeForeground () {
                return this.outline
                    ? `text-${this.color}-600`
                    : false
            },

            classAttributeOutline () {
                return this.outline
                    ? `border border-${this.color}-500 active:text-white hover:text-white`
                    : false
            },

            classAttributePseudo () {
                return `active:bg-${this.color}-700 hover:bg-${this.color}-600`
            },

            classAttributeShadow () {
                return this.shadow
                    ? 'shadow-md'
                    : false
            },

            hrefAttribute () {
                return !this.disabled && this.target
                    ? this.target
                    : false
            },
        },
    }
</script>
