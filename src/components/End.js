import React from 'react'
import './End.css'
import fm from './../assets/fm.png'
const End = () => {
    // const handleClicked = ()=>{
    //     prompt("clicked")
    // }
  return (
    <div className="container end">
        {/* <button onClick={handleClicked}>
            click me
        </button> */}
        <div className="d-flex justify-content-start">
            <img src={fm} alt="" className='logo'/>
        </div>
        <div className="d-flex justify-content-start">
            fsdfdsg
        </div>
        <div className="d-flex justify-content-start">
            sddsfs
        </div>
        <div className="d-flex justify-content-start">
            sdfdsg
        </div>
    </div>
  )
}

export default End