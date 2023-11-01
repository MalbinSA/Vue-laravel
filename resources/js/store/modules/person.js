import router from "../../router";

const state = {
    person: null,
    persons: null,
}

const getters = {
    person: state => {
        return state.person
    },
    persons: state => {
        return state.persons
    },
}

const actions = {
    getPerson({commit}, id) {
        axios.get(`/api/people/${id}`)
            .then(res => {
                commit('setPerson', res.data.data);
            })
    },

    getPersons({commit}) {
        axios.get('./api/people')
            .then(res => {
                commit('setPersons', res.data.data);
            });
    },

    deletePerson({dispatch}, id) {
        axios.delete(`/api/people/${id}`)
            .then(res => {
                dispatch('getPersons');
            })
    },

    updatePerson({}, data) {
        axios.patch(`/api/people/${data.id}`,
            {name: data.name, age: data.age, job: data.job})
            .then(res => {
                router.push({name: 'person.show', params: {id: data.id}})
            })
    },
    store({}, data) {
        axios.post('/api/people', {name: data.name, age: data.age, job: data.job})
            .then(res => {
                router.push({name: 'person.index'});
            })
    }
}

const mutations = {
    setPerson(state, person) {
        state.person = person
    },
    setPersons(state, persons) {
        state.persons = persons;
    }
}

export default {
    state, mutations, getters, actions
}
