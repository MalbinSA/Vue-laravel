const state = {
    person: null,
}

const getters = {
    person: state => {
        return state.person
    }
}

const actions = {
    getPerson(context, id) {
        axios.get(`/api/people/${id}`)
            .then(res => {
                context.commit('setPerson', res.data.data);
            })
    },
}

const mutations = {
    setPerson(state, person) {
        state.person = person
    }
}

export default {
    state, mutations, getters, actions
}
