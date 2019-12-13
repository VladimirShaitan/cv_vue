<template>
    <div id="popups">
        <div class="overlay"></div>
        <div class="popupsWrapper">
            <div id="imagesPop" class="pop-content">
                <div class="close-pop"><i @click="closePop('imagesPop')" class="fa fa-times"></i></div>
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