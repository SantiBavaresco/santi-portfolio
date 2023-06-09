import React from 'react';

const Footer = () => {
    const handleEmailClick = () => {
        const email = 'santiagobavaresco@gmail.com';
        const subject = 'Hello Santiago';
        const body = 'Just wanted to say hi!';
    
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(body)}`;
    
        // window.location.href = mailtoLink;
        window.open(mailtoLink, '_blank');
    };

    return (
        <footer className="text-center text-white bg-blue-500 dark:bg-teal-700">
            <div className="flex justify-center py-6">
                <div >
                    <p className="flex items-center justify-center">
                        <span className="mr-4">Contact</span>
                        <button
                            type="button"
                            className="inline-block rounded-full border-2 border-gray-100 px-6 pb-1 pt-2 
                            text-xs font-medium uppercase leading-normal text-gray-100 transition duration-150 ease-in-out
                            hover:border-gray-200 hover:bg-blue-800 hover:text-gray-200 focus:border-gray-200
                            focus:text-gray-200 focus:outline-none focus:ring-0 active:border-gray-200 active:text-gray-200
                            dark:hover:bg-gray-700 dark:hover:text-gray-100"
                            data-te-ripple-init
                            data-te-ripple-color="light"
                            onClick={handleEmailClick}
                        >
                        Send E-mail
                        </button>
                    </p>
                </div>
            </div>

            {/* Copyright section */}
            <div className="py-4 text-center bg-opacity-20 bg-gray-900">
                <p className="text-white">
                &copy; 2023 Santiago Bavaresco. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
