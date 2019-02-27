import React, { Component } from 'react'
import styled from 'styled-components'
import '../node_modules/react-vis/dist/style.css'
import { XYPlot, LineSeries } from 'react-vis'
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

const data = [
  { x: 0, y: 8 },
  { x: 1, y: 5 },
  { x: 2, y: 4 },
  { x: 3, y: 9 },
  { x: 4, y: 1 },
  { x: 5, y: 7 },
  { x: 6, y: 6 },
  { x: 7, y: 3 },
  { x: 8, y: 2 },
  { x: 9, y: 0 },
]

class App extends Component {
  render() {
    return (
      <Container>
        <NavigationBar />
        <TileContainer>
          <Test>
            <XYPlot height={300} width={300}>
              <LineSeries data={data} />
            </XYPlot>
          </Test>
          <Test />
        </TileContainer>
      </Container>
    )
  }
}

export default App
