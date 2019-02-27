import React, { Component } from 'react'
import styled from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faEnvelope,
  faKey,
  faDigitalTachograph,
} from '@fortawesome/free-solid-svg-icons'
import NavigationBar from 'components/NavigationBar'
import TileContainer from 'components/TileContainer'

library.add(faEnvelope, faKey, faDigitalTachograph)

const Container = styled.div`
  display: grid;
  grid-template-columns: 400px auto;
  background-image: linear-gradient(to bottom right, #474c65, #0f0f17);
  min-height: 100vh;
  padding-left: 60px;
  padding-right: 60px;
  opacity: 0.9;
`

class App extends Component {
  render() {
    return (
      <Container>
        <NavigationBar />
        <TileContainer />
      </Container>
    )
  }
}

export default App
