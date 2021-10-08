<template>
<DefaultContainer>
  <div class="d-flex flex-column align-items-center">
    <img class="circle" src="../../assets/check-circle-regular.svg" alt="" srcset="">
    <h2 class="myText">Cadastro realizado!</h2>
  </div>

</DefaultContainer>
</template>

<script>
import DefaultContainer from '../../components/DefaultContainer.vue'

export default {
  components: {
    DefaultContainer
  }  
}
</script>
<style scoped>

  .circle{
    width: 10rem;
    margin-bottom: 3rem;
  }
  .myText{
    color: var(--fc-primary-0);
  }
</style>