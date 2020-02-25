<template>
    <section id="portfolio">
        <div class="row section-intro">
            <div class="col-twelve">
                <h5>Portfolio</h5>
                <h1>Check Out Some of My Works.</h1>
                <p class="lead">
                    It's my portfolio down there? Oh yes it is
                </p>
            </div>
        </div> <!-- /section-intro-->
        <div class="row portfolio-content">
            <div class="col-twelve">
                <!-- portfolio-wrapper -->
                <div id="folio-wrapper" class="block-1-2 block-mob-full stack">

                    <template v-for="(item, index) in portfolio">
                        <div class="bgrid folio-item" :key="index" :style="index % 2 != 0 &&  index != 1 ?  'transform:translateY(-138px)' : ''">
                            <div class="item-wrap">
                                <img :src="item.img" alt="Liberty">
                                <a href="#modal-01" class="overlay">
                                    <div class="folio-item-table">
                                        <div class="folio-item-cell">
                                            <h3 class="folio-title">{{item.name}}</h3>
                                            <span class="folio-types">
                                                {{item.subName}}
                                            </span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </template>



                </div> <!-- /portfolio-wrapper -->
            </div> <!-- /twelve -->
        </div> <!-- /portfolio-content -->
    </section> <!-- /portfolio -->
</template>

<script>
    import portfolio from '../assets/JSON/portfolio.json';

    export default {
        name: "Portfolio",
        data(){
            return {
                portfolio: portfolio,
            }
        }
    }
</script>