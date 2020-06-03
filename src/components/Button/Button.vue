<style lang="postcss" scoped>
    @import "./styles.pcss";
</style>

<template>
    <div>
        <slot />
    </div>
</template>

<script>
    export default {
        mounted () {
            console.log('Button.vue')
        }
    }
</script>
