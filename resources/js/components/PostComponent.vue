<template>
    <div>
        <CreateComponent></CreateComponent>
        <index-component></index-component>
    </div>
</template>

<script>
import CreateComponent from "./CreateComponent.vue";
import IndexComponent from "./IndexComponent.vue";

export default {
    name: "PostAndComponent",

    data(){
        return {
            persons:null,
        }
    },

    mounted() {
        this.getPersons()
    },

    methods: {
        getPersons(){
            axios.get('/persons')
            .then(data => {
                this.persons = data.data;
            })
        }
    },

    computed: {},

    components: {
        CreateComponent,
        IndexComponent
    }
}
</script>

<style scoped>

</style>
