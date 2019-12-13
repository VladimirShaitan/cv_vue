<template>
    <section id="stats" class="count-up">
        <div @mouseover="stopSliderAutoplay" @mouseout="startSliderAutoplay">
            <div class="row">
                <div class="col-twelve">
                    <div class="block-1-6 block-s-1-3 block-tab-1-2 block-mob-full stats-list">

                        <div class="carousell-wrapper" @click="popup($event)" :class="slider.transition ? 'transition' : ''" :style="'width:'+slider.hiddenArea.width+'px; transform:translate('+slider.position+'px)'">

                            <template v-for="(cert, index) in certs">
                                <div class="slide" :key="index" :style="'width:'+slider.slide.width+'px;padding-right:'+ slider.slide.indent+'px'">
                                    <img class="image-pop" :src="cert.url" alt="">
                                </div>
                            </template>

                        </div>

                    </div>
                </div>
                <div @click="minusSlide()" class="arrow arr-left" :class="slider.arr.visible ? 'visible' : ''"><i class="fa fa-chevron-left"></i></div>
                <div @click="plusSlide()" class="arrow arr-right" :class="slider.arr.visible ? 'visible' : ''"><i class="fa fa-chevron-right"></i></div>
            </div>
        </div>
    </section>
</template>

<script>

    import certificates from '../assets/JSON/certificates.json';
    import modal from '../assets/scripts/popup';

    export default {
        name: "Certificates",
        components:{
            // Popup
        },
        data(){
            return {
                certs: certificates.reverse(),
                slider: {
                    transition: false,
                    defaultSlidesToShow: 5,
                    slidesToShow: 0,
                    interval: 1600,
                    intervalState: 0,
                    position: 0,
                    visibleArea: {
                        width: 0,
                        indent: 40
                    },
                    hiddenArea: {
                        width: 0
                    },
                    slide: {
                        width: 0,
                        indent: 10
                    },
                    arr:{
                        visible: false
                    }
                },
            }
        },
        methods: {
          plusSlide() {
              this.calcSlidesOnResize ();
              let oldPosition = this.slider.position;
              // this.slider.position -= this.slider.slide.width * this.slider.slidesToShow;
              this.slider.position -= this.slider.slide.width;
              this.slider.position = Math.max(this.slider.position, -this.slider.slide.width * (this.certs.length - this.slider.slidesToShow));
              if(this.slider.position === oldPosition) {
                  this.slider.position = 0;
              }
          },

          minusSlide () {
              this.calcSlidesOnResize ();
              let oldPosition = this.slider.position;
              // this.slider.position += this.slider.slide.width * this.slider.slidesToShow;
              this.slider.position += this.slider.slide.width;
              this.slider.position = Math.min(this.slider.position, 0);
              if(oldPosition === 0) {
                  this.slider.position = -this.slider.slide.width * (this.certs.length  - this.slider.slidesToShow)
              }
          },

            calcSlidesOnResize () {
                if(document.body.clientWidth >= 992) {
                    this.slider.slidesToShow = this.slider.defaultSlidesToShow;
                } else if(document.body.clientWidth >= 767) {
                    this.slider.slidesToShow = 3;
                } else {
                    this.slider.slidesToShow = 1;
                }
            },

            stopSliderAutoplay () {
              this.slider.arr.visible = true;
              clearInterval(this.slider.intervalState);
            },

            startSliderAutoplay () {
                this.slider.arr.visible = false;
                this.slider.intervalState = setInterval(this.plusSlide, this.slider.interval);
            },


            popup(event) {
              if(event.target.classList.contains('image-pop')) {
                  modal.open(event.target.src, 'imagesPop');
              }
            }

        },
        mounted() {
            //show Slides
            this.calcSlidesOnResize();

            // lunch slider autoplay
            this.startSliderAutoplay();

            // calc slider actual slider width
            this.slider.visibleArea.width = document.querySelector('#stats .row .col-twelve').clientWidth;
            this.slider.visibleArea.width -= this.slider.visibleArea.indent;

            // calc slide width
            this.slider.slide.width = this.slider.visibleArea.width / this.slider.slidesToShow + (this.slider.slide.indent / this.slider.slidesToShow);

            // hidden area width
            this.slider.hiddenArea.width = this.slider.slide.width * this.certs.length;

            // add transition to slider
            this.slider.transition = true;

        }

    }
</script>