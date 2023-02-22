import { createStore } from 'vuex'

export default createStore({
  state: {
    starships :[],
    pilot :[],
    name:'',
 
  },
  getters: {
  },
  mutations: {

    listShips (state, shipsAction){
      state.starships = shipsAction
      
    },
    listPilot (state, pilotAction){
      state.pilot = pilotAction
      
    },
    
    
   
  },
  actions: {

   getShips : async function({commit}, page) {
   
   
      const datos = await fetch ( 'https://swapi.dev/api/starships/?result=7&page='+ page );
      const starships = await datos.json(); 
      commit('listShips', starships,)
      
    },

    getPilot : async function({commit}, urlPilot) {     
      const datos = await fetch ( urlPilot );
      const pilot = await datos.json(); 
  console.log(pilot.name);
     commit('listPilot', pilot)      
    }
  },
  modules: {
  }
})
