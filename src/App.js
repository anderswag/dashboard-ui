import React, { Component } from 'react'
import styled from 'styled-components'

import NavigationBar from 'components/NavigationBar'

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
