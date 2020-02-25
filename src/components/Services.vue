<template>
    <section id="services">
        <div class="overlay"></div>
        <div class="row section-intro">
            <div class="col-twelve">
                <h5>Services</h5>
                <h1>What Can I Do For You?</h1>
                <p class="lead">
                    A website I think because I'm a web developer, but also we can drink some ( tea? no way! ) and talk about things
                </p>
            </div>
        </div> <!-- /section-intro -->
        <div class="row services-content">
            <div class="services-list">

                <template v-for="(service, index) in services">
                    <div class="service" :key="index">
                        <span class="icon"><i :class="service.icon"></i></span>
                        <div class="service-content">
                            <h3>{{service.name}}</h3>
                            <p class="desc">{{service.description}}</p>
                        </div>
                    </div> <!-- /service -->
                </template>

            </div> <!-- /services-list -->
        </div> <!-- /services-content -->
    </section> <!-- /services -->
</template>



<script>
    import services from '../assets/JSON/services.json';

    export default {
        name: "Services",
        data() {
            return {
                services: services
            }
        }
    }
</script>

<style scoped>

</style>