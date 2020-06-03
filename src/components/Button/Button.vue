<template>
    <div
        :disabled="isDisabled"
        :class="[`active:bg-${color}-400 bg-${color}-500 hover:bg-${color}-600`, shadow]"
        class="cursor-pointer font-semibold inline leading-tight md:px-5 md:py-4 md:text-lg px-4 py-3 rounded-lg text-white xl:px-4 xl:py-3 xl:text-base"
    >
        <slot/>
    </div>
</template>

<script>
    export default {
        props: {
            color: {
                default: 'teal',
                type: String,
            },
            isDisabled: {
                default: false,
                type: Boolean,
            },
            shadow: {
                default: 'md',
                type: String,
            },
        },

        mounted () {
            console.log('Foobar')
        }
    }
</script>
