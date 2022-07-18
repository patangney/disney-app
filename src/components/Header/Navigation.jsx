import React from 'react'
import User from './User'

const Navigation = () => {
  return (
    <div className='nav'>      
        <img className='nav__logo' src='/assets/images/logo.svg' />
        <div className='nav__menu'>
          <a href='#' className='nav__menu__item'>
            <img src='/assets/images/home-icon.svg' alt='home' />
            <span>Home</span>
          </a>
          <a  href='#' className='nav__menu__item'>
            <img src='/assets/images/search-icon.svg' alt='search' />
            <span>Search</span>
          </a>
          <a href='#' className='nav__menu__item'>
            <img src='/assets/images/watchlist-icon.svg' alt='watchlist' />
            <span>Watchlist</span>
          </a>
          <a href='#' className='nav__menu__item'>
            <img src='/assets/images/original-icon.svg' alt='originals' />
            <span>Originals</span>
          </a>
          <a  href='#' className='nav__menu__item'>
            <img src='/assets/images/movie-icon.svg' alt='movie' />
            <span>Movie</span>
          </a>
          <a  href='#' className='nav__menu__item'>
            <img src='/assets/images/series-icon.svg' alt='series' />
            <span>Series</span>
          </a>
        </div>
        <User />
      
    </div>
  )
}

export default Navigation
