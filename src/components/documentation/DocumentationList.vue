<script setup>
import ListComp from "@/components/unused/ListComp.vue";

const sweDoc = [
  {
    header: "Sensor Web Enablement (SWE) Overview and High Level Architecture (OGC 07-165)",
    text: "Botts et al [2007]",
    link: "https://github.com/opengeospatial/ogcapi-connected-systems",
    button: "Go to Documentation",
  },
  {
    header: "Sensor Web Enablement (SWE) Overview and High Level Architecture (OGC 07-165)",
    text: "Botts et al [2007]",
    link: "https://drive.google.com/file/d/14gmnkFzF1l3ALBcVd7pyp9RuVkMwLKWK/view",
    button: "Go to Documentation",
  },
  {
    header: "Bringing the Sensor Web Together (Geosciences, no 6)",
    text: "Botts and Robin [Oct 2007]",
    link: "https://www.brgm.fr/fr/actualites?ID=473",
    button: "Go to Documentation",
  },
  {
    header: "SensorML and SWE Common Specification v1.0 (OGC 07-000)",
    text: "Botts and Robin [Oct 2007]",
    link: "https://drive.google.com/file/d/1HJJ1NTx-RaS-MaykptYnCpFMjbNFWDdu/view",
    button: "Go to Documentation",
  },
  {
    header: "Supporting Georeferenceable Imagery in SWE (OGC 08-071)",
    text: "Botts [2008]",
    link: "https://drive.google.com/file/d/1jHQl5wAY64g3aUKdTykjjLffXdDSSB3F/view",
    button: "Go to Documentation",
  },
  {
    header: "Fusion Standards Study Engineering Report (OGC 09-138)",
    text: "Percival (ed) [2009]",
    button: "Go to Documentation",
  },
  {
    header: "OWS-9 Engineering Report: Use of SWE Common and SensorML for GPS Messaging (OGC 12-096)",
    text: "Botts [2012]",
    button: "Go to Documentation",
  },
  {
    header: "OGC SensorML: Model and XML Encoding Standard (OGC 12-000)",
    text: "Botts and Robin [2013]",
    button: "Go to Documentation",
  },
];
</script>

<template>
  <div class="container-fluid">
    <div class="row mb-4 text-center">
      <h2>Documentation</h2>
    </div>

    <ListComp :items="sweDoc" />
  </div>
</template>

<style scoped>

</style>
