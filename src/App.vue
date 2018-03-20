<template>
  <div id="app">
    <SpotyNavbar />
    <SpotySearch />
    <SpotyResults />
    <SpotyResults />                               
  </div>
</template>

<script>
import SpotyNavbar from '@/components/SpotyNavbar';
import SpotySearch from '@/components/SpotySearch';
import SpotyResults from '@/components/SpotyResults';

export default {
  name: 'app',
  components: {
    SpotyNavbar,
    SpotySearch,
    SpotyResults,
  },
};
</script>
