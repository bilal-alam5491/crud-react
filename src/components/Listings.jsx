import { FaTrash } from "react-icons/fa";
import { FaPen } from "react-icons/fa";

function Listings({ item, index , delFn , updateFn }) {
  return (
    <>
      <tr>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.pass}</td>
        <td>{item.contact}</td>
        <td className="text-center">
          <FaTrash className="hover:text-gray-400 inline" 
          onClick={()=>{
            delFn(index)
          }
          }/>
        </td>
        <td className="text-center">
          <FaPen className="hover:text-gray-400 inline" 
          onClick={()=>{
            updateFn(index)
          }
          }
          />
        </td>
      </tr>
    </>
  );
}

export default Listings;
