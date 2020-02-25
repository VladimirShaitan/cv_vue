<template>
    <section id="contact">
        <div class="row section-intro">
            <div class="col-twelve">
                <h5>Contact</h5>
                <h1>I'd Love To Hear From You.</h1>
            </div>
        </div> <!-- /section-intro -->
        <div class="row contact-form">
            <div class="col-twelve">
                <!-- form -->
                <form v-if="!sendMessage" @submit.prevent="sendEmail($event)" name="contactForm" id="contactForm" method="post" action="" novalidate="novalidate" >
                    <fieldset>
                        <div class="form-field">
                            <input name="contactName" required type="text" id="contactName" placeholder="Name" >
                        </div>
                        <div class="form-field">
                            <input name="contactEmail" required type="email" id="contactEmail" placeholder="Email">
                        </div>
                        <div class="form-field">
                            <input name="contactSubject" required type="text" id="contactSubject" placeholder="Subject">
                        </div>
                        <div class="form-field">
                            <textarea name="contactMessage" required id="contactMessage" placeholder="message" rows="10" cols="50" style="margin: 0px; max-width: 738px; height: 255px;resize:none"></textarea>
                        </div>
                        <div class="form-field">
                            <button class="submitform">Submit</button>
                            <div id="submit-loader">
                                <div class="text-loader">Sending...</div>
                                <div class="s-loader">
                                    <div class="bounce1"></div>
                                    <div class="bounce2"></div>
                                    <div class="bounce3"></div>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </form> <!-- Form End -->
                <div v-else class="success-message">
                    Hey you, I will answer ASAP, Thanks for request!
                </div>
                <!-- contact-warning -->
                <div id="message-warning">
                </div>
                <!-- contact-success -->
                <div id="message-success">
                    <i class="fa fa-check"></i>Your message was sent, thank you!<br>
                </div>
            </div> <!-- /col-twelve -->
        </div> <!-- /contact-form -->
        <div class="row contact-info">
            <div class="col-four tab-full">
                <div class="icon">
                    <i class="icon-pin"></i>
                </div>
                <h5>Where to find me</h5>
                <p>Odessa, Ukraine</p>
            </div>
            <div class="col-four tab-full collapse">
                <div class="icon">
                    <i class="icon-mail"></i>
                </div>
                <h5>Email Me At</h5>
                <p>shaitan.vladimir@gmail.com</p>
            </div>
            <div class="col-four tab-full">
                <div class="icon">
                    <i class="icon-phone"></i>
                </div>
                <h5>Telegram:</h5>
                <p>@vlad_sha2</p>
            </div>
        </div> <!-- /contact-info -->
    </section>
</template>

<script>
    export default {
        name: "ContuctMe",
        data(){
            return {
                formData: {},
                sendMessage: true,
                bot: {
                    token: '1129483343:AAHH9pydDOdFYucj7BRzluMgR1R4xkIieIw',
                    chatId: '-453410566'
                }
            }
        },
        mounted() {
            this.sendMessage = localStorage.getItem('sendMessage');
        },
        methods: {
           async sendEmail({target}){
                const formDataTemp = new FormData(target);

                if(
                    !formDataTemp.get('contactName') ||
                    !formDataTemp.get('contactEmail') ||
                    !formDataTemp.get('contactSubject') ||
                    !formDataTemp.get('contactMessage')
                ){
                    alert("Please fill all fields :)");
                    return false;
                }
                target.reset();

                const meassage =  `<b><i>New message from your'e site</i></b>%0A%0A<b>Name:</b> %0A<i>${formDataTemp.get('contactName')}</i>%0A%0A<b>Email:</b> %0A<i>${formDataTemp.get('contactEmail')}</i>%0A%0A<b>Subject:</b> %0A<i>${formDataTemp.get('contactSubject')}</i>%0A%0A<b>Message:</b> %0A<i>${formDataTemp.get('contactMessage')}</i>%0A%0AThanks for attention :)`;
                await this.axios.post(`https://api.telegram.org/bot${this.bot.token}/sendMessage?chat_id=${this.bot.chatId}&parse_mode=html&text=${meassage}&parse_mode=HTML`);
                this.sendMessage = true;
               localStorage.setItem('sendMessage', 'true');

            }
        }
    }
</script>

<style scoped>
    .success-message {
        color: #FF0077;
        border: 3px solid;
        padding: 20px 0;
        text-align: center;
        font-size: 25px;
    }
</style>