<template>


  <div id="app">
        <CvHeader />
        <Intro />
        <About />
        <Resume />
        <Portfolio />
        <Services />
  </div>



</template>

<script>
  import CvHeader from "./components/CvHeader";
  import Intro from './components/Intro';
  import About from './components/About';
  import Resume from './components/Resume';
  import Portfolio from './components/Portfolio';
  import Services from './components/Services';

export default {
  name: 'app',
  components: {
    CvHeader,
    Intro,
    About,
    Resume,
    Portfolio,
    Services

  }

}
</script>


<style>
  @import "assets/css/base.css";
  @import "assets/css/main.css";
  @import "assets/css/vendor.css";

</style>
