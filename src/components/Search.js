import { FaSearch } from "react-icons/fa"
import { Btn_group } from "./Buttons"
export const Search = () => {
      const content = (
                  <td>
                  <form className="flex justify-between">
                        <input className="Form-input" type="search" placeholder="Search" />
                        <div className="pl-3 pt-4" ><Btn_group icon={<FaSearch size={25} />}/></div>
                        
                  </form>
                  </td>
      ) 
      return content 
}