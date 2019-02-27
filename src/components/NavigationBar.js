import React, { Component } from 'react'
import styled from 'styled-components'

import ProfilePicture from 'components/ProfilePicture'
import NavItem from 'components/NavItem'

const Container = styled.div`
	margin: 50px 0 50px 0;
	padding: 30px;
	color: #fffff4;
	background-color: green;
`
const ProfileContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	margin-bottom: 100px;

	p {
		margin-left: 10px;
	}
`

const ItemContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 10px;
`
const Item = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;

	p {
		margin-left: 10px;
	}
`

const mockUrl =
	'https://media.licdn.com/dms/image/C5603AQF6Zhed_nvc5A/profile-displayphoto-shrink_200_200/0?e=1556755200&v=beta&t=AGvvahfKkDLTssmvuP5RpA_ya00IWU8gi2CVt-Zw7pI'

class NavigationBar extends Component {
	render() {
		return (
			<Container>
				<ProfileContainer>
					<ProfilePicture url={mockUrl} />
					<p>Anderson Hung</p>
				</ProfileContainer>
				{this.renderItems()}
			</Container>
		)
	}

	renderItems() {
		return (
			<ItemContainer>
				<NavItem />
			</ItemContainer>
		)
	}
}

export default NavigationBar
