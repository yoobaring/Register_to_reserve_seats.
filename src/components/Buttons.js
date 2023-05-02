export const Btn_group = ({title, style, icon, toggle, target, disabled , onPress=()=>{}}) => {
      return <button disabled={disabled} onClick={onPress} className={style} data-bs-toggle={toggle} data-bs-target={target}>{ title? title : icon }</button>
}

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCouch } from '@fortawesome/free-solid-svg-icons';
// import { seat } from '../mock';
// export const Couch = ({ title , item}) => {
//       return <>
//                   <div className="screen"><h4>{title}</h4></div>
//                   {seat.map((el,i) => {
//                         return  <div className='padding'>
//                                     <>
//                                           <>
//                                              <FontAwesomeIcon icon={faCouch} style={{ color: 'red', fontSize: '50px' }}/>
//                                           </>
//                                     </>
//                                 </div>
//                     })}
//             </>
//   }