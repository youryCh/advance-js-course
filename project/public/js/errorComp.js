Vue.component('error', {
    data() {
        return {
            message: ''
        }
    },
    methods: {
        setError(error) {
            this.massage = error;
        }
    },
    computed: {
        isVisible() {            
            return this.message !== '';
        }
    },
    template: `
        <div class="error-block" v-if="isVisible"> 
            <p class="error-msg">
                <button class="close-btn" @click="setError('')">&times;</button>
                {{ message }}
            </p>
        </div>
    `
});