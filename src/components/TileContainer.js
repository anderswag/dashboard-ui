import React, { Component } from 'react'
import styled from 'styled-components'

import Tile from 'components/Tile'

const Container = styled.div`
	display: grid;
	grid-template-rows: 1fr 1.2fr;
	grid-gap: 20px;
	margin: 50px 0 50px 0;
	padding: 30px;
`

class TileContainer extends Component {
	render() {
		return (
			<Container>
				<Tile />
				<Tile />
			</Container>
		)
	}
}

export default TileContainer
