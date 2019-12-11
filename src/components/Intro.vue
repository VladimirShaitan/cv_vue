<template>
    <section id="intro">
        <div class="intro-overlay"></div>
        <div class="intro-content">
            <div class="row">
                <div class="col-twelve">
                    <h5>Hello, World.</h5>
                    <h1>I'm {{aboutMe.name}}</h1>
                    <p class="intro-position">
                        <span v-for="(position, index) in aboutMe.positions" :key="index">
                            {{position}}
                        </span>
                    </p>
                    <a class="button stroke smoothscroll" href="#about" title="">More About Me</a>
                </div>
            </div>
        </div> <!-- /intro-content -->
        <ul class="intro-social" v-if="aboutMe.socials != false">
            <li v-for="(social, index) in aboutMe.socials" :key="index">
                <a :href="social.href" target="_blank">
                    <i :class="'fa fa-'+social.name"></i>
                </a>
            </li>
        </ul> <!-- /intro-social -->
    </section> <!-- /intro -->
</template>

<script>
    import about from '../assets/JSON/about.json';

    export default {
        name: "Intro",
        data() {
            return {
                aboutMe: about,
            };
        }
    }
</script>