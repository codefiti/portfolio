import React from 'react';

const ContactUs = () => {
    return (

        <div className="min-h-screen bg-white grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">

            <section className="flex flex-col justify-center items-center">

                <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                <p className="text-xl mb-8">Get in touch with us!</p>

                <div className="bg-white rounded px-4 pt-6 pb-8 mb-4 w-full md:w-2/3 lg:w-1/2">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full" id={'name'}  name={'name'} />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full" id={'email'}  name={'email'} />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea className="textarea h-24 textarea-bordered w-full" placeholder="Type here" id={'message'}  name={'message'}></textarea>
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="input input-info bg-info w-full" type="button">
                            Send Message
                        </button>
                    </div>
                </div>

            </section>

            <div  className="flex flex-col h-full w-full justify-center items-center">
                <h1 className="text-4xl font-bold mb-4">Visit Us</h1>
                <p className="">We are located at the following address:</p>
                <p className="mb-2">Chuka Ndagani, Tharaka Nithi County</p>
                <section className={'rounded px-4 pt-6 pb-8 mb-4 w-full'}>
                    <iframe src={'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7979.512540318975!2d37.661245032699334!3d-0.3195458404293495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ske!4v1697207214115!5m2!1sen!2ske'} width={'100%'} height={'450'} style={{border: 0}} allowFullScreen={true} loading={'lazy'}></iframe>
                </section>
            </div>

        </div>
    );
}

export default ContactUs;
