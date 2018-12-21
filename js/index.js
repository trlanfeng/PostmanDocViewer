var app = new Vue({
    el: '#app',
    data: {
        info: {
            name: '123'
        },
        data: {},
        header: {}
    },
    mounted: function () {
        var _this = this;
        $.get('./collection.json')
            .then(function (response) {
            _this.info = response.info;
            _this.data = response.item;
            _this.$nextTick(function () {
                // JSON.parse(this.data[i].response[0].body);
                $('.json_container').each(function (index, element) {
                    var json_text = $(element).children('.json_text').text();
                    try {
                        new JSONEditor(element, { mode: 'view' }, JSON.parse(json_text));
                    }
                    catch (e) {
                        //
                    }
                });
            });
        });
    }
});
