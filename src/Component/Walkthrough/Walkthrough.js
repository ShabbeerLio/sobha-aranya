import React from 'react'
import "./Walkthrough.css"
import Form from '../Form/Form'

const Walkthrough = () => {
    return (
        <div className='Walkthrough'>
            <div className='Walkthrough-main'>
                <h2>Intrested in Sobha Aranya </h2>
                <div className="walkthrough-item">
                    <div className="walkthrough-left">
                    <iframe src="https://www.youtube.com/embed/EXDHcwUfMpQ" title="SOBHA Aranya at Karma Lakelands | #PursuitofPerfection" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <div className="walkthrough-right">
                        <div className="walkthrough-form">
                        <Form heading={"Book Your Site Visit"} btntxt={"Book A Site Visit"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Walkthrough
