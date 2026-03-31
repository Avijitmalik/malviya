import Header from "@/components/header"
import Footer from "@/components/footer"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#1b111c]">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Get In <span className="text-[#ff0007] text-white">Touch</span>
          </h1>
          <p className="text-[#9497a1] text-lg">
            Have questions? We'd love to hear from you. Contact us today for a free consultation.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left - Contact Info */}
            <div>
              <h2 className="text-4xl font-bold text-white mb-12">Contact Information</h2>
              
              <div className="space-y-8">
                {/* Email */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#ff0007] to-[#8b0000] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Email</h3>
                    <p className="text-[#9497a1]">services@malviyacapital.com</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#ff0007] to-[#8b0000] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Phone</h3>
                    <p className="text-[#9497a1]">+91 9836432398</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#ff0007] to-[#8b0000] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Address</h3>
                    <p className="text-[#9497a1]">24A, 1st Floor, Parijat Building, Shakespeare Sarani, Elgin, Kolkata, West Bengal 700017</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#ff0007] to-[#8b0000] flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Business Hours</h3>
                    <p className="text-[#9497a1]">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-[#9497a1]">Saturday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Contact Form */}
            <div>
              <form className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-white font-semibold mb-2">Full Name</label>
                  <input 
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-[#9497a1] focus:outline-none focus:border-[#ff0007]"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-white font-semibold mb-2">Email Address</label>
                  <input 
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-[#9497a1] focus:outline-none focus:border-[#ff0007]"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-white font-semibold mb-2">Phone Number</label>
                  <input 
                    type="tel"
                    placeholder="+1 (201) 555-0000"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-[#9497a1] focus:outline-none focus:border-[#ff0007]"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-white font-semibold mb-2">Subject</label>
                  <input 
                    type="text"
                    placeholder="How can we help?"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-[#9497a1] focus:outline-none focus:border-[#ff0007]"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-white font-semibold mb-2">Message</label>
                  <textarea 
                    rows={5}
                    placeholder="Tell us more about your inquiry..."
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-[#9497a1] focus:outline-none focus:border-[#ff0007] resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit"
                  className="w-full bg-[#ff0007] hover:bg-[#cc0005] text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  Send a Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
