import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
	background-color: #0f0f17;
	opacity: 0.2;
`

class Tile extends Component {
	render() {
		return <Container>{this.props.children}</Container>
	}
}

export default Tile
