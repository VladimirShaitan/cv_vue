<template>


  <div id="app">
        <CvHeader />
        <Intro />
        <About />
        <Resume />
  </div>



</template>

<script>
  import CvHeader from "./components/CvHeader";
  import Intro from './components/Intro';
  import About from './components/About';
  import Resume from './components/Resume';

export default {
  name: 'app',
  components: {
    CvHeader,
    Intro,
    About,
    Resume
  }

}
</script>


<style>
  @import "assets/css/base.css";
  @import "assets/css/main.css";
  @import "assets/css/vendor.css";

</style>
