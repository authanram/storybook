<template>
    <div class="text-red-500">
        <slot/>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Foobar')
        }
    }
</script>
