import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";
import { EarthCanvas } from "./canvas";



const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // basic validation
    if (!form.name || !form.email || !form.message) {
      setLoading(false);
      alert("Please fill out name, email and message before sending.");
      return;
    }

    const SERVICE_ID = "service_3nprowk";
    const TEMPLATE_ID = "template_wdh5rdd";
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_KEY;

    (async () => {
      try {
        await emailjs.send(
          SERVICE_ID,
          TEMPLATE_ID,
          {
            from_name: form.name,
            to_name: "Arvind Agarwal",
            from_email: form.email,
            to_email: "arvindagarwal839@gmail.com",
            message: form.message,
          },
          PUBLIC_KEY
        );

        setLoading(false);
        alert("Thank you. I will get back to you as soon as possible.");

        setForm({
          name: "",
          email: "",
          message: "",
        });
      } catch (error) {
        setLoading(false);
        console.error("EmailJS send error:", error);
        alert("There was some error. You can reach out to me at arvindagarwal839@gmail.com");
      }
    })();
  };

  useEffect(() => {
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_KEY || "B3wH0vd94jjiLRJAc";
    if (PUBLIC_KEY && emailjs && emailjs.init) {
      try {
        emailjs.init(PUBLIC_KEY);
      } catch (err) {
        console.warn("EmailJS init failed:", err);
      }
    }
  }, []);

  return (
    <>
    <div
      className={`xl:mt-18 flex xl:flex-row flex-col-reverse gap-18 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>

      
    </div>
    </>
    
  );
};

export default SectionWrapper(Contact, "contact");