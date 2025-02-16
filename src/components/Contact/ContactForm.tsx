import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useTheme } from '../../context/ThemeContext';
import FormSent from './FormSent';

const ContactForm: React.FC = () => {

  const { theme } = useTheme();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isFormSent, setIsFormSent] = useState(false);

  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID!;
  const emailTemplateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID!;
  const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY!;


  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSending(true);

    try {
      const templateParams = {
        user_first_name: firstName,
        user_last_name: lastName,
        from_email: email,
        message,
      };

      await emailjs.send(
        serviceId,
        emailTemplateId,
        templateParams,
        publicKey
      );

      setIsFormSent(true);
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email. Please try again later.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="px-5 py-20 flex items-center justify-center h-full">
      <div className="w-full">
      {isFormSent ? (
        <FormSent />
        ) : (
        <div className="p-4 rounded-3xl shadow-sm backdrop-filter backdrop-blur-sm max-w-md mx-auto my-10 bg-floral bg-opacity-60 border border-[#FFF5E5] border-opacity-50 dark:border-jet dark:border-opacity-50 dark:bg-dark-grey dark:bg-opacity-60">
          <div className="text-center">
            <h3 className="my-3 text-center font-title text-jet font-semibold text-3xl md:text-3xl lg:5xl dark:text-floral">CONTACT</h3>
          </div>
          <div className="m-7">
            {/* Form begining */}
            <form onSubmit={sendEmail} className="max-w-md mx-auto mt-8">
              <div className="mb-4">
                <label htmlFor="firstName" className="block font-text text-jet font-base text-lg text-left dark:text-floral">
                  First name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="mt-1 p-2 w-full border rounded-3xl bg-white dark:bg-floral"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="lastName" className="block font-text text-jet font-base text-lg text-left dark:text-floral">
                  Last name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="mt-1 p-2 w-full border rounded-3xl bg-white dark:bg-floral"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block font-text text-jet font-base text-lg text-left dark:text-floral">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 p-2 w-full border rounded-3xl bg-white dark:bg-floral"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block font-text text-jet font-base text-lg text-left dark:text-floral">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="mt-1 p-2 w-full border rounded-3xl bg-white dark:bg-floral"
                  required
                />
              </div>
              <div className="flex justify-center">
                {theme === 'dark' ? (
                  <button
                    type="submit"
                    className="w-6/12 p-2 font-text font-semibold text-lg text-floral rounded-3xl bg-floral text-jet"
                    disabled={isSending}
                  >
                    {isSending ? 'Sending...' : 'Submit'}
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="bg-plant bg-auto w-6/12 p-2 font-text font-semibold text-lg text-floral rounded-3xl"
                    disabled={isSending}
                  >
                  {isSending ? 'Sending...' : 'Submit'}
                  </button>
                )}
              </div>
            </form>
            {/* Form ending */}
          </div>
        </div>
        )}
      </div>
    </div>
  );
};


export default ContactForm;
