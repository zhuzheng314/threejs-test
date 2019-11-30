<template>
  <renderer :size="{ w: 600, h: 400 }">
    <scene>
      <camera :position="{ z: 15 }"></camera>
<!--      <mesh :obj="require('../../public/ttt.obj')" :position="{ y: -200 }"></mesh>-->
<!--      <animation :fn="animate" :speed="3"></animation>-->
    </scene>
  </renderer>
</template>
<script>

  export default {
    name: "vue-three",
    data() {
      return {
      }
    },
    mounted() {
    }
  }
</script>

<style scoped>
  #container{
  }
</style>
