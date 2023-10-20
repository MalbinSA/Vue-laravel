<template>
    <div>
        <div>Color: {{ obj.color }}</div>
        <div>Number: {{ obj.number > 10 ? 'more' : 'less'}}</div>
        <div>is published: {{ obj.isPublished ? 'Published' : 'Not published' }}</div>
    </div>
</template>

<script>

export default {
    name: 'SomeComponent',

    data() {
        return {}
    },

    props: [
        'obj'
    ],

    methods: {},
}
</script>

<style scoped>

</style>
