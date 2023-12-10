import React, { FunctionComponent } from 'react';

const FormSent: FunctionComponent = () => {

  return (
    <div className="px-5 pt-15 md:pt-5 pb-20 md:pb-0 flex items-center justify-center h-full">
      <div className="w-full">
        <div className="p-4 rounded-3xl shadow-sm backdrop-filter backdrop-blur-sm max-w-md mx-auto my-10 bg-floral bg-opacity-60 dark:bg-dark-grey dark:bg-opacity-60">
            <div className="text-center">
                <h3 className="my-3 text-center font-title text-jet font-semibold text-3xl md:text-3xl lg:5xl dark:text-floral">MESSAGE SENT</h3>
            </div>
            <div className="m-7">
              <div className="max-w-md mx-auto mt-8">
                <p className="block font-text text-jet font-base text-lg text-left dark:text-floral">Thank you for your message which has been sent successfully !</p>
                <br />
                <p className="block font-text text-jet font-base text-lg text-left dark:text-floral">I will get back to you within 48h, meanwhile I wish a lovely day ☀️</p>
                </div>
              </div>
            </div>
        </div>
    </div>
  );
};

export default FormSent;
