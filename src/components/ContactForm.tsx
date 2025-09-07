import {
  Github,
  Linkedin,
  Mail,
  CheckCircle,
  XCircle,
  Loader2,
} from "lucide-react";
import { useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const form = e.currentTarget;
      const formDataObj = new FormData(form);

      await fetch("/", {
        method: "POST",
        body: new URLSearchParams(formDataObj as any).toString(),
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      });

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    } catch (err) {
      console.error(err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 px-4 sm:px-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
            Get In <span className="text-[#648DB3]">Touch</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            I'm always interested in new opportunities and exciting projects.
            Let's connect!
          </p>
        </div>

        {/* Form + Contact Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-[#B2D8CE]/30">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center sm:text-left">
              Send Message
            </h3>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <input type="hidden" name="form-name" value="contact" />

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#B2D8CE]/50 rounded-xl focus:ring-2 focus:ring-[#648DB3] focus:border-transparent transition-all duration-300"
                  placeholder="Your full name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#B2D8CE]/50 rounded-xl focus:ring-2 focus:ring-[#648DB3] focus:border-transparent transition-all duration-300"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#B2D8CE]/50 rounded-xl focus:ring-2 focus:ring-[#648DB3] focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>

              {/* Animated Button */}
              <button
                type="submit"
                disabled={status === "sending"}
                className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl font-semibold transition-all duration-300 transform shadow-lg
                  ${
                    status === "idle"
                      ? "bg-gradient-to-r from-[#52357B] to-[#5459AC] hover:from-[#5459AC] hover:to-[#648DB3] text-white"
                      : status === "sending"
                      ? "bg-[#648DB3] text-white animate-pulse"
                      : status === "success"
                      ? "bg-green-500 text-white"
                      : "bg-red-500 text-white"
                  }`}
              >
                {status === "idle" && "Send Message"}
                {status === "sending" && (
                  <>
                    <Loader2 className="animate-spin" size={20} /> Sending...
                  </>
                )}
                {status === "success" && (
                  <>
                    <CheckCircle size={20} /> Sent!
                  </>
                )}
                {status === "error" && (
                  <>
                    <XCircle size={20} /> Failed, try again
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col space-y-6">
            <div className="bg-gradient-to-br from-[#B2D8CE]/40 to-[#648DB3]/20 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="w-12 h-12 bg-[#648DB3] rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="text-white" size={20} />
              </div>
              <div className="text-center sm:text-left">
                <p className="text-sm text-gray-500 font-medium">Email</p>
                <p className="text-gray-800 font-semibold">
                  rachnagautam695@gmail.com
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-[#B2D8CE]/30 flex flex-col sm:flex-row !items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
              <h3 className="text-xl font-bold text-gray-800 mb-2 sm:mb-0 flex-shrink-0">
                Follow Me
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/rachna-gautam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#5459AC] hover:bg-[#52357B] rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                >
                  <Linkedin className="text-white" size={20} />
                </a>
                <a
                  href="https://github.com/rachna-gautam"
                  className="w-12 h-12 bg-[#648DB3] hover:bg-[#5459AC] rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                >
                  <Github className="text-white" size={20} />
                </a>
                <a
                  href="mailto:rachnagautam695@gmail.com"
                  className="w-12 h-12 bg-[#B2D8CE] hover:bg-[#648DB3] rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                >
                  <Mail className="text-white" size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
