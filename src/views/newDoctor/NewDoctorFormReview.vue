<template>
  <DefaultContainer>
      <template v-slot:nav>
        <BackStepButton :previousPage="prevPage"/>
      </template>

      <div class="row">
        <div class="col d-flex flex-column align-items-start">

          <h2 class="mb-2" >Revisão do cadastro</h2>

          <form class="col-12" @submit="checkForm">
            <TextItem label='Nome Completo' :text="fullName"/>
            <TextItem label='CPF' :text='cpf'/>
            <TextItem label='Número de celular ou telefone' :text='phone'/>
            <TextItem label='Estado / Cidade' :text="stateAndCity "/>
            <TextItem label='Especialidade principal' :text='mainSpecialty'/>
            <TextItem label='Preço da consulta' :text="priceFormatted"/>
            <TextItem label='Formas de pagamento da consulta' :text="paymentDescription"/>
            
            <div class="d-flex flex-column align-items-center " >
              <NextStepButton :isNext="false" :text="'Cadastrar Profissional'" class="mb-3"/>
              <BackStepButton :title=" 'Editar Cadastro' " :previousPage="initialPage"/>
            </div>
          </form>
        </div>
       
        <div class="col d-none d-lg-flex align-items-center">
          <img src="../../assets/desktop-pagina-3.png" alt="">
        </div>
    </div>
  </DefaultContainer>

  
</template>

<script>

import BackStepButton from '../../components/BackStepButton.vue'
import NextStepButton from '../../components/NextStepButton.vue'
import DefaultContainer from '../../components/DefaultContainer.vue'
import TextItem from '../../components/review/TextItem.vue'
import { mapState } from 'vuex'

export default {
 name:'NewDoctorFormReview',
 data(){
   return{
     prevPage: 'NewDoctorFormService',
     initialPage: 'NewDoctorFormInfo',
     nextPage: 'NewDoctorSuccess'
   }
 },
 components: {
   BackStepButton,
   NextStepButton,
   TextItem,
   DefaultContainer 
 },
 methods:{
   checkForm: function(e){
      this.$router.push({name: this.nextPage})
    },
 },
 computed: {
   ...mapState([
   'fullName',
   'cpf',
    'phone',
    'state',
    'city',
    'mainSpecialty',
    'price',
    'paymentType',
    'paymentAditionalInfo',
  ]),
  stateAndCity(){
      return `${this.state} - ${this.city} `
  },
  priceFormatted(){
    return `R$ ${this.price}`
  },
  paymentDescription(){
    if(this.paymentAditionalInfo[0]){
      return `${this.paymentType[0]} - ${this.paymentAditionalInfo[0]}`
    }
    return `${this.paymentType[0]}`
  }

 }
}



</script>

