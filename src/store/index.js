import { createStore } from 'vuex'

export default createStore({
  state: {
    starships :[]
  },
  getters: {
  },
  mutations: {

    listShips (state, shipsAction){
      state.starships = shipsAction
    },
   
  },
  actions: {

    getShips : async function({commit}) {
      const datos = await fetch ( 'https://swapi.dev/api/starships/?result=7' );
      const starships = await datos.json();
     
      commit('listShips', starships)
    }
  },
  modules: {
  }
})
