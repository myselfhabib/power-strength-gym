import React, { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import GymItem from './GymItem';
import Skeleton from './Skeleton';

const Fit = () => {
    const [menuTab, setMenuTab] = useState('Fitness')
    const [loading, setLoading] = useState(false)
    const [Fit] = useFetch();

    //loading 
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])

    //Gym menu tab 
    const handleMenuTabs = (type) => {
        setMenuTab(type)
    }

    return (
        <section className="my-12 max-w-screen-xl mx-auto px-6">
            <div className="flex items-center justify-center space-x-6">
                <p className={menuTab === 'Fitness' ? "active_menu_tab poppins bg-primary" : "menu_tab poppins"} onClick={() => handleMenuTabs('Fitness')}>Our Services</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
                {Fit.filter((item) => menuTab === item.type).map(item => (
                    loading ? <Skeleton key={item.id} /> : <GymItem key={item.id} {...item} />
                ))}
            </div>
        </section>
    )
}

export default Fit
