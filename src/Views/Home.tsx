import { useEffect , useState } from "react"
import getAllProducts from "../Repository/store/getAllProducts"

const HomeView = () => {
  //const [product, setProducts] = useState([])

  useEffect(() => {
    getInfo()
  },[])

  const getInfo = async () =>{
    const response = await getAllProducts()
    console.log(response)
  }

  return(
    <div>
      <h1 className=" text-center">Hello world</h1>
    </div>
  )
}

export default HomeView