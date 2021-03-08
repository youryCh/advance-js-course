Vue.component('error', {
    data() {
        return {
            showError: false,
        }
    },
    template: `
        <h4 class="error" v-show="showError">Ошибка</h4>       
    `,
});