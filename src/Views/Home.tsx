import { useEffect  } from "react"
import getAllProducts from "../Repository/store/getAllProducts"
// import Products from "../Repository/model/Products"

const HomeView = () => {
  // const [product, setProducts] = useState<Array<Products>>([])

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