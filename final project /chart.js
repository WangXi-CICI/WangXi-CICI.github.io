

var chart = c3.generate({
    data: {
        columns: [
            ['中国品牌', 38],
            ['境外品牌', 62],
        ],
        type : 'donut'
    },
    donut: {
        title: "Dogs love:",
    }
});