import {useEffect} from 'react'
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.js"
const Shop = () => {
  useEffect(() => { 
    const getCategoriesMap = async () => {
      const categoryMap = getCategoriesAndDocuments()
      console.log(categoryMap)
    }
    getCategoriesMap()
  }, [])
  return (
    <div className='mt-[10rem] text-[50px]'>Shop</div>
  )
}

export default Shop