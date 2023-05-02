
import { seat, mockUsers } from './mock';
export function AddObject(object,obj) {
      const arr = new Array()
      object.map((el)=> arr.push({'seat': el}))
      const mergedObj = obj.map(obj => {
            const seatObj = arr.map(e => [{...obj, seat: e.seat}])
            const emptyArrays = seatObj.filter((arr, i) => arr.length-1 == 0);
            return emptyArrays.flatMap(e=>e)
      })
}




export const objToformData = (object) => {
      let formdata = new FormData();
      for (const key in object) {
          if (object.hasOwnProperty(key)) {
              const element = object[key];
              formdata.append(key, element)
          }
      }
  
      return formdata;
  }

export const trueIndexes = (ele) =>{
   return ele.map((value, index) => value ? index : -1).filter(index => index !== -1);  
}


export const falseIndexes = (ele) =>{
      return ele.map((value, index) => !value ? index : -1).filter(index => index !== -1);  
   }




