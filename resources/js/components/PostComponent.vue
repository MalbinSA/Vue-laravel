<template>
    <div>
        <CreateComponent></CreateComponent>
        <some-component></some-component>
        <index-component ref="index"></index-component>
    </div>
</template>

<script>
import SomeComponent from "./SomeComponent.vue";
import CreateComponent from "./CreateComponent.vue";
import IndexComponent from "./IndexComponent.vue";

export default {
    name: "PostAndComponent",

    data() {
        return {
            persons: null,
        }
    },

    mounted() {
    },

    methods: {
        getPersons() {
            axios.get('/persons')
                .then(data => {
                    this.persons = data.data;
                })
        },
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
