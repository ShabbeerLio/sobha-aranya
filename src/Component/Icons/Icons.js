import React from 'react'
import "./Icons.css"
import IconData from './IconData'

const Icons = () => {
    return (
        <div className='Icons'>
            <div className='Icons-main'>
                <div className='icons-box'>
                    {IconData.map((item) => (
                        <>
                            <div className="icon-card" key={item.id}>
                                <img src={item.cover} alt="" />
                                <p>{item.title}</p>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Icons
