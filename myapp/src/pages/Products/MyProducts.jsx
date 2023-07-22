import React, { useState, useEffect } from "react";
import { Currentuser } from '../../apiCalls/users'
import { axiosInstance } from "../../apiCalls/axiosInstance";


export default function MyProducts() {
  const [products, setProducts] = useState([])
  const getProducts = async () => {
    const userDetails = await Currentuser()
    console.log(userDetails.data.details._id)
    const response = await axiosInstance(`http://localhost:9999/v1/getmyproducts`, {
      "postedBy": userDetails.data.details._id
    })
    setProducts(response.data.data)

  }

  useEffect(() => {
    getProducts()

  }, [])
  // const userDetails = await Currentuser()
  // console.log(userDetails.data.details._id )
  // setProductDetails({...productDetails,postedBy:userDetails.data.details._id})
  // console.log(productDetails)
  // const response = await axiosInstance.post("http://localhost:9999/v1/createproduct",productDetails)
  // console.log(response)
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Description
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>

                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Age
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {products.map(person => (
                  <tr key={person.email}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img className="h-10 w-10 rounded-full" src={person.image} alt="" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{person.productName}</div>
                          <div className="text-sm text-gray-500">{person.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{person.about}</div>
                      <div className="text-sm text-gray-500">{person.category}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">

                      {person.productStatus == "pending" ? <span
                        className="px-2 inline-flex text-xs leading-5
                        font-semibold rounded-full bg-red-100 text-green-800"
                      >Pending
                      </span> : <span
                        className="px-2 inline-flex text-xs leading-5
                        font-semibold rounded-full bg-green-100 text-green-800"
                      >Completed
                      </span>}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {person.price}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {person.age}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a href="#" className="text-indigo-600 hover:text-indigo-900">
                        Edit
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}