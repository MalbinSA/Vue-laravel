<template>
    <div>
        <div class="w-25">
            <div class="mb-2">
                <input type="text" v-model="name" placeholder="name" class="form-control">
            </div>
            <div class="mb-2">
                <input type="number" v-model="age" placeholder="age" class="form-control">
            </div>
            <div class="mb-2">
                <input type="text" v-model="job" placeholder="job" class="form-control">
            </div>
            <div class="mb-2">
                <input type="submit" @click.prevent="updatePerson"  value="Add" class="btn btn-primary">
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: "Edit",

    data(){
        return {
            id: null,
            name: null,
            age: null,
            job: null,
        }
    },

    computed: {
      peopleId() {
          return parseInt(this.$route.params.id)
      },
    },

    mounted() {
        this.getPerson()
    },

    methods:{
        getPerson(){
            axios.get(`/api/people/${this.peopleId}`)
            .then( res => {
                this.name = res.data.data.name
                this.age = res.data.data.age
                this.job = res.data.data.job
            })
        },

        updatePerson(){
              axios.patch(`/api/people/${this.$route.params.id}`,
                  { name: this.name, age: this.age, job: this.job})
            .then(res => {
                this.$router.push({name: 'person.show'})
            })
        }

    },
}
</script>

<style scoped>

</style>
