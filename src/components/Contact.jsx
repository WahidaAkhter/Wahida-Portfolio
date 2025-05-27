import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-6  text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
        <p className="text-gray-200 mb-10">
          Reach out anytime! Questions, ideas, or just a friendly hello — I’m always happy to hear from you.
        </p>

        <form
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            alert('Form submitted!');
          }}
        >
          <div className="flex flex-col">
            <label htmlFor="name" className="text-left mb-1 text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="p-3 rounded-lg bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-left mb-1 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="p-3 rounded-lg bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="text-left mb-1 text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              className="p-3 rounded-lg bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your message..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-lg font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
