
import { useNavigate } from 'react-router-dom';
import { FaCartPlus, FaStar, FaLeaf } from 'react-icons/fa';

import himsagarImg from '../assets/himsagar2.png'; 
import langraImg from '../assets/langra1.jpg';
import amrapaliImg from '../assets/amrupali.jpg';
import fazliImg from '../assets/fazli.jpg';

const mangoes = [
  {
    id: 1,
    name: 'রাজশাহী হিমসাগর',
    price: 90,
    img: himsagarImg,
    tag: 'জনপ্রিয়',
    desc: 'পাতলা খোসা এবং আঁশহীন অতুলনীয় মিষ্টি স্বাদের আম।',
    rating: 5,
  },
  {
    id: 2,
    name: 'সেরা ল্যাংড়া',
    price: 80,
    img: langraImg,
    tag: 'বেস্ট সেলার',
    desc: 'অসাধারণ সুগন্ধ এবং মিষ্টি স্বাদের জন্য বিখ্যাত।',
    rating: 4.8,
  },
  {
    id: 3,
    name: 'প্রিমিয়াম আম্রপালি',
    price: 110,
    img: amrapaliImg,
    tag: 'মিষ্টি বেশি',
    desc: 'গাঢ় রঙের এবং প্রচুর মিষ্টি সমৃদ্ধ আঁশহীন আম।',
    rating: 4.9,
  },
  {
    id: 4,
    name: 'ফজলি আম',
    price: 70,
    img: fazliImg,
    tag: 'আকারে বড়',
    desc: 'আকারে বেশ বড় এবং আচার বা খাওয়ার জন্য চমৎকার।',
    rating: 4.5,
  },
];

const ProductsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Header Section */}
      <div className="bg-green-800 py-12 px-4 text-center text-white">
        <h1 className="text-3xl md:text-5xl font-black mb-3 italic">আমাদের আমের কালেকশন 🥭</h1>
        <p className="text-yellow-400 max-w-2xl mx-auto font-medium">
          সরাসরি বাগান থেকে বাছাই করা ফরমালিনমুক্ত ও ১০০% নিরাপদ আম। আপনার পছন্দের জাতটি বেছে নিন।
        </p>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-4 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mangoes.map((mango) => (
            <div 
              key={mango.id} 
              className="bg-white rounded-3xl shadow-xl overflow-hidden group border border-transparent hover:border-green-500 transition-all duration-300"
            >
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={mango.img} 
                  alt={mango.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-yellow-400 text-green-900 text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  {mango.tag}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold text-gray-800">{mango.name}</h3>
                  <div className="flex items-center text-yellow-500 text-sm">
                    <FaStar className="mr-1" /> {mango.rating}
                  </div>
                </div>
                
                <p className="text-gray-500 text-sm mb-4 leading-relaxed h-10 overflow-hidden">
                  {mango.desc}
                </p>

                <div className="flex items-center gap-2 mb-6 text-green-700 font-semibold text-sm">
                  <FaLeaf size={14} /> বিষমুক্ত ও সতেজ
                </div>

                <div className="flex items-center justify-between border-t pt-4">
                  <div>
                    <span className="text-2xl font-black text-green-800">{mango.price}৳</span>
                    <span className="text-gray-400 text-xs ml-1">/কেজি</span>
                  </div>
                  
                  <button 
                    onClick={() => navigate('/order', { state: mango })}
                    className="bg-green-600 hover:bg-yellow-400 text-white hover:text-green-900 p-3 rounded-2xl transition-all shadow-lg active:scale-90 flex items-center gap-2 font-bold"
                  >
                    <FaCartPlus size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Info */}
      <div className="mt-20 text-center px-4">
        <div className="inline-flex flex-col md:flex-row gap-6 bg-white p-8 rounded-3xl shadow-md border border-green-100">
          <div className="flex flex-col items-center">
            <span className="text-3xl mb-2">🚚</span>
            <h4 className="font-bold">দ্রুত ডেলিভারি</h4>
            <p className="text-xs text-gray-500">৪৮ ঘণ্টার মধ্যে পৌঁছে যাবে</p>
          </div>
          <div className="w-px bg-gray-200 hidden md:block"></div>
          <div className="flex flex-col items-center">
            <span className="text-3xl mb-2">✅</span>
            <h4 className="font-bold">১০০% গ্যারান্টি</h4>
            <p className="text-xs text-gray-500">স্বাদে ও মানে সেরা</p>
          </div>
          <div className="w-px bg-gray-200 hidden md:block"></div>
          <div className="flex flex-col items-center">
            <span className="text-3xl mb-2">📦</span>
            <h4 className="font-bold">নিরাপদ প্যাকিং</h4>
            <p className="text-xs text-gray-500">নষ্ট হওয়ার ভয় নেই</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;