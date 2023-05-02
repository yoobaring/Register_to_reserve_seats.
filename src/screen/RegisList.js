import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAllUsers } from '../app/api/usersSlice';
import { Search } from '../components/Search';
import { Tables } from '../components/Table_';
import { mockUsers, seat } from '../mock';
import { FaSearch } from "react-icons/fa"
import { Btn_group } from '../components/Buttons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChain, faChair } from '@fortawesome/free-solid-svg-icons';
import { falseIndexes, trueIndexes } from '../function';
import { Link } from 'react-router-dom';

const label = ['ID', 'First Name', 'Last Name', 'Phone Number']

const RegisList = () => {
const [search , setSearch] = useState('')
const { users } = useSelector(selectAllUsers)
let user = new Object()
      const handle =  (e) => {
            if(e == 'search'){
                  user = users.filter(user => user.firstName == search)
                  console.log(user, search, 'firstName')
            }
            else if(e == 'sort'){
                  user = users.sort()
            }

      }
      
      const handleUserInput= (e) => setSearch(e.target.value)

      let seat_number =[]
      let status = []
        seat[0].rows.map((e, i) =>  
          e.seats.map((el, i) =>  
            seat_number.push(`${e.row}${el.seat_number}`)
          )
        )
        seat[0].rows.map((e, i) =>  
        e.seats.map((el, i) =>  
          status.push(el.available)
        )
      )
        console.log(seat_number, status)
      let seat_ = ['ที่นั่งคงเหลือ' , 'จำนวนคนลงทะเบียนทั้งหมด']
      let num = status.filter(Boolean).length;
      
      const true_Indexes = trueIndexes(status)
      const false_Indexes = falseIndexes(status)
  return ( 
      <>
      <div className="flex min-h-full items-center justify-center py-10 px-10 ">      
      <div className="bg-white rounded-lg px-10 py-10 ring-1 ring-slate-900/5 shadow-xl w-full max-w-3xl space-y-8">
                  <div className='flex justify-between'>
                  <p className='text-3xl font-serif font-bold text-center' style={{color:' #424040'}}>รายชื่อผู้ลงทะเบียนจองที่นั่ง</p>
                        <td>
                        <form className="flex justify-between" onSubmit={handle('search')}>
                              <input className="Form-input" type="search" onChange={handleUserInput} placeholder="Search" />
                              <div className="pl-3 pt-4" ><Btn_group icon={<FaSearch size={25}/>}/></div>  
                        </form>
                        </td>
                  </div> 
  
                <div className='grid grid-cols-1' style={{margin: '0px 5px'}}>
                  {seat_.map((e,i) =><div className="grid grid-cols-3" ><span><FontAwesomeIcon icon={faChair} style={{ color: e == 'ที่นั่งคงเหลือ'?'blue':'red', fontSize: '20px' }}/>
                        {' '}{e}</span>
                        <a style={{ color: e == 'ที่นั่งคงเหลือ'?'blue':'red' }}>{e == 'ที่นั่งคงเหลือ'? num : status.length - num}</a>
                  </div>)}
                </div>
                  <div className='link bg-white'></div>
                  <div className="flex min-h-full min-w-full" style={{marginTop: '10px'}}>    
                        <Tables data={search ? user : users} label={label}/>
                  </div>
                  <Link to={'/signup'}><button className='button bg-blue-600 hover:bg-blue-700'>ลงทะเบียน</button></Link>
      </div>
      </div>
      </>
  );
};

export default RegisList;
