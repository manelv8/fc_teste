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
    background-color: var(--fc-cta-1);
    height: 100%;
  }
  .nav{
    min-height: 5rem;
    padding-top: 1rem;
    padding-left: 2rem;
  }
  .content{
    background-color: #fff;
    border-radius: 25px ;
    padding: 2rem 1rem ;
    
  }

@media screen and  (min-width: 992px) {
  
  .content{
    margin-left: 2rem;
    margin-right: 2rem;
    box-shadow: 2px 2px 10px var(--fc-secondary-7);
  }
}

</style>