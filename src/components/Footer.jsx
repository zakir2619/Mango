import { Link } from 'react-router-dom';
import { 
  FaFacebookF, 
  FaInstagram, 
  FaWhatsapp, 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope,
  FaChevronRight
} from 'react-icons/fa'; 

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#064e3b] text-gray-200 mt-20"> {/* Deep Green Theme */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 justify-items-center text-center md:text-left">
          
          {/* Brand Section */}
          <div className="space-y-5 -mt-8 md:items-start">
            <div className="flex flex-col items-center md:items-start gap-2">
              <span className="text-3xl ml-15">🥭</span>
              <span className="text-2xl font-black text-white tracking-tight">
                MANGO<span className="text-yellow-400">SHOP</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              সরাসরি রাজশাহীর বাগান থেকে বাছাইকৃত কেমিক্যালমুক্ত আম আপনার দোরগোড়ায় পৌঁছে দিতে আমরা প্রতিশ্রুতিবদ্ধ।
            </p>
            <div className="flex md:justify-start justify-center gap-4">
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-green-800 hover:bg-yellow-400 hover:text-green-900 rounded-full transition-all duration-300">
                <FaFacebookF size={16} />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-green-800 hover:bg-yellow-400 hover:text-green-900 rounded-full transition-all duration-300">
                <FaInstagram size={18} />
              </a>
              <a href="https://wa.me/8801700666807" className="w-10 h-10 flex items-center justify-center bg-green-800 hover:bg-yellow-400 hover:text-green-900 rounded-full transition-all duration-300">
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 border-b-2 border-yellow-400 w-fit pb-1">প্রয়োজনীয় লিংক</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
                  <FaChevronRight size={10} className="text-yellow-400" /> হোম পেজ
                </Link>
              </li>
              <li>
                <Link to="/order" className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
                  <FaChevronRight size={10} className="text-yellow-400" /> অর্ডার করুন
                </Link>
              </li>
              <li>
                <Link to="/products" className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
                  <FaChevronRight size={10} className="text-yellow-400" /> আমের জাতসমূহ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white font-bold text-lg mb-6 border-b-2 border-yellow-400 w-fit pb-1 mx-auto md:mx-0">যোগাযোগ</h3>
            <ul className="space-y-4 text-sm w-full">
              <li className="flex items-center justify-center md:justify-start gap-3">
                <FaMapMarkerAlt className="text-yellow-400 mt-1" />
                <span> রাজশাহী, বাংলাদেশ</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <FaPhoneAlt className="text-yellow-400" />
                <span>+880 1700-666807</span>
              </li>
              <li className="flex items-center justify-center gap-3">
                <FaEnvelope className="text-yellow-400" />
                <span>support@mangoshop.com</span>
              </li>
            </ul>
          </div>

          {/* Payment Badges */}
          <div className='flex flex-col items-center'>
            <h3 className="text-white font-bold text-lg mb-6 border-b-2 border-yellow-400 w-fit pb-1">পেমেন্ট পদ্ধতি</h3>
            <div className="flex flex-wrap  gap-2 text-[10px] font-bold">
              <span className="bg-white/5 border border-white/10 px-3 py-1.5 rounded">BKASH</span>
              <span className="bg-white/5 border border-white/10 px-3 py-1.5 rounded">NAGAD</span>
              <span className="bg-white/5 border border-white/10 px-3 py-1.5 rounded">COD</span>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-green-900 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-gray-500 uppercase tracking-widest">
          <p>© {currentYear} MangoShop - All Rights Reserved.</p>
          <p>Fresh from Rajshahi with Love 🥭</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;