import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
	width: 100%;
	height: 100%;
`

const Header = styled.div`
	height: 30px;
`

const BarContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: flex-end;
	height: 100%;
`

const Bar = styled.div`
	width: 90px;
	height: 200px;
	background-color: #4c4d5c;
	margin-right: 2px;
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
				<BarContainer>
					<Bar />
				</BarContainer>
			</Container>
		)
	}

	renderBar() {}
}

export default BarGraph
