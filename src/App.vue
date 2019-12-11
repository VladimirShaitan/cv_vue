<template>


  <div id="app">
        <CvHeader />
        <Intro />
  </div>



</template>

<script>
  import CvHeader from "./components/CvHeader";
  import Intro from './components/Intro';

export default {
  name: 'app',
  components: {
    CvHeader,
    Intro
  }

}
</script>


<style>
  @import "assets/css/base.css";
  @import "assets/css/main.css";
  @import "assets/css/vendor.css";

</style>
