import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fullName:'',
    cpf:null,
    phone:null,
    state:'',
    city:'',
    mainSpecialty: '',
    price: '',
    paymentType: [],
    paymentAditionalInfo: [],
  },
  mutations: {
    addFullName(state, fullName){
      state.fullName = fullName
    },
    addCPF(state, cpf){
      state.cpf = cpf
    },
    addPhone(state,phone){
      state.phone = phone
    },
    addState(state, data) {
      state.state = data
    },
    addCity(state,city){
      state.city = city
    },
    addMainSpecialty(state,data){
      state.mainSpecialty = data
    },
    addPrice(state,data){
      state.price = data
    },
    addPaymentType(state,data){
      state.paymentType = data
    },
    addPaymentAditionalInfo(state,data){
      state.paymentAditionalInfo = data
    }
  },
  actions: {
  },
  modules: {
  }
})
