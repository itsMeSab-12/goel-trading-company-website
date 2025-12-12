
import { MoveRight } from 'lucide-react';
import { validators } from "./validator";
import type { FormState, ErrorState } from './type';
import style from "./styles.module.css"
import { useState } from 'react';


const Contact = () => {
  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [errors, setErrors] = useState<ErrorState>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    const validator = validators[name as keyof FormState];
    const errorMessage = validator ? validator(value) : "";
    setErrors((prev) => ({ ...prev, [name]: errorMessage }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: ErrorState = {
      firstName: validators.firstName(form.firstName),
      lastName: validators.lastName(form.lastName),
      email: validators.email(form.email),
      phoneNumber: validators.phoneNumber(form.phoneNumber),
      message: validators.message(form.message),
    };

    setErrors(newErrors);

    const hasError = Object.values(newErrors).some((err) => err !== "");
    if (hasError) return;
    //Integrate with email service 
    console.log("Form Submitted:", form);
  };

  return (
    <div className={style.container}>
      <div className={style.main_title}>Contact Us</div>

      <form className={style.contact_form} onSubmit={handleSubmit}>
        <div className={style.field_container}>
          <div className={style.field}>
            <label>First Name</label>
            <input
              name="firstName"
              type="text"
              value={form.firstName}
              onChange={handleChange}
              placeholder="Enter your First Name"
            />
            {errors.firstName && (
              <div className={style.error}>{errors.firstName}</div>
            )}
          </div>

          <div className={style.field}>
            <label>Last Name</label>
            <input
              name="lastName"
              type="text"
              value={form.lastName}
              onChange={handleChange}
              placeholder="Enter your Last Name"
            />
            {errors.lastName && (
              <div className={style.error}>{errors.lastName}</div>
            )}
          </div>
        </div>

        <div className={style.field_container}>
          <div className={style.field}>
            <label>Email ID</label>
            <input
              name="email"
              type="text"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your Email ID"
            />
            {errors.email && (
              <div className={style.error}>{errors.email}</div>
            )}
          </div>

          <div className={style.field}>
            <label>Phone Number</label>
            <input
              name="phoneNumber"
              type="text"
              value={form.phoneNumber}
              onChange={handleChange}
              placeholder="Enter your Phone Number"
            />
            {errors.phoneNumber && (
              <div className={style.error}>{errors.phoneNumber}</div>
            )}
          </div>
        </div>

        <div className={style.field_container}>
          <div className={style.field}>
            <label>Message</label>
            <input
              name="message"
              type="text"
              value={form.message}
              onChange={handleChange}
              placeholder="Enter your Message"
            />
            {errors.message && (
              <div className={style.error}>{errors.message}</div>
            )}
          </div>
        </div>

        <button className={style.btn} type="submit">
          Submit
          <span className="icon">
            <MoveRight />
          </span>
        </button>
      </form>

      <div className={style.field_email_container}>
        <a href="">
          enquiries@comapany.com
        </a>
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
  );
};

export default Contact;