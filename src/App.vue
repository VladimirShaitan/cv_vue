<template>


  <div id="app">
<!--        <CvHeader />-->
        <Intro />
        <About />
        <Resume />
        <Portfolio />
        <Services />
        <Certificates />
        <Popup />
        <ContuctMe />
  </div>



</template>

<script>
  // import CvHeader from "./components/CvHeader";
  import Intro from './components/Intro';
  import About from './components/About';
  import Resume from './components/Resume';
  import Portfolio from './components/Portfolio';
  import Services from './components/Services';
  import Certificates from './components/Certificates';
  import Popup from './components/popup/popup';
  import ContuctMe from "./components/ContuctMe";

export default {
  name: 'app',
  components: {
    // CvHeader,
    Intro,
    About,
    Resume,
    Portfolio,
    Services,
    Certificates,
    Popup,
    ContuctMe
  }

}
</script>


<style>
  @import "assets/css/base.css";
  @import "assets/css/main.css";
  @import "assets/css/vendor.css";

</style>
