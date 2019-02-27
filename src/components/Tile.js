import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
	background-color: rgba(15, 15, 23, 0.2);
	border-radius: 8px;
	overflow: hidden;
`

class Tile extends Component {
	render() {
		return <Container>{this.props.children}</Container>
	}
}

export default Tile
