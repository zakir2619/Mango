
import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, Leaf } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Theme colors: 
  // Green: #15803d (text-green-700 / bg-green-700)
  // Mango Yellow: #facc15 (bg-yellow-400)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <div className="shrink-0 flex items-center gap-2">
            <div className="bg-yellow-400 p-2 rounded-lg">
              <Leaf className="text-green-800" size={24} />
            </div>
            <Link to="/" className="text-2xl font-black text-green-800 tracking-tighter">
              MANGO<span className="text-yellow-500">SHOP</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-gray-700 hover:text-green-700 font-medium transition-colors">
              হোম
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-green-700 font-medium transition-colors">
              আমের জাতসমূহ
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-green-700 font-medium transition-colors">
              যোগাযোগ 
            </Link>
            
            {/* Cart Icon */}
            <Link to="/order" className="relative p-2 bg-gray-100 rounded-full text-gray-700 hover:bg-yellow-400 hover:text-green-900 transition-all">
              <ShoppingCart size={22} />
              <span className="absolute -top-1 -right-1 bg-green-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                0
              </span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-green-700 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 rounded-xl text-base font-medium text-gray-700 hover:bg-green-50 hover:text-green-700"
            >
              হোম
            </Link>
            <Link
              to="/products"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 rounded-xl text-base font-medium text-gray-700 hover:bg-green-50 hover:text-green-700"
            >
              আমের জাতসমূহ
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 rounded-xl text-base font-medium text-gray-700 hover:bg-green-50 hover:text-green-700"
            >
              যোগাযোগ
            </Link>
            
            <Link
              to="/order"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 px-3 py-3 rounded-xl text-base font-bold bg-yellow-400 text-green-900"
            >
              <ShoppingCart size={20} />
              কার্ট চেকআউট
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;