<template>
    <section id="about">
        <div class="row section-intro">
            <div class="col-twelve">
                <h5>About</h5>
                <h1>Let me introduce myself.</h1>
                <div class="intro-info">
                    <img src="../assets/images/vovan_shaitan.jpg" alt="Profile Picture">
                    <p class="lead">{{aboutMe.bio}}</p>
                </div>
            </div>
        </div> <!-- /section-intro -->
        <div class="row about-content">
            <div class="col-six tab-full">
                <h3>Profile</h3>
                <ul class="info-list">
                    <li>
                        <strong>Fullname:</strong>
                        <span>{{aboutMe.fullName}}</span>
                    </li>
                    <li>
                        <strong>Birth Date:</strong>
                        <span>{{aboutMe.birthDate}}</span>
                    </li>
                    <li>
                        <strong>Job:</strong>
                        <span>{{aboutMe.currentPosition}}</span>
                    </li>
                    <li>
                        <strong>Website:</strong>
                        <span>{{aboutMe.website}}</span>
                    </li>
                    <li>
                        <strong>Email:</strong>
                        <span>{{aboutMe.email}}</span>
                    </li>
                </ul> <!-- /info-list -->
            </div>
            <div class="col-six tab-full">
                <h3>Skills</h3>
               <ul class="skill-bars">
                   <template v-for="(skill, index) in skills" >
                       <li  v-if="index < 5" :key="index">
                           <div :class="'progress percent'+skill.percentage"><span>{{skill.percentage}}</span></div>
                           <strong>{{skill.name}}</strong>
                       </li>
                   </template>
                </ul> <!-- /skill-bars -->
            </div>
        </div>
        <div class="row button-section">
            <div class="col-twelve">
                <a href="#contact" title="Contact me" class="button stroke smoothscroll">Contact me</a>
                <a href="https://drive.google.com/uc?authuser=0&id=1MPCsB9DTjUPEcWODXHufUN4ufZHw5QCO&export=download" title="Download CV" class="button button-primary" target="_blank">Download CV</a>
            </div>
        </div>
    </section> <!-- /process-->
</template>

<script>
    import about from '../assets/JSON/about.json';
    import skills from '../assets/JSON/skills.json';
    export default {
        name: "About",
        data(){
            return {
                aboutMe: about,
                skills: skills
            }
        }
    }
</script>

<style scoped>

</style>