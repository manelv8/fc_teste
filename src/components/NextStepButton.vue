<template>
  <button type='submit'> {{text}} </button>
</template>


<script>
export default {
  name: 'NextStepButton',
  props:{
    text: String,
  }
 
}
</script>