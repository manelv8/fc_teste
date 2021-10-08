<template>
  <button class="myBtn" :class="{'isNext': isNext, 'default': !isNext }" type='submit'> {{text}} </button>
</template>


<script>
export default {
  name: 'NextStepButton',
  props:{
    text: String,
    isNext: Boolean
  }
 
}
</script>

<style scoped>
  .myBtn{
    border: none;
    border-radius: 25px;
    width: 100%;
  }

  .isNext{
    background: var(--fc-primary-0);
    color: var(--fc-secondary-0);
  }

  .default{
    background: var(--fc-cta-0);
    color: var(--fc-primary-0);
  }
</style>