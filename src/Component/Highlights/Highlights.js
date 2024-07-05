import React from 'react'
import "./Highlights.css"
import high from "../../Assets/Highlights/highlights.jpg"
import HighlightsData from './HighlightsData';
import { IoCheckmarkCircle } from "react-icons/io5";

const Highlights = () => {

    return (
        <div className='Highlights'>
            <div className='Highlights-main'>
                <div className="highlights-item">
                    <div className="highlights-right">
                        <img src={high} alt="Godrej Ashok Vihar" />
                    </div>
                    <div className="highlights-left">
                        <h2>Project Highlights</h2>
                        <ul>
                            {HighlightsData.map((item) => (
                                <li key={item.id}>
                                    <p><IoCheckmarkCircle /></p>
                                    {item.detail}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Highlights
