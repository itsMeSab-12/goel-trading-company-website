import { MoveRight } from 'lucide-react';
import style from "./styles.module.css"

const Contact = () => {
    return (
        <>
            <div className={style.container}>
                <div className={style.main_title} >
                    Contact Us
                </div>
                <form className={style.contact_form} action="">
                    <div className={style.field_container}>
                        <div className={style.field}>
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" id="firstName" name="firstName" placeholder="Enter your First Name" />
                            <div></div>
                        </div>
                        <div className={style.field}>
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" id="lastName" name="lastName" placeholder="Enter your Last Name" />
                            <div></div>
                        </div>
                    </div>
                    <div className={style.field_container}>
                        <div className={style.field}>
                            <label htmlFor="email">Email ID</label>
                            <input type="text" id="email" name="email" placeholder="Enter your Email ID" />
                            <div></div>
                        </div>
                        <div className={style.field}>
                            <label htmlFor="phoneNumber">Phone Number</label>
                            <input type="text" id="phoneNumber" name="phoneNumber" placeholder="Enter your Phone Number" />
                            <div></div>
                        </div>
                    </div>
                    <div className={style.field_container}>
                        <div className={style.field}>
                            <label htmlFor="message">Message</label>
                            <input type="text" id="message" name="message" placeholder="Enter your Message" />
                            <div></div>
                        </div>
                    </div>

                    <button
                        className={style.btn}
                        type="submit">Submit
                        <span className='icon'>
                            <MoveRight />
                        </span>
                    </button>
                </form>

                <div className={style.field_companyEmail}>
                    <div className={style.field_name}>
                        Email Us
                    </div>
                    <div className={style.field_value}>
                        enquiries@comapany.com
                    </div>
                </div>

                <div className={style.social_links_container}>
                    <a>
                        Instagram
                    </a>
                    <a>
                        Facebook
                    </a>
                    <a>
                        WhatsApp
                    </a>
                </div>
            </div>
        </>
    )
}

export default Contact