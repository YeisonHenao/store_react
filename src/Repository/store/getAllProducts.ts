import instance from "../config";

export default async function getAllProducts(){
  instance.get( instance.defaults.baseURL + "/products")
    .then(response => {
      if (response) {
        return response
      }
      else{
        throw new Error("Algo salio mal")
      }
    })
}