<template>
    <div>
        <table class="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">Job</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
            </tr>
            </thead>
            <tbody>
            <template v-for="person in people">
                <show-component :person="person" :ref="`show_${person.id}`"></show-component>
                <edit-component :person="person" :ref="`edit_${person.id}`"></edit-component>
            </template>
            </tbody>
        </table>

    </div>
</template>

<script>

import EditComponent from "./EditComponent.vue";
import ShowComponent from "./ShowComponent.vue";

export default {
    name: 'IndexComponent',
    components: {ShowComponent, EditComponent},

    data() {
        return {
            people: null,
            editPersonId: null,
            name: null,
            age: null,
            job: null,
        }
    },

    mounted() {
        this.getPeople();
    },

    methods: {
        getPeople() {
            axios.get('api/people')
                .then(res => {
                    this.people = res.data
                    // console.log(res.data);
                })
        },

        changeEditPersonId(id, name, age, job) {
            this.editPersonId = id;
            let editName = `edit_${id}`;
            let fullperson = this.$refs[editName][0];
            fullperson.name = name;
            fullperson.age = age;
            fullperson.job = job;
        },

        idEdit(id) {
            return this.editPersonId === id;
        },

        updatePerson(id) {
            this.editPersonId = null
            axios.patch(`api/people/${id}`, {name:this.name, age:this.age, job:this.job})
            .then( res => {
                 this.getPeople()
            })
        },

        deletePerson(id) {
            axios.delete(`api/people/${id}`)
            .then( res => {
                this.getPeople()
            })
        },

        indexLog() {
            console.log('this is index component');
        }
    },
}
</script>

<style scoped>

</style>
