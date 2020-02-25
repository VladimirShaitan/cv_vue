<template>
    <section id="resume" class="grey-section">
        <div class="row section-intro">
            <div class="col-twelve">
                <h5>Resume</h5>
                <h1>More of my credentials.</h1>
                <p class="lead">JavaScript developer, Freelancer <br> ex Front-end teacher (Ampli)</p>
            </div>
        </div> <!-- /section-intro-->
        <div class="row resume-timeline">
            <div class="col-twelve resume-header">
                <h2>Work Experience</h2>
            </div> <!-- /resume-header -->
            <div class="col-twelve">
                <div class="timeline-wrap">

                    <template v-for="(jobPlace, index) in experience">
                        <div class="timeline-block" :key="index" v-if="index < 4">
                            <div class="timeline-ico">
                                <i class="fa fa-briefcase"></i>
                            </div>
                            <div class="timeline-header">
                                <h3>{{jobPlace.position}}</h3>
                                <p>{{jobPlace.start}} - {{jobPlace.end}}</p>
                            </div>
                            <div class="timeline-content">
                                <h4>{{jobPlace.name}}</h4>
                                <p>{{jobPlace.description}}</p>
                            </div>
                        </div> <!-- /timeline-block -->
                    </template>

                </div> <!-- /timeline-wrap -->
<!--                <div class="text-center view_more">-->
<!--                    <a href="#" title="Download CV" class="button button-primary">View more</a>-->
<!--                </div>-->
            </div> <!-- /col-twelve -->
        </div> <!-- /resume-timeline -->
        <div class="row resume-timeline">
            <div class="col-twelve resume-header">
                <h2>Education</h2>
            </div> <!-- /resume-header -->
            <div class="col-twelve">
                <div class="timeline-wrap">

                    <template v-for="(education, index) in educations">
                        <div class="timeline-block" :key="index">
                            <div class="timeline-ico">
                                <i class="fa fa-graduation-cap"></i>
                            </div>
                            <div class="timeline-header">
                                <h3>{{education.degree}}</h3>
                                <p>{{education.start}} - {{education.end}}</p>
                            </div>
                            <div class="timeline-content">
                                <h4>{{education.name}}</h4>
                                <p>{{education.description}}</p>
                            </div>
                        </div> <!-- /timeline-block -->
                    </template>


                </div> <!-- /timeline-wrap -->

<!--                <div class="text-center view_more">-->
<!--                    <a href="#" title="Download CV" class="button button-primary" style="margin-bottom: 0">View more</a>-->
<!--                </div>-->

            </div> <!-- /col-twelve -->
        </div> <!-- /resume-timeline -->
    </section> <!-- /features -->
</template>

<script>
    import ex_ad from '../assets/JSON/experience_and_education.json';
    export default {
        name: "Resume",
        data(){
            return {
                experience: ex_ad.experience.reverse(),
                educations: ex_ad.education.reverse()
            }
        }
    }
</script>

<style scoped>

</style>