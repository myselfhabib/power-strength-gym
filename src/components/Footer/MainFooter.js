import React from 'react'
import Brand from '../Form/Brand'

const MainFooter = () => {
    // footer links 
    const FooterLinks = [
        { id: 1, text: 'About Online Fitness' },
        { id: 2, text: 'Read our blog' },
        { id: 3, text: 'Sign up to Become a membar' },
        { id: 4, text: 'Add your Diet' },
        { id: 5, text: 'Get Help' },
        { id: 6, text: 'Ask any question' },
        { id: 7, text: 'VIP Access' },
        { id: 8, text: 'Contact' },
        { id: 9, text: 'Facebook' },
        { id: 10, text: 'Instagram' },
        { id: 11, text: 'Twitter' },
        { id: 12, text: 'Youtube' },
    ]
    return (
        <div className="flex pb-8">
            {/* logo  */}
            <div className="flex flex-grow">
                <Brand />
            </div>
            {/* footer links  */}
            <div className="flex space-x-12">
                <div className="flex flex-col space-y-2">
                    {FooterLinks.slice(0, 4).map(item => (
                        <span className="text-white poppins" key={item.id}>{item.text}</span>
                    ))}
                </div>
                <div className="flex flex-col space-y-2">
                    {FooterLinks.slice(4, 8).map(item => (
                        <span className="text-white poppins" key={item.id}>{item.text}</span>
                    ))}
                </div>
                <div className="flex flex-col space-y-2">
                    {FooterLinks.slice(8, 12).map(item => (
                        <span className="cursor-pointer text-white poppins" key={item.id}>{item.text}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MainFooter
