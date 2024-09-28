import React from 'react'
import './appdownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>For Better Experience Download <br /> <span>Tomato App</span></p>
        <div className="app-download-platforms">
            <img src={assets.play_store} alt="PlayStore_Logo" />
            <img src={assets.app_store} alt="AppStore_Logo" />
        </div>
      
    </div>
  )
}

export default AppDownload
