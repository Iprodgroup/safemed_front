import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Banner = ({ data }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleFormChange = async (e) => {
    e.preventDefault();
  };

  const sendForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://api.toolsandtrade.com/api/contact",
        {
          name,
          email,
          message,
        }
      );
      if (response.status === 200) {
        toast.success("Form submitted successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        toast.error("Failed to submit the form. Please try again.");
      }
    } catch (error) {
      toast.error("Failed to submit the form. Please try again.");
    }
  };

  return (
    <div className="container mt-10 flex items-center justify-between w-full gap-10 font-body hero mb-12">
      <Toaster />
      <form
        action=""
        method=""
        onSubmit={sendForm}
        onChange={handleFormChange}
        className=" flex flex-col justify-evenly items-center font-body w-[350px] 
                2xl:h-[450px] xl:h-[450px] lg:h-[400px] md:h-[370px] sm:h-[370px] h-[370px] px-4 py-6 border"
      >
        <p className="2xl:text-2xl xl:text-2xl lg:text-xl md:text-xl sm:text-lg text-md font-semibold text-gray-700">
          Request a Quote
        </p>
        <div className="flex flex-col gap-6 mb-10 w-full">
          <input
            type="text"
            required
            autoComplete="name"
            value={name}
            onChange={handleNameChange}
            className="outline-none border-b-2 border-gray-500 py-1"
            placeholder="Your Name"
          />
          <input
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={handleEmailChange}
            className="outline-none border-b-2 border-gray-500 py-1"
            placeholder="Email Address"
          />
          <textarea
            required
            value={message}
            onChange={handleMessageChange}
            className="outline-none border-b-2 border-gray-500 py-1"
            placeholder="Your Massage"
          ></textarea>
        </div>
        <button
          className="rounded-full bg-primary w-full py-2 max-w-[200px]
                2xl:text-xl xl:text-xl lg:text-lg md:text-md sm:text-sm text-sm
                text-white hover:bg-blue-800 transition-all"
          type="submit"
        >
          SEND INQUIRY
        </button>
      </form>
      <div
        className=" static -z-10 heroRight
            2xl:h-[500px] xl:h-[500px] lg:h-[450px] md:h-[420px] sm:h-[400px] h-[380px] w-full 
            bg-hero bg-no-repeat bg-center bg-cover p-10 flex flex-col justify-between"
      >
        <div className="mt-6 px-4">
          <h1
            className=" text-primary font-semibold mb-2 max-w-[550px] uppercase
                    2xl:text-4xl xl:text-3xl lg:text-2xl md:text-2xl sm:text-xl text-lg flex flex-col gap-2"
          >
            Medical Equipment and Safety Supplies (PPE)
            <span
              className="text-primary font-normal
                    2xl:text-2xl xl:text-2xl lg:text-xl md:text-xl sm:text-lg text-md"
            >
              Supplier and Reseller in {data.name}
            </span>
          </h1>
        </div>
        <div className="flex justify-end items-end ">
          <img
            className="translate-x-[50px] 
                    2xl:max-w-[266px] xl:max-w-[266px] lg:max-w-[226px] md:max-w-[196px] sm:max-w-[166px] max-w-[146px]
                    2xl:h-[224px] xl:h-[224px] lg:h-[194px] md:h-[164px] sm:h-[144px] h-[134px]
                    static -z-0"
            src="/item1.png"
            alt=""
          />
          <img
            className="
                    2xl:max-w-[164px] xl:max-w-[164px] lg:max-w-[146px] md:max-w-[126px] sm:max-w-[116px] max-w-[106px] 
                    2xl:h-[263px] xl:h-[263px] lg:h-[243px] md:h-[203px] sm:h-[183px] h-[163px]
                    static -z-10"
            src="/item2.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
