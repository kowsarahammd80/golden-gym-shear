import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Break = ({ cart }) => {
  let [breaktime, setBreakTime] = useState(0);

  let time = cart.reduce((a, b) => a + b, 0)
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items'));
    // console.log(items)
    if (items) {
      setBreakTime(items)
    }
  }, []);


  const breaktimeSet = (event) => {
    setBreakTime(event.target.id);
    localStorage.setItem('items', JSON.stringify(event.target.id));
    event.target.classList.add('bg-info')

  }
  const activity = () => {
    toast.success('Activity Complete!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  return (

    <div>
      <div>
        <h5 className='p-2'>Kowsar Ahammed</h5>
        <div className='d-flex bg-light justify-content-between'>
          <p className='p-3 m-1 w-20'>54kg <span>Weight
          </span></p>
          <p className='p-3 m-1 w-20'>5'2 <span>Height</span></p>
          <p className='p-3 m-1 w-20'>26 <span>Age</span> </p>
        </div>
      </div>
      <div className='mb-5 p-3'>
        <h5>Add A Brack</h5>
        <button id='10' className='p-2 m-1 border-0 rounded-circle' onClick={breaktimeSet}>10s</button>
        <button id='20' className='p-2 m-1 border-0 rounded-circle' onClick={breaktimeSet}>20s</button>
        <button id='30' className='p-2 m-1 border-0 rounded-circle' onClick={breaktimeSet}>30s</button>
        <button id='40' className='p-2 m-1 border-0 rounded-circle' onClick={breaktimeSet}>40s</button>
        <button id='50' className='p-2 m-1 border-0 rounded-circle' onClick={breaktimeSet}>50s</button>
      </div>
         <h5 className='fow-bold'>Exercise Detail</h5>
       <div className='d-flex align-items-center justify-content-between bg-light mb-3 p-1'>

         <p className='mt-1 fw-bold'>Exercise time :   {time}s</p>
         

      </div>
      <div className='d-flex align-items-center justify-content-between bg-light mb-4 p-1'>

       <p className='mt-1 fw-bold '>Break time :  {breaktime}s </p>

      </div>
      <button className="btn btn-primary w-100 fw-bold p-2" type="button" onClick={activity}>Activity Completed</button>
      <ToastContainer />
    </div>


  );
};

export default Break;