import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
	display: grid;
	grid-template-rows: 1fr 2fr;
	grid-gap: 10px;
	background-color: pink;
	margin: 50px 0 50px 60px;
	padding: 30px;
`

class TileContainer extends Component {
	render() {
		return <Container>{this.props.children}</Container>
	}
}

export default TileContainer
