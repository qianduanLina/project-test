<template>
  <itemContainer fatherComponent="item"></itemContainer>
</template>
<script>
  import itemContainer from '../../components/itemcontainer.vue'
  export default {
    components: {
      itemContainer
    },
    name: 'item',
    created () {
      this.$store.commit('REMBER_TIME')
    }
  }
</script>
