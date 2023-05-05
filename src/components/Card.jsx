import React from 'react'

const Card = (props) => {
  return (
    <div className='container bg-black p-3 mb-5  rounded'  >
      <div className=" ">
 
  <div className="card-body bg-black ">
    <h5 className="card-title">Dr. {props.name}</h5>
    <p className="card-text " style={{'font-size': '1rem',
    'padding-bottom': '20px' }}> Speciality
Orthopedic Doctor

 Other treatment areas
Orthopedic Surgeon
 Education
MS- Ortho - Allahabad University - 1979
MBBS - University Of Allahabad - 1977
 Languages spoken
English
Hindi
 Professional Memberships
21000 Uttar Pradesh Medical Council.</p>
   
  </div>
</div>


    </div>
  )
}

export default Card
