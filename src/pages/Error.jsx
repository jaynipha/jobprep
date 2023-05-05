import React from 'react'
import "./pages.css"
import error from "../assets/3.png"

export const Error = () => {
      return (
            <div className='error'>

                  <img className='er404' src={error} alt="" />
            </div>
      )
}
