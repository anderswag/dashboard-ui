import React, { Component } from 'react'
import styled from 'styled-components'

import Tile from 'components/Tile'
import BarGraph from 'components/BarGraph'

const Container = styled.div`
	display: grid;
	grid-template-rows: 300px 1.2fr;
	grid-gap: 20px;
	margin: 50px 0 50px 0;
	padding: 30px;
`

const TileGroup = styled.div`
	display: grid;
	grid-gap: 20px;

	grid-template-columns: ${props => (props.full ? '1fr' : '1fr 1fr')};
`

class TileContainer extends Component {
	render() {
		return (
			<Container>
				{this.renderTopTiles()}
				{this.renderBottomTiles()}
			</Container>
		)
	}

	renderTopTiles() {
		return (
			<TileGroup full={true}>
				<Tile>
					<BarGraph />
				</Tile>
			</TileGroup>
		)
	}
	renderBottomTiles() {
		return (
			<TileGroup>
				<Tile />
				<Tile />
			</TileGroup>
		)
	}
}

export default TileContainer
