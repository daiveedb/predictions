import cn from "@/utils/classNames";
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [agree, setAgree] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <div className="py-5">
      <form onSubmit={(e) => handleSubmit(e)} action="">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="">Full Name</label>
            <input
              type="text"
              value={name}
              placeholder="Enter full name"
              onChange={(e) => setName(e.target.value)}
              className="contact-input"
              required
            />
          </div>
          <div>
            <label htmlFor="">Email Address</label>
            <input
              type="email"
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              className="contact-input"
              required
            />
          </div>
          <div>
            <label htmlFor="">Phone Number</label>
            <input
              type="text"
              value={phone}
              placeholder="Enter phone number"
              onChange={(e) => setPhone(e.target.value)}
              className="contact-input"
              required
            />
          </div>
          <div>
            <label htmlFor="">Subject</label>
            <input
              type="text"
              value={subject}
              placeholder="Enter subject"
              onChange={(e) => setSubject(e.target.value)}
              className="contact-input"
              required
            />
          </div>
          <div className="col-span-2">
            <label htmlFor="">Message</label>
            <textarea
              placeholder="Enter your message"
              className="contact-input"
              required
              name=""
              id=""
              cols={30}
              rows={10}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="flex gap-x-2 my-3 items-center">
          <div
            className={cn(
              "w-5 h-5 p-[2px] border rounded border-gray-500 flex justify-center items-center",
              {
                "bg-yellow-500": agree,
              }
            )}
            onClick={() => setAgree(!agree)}
          >
            {agree && <FaCheck color="white" />}
          </div>
          <p>
            You agree to our{" "}
            <a className="text-predictYellow" href="">
              privacy policy
            </a>
          </p>
        </div>
        <button
          type="submit"
          className="w-full bg-predictYellow p-3 text-black rounded-md disabled:bg-disabledGray disabled:cursor-not-allowed"
          disabled={!agree}
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
