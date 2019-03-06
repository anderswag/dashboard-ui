import React, { Component } from 'react'
import styled from 'styled-components'
import { XYPlot, XAxis, YAxis, LabelSeries, VerticalBarSeries } from 'react-vis'

const data = [
	{ x: 'A', y: 10 },
	{ x: 'B', y: 5 },
	{ x: 'C', y: 10 },
	{ x: 'D', y: 9 },
	{ x: 'E', y: 9 },
	{ x: 'F', y: 12 },
	{ x: 'G', y: 15 },
]

const dataWithColor = data.map((d, i) => {
	return {
		...d,
		color: Number(i === data.length - 1) ? '#fc6392' : '#4c4d5c',
	}
})

const Container = styled.div`
	width: 100%;
	height: 100%;
`

const Header = styled.div`
	height: 50px;
	p {
		padding-left: 10px;
		padding-top: 10px;
		color: white;
	}
`

const BarContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: flex-end;
	height: 100%;
`

type BarGraphType = {
	title: string,
	data: [
		{
			date: Date,
			value: number,
		},
	],
}

class BarGraph extends Component<BarGraphType> {
	render() {
		return (
			<Container>
				<Header>
					<p>Views</p>
				</Header>
				<BarContainer>{this.renderBar()}</BarContainer>
			</Container>
		)
	}

	renderBar() {
		return (
			<XYPlot xType='ordinal' width={600} height={300} xDistance={100}>
				<XAxis />
				<YAxis />
				<VerticalBarSeries colorType='literal' data={dataWithColor} />
			</XYPlot>
		)
	}
}

export default BarGraph
