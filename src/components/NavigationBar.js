import React, { Component } from 'react'
import styled from 'styled-components'

import ProfilePicture from 'components/ProfilePicture'

const Container = styled.div`
	background-color: pink;
	border: 1px solid black;
	margin: 50px 0 50px 60px;
	padding: 30px;
	color: #fffff4;
`
const ProfileContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	border: 1px solid black;

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
			</Container>
		)
	}
}

export default NavigationBar
