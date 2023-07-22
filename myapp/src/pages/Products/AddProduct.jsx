
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import Home from '../Home/Home'
import React,{useState} from 'react'
import Select from 'react-select'
import { axiosInstance } from '../../apiCalls/axiosInstance'
import { Currentuser } from '../../apiCalls/users'
export default function AddProduct() {
    const [productDetails,setProductDetails]=useState({
        productName:"",
        about:"",
        price:"",
        age:"",
        bill:"yes",
        accessories:"yes",
        warranty:"yes",
        box:"yes",
        category:"laptops",
        postedBy:""
    })
    const options = [
        { value: 'yes', label: 'yes'},
        { value: 'no', label: 'no'},
        
      ]
      const handleChange = e => {       
        e.preventDefault()
        setProductDetails({ ...productDetails, [e.target.name]: e.target.value })
        console.log(productDetails)

    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const userDetails = await Currentuser()
        console.log(userDetails.data.details._id )
        setProductDetails({...productDetails,postedBy:userDetails.data.details._id})
        console.log(productDetails)
        const response = await axiosInstance.post("http://localhost:9999/v1/createproduct",productDetails)
        console.log(response)
    
    }
  return (
    <div>
   
    <form onSubmit={(e)=>handleSubmit(e)}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
         
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
               ProductName
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm"></span>
                  <input
                  onChange={(e)=>{
                    handleChange(e)
                  }}
                    type="text"
                    name="productName"
                    id="productName"
                    autoComplete="productName"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Apple Iphone 14"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                About
              </label>
              <div className="mt-2">
                <textarea
                onChange={(e)=>{
                    handleChange(e)
                  }}
                  id="about"
                  name="about"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                  required
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about the product.</p>
            </div>

          

            <div className="col-span-full">
              <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                Cover photo
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div> 
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Product Information</h2>
        
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                Price
              </label>
              <div className="mt-2">
                <input
                onChange={(e)=>{
                    handleChange(e)
                  }}
                  required
                  type="Number"
                  name="price"
                  id="price"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Product Age(Months)
              </label>
              <div className="mt-2">
                <input
                onChange={(e)=>{
                    handleChange(e)
                  }}
                  required
                  type="Number"
                  name="age"
                  id="age"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-1">
              <label htmlFor="bill" className="block text-sm font-medium leading-6 text-gray-900">
               Bill Available
              </label>
              <div className="mt-2">
                <select onChange={(e)=>{
                    handleChange(e)
                  }}
                  required
                  id="bill"
                  name="bill"
                  autoComplete="bill"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  
                  
                  <option value="yes">YES</option>
                  <option value="no">NO</option>

                </select>
              </div>
            </div>
            <div className="sm:col-span-1">
              <label htmlFor="accessories" className="block text-sm font-medium leading-6 text-gray-900">
               Accessories Available
              </label>
              <div className="mt-2">
                <select onChange={(e)=>{
                    handleChange(e)
                  }}
                  required
                  id="accessories"
                  name="accessories"
                  autoComplete="accessories"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  
                  
                  <option value="yes">YES</option>
                  <option value="no">NO</option>

                </select>
              </div>
            </div>

            <div className="sm:col-span-1">
              <label htmlFor="warranty" className="block text-sm font-medium leading-6 text-gray-900">
               Warranty Available
              </label>
              <div className="mt-2">
                <select onChange={(e)=>{
                    handleChange(e)
                  }}
                  required
                  id="warranty"
                  name="warranty"
                  autoComplete="warranty"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  
                  
                  <option value="yes">YES</option>
                  <option value="no">NO</option>

                </select>
              </div>
            </div>
            <div className="sm:col-span-1">
              <label htmlFor="box" className="block text-sm font-medium leading-6 text-gray-900">
               Box Available
              </label>
              <div className="mt-2">
                <select onChange={(e)=>{
                    handleChange(e)
                  }}
                  required
                  id="box"
                  name="box"
                  autoComplete="box"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  
                  
                  <option value="yes">YES</option>
                  <option value="no">NO</option>

                </select>
              </div>
            </div>
            <div className="sm:col-span-1">
              <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">
               Category
              </label>
              <div className="mt-2">
                <select onChange={(e)=>{
                    handleChange(e)
                  }}
                  required
                  id="category"
                  name="category"
                  autoComplete="category-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value="laptops">Laptops</option>
                  <option value="furniture">Furniture</option>
                  <option value="mobiles">Mobiles</option>
                  <option>Electronics</option>
                  <option>DressWear</option>
                  <option>MotorVehicles</option>

                </select>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
    </div>
  )
}
