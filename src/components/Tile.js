import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
	flex: 1;
	background-color: #0f0f17;
	opacity: 0.1;
`

class Tile extends Component {
	render() {
		return <Container>{this.props.children}</Container>
	}
}

export default Tile
