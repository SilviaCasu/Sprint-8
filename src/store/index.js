import { createStore } from 'vuex'

export default createStore({
  state: {
    starships :[],
    pilot :[],
    name:'',
 foto: '',
 url: '',
 loggedIn: false,
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
    listfoto (state,  urls){
      state.url = urls
      
    },
    loggedIn (state){
      state.loggedIn = true
    }


    
    
   
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
    },
  
    mockLogin(context){
    
  context.commit('loggedIn');
    }
  },
  
  modules: {
  }
})
