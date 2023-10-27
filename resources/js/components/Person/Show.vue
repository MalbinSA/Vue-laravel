<template>
        <div v-if="this.person">
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
            <td> {{ this.person.id }}</td>
            <td> {{ this.person.name }}</td>
            <td> {{ this.person.age }}</td>
            <td> {{ this.person.job }}</td>
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
            person: null,
        }
    },

    mounted() {
        this.getPerson()
    },

    methods: {
        getPerson() {
            axios.get(`/api/people/${this.$route.params.id}`)
                .then(res => {
                    this.person = res.data.data
                    console.log(res.data.data);
                })
        }
    },
}
</script>

<style scoped>

</style>
