import { PaperClipIcon } from '@heroicons/react/20/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChair } from '@fortawesome/free-solid-svg-icons';
import { seat, mockUsers } from '../mock';
import { useSelector } from 'react-redux';
import { selectAllUsers } from '../app/api/usersSlice';
import { AddObject, falseIndexes, trueIndexes } from '../function';
import { useState, useEffect } from 'react';
import { Btn_group } from '../components/Buttons';
import { FaSearch } from 'react-icons/fa';


export default function Admin() {
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
let seat_ = ['ว่าง' , 'ไม่ว่าง']
let num = status.filter(Boolean).length;

const true_Indexes = trueIndexes(status)
const false_Indexes = falseIndexes(status)
const [search , setSearch] = useState('')
const { users } = useSelector(selectAllUsers)

let arr = []
let user = new Object()
      const handle =  (e) => {
            if(e == 'search'){
                  user = users.filter(user => user.firstName == search)
                  console.log(user, search, 'firstName')
            }
      }

      const handleSubmit =  (e) => {
        console.log(arr, 'eref')
        let obj = AddObject(arr, users)
        console.log(obj, 'POST USER')
      }

      const render = (ele) => {
        return  <dl onClick={handleSubmit}>
              {ele.map((e, i) =>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">{`${i+1}. ${e.firstName}   ${e.lastName}  ${e.phoneNumber}`}</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                    เลือกที่นั่ง
                  </label>
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    onChange={(e)=> arr[i] = e.target.value}
                  >
                    <option>{e.seat == ''?'กรุณาเลือกที่นั่ง':arr[i]=e.seat}</option>
                    {true_Indexes.map(e=><option value={seat_number[e]}>{seat_number[e]}</option>)}
                  </select>
                </div>
                </dd>
              </div>)}
                </dl>
      }


      
      const handleUserInput= (e) => setSearch(e.target.value)

  return (<>
    <div className='flex min-h-full justify-between py-10 px-10' >
            <div className='bg-white rounded-lg px-10 py-10 ring-1 ring-slate-900/5 shadow-xl w-full max-w-xl space-y-10 col-span-2'>    
            <div className="container">
            <p className='text-3xl font-serif font-bold text-center mb-5' style={{color:' #424040'}}>แบบจำลองที่นั่ง</p> 
                <div className='bg-orange-500 rounded-bl-full rounded-br-full px-10 py-10 ring-1 ring-slate-900/5 shadow-xl w-full max-w-xl space-y-10 col-span-2 mr-10 label text-center text-white text-2xl'><p>Stage</p></div>
                <div className='grid grid-cols-6 gap-4 py-5'>
                  {seat_.map((e,i) =><div><FontAwesomeIcon icon={faChair} style={{ color: e == 'ว่าง'?'blue':'red', fontSize: '30px' }}/>
                        <p className='text-start'>{e}</p>
                        <div><a style={{ color: e == 'ว่าง'?'blue':'red' }}>{e == 'ว่าง'? num : status.length - num}</a></div>
                  </div>)}
                </div>
                <div><a className="text-end text-blue-600 hover:text-blue-800" ></a></div>
                <div className='grid grid-cols-10 gap-4 py-3'>
                  {seat_number.map((e,i) =><div><FontAwesomeIcon icon={faChair} style={{ color: status[i]?'blue':'red', fontSize: '45px' }}/>
                        <p className='text-center pl-2'>{e}</p>
                  </div>)}
                </div>
            </div>
            </div>
              
            <div className="overflow-hidden bg-white shadow sm:rounded-lg col">
              <div className="px-4 py-5 sm:px-6">
                <div className='flex justify-between'>
                <h3 className="text-lg font-medium leading-6 text-gray-900">รายชื่อผู้ลงทะเบียนจองที่นั่ง</h3>                        <td>
                        <form className="flex justify-between" onSubmit={handle('search')}>
                              <input className="Form-input" type="search" onChange={handleUserInput} placeholder="Search" />
                              <div className="pl-3 pt-4" ><Btn_group icon={<FaSearch size={25}/>}/></div>  
                        </form>
                        </td>
                  </div>
              </div>
              <div className="border-t border-gray-200">
                {search ? render(user) : render(users)}
              </div>
            </div>
    </div>
    </>
  )
}
