<script>
import BottsHeader from '@/components/BottsHeader.vue'
import BottsFooter from '@/components/BottsFooter.vue'
export default {
  components: {
    BottsHeader,
    BottsFooter
  },
};
</script>

<template>
<div>
  <BottsHeader/>
  <router-view/>
  <BottsFooter/>
</div>
</template>

<style scoped>

</style>