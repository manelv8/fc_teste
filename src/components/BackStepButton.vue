<template>
  <button @click="goToPage"> back </button>
</template>


<script>
export default {
  name: 'BackStepButton',
  props:{
    previousPage: String
  },
  methods:{
    goToPage(){
      this.$router.push({name: this.$props.previousPage})
    }
  },
 
}
</script>