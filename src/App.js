import React, { Component } from 'react'
import styled from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faEnvelope,
  faKey,
  faDigitalTachograph,
} from '@fortawesome/free-solid-svg-icons'
import NavigationBar from 'components/NavigationBar'

library.add(faEnvelope, faKey, faDigitalTachograph)

const Container = styled.div`
  display: grid;
  grid-template-columns: 400px auto;
  background-image: linear-gradient(to bottom right, #474c65, #0f0f17);
  min-height: 100vh;
`

class App extends Component {
  render() {
    return (
      <Container>
        <NavigationBar />
      </Container>
    )
  }
}

export default App
