<template>
    <div>
        <div class="w-25" v-if="person">
            <div class="mb-2">
                <input type="text" v-model="person.name" placeholder="name" class="form-control">
            </div>
            <div class="mb-2">
                <input type="number" v-model="person.age" placeholder="age" class="form-control">
            </div>
            <div class="mb-2">
                <input type="text" v-model="person.job" placeholder="job" class="form-control">
            </div>
            <div class="mb-2">
                <input type="submit"
                       @click.prevent="$store.dispatch('updatePerson', {id: person.id, name: person.name, age: person.age, job: person.job})"
                       value="Add" class="btn btn-primary">
            </div>
        </div>
    </div>
</template>
<script>

// import router from "../../router";

export default {
    name: "Edit",

    computed: {
        person() {
            return this.$store.getters.person
        },
        // todo:: why this isn't work? Need to find out
        // isDisabled() {
        //     return this.person.name && this.person.age && this.person.job;
        // }

    },

    mounted() {
        this.$store.dispatch('getPerson', this.$route.params.id)
    },

}
</script>

<style scoped>

</style>
