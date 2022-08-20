import React from 'react'
import "./FourthSection.css"
import svg1 from "../images/svgexport-5.svg"
import sv2 from "../images/Real-time updates.gif"
import svg3 from "../images/svgexport-6.svg"
import svg4 from "../images/download_on_app_store_image.svg"
import svg5 from "../images/get_it_on_google_image.svg"
const FourthSection = () => {
    return (
        <>
            <div>
                <div className='first-mini-div'>
                    <center>
                        Grocery shopping done right
                    </center>
                </div>
                <div className='big-div'>
                    <div className='img-div'>
                        <p className='img-div-p'>
                            Choose what you <br />
                            want
                        </p>
                        <p className='img-div-p2'>
                            Select items from your favorite <br />
                            grocery stores or local markets.
                        </p>
                        <img src={svg1} alt="" className='svg1' />
                    </div>
                    <div className='img-div'>
                        <p className='img-div-p'>
                        Get real-time <br />
                         updates
                        </p>
                        <p className='img-div-p2'>
                        We’ll send you real-time updates <br />
                        from every step of the way.
                        </p>
                        <img src={sv2} alt="" width={250}/>
                    </div>
                    <div className='img-div'>
                        <p className='img-div-p'>
                        Same-day <br />
                         grocery delivery
                        </p>
                        <p className='img-div-p2'>
                            Fresh groceries delivered same- <br />
                            day directly to you.
                        </p>
                        <img src={svg3} alt="" className='svg2'/>
                    </div>
                </div>
            </div>
            <center>
            <div>
                <div className='sub-header-div'>
                Shop on the go
                </div>
                <p className='p-type'>
                Get the best Shopascart experience all in one app.
                </p>
                <div>
                  <img src={svg4} alt="" className='svg-3' width={200}/>
                  <img src={svg5} alt="" width={200} />
                </div>
            </div>
            </center>
            <center>
                <div>
                    <p className='p2-type'>
                        SHOPASCART+
                    </p>
                </div>
            </center>
        </>
    )
}

export default FourthSection