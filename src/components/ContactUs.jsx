import { FaWhatsapp } from "react-icons/fa";

export default function ContactUs() {
  return (
    <section className="py-16 bg-white px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">আমাদের সাথে যোগাযোগ করুন</h2>
          <p className="text-gray-600 mb-6">সরাসরি কথা বলতে বা হোয়াটসঅ্যাপে অর্ডার দিতে নিচের বাটনে ক্লিক করুন।</p>
          <a 
            href="https://wa.me/8801700666807" 
            target="_blank" 
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full transition-all shadow-lg hover:shadow-green-200"
          >
            <FaWhatsapp size={24} />
            WhatsApp-এ অর্ডার করুন
          </a>
        </div>
        <div className="h-80 rounded-2xl overflow-hidden shadow-xl border-4 border-yellow-400">
          <iframe 
            title="Rajshahi Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58139.11749507982!2d88.56807963428988!3d24.373307404470433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbefd0a551957f%3A0xc665e77b67035f8d!2sRajshahi!5e0!3m2!1sen!2sbd!4v1715000000000!5m2!1sen!2sbd" 
            width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy">
          </iframe>
        </div>
      </div>
    </section>
  );
}