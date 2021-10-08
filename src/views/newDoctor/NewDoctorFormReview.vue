<template>
  <div class="d-flex flex-column align-items-start">

    <h1>Revisão do cadastro</h1>
    <form class="col-12" @submit="checkForm">
      <TextItem label='Nome Completo' :text="fullName"/>
      <TextItem label='CPF' :text='cpf'/>
      <TextItem label='Número de celular ou telefone' :text='phone'/>
      <TextItem label='Estado / Cidade' :text="stateAndCity "/>
      <TextItem label='Especialidade principal' :text='mainSpecialty'/>
      <TextItem label='Preço da consulta' :text="priceFormatted"/>
      <TextItem label='Formas de pagamento da consulta' :text="paymentDescription"/>
      <div class="d-flex flex-column align-items-center" >
      <NextStepButton :text="'Cadastrar Profissional'" class="mb-3"/>
      <BackStepButton :previousPage="prevPage"/>

      </div>
    </form>


    
  </div>
</template>

<script>

import BackStepButton from '../../components/BackStepButton.vue'
import NextStepButton from '../../components/NextStepButton.vue'
import TextItem from '../../components/review/TextItem.vue'
import { mapState } from 'vuex'

export default {
 name:'NewDoctorFormReview',
 data(){
   return{
     prevPage: 'NewDoctorFormInfo',
     nextPage: 'NewDoctorSuccess'
   }
 },
 components: {
   BackStepButton,
   NextStepButton,
   TextItem
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

