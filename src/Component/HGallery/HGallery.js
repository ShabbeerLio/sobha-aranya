import React, { useState } from 'react'
import "./HGallery.css"
import GalleryData from './GalleryData'
import FormFloat from '../Navbar/FormFloat'

const HGallery = () => {

    const [formopen, setFormopen] = useState(false);
    const formIsOpen = () => {
        setFormopen(!formopen);
    };

    const formIsClose = () => {
        setFormopen(false);
    };


    return (
        <div className='HGallery'>
            <div className='HGallery-main'>
                <h3>Sobha Aranya's Gallery</h3>
                <div className="hgallery-box">
                    {GalleryData.slice(0, 8).map((item) => (
                        <img src={item.cover} alt={item.alttag} onClick={formIsOpen} />
                    ))}
                </div>
                {/* <div className="hgallery-button">
                    <Link to={"/gallery-view"} onClick={handleClick}>View More</Link>
                </div> */}
                {formopen && (
                    <>
                        <FormFloat formIsClose={formIsClose} />
                    </>
                )}
            </div>
        </div>
    )
}

export default HGallery
