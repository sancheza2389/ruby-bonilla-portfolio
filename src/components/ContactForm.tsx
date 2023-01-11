import axios from "axios";
import { ChangeEvent, FormEvent, useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

type FormState = {
    name: String;
    email: String;
    subject: String;
    message: String;
};
type ServiceMessage = {
    class: string;
    text: string;
};

function ContactForm() {
    const formId = "nE9RHVCF";
    const formSparkUrl = `https://submit-form.com/${formId}`;
    const recaptchaKey = '6LfzS9UjAAAAAKTWMvGTG5Zv_EHeVhCXz2D3U8LX';
    const recaptchaRef = useRef<any>();

    const initialFormState = {
        name: '',
        email: '',
        subject: '',
        message: ''
    }

    const [formState, setFormState] = useState<FormState>(initialFormState);
    const [submitting, setSubmitting] = useState<boolean>(false);
    const [message, setMessage] = useState<ServiceMessage>();
    const [recaptchaToken, setRecaptchaToken] = useState<string>();

    const submitForm = async (event: FormEvent) => {
        event.preventDefault();
        setSubmitting(true);
        await postSubmission();
        setSubmitting(false);
    };

    const postSubmission = async () => {
        const payload = {
            ...formState,
            "g-recaptcha-response": recaptchaToken
        };

        try {
            const result = await axios.post(formSparkUrl, payload);
            console.log(result);
            setMessage({
                class: "green",
                text: "Thank you, I will reach out soon!",
            });
            setFormState(initialFormState);
            recaptchaRef.current.reset();
        } catch(error) {
            console.log(error);
            setMessage({
                class: "red",
                text: "Sorry, there was a problem",
            });
        }
    };
    const updateFormControl = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = event.target;
        const formKey = id;
        const updatedFormState = { ...formState };
        updatedFormState[formKey] = value;
        setFormState(updatedFormState);
    };
    const updateRecaptchaToken = (token: string | null) => {
        setRecaptchaToken(token as string);
    };
    
    return(
        <div className="contact__container">
            <h1 className="heading heading-sml">Let's Work Together!</h1>
            {message && (
                <div className={message.class}>
                    {message.text}
                </div>
            )}
            <form onSubmit={submitForm} className="contact-form">
                <div className="contact-form__row1">
                    <div className="contact-form--input">
                        <label htmlFor="name">Name</label>
                        <input 
                            onChange={updateFormControl}
                            type="text" 
                            id="name" 
                            value={formState.name}
                            placeholder="Name"
                            required
                        />
                    </div>
                    <div className="contact-form--input">
                        <label htmlFor="email">email</label>
                        <input 
                            onChange={updateFormControl}
                            type="email" 
                            id="email" 
                            value={formState.email}
                            placeholder="Email"
                            required
                        />
                    </div>
                </div>
                <div className="contact-form--input">
                    <label htmlFor="subject">Subject</label>
                    <input 
                        onChange={updateFormControl}
                        type="text" 
                        id="subject" 
                        value={formState.subject}
                        placeholder="Subject"
                        required
                    />
                </div>
                <div className="contact-form--input">
                    <label htmlFor="message">Message..</label>
                    <textarea 
                        onChange={updateFormControl}
                        type="text" 
                        id="message" 
                        value={formState.message}
                        placeholder="Message"
                        required
                    ></textarea>
                </div>
                <div className="contact-form--submit">
                    <ReCAPTCHA 
                        ref={recaptchaRef}
                        sitekey={recaptchaKey}
                        onChange={updateRecaptchaToken}
                    />
                    <div className="button">
                        <button 
                            name="button" 
                            type="submit"
                            disabled={submitting}
                            className="button-submit"
                            > 
                            {submitting ? "SUBMITTING..." : "SUBMIT"} 
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )

}

export default ContactForm;