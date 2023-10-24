<template>
    <div>
        This is index component
        <br>
        <router-link :to="{ name: 'person.index' }">People</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "Index"
}
</script>

<style scoped>

</style>
