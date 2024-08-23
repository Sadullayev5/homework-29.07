import React from 'react'
import hero from '../../images/hero.png'
import watch from '../../images/watch.png'
import heroAvatar from '../../images/hero-avatar.png'
import hero2 from '../../images/hero2.png'
import laptop from '../../images/laptop.png'
import phone from '../../images/phone.png'
import './Hero.css'

const Hero = () => {
  return (
    <div className="hero">
        <img src={hero} alt="" />
        <div className="container">
        <div className="hero-cards">
            <h2 className='title'>Featured articles</h2>
            <div className="card-wrapper">
                <div className="card">
                    <img src={watch} alt="" />
                    <h3>10 beaches you must visit</h3>
                    <div className="card-profile">
                        <img src={heroAvatar} alt="" />
                        <p>Farok Rastegar  .  1 hour ago</p>
                    </div>
                    <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the…</p>
                </div>
                <div className="card">
                    <img src={laptop} alt="" />
                    <h3>10 beaches you must visit</h3>
                    <div className="card-profile">
                        <img src={heroAvatar} alt="" />
                        <p>Farok Rastegar  .  1 hour ago</p>
                    </div>
                    <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the…</p>
                </div>
                <div className="card">
                    <img src={phone} alt="" />
                    <h3>10 beaches you must visit</h3>
                    <div className="card-profile">
                        <img src={heroAvatar} alt="" />
                        <p>Farok Rastegar  .  1 hour ago</p>
                    </div>
                    <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the…</p>
                </div>
                <div className="card">
                    <img src={watch} alt="" />
                    <h3>10 beaches you must visit</h3>
                    <div className="card-profile">
                        <img src={heroAvatar} alt="" />
                        <p>Farok Rastegar  .  1 hour ago</p>
                    </div>
                    <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the…</p>
                </div>
                <div className="card">
                    <img src={phone} alt="" />
                    <h3>10 beaches you must visit</h3>
                    <div className="card-profile">
                        <img src={heroAvatar} alt="" />
                        <p>Farok Rastegar  .  1 hour ago</p>
                    </div>
                    <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the…</p>
                </div>
                <div className="card">
                    <img src={laptop} alt="" />
                    <h3>10 beaches you must visit</h3>
                    <div className="card-profile">
                        <img src={heroAvatar} alt="" />
                        <p>Farok Rastegar  .  1 hour ago</p>
                    </div>
                    <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the…</p>
                </div>
            </div>
        </div>
        </div>
        <img src={hero2} alt="" />
    </div>
  )
}

export default Hero