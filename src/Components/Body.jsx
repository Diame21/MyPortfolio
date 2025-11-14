import Aos from 'aos';
import React, { useEffect, useState } from 'react'
import 'aos/dist/aos.css'
import mylogo from '../Myimages/mylogo.png'




const Body = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });

    useEffect(() => {
        Aos.init({
            duration: 1000,
        });
    }, []);

    const handleModalToggle = () => {
        setIsOpen(!isOpen);
    };

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const validate = () => {
        const addError = {};
        if (!form.name) {
            addError.nameError = 'Name is required';
        }
        if (!form.email) {
            addError.emailError = 'Email is required';
        }
        if (!form.message) {
            addError.messageError = 'Message is required';
        }
        return addError;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const check = validate();
        if (Object.keys(check).length > 0) {
            setErrors(check);
        } else {
            setForm({
                name: '',
                email: '',
                message: ''
            });
            setErrors({});
            alert('Message sent successfully!');
        }
    };


    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:p-8 lg:gap-52 mt-[100px]">
                <div className="order-2 md:order-1" data-aos="flip-right">
                    <h1 className="text-2xl font-bold text-center lg:text-start text-[#0A174E]">
                        Hello!, I am Diame, a
                    </h1>
                    <p className="text-5xl font-bold text-[#0A174E]">Front-end developer</p>
                    <p className="font-semibold mt-4 text-xl text-[#0A174E]">
                        with expertise in HTML, CSS, JavaScript, and React,
                        passionate about crafting intuitive, responsive, and
                        user-centric web applications with a keen eye for
                        design and detail, and a strong focus on delivering high-quality,
                        cross-browser compatible, and accessible digital experiences that
                        exceed client expectations
                    </p>
                    <p className="mt-4 text-base text-[#0A174E] font-medium">
                        Specialize in building user-centric web applications
                    </p>

                    <button
                        onClick={handleModalToggle}
                        className="bg-[#0A174E] text-[#F5D042] text-lg bg-brand box-border border border-[#0A174E] hover:bg-brand-strong mt-3 rounded-md font-extrabold focus:ring-brand-medium shadow-xs leading-5 rounded-base px-4 py-2.5 focus:outline-none"
                        type="button"
                    >
                        Contact me
                    </button>
                </div>
                <div className="bg-[#F5D042] w-80 h-80 rounded-full flex justify-center items-center shadow-lg outline outline-4 outline-[#0A174E] drop-shadow-[0_0_20px_#0A174E] relative overflow-hidden order-1 md:order-2 mx-auto md:mx-0" data-aos="flip-left">
                    <img src={mylogo} alt="iamge"  className='w-80 h-80 rounded-full object-cover'/>
                </div>
            </div>
            {isOpen && (
                <div
                    id="popup-modal"
                    tabindex="-1"
                    className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-screen max-h-full"
                >
                    <div className="fixed top-0 left-0 w-full h-full bg-black opacity-70 overflow-y-hidden"></div>
                    <div className="relative p-4 w-full max-w-5xl max-h-full mx-auto">
                        <div className="relative bg-neutral-primary-soft border border-[#F5D042] rounded-base shadow-sm p-0 md:p-0">
                            <button
                                type="button"
                                className="absolute top-2 end-2 text-body bg-[#F5D042] hover:bg-neutral-tertiary hover:text-heading rounded-base text-sm w-9 h-9 ms-auto inline-flex justify-center items-center"
                                onClick={handleModalToggle}
                                data-modal-hide="popup-modal"
                            >
                                <svg
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                    xmlns=""
                                    width="24"
                                    height="24"
                                    fill="none"
                                    color='red'
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M6 18 17.94 6M18 18 6.06 6"
                                    />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                            <section className="py-20 px-4 md:px-8 lg:px-16 xl:px-32">
                                <div className=' bg-[#0A174E] p-5 rounded-lg  text-[#F5D042] shadow-md shadow-[#F5D042]' data-aos="zoom-in">
                                    <h2 className="text-3xl font-bold text-center mb-8" data-aos="fade-down">Get In Touch</h2>
                                    <p className="text-center mb-12" data-aos="fade-up">Feel free to reach out to me for any questions or opportunities.</p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="contact-info" data-aos="fade-right" data-aos-delay="200">
                                            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
                                            <p>Email: <a href="mailto:diamevictory@gmail.com" className="text-blue-500 hover:text-blue-700">diamevictory@gmail.com</a></p>
                                            <p>Phone: <a href="tel:+2349161051234" className="text-blue-500 hover:text-blue-700">+234 9161051234</a></p>
                                            <p>Location: Ibadan, Nigeria</p>
                                        </div>
                                        <form className="contact-form" data-aos="fade-left" data-aos-delay="400" onSubmit={handleSubmit}>
                                            <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Name" className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black" />
                                            <span className="text-sm text-[#F5D042]">{errors.nameError}</span>
                                            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black" />
                                            <span className="text-sm text-[#F5D042]">{errors.emailError}</span>
                                            <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"></textarea>
                                            <span className="text-sm text-[#F5D042]">{errors.messageError}</span><br />
                                            <button className="bg-[#F5D042] text-[#0A174E] font-bold py-2 px-4 mt-2 rounded-md">Send Message</button>
                                        </form>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            )}
            <div className='mb-10 mx-auto max-w-6xl px-4'>
                <h1 className='text-center text-3xl text-[#0A174E]  font-bold underline mb-6'>My Skills</h1>
                <div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 gap-6 justify-items-center' data-aos="fade-up">
                    <p
                        className='bg-[#0A174E] text-white border-2 border-[#F5D042]
                        hover:border-[#0A174E]  hover:text-[#F5D042] rounded-lg 
                        p-3 w-32 text-center font-medium shadow-md transition-all duration-300 capitalize'> html
                    </p>
                    <p
                        className='bg-[#0A174E] text-white border-2 border-[#F5D042]
                     hover:border-[#0A174E] hover:text-[#F5D042]
                      rounded-lg p-3 w-32 text-center font-medium shadow-md transition-all
                       duration-300 capitalize'>css
                    </p>
                    <p
                        className='bg-[#0A174E] text-white border-2 border-[#F5D042]
                      hover:border-[#0A174E] hover:text-[#F5D042] 
                      rounded-lg p-3 w-32 text-center font-medium shadow-md transition-all
                       duration-300 capitalize'>javascript
                    </p>
                    <p
                        className='bg-[#0A174E] text-white border-2 border-[#F5D042]
                     hover:border-[#0A174E] hover:text-[#F5D042]
                      rounded-lg p-3 w-32 text-center font-medium shadow-md transition-all
                       duration-300 capitalize'>tailwindcss
                    </p>
                    <p
                        className='bg-[#0A174E] text-white border-2 border-[#F5D042]
                     hover:border-[#0A174E] hover:text-[#F5D042]
                      rounded-lg p-3 w-32 text-center font-medium shadow-md transition-all
                       duration-300 capitalize'>reactjs
                    </p>
                    <p
                        className='bg-[#0A174E] text-white border-2 border-[#F5D042]
                     hover:border-[#0A174E] hover:text-[#F5D042]
                      rounded-lg p-3 w-32 text-center font-medium shadow-md transition-all
                       duration-300 capitalize'>git & github
                    </p>
                </div>
            </div>

        </>
    )
}

export default Body