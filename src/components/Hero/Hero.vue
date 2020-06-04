<template>
    <div class="relative bg-gray-50 overflow-hidden">

        <slot name="pattern" />

        <div class="relative pt-6 pb-12 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">

            <div class="max-w-screen-xl mx-auto px-4 sm:px-6">

                <nav class="relative flex items-center justify-between sm:h-10 md:justify-center">

                    <div
                        v-if="false"
                        class="hidden md:block"
                    >
                        <a href="#" class="font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out">
                            Product
                        </a>
                        <a href="#" class="ml-10 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out">
                            Features
                        </a>
                        <a href="#" class="ml-10 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out">
                            Marketplace
                        </a>
                        <a href="#" class="ml-10 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out">
                            Company
                        </a>
                    </div>

                    <div
                        v-if="hasSignInAction"
                        class="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0"
                    >

                        <span class="inline-flex rounded-md shadow">
                            <a
                                :href="signInTarget"
                                class="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:shadow-outline-blue active:bg-gray-50 active:text-indigo-700 transition duration-150 ease-in-out"
                            >
                                {{ signInLabel }}
                            </a>
                        </span>

                    </div>

                </nav>

            </div>

            <div class="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">

                <div class="text-center">

                    <h2 class="text-3xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">

                        <slot name="left"/>

                        <br class="xl:hidden"/>

                        <span class="text-indigo-600">
                            <slot name="right"/>
                        </span>

                    </h2>

                    <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                        <slot/>
                    </p>

                    <div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">

                        <div
                            v-if="hasPrimaryAction"
                            class="rounded-md shadow"
                        >
                            <a
                                :href="actionPrimaryTarget"
                                class="active:bg-indigo-400 ww-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                            >
                                {{ actionPrimaryLabel }}
                            </a>
                        </div>

                        <div
                            v-if="hasSecondaryAction"
                            :class="{ 'sm:ml-3' : hasPrimaryAction }"
                            class="mt-3 rounded-md shadow sm:mt-0"
                        >
                            <a
                                :href="actionSecondaryTarget"
                                class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:shadow-outline-blue transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                            >
                                {{ actionSecondaryLabel }}
                            </a>
                        </div>

                    </div>

                </div>

            </div>

        </div>

    </div>
</template>

<script>
    import Pattern from '../Pattern/Pattern.vue'

    export default {
        components: {
            UiPattern: Pattern,
        },

        props: {
            actionPrimaryLabel: {
                default: null,
                type: String,
            },
            actionPrimaryTarget: {
                default: null,
                type: String,
            },
            actionSecondaryLabel: {
                default: null,
                type: String,
            },
            actionSecondaryTarget: {
                default: null,
                type: String,
            },
            signInLabel: {
                default: null,
                type: String,
            },
            signInTarget: {
                default: null,
                type: String,
            },
        },

        computed: {
            hasSignInAction () {
                return this.signInTarget && this.signInLabel
            },
            hasPrimaryAction () {
                return this.actionPrimaryTarget && this.actionPrimaryLabel
            },
            hasSecondaryAction () {
                return this.actionSecondaryTarget && this.actionSecondaryLabel
            },
        },
    }
</script>
