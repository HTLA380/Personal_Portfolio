import {useForm} from "react-hook-form";
import {motion} from "framer-motion";

const Contact = () => {
  const {
    register,
    trigger,
    formState: {errors},
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center contact pt-10 pb-20 md:py-48">
      {/* HEADINGS */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.5}}
        transition={{duration: 0.5}}
        variants={{
          hidden: {opacity: 0, y: 50},
          visible: {opacity: 1, y: 0},
        }}
        className="w-full mb-10">
        <p className="stroke-intro text-4xl md:text-5xl">
          <span className="stroke-2">CONTACT ME</span> TO GET STARTED
        </p>
      </motion.div>

      {/* FORM & IMAGE */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.5}}
        transition={{delay: 0.2, duration: 0.5}}
        variants={{
          hidden: {opacity: 0, y: 50},
          visible: {opacity: 1, y: 0},
        }}
        className="w-full max-w-5xl border border-gray-400 p-5 md:p-10 md:mt-0">
        <form
          target="_blank"
          onSubmit={onSubmit}
          action="https://formsubmit.co/8bbc563c9fe8290eec6cffbf912c7d3a"
          method="POST">
          {errors.name && (
            <p className="text-red mt-1">
              {errors.name.type === "required" && "This field is required."}
              {errors.name.type === "maxLength" && "Max length is 100 char."}
            </p>
          )}
          <input
            className="w-full bg-transparent font-semibold placeholder-gray-400 my-2 border-b border-gray-400 p-3"
            type="text"
            placeholder="NAME"
            {...register("name", {
              required: true,
              maxLength: 100,
            })}
          />
          {errors.email && (
            <p className="text-red mt-1">
              {errors.email.type === "required" && "This field is required."}
              {errors.email.type === "pattern" && "Invalid email address."}
            </p>
          )}
          <input
            className="w-full bg-transparent font-semibold placeholder-gray-400 my-2 border-b border-gray-400 p-3"
            type="text"
            placeholder="EMAIL"
            {...register("email", {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
          />

          {errors.message && (
            <p className="text-red mt-1">
              {errors.message.type === "required" && "This field is required."}
              {errors.message.type === "maxLength" &&
                "Max length is 2000 char."}
            </p>
          )}

          <textarea
            className="w-full bg-transparent font-semibold placeholder-gray-400 border-b my-2 border-gray-400 p-3 mt-5 max-h-52"
            name="message"
            placeholder="MESSAGE"
            rows="4"
            cols="50"
            {...register("message", {
              required: true,
              maxLength: 2000,
            })}
          />

          <button
            className="p-5 bg-yellow font-semibold text-deep-blue mt-5 hover:bg-red hover:text-white transition duration-500"
            type="submit">
            SEND ME A MESSAGE
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
