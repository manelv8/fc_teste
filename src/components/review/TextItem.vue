<template>
  <div class="mb-1">
      <span >{{label}}</span>
      <p 
        id="price" 
        type="text" 
      >
        {{text}}
      </p>
    </div>
</template>

<script>
export default {
  name:'TextItem',
  props:{
    label: String,
    text: String
  }
  
}
</script>