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
`

const Test = styled.div`
  flex: 1;
  border: 1px solid black;
  background-color: cyan;
`

class App extends Component {
  render() {
    return (
      <Container>
        <NavigationBar />
        <TileContainer>
          <Test />
          <Test />
        </TileContainer>
      </Container>
    )
  }
}

export default App
