<template>


  <div id="app">
        <CvHeader />
        <Intro />
        <About />
  </div>



</template>

<script>
  import CvHeader from "./components/CvHeader";
  import Intro from './components/Intro';
  import About from './components/About';

export default {
  name: 'app',
  components: {
    CvHeader,
    Intro,
    About
  }

}
</script>


<style>
  @import "assets/css/base.css";
  @import "assets/css/main.css";
  @import "assets/css/vendor.css";

</style>
