<template>
    <div id="popups">
        <div class="overlay" @click="closePop('imagesPop')"></div>
        <div class="popupsWrapper">
            <div id="imagesPop" class="pop-content">
                <div class="close-pop">
                    <a target="_blank" download><i class="fa fa-download"></i></a>
                    
                    <i @click="closePop('imagesPop')" class="fa fa-times"></i>
                </div>
                <img src="" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    import modal from '../../assets/scripts/popup';
    export default {
        name: "Popup",
        methods: {
            closePop(id){
                    modal.close(id)
            },
        }
    }
</script>

<style scoped>

</style>