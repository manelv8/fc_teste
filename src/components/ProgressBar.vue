<template>
  <div class="row mb-3 mt-1">
    <div class="col-9">
      <progress class="myProgressBar" :value="step" :max="totalSteps"></progress> 
    </div>
    <div class="col-3 text-end">
      <span> {{step}} de {{totalSteps}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProgressBar',
  props:{
    step:String,
    totalSteps: String
  }
}
</script>

<style scoped>
  
  .myProgressBar{
   
    width: 100%;
    background-color: #fff;
    border: none;
    ;
  }

  .myProgressBar::-webkit-progress-bar,
  .myProgressBar::-moz-progress-bar{
    border-radius: 5px ;
    background-color: var(--fc-primary-0);
  }
</style>