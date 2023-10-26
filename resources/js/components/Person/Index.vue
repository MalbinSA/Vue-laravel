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
                    <td> <router-link :to="{ name: 'person.show', params: {id: person.id}}">{{ person.name }}</router-link></td>
                    <td> {{ person.age }}</td>
                    <td> {{ person.job }}</td>
                    <td>
                        <router-link :to="{ name: 'person.edit', params: {id: person.id}}">Edit</router-link>
                    </td>
                    <td>
                        <a href="#" class="btn btn-outline-danger" @click.prevent="deletePerson(person.id)">Delete</a>
                    </td>

                </tr>
            </template>
            </tbody>
        </table>
    </div>
</template>


<script>

import router from "../../router";

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
                    // console.log(res);
                });
        },

        deletePerson(id) {
            axios.delete('/api/people/' + id)
            .then( res => {
                this.getPersons()
            })
        }


    },


}

</script>

<style scoped>

</style>
