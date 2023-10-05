import React from 'react'

export default function Checkout(props) {
    return (
        <div>
            <section className='checkout_section text-center'>
                <div className=' container'>
                    <h2>Total Amount: {props.price*props.counter}</h2>
                </div>
            </section>
        </div>
    )
}
