import React, { useEffect, useState } from 'react'
import AboutItem from './AboutItem'

const AboutUs = () => {
    const [aboutData, setAboutData] = useState([])

    //fetching about us data
    useEffect(() => {
        fetch('/aboutus.json')
            .then(res => res.json())
            .then(data => setAboutData(data))
    }, [])
    return (
        <div className="max-w-screen-xl mx-auto my-12 px-6">
            <h1 className="text-4xl poppins pb-4">Why You training here?</h1>
            <p className="text-gray-500 text-sm poppins w-2/4">When you're at the gym feeling like you'll never be one of those people who look like they've been at it their entire lives, remember that they all started somewhere.</p>

            {/* about us cards  */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
                {aboutData.map(item => (
                    <AboutItem key={item.id} {...item} />
                ))}
            </div>
        </div>
    )
}

export default AboutUs
