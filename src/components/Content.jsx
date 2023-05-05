import React from 'react'
import Card from './Card'
const Content = () => {
  return (
    <div >
        <div className='container text-center border border-warning p-5 mx-auto bg-black rounded' style={{'font-size': '1rem',
    'padding-bottom': '20px'}}><h3>Top doctors</h3>
      <Card name="ASHISH"/>
      <Card name="AMIT"/>
      <Card name="KK MITTAL"/>
      <Card name="RAJIV"/>
      <Card name="SUMIT"/>
      </div>
    </div>
  )
}

export default Content
