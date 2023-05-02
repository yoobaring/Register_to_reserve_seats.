import React, { useEffect, useRef, useState } from 'react';
import { Col, Form, Row, Grid } from 'rsuite';
import FormControl from 'rsuite/esm/FormControl';
import FormControlLabel from 'rsuite/esm/FormControlLabel';
import FormGroup from 'rsuite/esm/FormGroup';
import { Link, useNavigate } from 'react-router-dom';
import { selectAllUsers, setAllusers } from '../app/api/usersSlice';
import {Btn_group} from '../components/Buttons'
import { useDispatch, useSelector } from 'react-redux';
import { mockUsers, signin } from '../mock';


const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const userRef = useRef()
  const errRef = useRef()
  const [errMsg, setErrMsg] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(setAllusers([...mockUsers]))
      userRef.current.focus()
  }, [])

  const { users } = useSelector(selectAllUsers)

  const handleSubmit = async (e) => {
      e.preventDefault()

      try {
            let formattedPhoneNumber = phoneNumber.replace(/(\d{3})(\d{4})(\d{3})/, "$1-$2-$3");
            console.log(formattedPhoneNumber); // 098-7808-789
            if (phoneNumber.length !== 10) {
                  alert("กรุณาป้อนเบอร์โทร 10 หลัก");
                }
            else{   
            let user = [{firstName: firstName, lastName: lastName, phoneNumber: formattedPhoneNumber}]
            console.log( user)
            const obj = users.concat(user)
            dispatch(setAllusers([...obj]))
            navigate('/list')
            console.log(obj, 'dfdsfb', user)
            }

      } catch (err) {
          if (!err?.originalStatus) {
              // isLoading: true until timeout occurs
              setErrMsg('No Server Response');
          } else if (err.originalStatus === 400) {
              setErrMsg('Missing Username or Password');
          } else if (err.originalStatus === 401) {
              setErrMsg('Unauthorized');
          } else {
              setErrMsg('Login Failed');
          }
          errRef.current.focus();
      }
  }

  const handleName = (e) => setFirstName(e.target.value)
  const handleLast = (e) => setLastName(e.target.value)
  const handlePhone = (e) => setPhoneNumber(e.target.value)

  return (
            <section className="flex min-h-full items-center justify-center py-10 px-10 ">
            <div className='bg-white rounded-lg px-10 py-10 ring-1 ring-slate-900/5 shadow-xl w-full max-w-xl space-y-8'>    
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <div className="container">
                <p className='text-3xl font-serif font-bold text-center mb-5' style={{color:' #424040'}}>ลงทะเบียนจองที่นั่ง</p>
                        <form onSubmit={handleSubmit} className="">
                              <div>
                              <label className='label' htmlFor="floatingName">First Name</label>
                              <input 
                                    className='Form-input' 
                                    value={firstName} 
                                    onChange={handleName} 
                                    type="firstName" 
                                    id="floatingName" 
                                    placeholder=" "
                                    ref={userRef}
                                    autoComplete="off"
                                    required
                              />
                              </div>

                              <div className="">
                              <label className='label' htmlFor="floatinglast">Last Name</label>
                              <input 
                                      className='Form-input'  
                                      value={lastName} 
                                      onChange={handleLast} 
                                      type="lastName" 
                                      id="floatinglast" 
                                      placeholder=" "
                                      ref={userRef}
                                      autoComplete="off"
                                      required
                              />
                              </div>

                              <div className="">
                              <label className='label' htmlFor="floatingPhone">Phone Number</label>
                              <input 
                                 className='Form-input'  
                                 value={phoneNumber} 
                                 onChange={handlePhone}  
                                 type="phoneNumber" 
                                 id="floatingPhone" 
                                 placeholder="0987615463"
                                 ref={userRef}
                                 autoComplete="off"
                                 required
                              />
                              </div>

                              <div className="flex justify-end">
                                    <Link to={'/list'}><a className="text-blue-600 hover:text-blue-800">ดูที่นั่งคงเหลือ</a></Link>
                              </div>
                              <div className="flex justify-between mt-5">
                              <button className='button bg-blue-600 hover:bg-blue-700'>ลงทะเบียน</button>
                              <p className="mt-5">รายชื่อผู้ลงทะเบียนจองที่นั่ง<Link to={'/list'}><a className='text-blue-600 hover:text-blue-800'> เพิ่มเติม</a></Link></p>
                              </div>
                        </form>
            </div>
            </div>  
            </section>
  );
};

export default SignUp;
