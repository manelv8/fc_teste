<template>
  <div>

    <h1>professional review</h1>
    <BackStepButton :previousPage="prevPage"/>
  </div>
</template>

<script>
import BackStepButton from '../../components/BackStepButton.vue'
export default {
 name:'NewDoctorFormReview',
 data(){
   return{
     prevPage: 'NewDoctorFormService'
   }
 },
 components: {
   BackStepButton
 }
}
</script>