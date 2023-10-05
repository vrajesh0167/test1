import React from 'react'

export default function Counter(props) {
    return (
        <div>
            <section className='counter_section'>
                <div className=' container d-flex justify-content-center'>
                    <div className='counter'>
                        <h3>{props.counter}</h3>
                    </div>
                </div>
            </section>
        </div>
    )
}
