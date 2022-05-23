import React, { useContext } from 'react'
import { UserContext } from '../Security/AuthoticationContext'

export default function Fetch({render,url}) {
    const userContext = useContext(UserContext)
    const [data, setData] = useState(
        {
            isLoading:false,
            data:null
        }
    )

    useEffect(() => {
      setData
    
      return () => {
        second
      }
    }, [])
    

  return (
    <div>Fetch</div>
  )
}
