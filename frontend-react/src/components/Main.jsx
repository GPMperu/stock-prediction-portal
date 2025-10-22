import React from 'react'
import Button from './Button'

const Main = () => {
  return (
    <>
     <div className='container'>
        <div className='p-5 text-center bg-light-dark rounded'>
            <h1 className='text'>Stock Prediction Portal</h1>
            <p className='text lead'>Predict your stock prices easily using our portal con mahcine learnign y otras vainas</p>            
            <Button text="Login" class="btn-info" />
        </div>
    </div>
    </>
  )
}

export default Main