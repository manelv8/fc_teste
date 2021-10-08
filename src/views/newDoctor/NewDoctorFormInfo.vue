<template>
<DefaultContainer>
  <template v-slot:nav></template>
  
  <div class="row">
    <div class="col d-flex flex-column align-items-start">
      <h2 class="mb-2">Sobre o profissional</h2>
      <h4 class="mb-2">Dados do profissional</h4>

      <form @submit="checkForm"  class="col-12">
        <div class="mb-3">
          <label for="name" class="form-label">Nome Completo*</label>
          <input 
            id="name" 
            type="text" 
            class="form-control" 
            :class="{'is-invalid':(!fullNameValid() && fullNameBlured)}" 
            @blur="fullNameBlured = true"  
            @focus="fullNameBlured=false" 
            v-model="fullName"
            required>
          <div class="invalid-feedback">
          Digite seu nome completo
          </div>
        </div>

        <div class="mb-3">
          <label for="cpf" class="form-label">CPF*</label>
          <input 
            id="cpf" 
            type="text" 
            class="form-control" 
            :class="{'is-invalid':(!cpfValid() && cpfBlured)}" 
            @blur="cpfBlured = true"  
            @focus=" cpfBlured=false" 
            placeholder="Digite um CPF"
            v-mask="'###.###.###-##'"
            v-model='cpf' 
            required>
          <div class="invalid-feedback">
          CPF invalido.
          </div>
        </div>

        <div class="mb-3">
          <label for="phone" class="form-label">Número de celular*</label>
          <input 
            id="phone" 
            type="text" 
            class="form-control" 
            :class="{'is-invalid':(!phoneValid() && phoneBlured)}" 
            @blur="phoneBlured = true"  
            @focus=" phoneBlured=false"
            v-mask="'(##) # ####-####'" 
            v-model='phone' 
            required>
          <div class="invalid-feedback">
          Telefone inválido
          </div>
        </div>

        <div class="row" >
          <div class=" col mb-3 ">
            <label for="state" class="form-label">Estado*</label>
            <select 
              id="state" 
              class="form-select" 
              :class="{'is-invalid':(!stateValid() && stateBlured)}" 
              @blur="stateBlured = true"  
              @focus=" stateBlured=false" 
              v-model="state"
              required>
              <option value="" selected>Selecione</option>
              <option v-for="(state,index) in stateOptions" 
                :key="index"
                :value="state"
              > 
                {{state}}
                </option>
            </select>
            <div class="invalid-feedback">
            Escolha um estado
            </div>
          </div>

          <div class="col mb-3 ">
            <label for="city" class="form-label">Cidade*</label>
            <select 
              id="city" 
              class="form-select" 
              :class="{'is-invalid':(!cityValid() && cityBlured)}" 
              @blur="cityBlured = true"  
              @focus=" cityBlured=false" 
              v-model='city' 
              required>
              <option value="" selected>Selecione</option>
              <option v-for="city in cityOptions[state]" :key="city.text" :value="city.value">
                {{city.text}}
              </option>
            </select>
            <div class="invalid-feedback">
              Escolha uma cidade.
            </div>
        </div>
        
      </div>
          <ProgressBar :step="1" :totalSteps="2"/>
          <NextStepButton :isNext="true" :text="'Próximo'"/>
      </form>
    </div>
    <div class="col d-none d-lg-flex align-items-center">
      <img src="../../assets/desktop-pagina-1.png" alt="">
    </div>
  </div>
</DefaultContainer>
  
    
</template>
  
<script>
  import NextStepButton from '../../components/NextStepButton.vue'
  import DefaultContainer from '../../components/DefaultContainer.vue'
  import ProgressBar from '../../components/ProgressBar.vue'

  export default {
  name:'NewDoctorFormInfo',
  computed:{
    fullName:{
      get(){
        return this.$store.state.fullName
      },
      set(value){
        this.$store.commit('addFullName', value)
      }
    },

    cpf:{
      get(){
        return this.$store.state.cpf
      },
      set(value){
        this.$store.commit('addCPF', value)
      }
    },
    phone:{
      get(){
        return this.$store.state.phone
      },
      set(value){
        this.$store.commit('addPhone', value)
      }
    },
    state:{
      get(){
        return this.$store.state.state
      },
      set(value){
        this.$store.commit('addState', value)
      }
    },
    city:{
      get(){
        return this.$store.state.city
      },
      set(value){
        this.$store.commit('addCity', value)
      }
    },

  },
  data(){
    return{
      nextPage: 'NewDoctorFormService',
      validForm:false,
      fullNameBlured: false,
      cpfBlured: false,
      phoneBlured: false,
      stateBlured: false,
      cityBlured: false,
      stateOptions:['Paraná','Rio Grande do Sul','Santa Catarina'],
      cityOptions:{
        'Paraná':[
          {text: 'Londrina', value:'Londrina'},
          {text: 'Maringá', value:'Maringá'}
        ],
        'Rio Grande do Sul':[
          {text: 'Pelotas', value:'Pelotas'},
          {text: 'Porto Alegre', value:'Porto Alegre'}
        ],
        'Santa Catarina':[
          {text: 'Florianópolis', value:'Florianópolis'},
          {text: 'Joinville', value:'Joinville'}
        ]

      },
    }
  },
  components:{
    NextStepButton,
    DefaultContainer,
    ProgressBar
  },
  methods:{
    checkForm: function(e){
      e.preventDefault();
      
      if(!this.fullNameValid()){
        return;
      }

      if(!this.cpfValid()){
        return;
      }
      
      if(!this.phoneValid()){
        return;
      }

      if(!this.stateValid()){
        return;
      }

      if(!this.cityValid()){
        return;
      }
      
      this.$router.push({name: this.nextPage})
      
    },
    fullNameValid: function(){
      return (
        this.fullName != null &&
        this.fullName.length >= 3 &&
        this.fullName.length <= 48
      )
    },
    cpfValid: function(){
      let cpfToValidate
      if(this.cpf){
        cpfToValidate = this.cpf.replace(/[^\d]/g,'')
      }
      return (
        this.cpf != null &&
        this.cpfValidationAlgo(cpfToValidate)
      )
    },
    cpfValidationAlgo: function(cpf){
      var numeros, digitos, soma, i, resultado, digitos_iguais;
      digitos_iguais = 1;
      if (cpf.length < 11)
            return false;
      for (i = 0; i < cpf.length - 1; i++)
            if (cpf.charAt(i) != cpf.charAt(i + 1))
                  {
                  digitos_iguais = 0;
                  break;
                  }
      if (!digitos_iguais)
            {
            numeros = cpf.substring(0,9);
            digitos = cpf.substring(9);
            soma = 0;
            for (i = 10; i > 1; i--)
                  soma += numeros.charAt(10 - i) * i;
            resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
            if (resultado != digitos.charAt(0))
                  return false;
            numeros = cpf.substring(0,10);
            soma = 0;
            for (i = 11; i > 1; i--)
                  soma += numeros.charAt(11 - i) * i;
            resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
            if (resultado != digitos.charAt(1))
                  return false;
            return true;
            }
      else
            return false;
    },
    phoneValid: function(){
      let phoneOnlyNumbers = null
      if(this.phone){
        phoneOnlyNumbers =  this.phone.replace(/[^\d]/g,'') 
      }

      return(
        phoneOnlyNumbers != null &&
        phoneOnlyNumbers.length == 11

      ) 
    },
    stateValid: function(){
      return this.state != ""
    },
    cityValid: function(){
      return this.city != ""
    }
  }
}
</script>

<style scoped>

</style>