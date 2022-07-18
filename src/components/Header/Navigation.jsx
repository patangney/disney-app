import React from 'react'
import User from './User'

const Navigation = () => {
  return (
    <div className='nav'>      
        <img className='nav__logo' src='/assets/images/logo.svg' />
        <div className='nav__menu'>
          <a className='nav__menu__item'>
            <img src='/assets/images/home-icon.svg' />
            <span>Home</span>
          </a>
          <a className='nav__menu__item'>
            <img src='/assets/images/search-icon.svg' />
            <span>Search</span>
          </a>
          <a className='nav__menu__item'>
            <img src='/assets/images/watchlist-icon.svg' />
            <span>Watchlist</span>
          </a>
          <a className='nav__menu__item'>
            <img src='/assets/images/original-icon.svg' />
            <span>Originals</span>
          </a>
          <a className='nav__menu__item'>
            <img src='/assets/images/movie-icon.svg' />
            <span>Movie</span>
          </a>
          <a className='nav__menu__item'>
            <img src='/assets/images/series-icon.svg' />
            <span>Series</span>
          </a>
        </div>
        <User />
      
    </div>
  )
}

export default Navigation
