<template>
  <div class="default" >
    <nav class="nav"><slot name="nav"></slot></nav>
    <main class="content">
      <slot></slot>  
    </main>
  </div>
</template>

<script>
export default {
  name:'DefaultContainer'
}
</script>

<style scoped>
  .default{
    background-color: yellow;
  }
  .nav{
    min-height: 5rem;
    padding-top: 1rem;
    padding-left: 2rem;
  }
  .content{
    background-color: #fff;
    border-radius: 5% 5% 0 0;
    padding-top: 2rem ;
    padding-left: 1rem;
    padding-right: 1rem;
    height: 100%;
  }
</style>