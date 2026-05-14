import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';

const OrderPage = () => {
  const location = useLocation();
  
  const availableMangoes = [
    { id: 1, name: 'হিমসাগর', price: 90 },
    { id: 2, name: 'ল্যাংড়া', price: 80 },
    { id: 3, name: 'আম্রপালি', price: 100 },
  ];

  const DELIVERY_CHARGE_PER_KG = 15; 
  const MIN_PER_ITEM = 5;    
  const MIN_TOTAL_ORDER = 10; 

  const [cart, setCart] = useState([]);
  const [customerInfo, setCustomerInfo] = useState({ name: '', phone: '', address: '' });

  useEffect(() => {
    if (location.state) {
      setCart([{ ...location.state, quantity: 10 }]);
    }
  }, [location.state]);

  const addItemToCart = (e) => {
    const mangoId = parseInt(e.target.value);
    if (!mangoId) return;
    const exists = cart.find(item => item.id === mangoId);
    if (exists) return alert("এই আমটি ইতিমধ্যে যোগ করা হয়েছে!");
    
    const mangoToAdd = availableMangoes.find(m => m.id === mangoId);
    setCart([...cart, { ...mangoToAdd, quantity: MIN_PER_ITEM }]);
  };

  const updateQuantity = (id, val) => {
    const newQuantity = isNaN(val) ? 0 : val;
    setCart(cart.map(item => item.id === id ? { ...item, quantity: newQuantity } : item));
  };

  const handleBlur = (id, qty) => {
    if (qty < MIN_PER_ITEM) {
      updateQuantity(id, MIN_PER_ITEM);
      alert(`প্রতিটি জাত কমপক্ষে ${MIN_PER_ITEM} কেজি নিতে হবে।`);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo({ ...customerInfo, [name]: value });
  };

  const totalWeight = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalMangoPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalDeliveryCharge = totalWeight * DELIVERY_CHARGE_PER_KG;
  const totalBill = totalMangoPrice + totalDeliveryCharge;
  const isTotalOrderInvalid = totalWeight < MIN_TOTAL_ORDER && cart.length > 0;

  return (
    <div className="max-w-lg mx-auto my-4 p-4 bg-white shadow-lg rounded-xl border-t-4 border-green-600">
      <h2 className="text-xl font-bold text-center text-green-800 mb-1">অর্ডার ফরম</h2>
      <p className="text-center text-red-500 text-[10px] mb-4">
        * প্রতিটি জাত সর্বনিম্ন ৫ কেজি ও মোট অর্ডার ১০ কেজি হতে হবে।
      </p>

      <div className="space-y-3">
        {/* কাস্টমার ইনফো - কম্প্যাক্ট ইনপুট */}
        <div className="grid grid-cols-1 gap-2">
          <input name="name" type="text" placeholder="আপনার নাম" onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded focus:ring-1 focus:ring-green-500 outline-none text-sm" />
          <input name="phone" type="text" placeholder="মোবাইল নাম্বার" onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded focus:ring-1 focus:ring-green-500 outline-none text-sm" />
          <textarea name="address" placeholder="পুরো ঠিকানা" onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded focus:ring-1 focus:ring-green-500 outline-none text-sm h-16"></textarea>
        </div>

        {/* আম নির্বাচন */}
        <div className="bg-gray-50 p-3 rounded-lg">
          <select onChange={addItemToCart} className="w-full p-2 bg-white border border-green-200 rounded text-sm outline-none">
            <option value="">— আরও আমের জাত যোগ করুন —</option>
            {availableMangoes.map(m => (
              <option key={m.id} value={m.id}>{m.name} - {m.price}৳/কেজি</option>
            ))}
          </select>

          <div className="mt-3 space-y-2">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between bg-white p-2 rounded border border-gray-100 shadow-sm">
                <span className="text-sm font-semibold text-green-800">{item.name}</span>
                <div className="flex items-center gap-2">
                  <input type="number" value={item.quantity} onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))} onBlur={() => handleBlur(item.id, item.quantity)} className="w-12 p-1 border border-green-500 rounded text-center text-sm font-bold" />
                  <button onClick={() => setCart(cart.filter(i => i.id !== item.id))} className="text-red-500"><FaTrash size={12} /></button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* বিল সেকশন */}
        <div className="bg-green-800 text-white p-3 rounded-lg text-sm">
          <div className="flex justify-between mb-1"><span>পরিমাণ:</span><span>{totalWeight} কেজি</span></div>
          <div className="flex justify-between mb-1">
          <span>ডেলিভারি চার্জ ({totalWeight} কেজি × {DELIVERY_CHARGE_PER_KG}৳):</span>
          <span>{totalDeliveryCharge} ৳</span></div>
          <div className="border-t border-white/20 my-1"></div>
          <div className="flex justify-between text-lg font-bold text-yellow-400"><span>মোট বিল:</span><span>{totalBill} ৳</span></div>
        </div>

        {isTotalOrderInvalid && <p className="text-[11px] text-center text-red-600 font-bold">⚠️ আরও {MIN_TOTAL_ORDER - totalWeight} কেজি আম যোগ করুন।</p>}

        <button disabled={isTotalOrderInvalid || cart.length === 0} className={`w-full py-3 rounded-lg font-bold text-lg transition-all ${isTotalOrderInvalid || cart.length === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700 text-white shadow-md'}`}>অর্ডার কনফার্ম</button>
      </div>
    </div>
  );
};

export default OrderPage;