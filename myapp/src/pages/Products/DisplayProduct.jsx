import React, { useState, useEffect } from "react";
import { axiosInstance } from "../../apiCalls/axiosInstance";
import axios from "axios";
import { Textarea } from "@material-tailwind/react";
const people = [
    {
        name: 'Leslie Alexander',
        email: 'leslie.alexander@example.com',
        role: 'Co-Founder / CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
        name: 'Michael Foster',
        email: 'michael.foster@example.com',
        role: 'Co-Founder / CTO',
        imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
        name: 'Dries Vincent',
        email: 'dries.vincent@example.com',
        role: 'Business Relations',
        imageUrl:
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: null,
    },
    {
        name: 'Lindsay Walton',
        email: 'lindsay.walton@example.com',
        role: 'Front-end Developer',
        imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
        name: 'Courtney Henry',
        email: 'courtney.henry@example.com',
        role: 'Designer',
        imageUrl:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
        name: 'Tom Cook',
        email: 'tom.cook@example.com',
        role: 'Director of Product',
        imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: null,
    },
]
function DisplayProduct() {

    const [product, setProduct] = useState({})
    const getProduct = async () => {
        console.log(localStorage.getItem("product"))
        const response = await axios.post(`http://localhost:9999/v1/getproduct`, {
            _id: localStorage.getItem("product")
        })
        console.log(response)
        setProduct(response.data.data)
    }

    useEffect(() => {
        getProduct()
    }, [])

    return (
        <div className="bg-white grid grid-cols-3">
            <div className="grid  gap-4 sm:gap-6 lg:gap-8">
                <img
                    src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
                    alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                    className="rounded-lg bg-gray-100"
                />

            </div>
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{product.productName}</h2>
                    <p className="mt-4 text-gray-500">
                        {product.about}
                    </p>

                    <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">

                        <div className="border-t border-gray-200 pt-4">
                            <dt className="font-medium text-gray-900">PRICE</dt>
                            <dd className="mt-2 text-sm text-gray-500">{product.price}</dd>
                        </div>
                        <div className="border-t border-gray-200 pt-4">
                            <dt className="font-medium text-gray-900">AGE</dt>
                            <dd className="mt-2 text-sm text-gray-500">{product.age}</dd>
                        </div>
                    </dl>
                </div>
            </div>
            <div>
                <h1>BIDS </h1>
                <ul role="list" className="divide-y divide-gray-100">
                    {people.map((person) => (
                        <li key={person.email} className="flex justify-between gap-x-6 py-5">
                            <div className="flex gap-x-4">
                                <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={person.imageUrl} alt="" />
                                <div className="min-w-0 flex-auto">
                                    <p className="text-sm font-semibold leading-6 text-gray-900">{person.name}</p>
                                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.email}</p>
                                </div>
                            </div>
                            <div className="hidden sm:flex sm:flex-col sm:items-end">
                                <p className="text-sm leading-6 text-gray-900">{person.role}</p>
                                {person.lastSeen ? (
                                    <p className="mt-1 text-xs leading-5 text-gray-500">
                                        Last seen <time dateTime={person.lastSeenDateTime}>{person.lastSeen}</time>
                                    </p>
                                ) : (
                                    <div className="mt-1 flex items-center gap-x-1.5">
                                        <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                                            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                        </div>
                                        <p className="text-xs leading-5 text-gray-500">Online</p>
                                    </div>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="w-96">
                    <h4>Bid AMount</h4>
                    <input type="number" name="bidAmount"/>
                    <h4>comment</h4>
                    <input type="text" name="comment"/>
                </div>
            </div>
        </div>
    )
}
export default DisplayProduct