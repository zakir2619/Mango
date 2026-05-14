
import himsagar from '../assets/himsagar2.png';
import langra from '../assets/langra1.jpg';
import amrapali from '../assets/amrupali.jpg';
import { useNavigate } from 'react-router-dom';

const mangoes = [
  { id: 1, name: 'হিমসাগর', price: 90, img: himsagar },
  { id: 2, name: 'ল্যাংড়া', price: 80, img: langra },
  { id: 3, name: 'আম্রপালি', price: 100, img: amrapali },
];

export default function ProductGrid() {
  const navigate = useNavigate();

  return (
    <section id="products" className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10 text-green-800">আমাদের আমের জাতসমূহ</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {mangoes.map((mango) => (
          <div key={mango.id} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-transform hover:scale-105">
            <img src={mango.img} alt={mango.name} className="h-56 w-full object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800">{mango.name}</h3>
              <p className="text-gray-600 mt-2">দাম: <span className="text-green-600 font-bold">{mango.price}৳</span> / কেজি</p>
              <button 
                onClick={() => navigate('/order', { state: mango })}
                className="w-full mt-4 bg-yellow-400 hover:bg-yellow-500 text-green-900 font-bold py-2 rounded-lg transition-colors"
              >
                অর্ডার করুন
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}