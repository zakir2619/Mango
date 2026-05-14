
import { useState } from 'react';

export default function AdminDashboard() {
  const [entry, setEntry] = useState({
    kg: 0, rate: 0, transport: 0, advance: 0
  });

  const totalBill = (entry.kg * entry.rate) + Number(entry.transport);
  const dueAmount = totalBill - entry.advance;

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">অ্যাডমিন ম্যানেজমেন্ট</h1>
      
      <div className="grid md:grid-cols-3 gap-8">
        {/* Entry Form */}
        <div className="md:col-span-1 bg-white p-6 rounded-2xl shadow-md border border-gray-200">
          <h2 className="text-xl font-bold mb-4">নতুন হিসাব এন্ট্রি</h2>
          <div className="space-y-4">
            <input type="text" placeholder="কাস্টমারের নাম" className="w-full p-2 border rounded-lg" />
            <div className="grid grid-cols-2 gap-2">
              <input type="number" placeholder="কেজি" onChange={(e)=>setEntry({...entry, kg: e.target.value})} className="p-2 border rounded-lg" />
              <input type="number" placeholder="রেট" onChange={(e)=>setEntry({...entry, rate: e.target.value})} className="p-2 border rounded-lg" />
            </div>
            <input type="number" placeholder="পরিবহন খরচ" onChange={(e)=>setEntry({...entry, transport: e.target.value})} className="w-full p-2 border rounded-lg" />
            <input type="number" placeholder="অগ্রিম পেমেন্ট" onChange={(e)=>setEntry({...entry, advance: e.target.value})} className="w-full p-2 border rounded-lg" />
            
            <div className="pt-4 border-t">
              <p className="flex justify-between">মোট বিল: <span className="font-bold">{totalBill}৳</span></p>
              <p className="flex justify-between mt-2">বাকি: 
                <span className={`font-bold ${dueAmount <= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {dueAmount <= 0 ? '0 (Paid)' : `${dueAmount}৳`}
                </span>
              </p>
            </div>
            <button className="w-full bg-gray-800 text-white py-2 rounded-lg mt-4">সেভ করুন</button>
          </div>
        </div>

        {/* Reporting Table */}
        <div className="md:col-span-2 bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200">
          <div className="p-4 bg-gray-50 border-b font-bold flex justify-between items-center">
            <span>আজকের বিক্রয় রিপোর্ট</span>
            <span className="text-green-700 bg-green-100 px-3 py-1 rounded-full text-sm">Total: 50,000৳</span>
          </div>
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-100 text-sm">
              <tr>
                <th className="p-4 border-b">নাম</th>
                <th className="p-4 border-b">পরিমাণ</th>
                <th className="p-4 border-b">মোট বিল</th>
                <th className="p-4 border-b">বাকি</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className="hover:bg-gray-50">
                <td className="p-4">করিম উদ্দিন</td>
                <td className="p-4">২০ কেজি</td>
                <td className="p-4">১৭৫০৳</td>
                <td className="p-4 text-red-500 font-medium">২৫০৳</td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}