import React from 'react'
import "./Location.css"

const Location = () => {
    return (
        <div className='Location'>
            <div className="Page-title">
                <h3>Location</h3>
            </div>
            <div className="location-box">
            <iframe title='location' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d219.4291191768168!2d76.9586138833013!3d28.362903399182965!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d3dda414aa2c7%3A0x3c8ed223233ec81e!2sShobha%20Aranya%20Sector%2080!5e0!3m2!1sen!2sin!4v1720177089058!5m2!1sen!2sin"></iframe>
            </div>
        </div>
    )
}

export default Location
