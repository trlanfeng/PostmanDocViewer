let app = new Vue({
    el: '#app',
    data: {
        info: {
            name: '123'
        },
        data: {},
        header: {}
    },
    mounted() {
        $.get('./collection.json')
            .then(response => {
                this.info = response.info;
                this.data = response.item;
                this.$nextTick(() => {
                    // JSON.parse(this.data[i].response[0].body);
                    $('.json_container').each((index, element) => {
                        let json_text = $(element).children('.json_text').text();
                        try {
                            new JSONEditor(element, {mode: 'view'}, JSON.parse(json_text));
                        } catch (e) {
                            //
                        }
                    });
                });
            });
    },

});