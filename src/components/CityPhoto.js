import React from 'react'
import bielefeldPhoto from '../assets/bielefeldPhoto.jpg'

export default function CityPhoto(){
    return (
        <div>
            <h1>Bielefeld Photo</h1>
            <img style={{maxWidth: '1200px', objectFit: 'cover'}} src={bielefeldPhoto} alt='Bielefeld'/>
        </div>
    )
}