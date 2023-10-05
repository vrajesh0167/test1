import React from 'react'

export default function Button(props) {
  return (
    <div>
      <section className='button_section'>
        <div className=' container'>
          <button className='btn1' onClick={props.click} >{props.Dvalue}</button>
        </div>
      </section>
    </div>
  )
}
