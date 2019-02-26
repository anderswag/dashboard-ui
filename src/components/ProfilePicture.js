import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
	height: 40px;
	width: 40px;
	border-radius: 5px;
	background-color: white;
	overflow: hidden;
`

const Image = styled.img`
	max-width: 100%;
	max-height: 100%;
`

type ProfilePictureType = {
	url: string,
}

class ProfilePicture extends Component<ProfilePictureType> {
	render() {
		const { url } = this.props
		return (
			<Container>
				<Image src={url} alt='profile_picture' />
			</Container>
		)
	}
}

export default ProfilePicture
