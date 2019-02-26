import React, { Component } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Item = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;

	p {
		margin-left: 10px;
	}
`

type NavItemType = {}

class NavItem extends Component<NavItemType> {
	render() {
		return (
			<Item>
				<FontAwesomeIcon icon='digital-tachograph' />
				<p>DASHBOARD</p>
			</Item>
		)
	}
}

export default NavItem
