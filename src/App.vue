<template>


  <div id="app">
        <CvHeader />
        <Intro />
        <About />
        <Resume />
        <Portfolio />
  </div>



</template>

<script>
  import CvHeader from "./components/CvHeader";
  import Intro from './components/Intro';
  import About from './components/About';
  import Resume from './components/Resume';
  import Portfolio from './components/Portfolio';

export default {
  name: 'app',
  components: {
    CvHeader,
    Intro,
    About,
    Resume,
    Portfolio
  }

}
</script>


<style>
  @import "assets/css/base.css";
  @import "assets/css/main.css";
  @import "assets/css/vendor.css";

</style>
