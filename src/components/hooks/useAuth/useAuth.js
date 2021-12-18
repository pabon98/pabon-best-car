import { useContext } from "react"
import { AuthContext } from "../../Contexts/AuthProvider"

//using context
const useAuth =()=>{
    return useContext(AuthContext)
}
export default useAuth