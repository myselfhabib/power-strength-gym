import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { useHistory, useParams } from 'react-router-dom';
import swal from 'sweetalert';
import Footer from '../components/Footer/Footer';
import { useOrder } from '../contexts/OrderProvider';
import useFetch from '../hooks/useFetch';
import Back from '../routes/Back';

const WorkoutDetailScreen = () => {
    const [quantity, setQuantity] = useState(1)
    const [disabled, setDisabled] = useState(false)
    const { title } = useParams();
    const [fitss] = useFetch();
    const { handleOrder } = useOrder();
    const history = useHistory();

    return (
        <main className="max-w-screen-xl mx-auto px-6 my-16">

            <Back />
            {fitss?.filter(item => item.title === title)?.map((fitness) => (
                <div className="flex flex-col justify-center items-center h-screen">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10" key={fitness.id}>

                        {/* left side  */}
                        <div className="order-2 md:order-1 lg:order-1 flex flex-col justify-center">
                            <h1 className="text-center md:text-left lg:text-left text-3xl lg:text-4xl font-semibold poppins pb-4 text-gray-700 select-none">{fitness.title}</h1>
                            <p className="text-center md:text-left lg:text-left text-sm poppins text-gray-500 leading-relaxed select-none">{fitness.description}</p>

                            <div className="flex items-center justify-center md:justify-start lg:justify-start space-x-6 pt-8">
                                <h1 className="text-3xl font-bold text-black poppins select-none">${(fitness.price * quantity).toFixed(2)}</h1>

                                <div className="flex items-center border border-gray-200 px-4 py-2 space-x-6 rounded-full">
                                    <h5 className="for">for</h5>
                                    <AiOutlineMinus onClick={() => {
                                        quantity === 1 ? setQuantity(1) : setQuantity(quantity - 1);

                                    }}
                                        className="text-2xl bg-primary w-8 h-8 rounded-full text-white hover:scale-105 transform transition duration-500 cursor-pointer p-1"
                                    />
                                    <span className="text-lg text-gray-700 poppins select-none">{quantity}</span>

                                    <AiOutlinePlus onClick={() => {
                                        setQuantity(quantity + 1);
                                    }}
                                        className="text-2xl bg-primary w-8 h-8 rounded-full text-white hover:scale-105 transform transition duration-500 cursor-pointer p-1"
                                    />
                                    <h5 className="month">month</h5>
                                </div>
                            </div>

                            {/* add button  */}
                            <div className="mt-8 flex items-center justify-center md:justify-start lg:justify-start">
                                <button disabled={disabled} className={disabled ? "opacity-30 flex items-center space-x-3 bg-primary px-6 py-3 text-white poppins rounded-full ring-red-300 focus:outline-none focus:ring-4 transform transition duration-700 hover:scale-105" : "flex items-center space-x-3 bg-primary px-6 py-3 text-white poppins rounded-full ring-red-300 focus:outline-none focus:ring-4 transform transition duration-700 hover:scale-105"} onClick={() => {
                                    fitness['quantity'] = quantity;
                                    fitness.price = fitness.price * quantity;
                                    handleOrder(fitness);
                                    setDisabled(true);
                                    swal("Wow!!!", "Your order has added to the cart", "success")
                                    history.push('/orders')
                                    console.log(fitness)
                                }}>
                                    <span>{disabled ? "Added" : "VIP Membership"}</span>
                                </button>
                            </div>

                        </div>
                        {/* right side  */}
                        <div className="order-1 md:order-2 lg:order-2">
                            <img src={`../../${fitness.image}`} className="w-3/4 md:w-3/4 lg:w-full mx-auto" alt="food" />
                        </div>
                    </div>

                </div>

            ))}

        </main>

    )
}

export default WorkoutDetailScreen
