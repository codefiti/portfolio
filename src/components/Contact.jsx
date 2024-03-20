import NavigationBar from "./NavigationBar.jsx";
function Contact (){
    return(
    <>
    <div className="contact-container bg-mytheme-accent">
                <h1 className="text-mytheme-primary">Get in Touch</h1>
                <div className="contact-container">
                    <div className="contact-form-box">
                        <form>
                            <div className="form-group">
                                <label htmlFor="name" className="text-mytheme-primary">Name:</label>
                                <input type="text" id="name" placeholder="Your full name" name="name" required className="input input-bordered" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email" className="text-mytheme-primary">Email:</label>
                                <input type="email" id="email" placeholder="Your email" name="email" required className="input input-bordered" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message" className="text-mytheme-primary">Message:</label>
                                <textarea id="message" name="message" placeholder="Type your message here" rows="4" required className="textarea textarea-bordered"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Send</button>
                        </form>
                    </div>
                </div>
            </div>
    </>
    );
}
export default Contact;