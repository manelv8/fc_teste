<template>
 
 <div>
  <img v-if="title == '' " class="backArrow" @click="goToPage" src="../assets/angle-left-solid.svg">
  <button v-else class="myBtn" @click="goToPage">{{title}}</button>
 </div>

</template>


<script>
export default {
  name: 'BackStepButton',
  props:{
    previousPage: String,
    title:{
      type:String,
      default: ''
    }
  },
  methods:{
    goToPage(){
      this.$router.push({name: this.$props.previousPage})
    }
  },
 
}
</script>

<style scoped>
  .backArrow{
    height: 1.75rem;
    cursor: pointer;
  }

  .myBtn{
    border: none;
    background: transparent;
    color: var(--fc-primary-0);
    font-weight: bold;
  }
</style>