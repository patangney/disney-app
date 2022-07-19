import React from 'react'

const Details = () => {
  return (
    <div className='details'>
      <div className='details__container'>
        <div className='details__image-bg'>
          <img
            src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/01E873C686EF29975B3760568B754A514BF7D4B5C3E8F89B180C8753EE1D0D78/scale?width=1440&aspectRatio=1.78&format=jpeg'
            alt=''
          />
          <div className="details__image-overlay">

          </div>
        </div>
        <div className='details__image-title'>
          <img
            src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E83AAB9620FC72320D8CBA8D5E1421635AC4C961B08ADC3F691B031A24D7CD38/scale?width=1440&aspectRatio=1.78&format=png'
            alt=''
          />
        </div>
        <div className="details__subtitle">
            <p className='release'>2018</p>
            <p className='genre'>Family, Fantasy, Kids, Animation</p>
        </div>
        <div className='details__controls'>
          <button className='details__controls--playButton'>
            <img src="/assets/images/play-icon-black.png" alt="play"/>
            <span>Play</span>
          </button>
          <button className='details__controls--trailerButton'>
          <img src="/assets/images/play-icon-white.png" alt="play"/>
            <span>Trailer</span>
          </button>
          <button className='details__controls--addButton'>
          <img src="/assets/images/watchlist-icon.svg" alt="group"/>
            
          </button>
          <button className='details__controls--groupWatchButton'>
            <img src="/assets/images/group-icon.png" alt="group"/>
            
          </button>
        </div>
        <div className="details__description">
        A Chinese mom who’s sad when her grown son leaves home gets another chance at motherhood when one of her dumplings springs to life. But she finds that nothing stays cute and small forever.
        </div>
       
      </div>
    </div>
  )
}

export default Details
