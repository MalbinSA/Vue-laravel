<template>
    <div class="container mt-3">
        <create-component></create-component>
        <some-component></some-component>
        <index-component ref="index"></index-component>
    </div>
</template>

<script>
import CreateComponent from "./CreateComponent.vue";
import IndexComponent from "./IndexComponent.vue";
import SomeComponent from "./SomeComponent.vue";

export default {
    name: "PostComponent",

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
