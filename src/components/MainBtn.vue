<template>
    <button v-bind:type ="type" class="btn">
<slot></slot>
    </button>
</template>

<script>
    export default {
    name: 'MainBtn',
    props: {
        type: {
            type: String,
            default: 'button'
        }
        }
    }
</script>

<style lang="scss" scoped>

</style>