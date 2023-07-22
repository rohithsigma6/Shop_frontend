
import React, {useState,useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

  
  export default function Profile() {
    const navigate = useNavigate()
    const [products,setProducts] =useState([])
    const getAllProducts=async()=>{
        const response = await axios.get('http://localhost:9999/v1/getallproducts')
        console.log(response)
        setProducts(response.data.data)
    }
    useEffect(()=>{
        getAllProducts()
    },[])
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
  
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img onClick={(e)=>{
                    e.preventDefault()
                    localStorage.setItem("product",product._id)
                    navigate("/product")
                  }}
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                
                <p className="mt-1 text-lg font-medium text-gray-900">{product.productName}</p>
                <h3 className="mt-4 text-sm text-gray-700">${product.price}</h3>
                
              </a>
            ))}
          </div>
        </div>
      </div>
    )
  }