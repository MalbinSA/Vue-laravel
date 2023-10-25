<template>
    <div>
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
            <template v-for="person in persons">
                <tr>
                    <td> {{ person.id }}</td>
                    <td> {{ person.name }}</td>
                    <td> {{ person.age }}</td>
                    <td> {{ person.job }}</td>
                </tr>
            </template>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "Index",

    data() {
        return {
            persons: null,
        }
    },

    mounted() {
        this.getPersons()
    },

    methods: {
        getPersons() {
            axios.get('./api/people')
                .then(res => {
                    this.persons = res.data
                });
        },
    },


}

</script>

<style scoped>

</style>
