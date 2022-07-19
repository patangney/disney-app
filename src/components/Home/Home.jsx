import React, {Fragment} from 'react'
import {ImageSlider, Viewers, Movies} from '../index.js'

function Home() {
  return (
    <Fragment>
      <main className='main'>
        <ImageSlider />
        <Viewers />
        <Movies />
      </main>
    </Fragment>
  )
}

export default Home