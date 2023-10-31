<template>
    <div v-if="person">
        <table class="table">
            <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Age</th>
                <th>Job</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td> {{ person.id }}</td>
                <td> {{ person.name }}</td>
                <td> {{ person.age }}</td>
                <td> {{ person.job }}</td>
            </tr>
            </tbody>
        </table>
        <router-link :to="{ name: 'person.edit', params: {id: person.id}}">Edit</router-link>
    </div>
</template>

<script>

export default {
    name: "Show",

    data() {
        return {
        }
    },

    mounted() {
        this.$store.dispatch('getPerson', this.$route.params.id)
    },

    computed: {
        person() {
            return this.$store.getters.person
        }
    }
}
</script>

<style scoped>

</style>
