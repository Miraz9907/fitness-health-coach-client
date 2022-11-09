import { useEffect } from "react"

const useTitle = title =>{
    useEffect( ()=>{
        document.title = `${title}-health coach`

    },[title])
}
export default useTitle;
