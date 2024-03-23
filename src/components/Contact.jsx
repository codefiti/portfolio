import "../contact.css";
function Contact() {
    return (
        <>
            <div className="main-container bg-mytheme-accent">
                <h1 className="my-title">Get in Touch</h1>
                <div className="contact-container">
                    <div className="contact-form-box">
                        <form className={'flex flex-col'}>
                            <div className="form-group">
                                <label htmlFor="name" className="text-mytheme-primary">Name:</label>
                                <input type="text" id="name" placeholder="Your full name" name="name" required
                                       className="input input-bordered"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email" className="text-mytheme-primary">Email:</label>
                                <input type="email" id="email" placeholder="Your email" name="email" required
                                       className="input input-bordered"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="message" className="text-mytheme-primary">Message:</label>
                                <textarea id="message" name="message" placeholder="Type your message here" rows="4"
                                          required className="textarea textarea-bordered"></textarea>
                            </div>
                            <div className="btn-container w-full">
                                <input type="submit" className="btn btn-primary bg-gray-50 w-full" value="Send"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;