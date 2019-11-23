var chart = Highcharts.chart('ranking1', {
	title: {
		text: '李宁2007-2018营业收入'
	},
	subtitle: {
		text: '数据来源：李宁财报'
	},
	yAxis: {
		reversed:true,
		title: {
			text: '销售收入'
		},
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle'
	},
	plotOptions: {
		series: {
			label: {
				connectorAllowed: false
			},
			pointStart: 2007
		},
	},
	series: [{
		
		data: [43.49, 66.90, 83.87, 94.79, 89.29, 67.39, 58.24, 67.28, 70.89, 80.15, 88.74, 105.11]
	}],
	responsive: {
		rules: [{
			condition: {
				maxWidth: 500
			},
			chartOptions: {
				legend: {
					layout: 'horizontal',
					align: 'center',
					verticalAlign: 'bottom'
				},
			},
		}],
	},
});