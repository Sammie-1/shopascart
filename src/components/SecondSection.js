import React from 'react'
import "./SecondSection.css"
import img1 from "../images/shoprite_store.png"
import imgg2 from "../images/addide_store.png"
import imggg3 from "../images/delis_store.png"
import imgggg4 from "../images/supermart_store.png"

const SecondSection = () => {
    return (

        <>
            <div>
                <div className='text-one'>
                    Favorite stores in <span className='text-one-span'>Lagos</span>
                </div>
                <div className='section-div'>
                    <div className='mini-div'>
                        <img src={img1} alt="" width={270} />
                        <p className='p-text-big'>Shoprite</p>
                        <span className='p-text-small'>Delivery . Pickup</span>
                    </div>
                    <div className='mini-div'>
                        <img src={imgg2} alt="" width={270} />
                        <p className='p-text-big'>Shoprite</p>
                        <span className='p-text-small'>Delivery . Pickup</span>
                    </div>
                    <div className='mini-div'>
                        <img src={imggg3} alt="" width={270} />
                        <p className='p-text-big'>Shoprite</p>
                        <span className='p-text-small'>Delivery . Pickup</span>
                    </div>
                    <div className='mini-div'>
                        <img src={imgggg4} alt="" width={270} />
                        <p className='p-text-big'>Shoprite</p>
                        <span className='p-text-small'>Delivery . Pickup</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SecondSection