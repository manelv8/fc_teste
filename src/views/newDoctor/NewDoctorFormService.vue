<template>
  <DefaultContainer>
    <template v-slot:nav>
      <BackStepButton :previousPage="prevPage"/>
    </template>
    <div class="d-flex flex-column align-items-start">
    <h1>Sobre o atendimento</h1>
    <h2>Detalhes do atendimento</h2>
    
    

    <form @submit="checkForm"  class="col-12">
      
      <div>
        <div class="mb-3 me-3">
          <label for="mainSpecialty" class="form-label">Especialidade principal*</label>
          <select 
            id="mainSpecialty" 
            class="form-select" 
            :class="{'is-invalid':(!mainSpecialtyValid() && mainSpecialtyBlured)}" 
            @blur="mainSpecialtyBlured = true"  
            @focus=" mainSpecialtyBlured=false" 
            v-model='mainSpecialty' 
            required>

            <option value="" selected>Selecione especialidade</option>
            <option v-for="especialty in mainSpecialtyList" :key="especialty">{{especialty}}</option>
        
          </select>
          <div class="invalid-feedback">
          Escolha um especialidade.
          </div>
        </div>

        <div class="mb-3">
          <label for="price" class="form-label">Informe o preço da consulta*</label>
          <div class="input-group">
            <span class="input-group-text">R$</span>
            <input 
              id="price" 
              type="text" 
              class="form-control" 
              :class="{'is-invalid':(!priceValid() && priceBlured)}" 
              @blur="priceBlured = true"  
              @focus=" priceBlured=false"
              v-mask="currencyMask" 
              v-model='price' 
              required>
            <div class="invalid-feedback">
              valor entre R$30,00 e R$350,00
            </div>
          </div>
        </div>

        <div class="form-check">
          <input 
            class="form-check-input" 
            type="checkbox" 
            value="Em Dinheiro" 
            @click="checkPayment()" 
            v-model="paymentType"  >
          <label class="form-check-label" >
            Em Dinheiro
          </label>
        </div>

        <div class="form-check">
          <input 
            class="form-check-input" 
            type="checkbox" 
            value="Pix"  
            @click="checkPayment()" 
            v-model="paymentType"  >
          <label class="form-check-label" >
            Pix
          </label>
        </div>
      
        <div class="form-check">
          <input 
            class="form-check-input" 
            type="checkbox" 
            value="Cartão de crédito"  
            @click="checkPayment()" 
            v-model="paymentType"  >
          <label class="form-check-label" >
            Cartão de crédito
          </label>

  
          <div v-show="showAditionalInfo">
            <span>Parcelamento em:</span>

            <div class="form-check">
              <input 
                class="form-check-input" 
                type="checkbox" 
                value="1x, sem juros"  
                @click="checkPaymentAditionalInfo()" 
                v-model="paymentAditionalInfo"  >
              <label class="form-check-label" >
                1x, sem juros
              </label>
            </div>

            <div class="form-check">
              <input 
                class="form-check-input" 
                type="checkbox" 
                value="2x, sem juros"  
                @click="checkPaymentAditionalInfo()" 
                v-model="paymentAditionalInfo"  >
              <label class="form-check-label" >
                2x, sem juros
              </label>
            </div>

            <div class="form-check">
              <input 
                class="form-check-input" 
                type="checkbox" 
                value="3x, sem juros"  
                @click="checkPaymentAditionalInfo()" 
                v-model="paymentAditionalInfo"  >
              <label class="form-check-label" >
                3x, sem juros
              </label>
            </div>

          </div>

          
        </div>

        
      
    </div>
      
      <p>progress bar 1 de 2 </p>
      <NextStepButton :isNext="true" :text="'Próximo'"/>

    </form>
  </div>
  </DefaultContainer>
  
</template>

<script>
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import BackStepButton from '../../components/BackStepButton.vue'
import NextStepButton from '../../components/NextStepButton.vue'
import DefaultContainer from '../../components/DefaultContainer.vue'

export default {
 name:'NewDoctorFormService',
 computed:{
   mainSpecialty:{
     get(){
       return this.$store.state.mainSpecialty
     },
     set(value){
      this.$store.commit('addMainSpecialty', value)
     }
   },
   price:{
     get(){
       return this.$store.state.price
     },
     set(value){
       this.$store.commit('addPrice',value)
     }
   },
  paymentType:{
    get(){
      return this.$store.state.paymentType
    },
    set(value){
      this.$store.commit('addPaymentType',value)
    }
  },
  paymentAditionalInfo:{
    get(){
      return this.$store.state.paymentAditionalInfo
    },
    set(value){
      this.$store.commit('addPaymentAditionalInfo',value)
    }
  },

 },
 data(){
   return{
     prevPage: 'NewDoctorFormInfo',
     nextPage: 'NewDoctorFormReview',
     mainSpecialtyList:[
       'Cardiologia', 
       'Dermatologia', 
       'Neurologia', 
       'Oftalmologia', 
       'Psiquiatria', 
       'Urologia'],
     mainSpecialtyBlured:false,
     priceBlured: false,
     showAditionalInfo:false,
     currencyMask: createNumberMask({
      prefix: '',
      allowDecimal: true,
      decimalSymbol: ',',
      integerLimit: 3,
      decimalLimit:2,
      includeThousandsSeparator: false,
      allowNegative: false,
    })

   }
 },
 components: {
  BackStepButton,
  NextStepButton,
  DefaultContainer
 },
 methods:{
   checkForm: function(e){
     e.preventDefault();
     if(!this.mainSpecialtyValid()){
       return;
     }

     if(!this.priceValid()){
       return;
     }

    if(!this.paymentValid()){
      return;
    }
      this.$router.push({name: this.nextPage})
   },
   mainSpecialtyValid: function(){
    return this.mainSpecialty != ''
   },
   priceValid: function(){
     const priceOnlyNumbers = this.price.replace(/[^\d]/g,'')
     if(priceOnlyNumbers >= 3000 && priceOnlyNumbers <= 35000){
       return true
     }
     return false
   },
   paymentValid: function(){
     
     if(this.paymentType.length == 0 ){
       console.log('1 invaldio')
       return false;
     }else{
       if (this.paymentType[0] == "Cartão de crédito" && this.paymentAditionalInfo.length == 0){
         return false
       }
     }
    return true;
   },

   checkPayment: function(){
    this.paymentType = []
   },

   checkPaymentAditionalInfo: function(){
     this.paymentAditionalInfo = []
   }
 },
 watch:{
   paymentType(data){
     if(data == 'Cartão de crédito'){
       this.showAditionalInfo = true
     }else{
       this.showAditionalInfo = false
       this.paymentAditionalInfo = []
     }
   }
 }
}
</script>