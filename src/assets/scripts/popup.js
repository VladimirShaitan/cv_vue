export default {
    open(src, popId) {
        document.querySelector('#popups').classList.add('open');
        document.querySelector(`#popups #${popId}`).classList.add('open');
        document.querySelector('#popups .overlay').classList.add('open');
        document.querySelector(`#popups #${popId} img`).src = src;
        document.querySelector(`#popups a`).href = src;
        pageOffset =  pageYOffset;

        window.addEventListener('scroll', this.scrollListener);

    },
    close(popId) {
        setTimeout(function () {
            document.querySelector('#popups').classList.remove('open');
        }, 300);
        document.querySelector('#popups .overlay').classList.remove('open');
        document.querySelector(`#popups #${popId}`).classList.remove('open');
        window.removeEventListener('scroll', this.scrollListener);
    },

    scrollListener(){
        window.scrollTo(0, pageOffset);
    }

};

let pageOffset;