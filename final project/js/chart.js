    var chart = Highcharts.chart('trend', {
	chart: {
		type: 'line'
	},
	title: {
		text: '国潮品牌市场渗透率'
	},
	subtitle: {
		text: '数据来源:《2019中国潮流消费发展白皮书》'
	},
	xAxis: {
		categories: ['2017年', '2018年', '2019年']
	},
	yAxis: {
		title: {
			text: '市场渗透率 (%)'
		}
	},
	plotOptions: {
		line: {
			dataLabels: {
				// 开启数据标签
				enabled: true          
			},
			// 关闭鼠标跟踪，对应的提示框、点击事件会失效
			enableMouseTracking: false
		}
	},
	series: [{
		name: 'MAT2017-MAT2019',
		data: [25,32,38]
	}]
});
