var chart = Highcharts.chart('chart1',{
	chart: {
		type: 'column'
	},
	title: {
		text: 'MAT2017-MAT2019国潮品牌渗透率趋势'
	},
	subtitle: {
		text: '数据来源: 有货电商平台'
	},
	xAxis: {
		categories: [
			'MAT2017','MAT2018','MAT2019'
		],
		crosshair: true
	},
	yAxis: {
		min: 0,
		title: {
			text: '渗透率'
		}
	},
	plotOptions: {
		column: {
			borderWidth: 0
		}
	},
	series: [{
		
		data: [25%,32%,38%]
	},]
});
