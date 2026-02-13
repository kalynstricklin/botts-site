<script>
import GeoRobotixHeader from '@/_components/GeoRobotixHeader.vue'
import GeoRobotixFooter from '@/_components/GeoRobotixFooter.vue'
export default {
  components: {
    GeoRobotixHeader: GeoRobotixHeader,
    GeoRobotixFooter: GeoRobotixFooter
  },
};

</script>

<template>
  <div>
    <GeoRobotixHeader/>
    <router-view/>
    <GeoRobotixFooter/>

  </div>
</template>

<style scoped>

</style>