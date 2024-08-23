import React from 'react'
import './Featured.css'
import featured from '../../images/featured.png'
import featured2 from '../../images/featured2.png'
import featured3 from '../../images/featured3.png'
import heroAvatar from '../../images/hero-avatar.png'
import { Link } from 'react-router-dom'
import deals from '../../images/deals.png'

const Featured = () => {
  return (
    <div className="container">
        <div className="featured">
        <h2 className='title'>Featured articles</h2>
        <div className="featured-card-wrapper">
            <div className="featured-card">
                <img src={featured} alt="" />
                <div className="card-content">
                    <h2>Pathway to the Mediterranean</h2>
                <div className="card-profile">
                        <img src={heroAvatar} alt="" />
                        <p>Farok Rastegar  .  1 hour ago</p>
                    </div>
                    <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain a…</p>
                </div>
            </div>
            <div className="featured-card">
                <img src={featured2} alt="" />
                <div className="card-content">
                    <h2>Pathway to the Mediterranean</h2>
                <div className="card-profile">
                        <img src={heroAvatar} alt="" />
                        <p>Farok Rastegar  .  1 hour ago</p>
                    </div>
                    <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain a…</p>
                </div>
            </div>
            <div className="featured-card">
                <img src={featured} alt="" />
                <div className="card-content">
                    <h2>Pathway to the Mediterranean</h2>
                <div className="card-profile">
                        <img src={heroAvatar} alt="" />
                        <p>Farok Rastegar  .  1 hour ago</p>
                    </div>
                    <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain a…</p>
                </div>
            </div>
            <div className="featured-card">
                <img src={featured3} alt="" />
                <div className="card-content">
                    <h2>Pathway to the Mediterranean</h2>
                <div className="card-profile">
                        <img src={heroAvatar} alt="" />
                        <p>Farok Rastegar  .  1 hour ago</p>
                    </div>
                    <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain a…</p>
                </div>
            </div>
            <div className="featured-card">
                <img src={featured2} alt="" />
                <div className="card-content">
                    <h2>Pathway to the Mediterranean</h2>
                <div className="card-profile">
                        <img src={heroAvatar} alt="" />
                        <p>Farok Rastegar  .  1 hour ago</p>
                    </div>
                    <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain a…</p>
                </div>
            </div>
        </div>
        <Link className='load-more'>Load More</Link>
    </div>
    <div className="deals">
        <img src={deals} alt="" />
        <div className="deals-card">
            <h2>Incredible deals <br /> right to your inbox!</h2>
            <input type="text" placeholder='Placeholder' />
            <p>By joining you agree to our Terms and Conditions</p>
        </div>
    </div>
    </div>
  )
}

export default Featured