import React, {Fragment} from 'react'
import {ImageSlider, Viewers} from '../index.js'

function Home() {
  return (
    <Fragment>
      <main className='main'>
        <ImageSlider />
        <Viewers />
      </main>
    </Fragment>
  )
}

export default Home