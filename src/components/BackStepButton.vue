<template>
  <button @click="goToPage"> {{title}}</button>
</template>


<script>
export default {
  name: 'BackStepButton',
  props:{
    previousPage: String,
    title:{
      type:String,
      default: 'Back'
    }
  },
  methods:{
    goToPage(){
      this.$router.push({name: this.$props.previousPage})
    }
  },
 
}
</script>