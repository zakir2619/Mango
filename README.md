
# 🥭 Amrakunja/MangoShop - Premium Mango E-commerce Platform

**Amrakunja** is a modern, high-performance e-commerce web application dedicated to providing farm-fresh, chemical-free mangoes directly from the orchards of Rajshahi and Chapainawabganj to customers' doorsteps.

---

## ✨ Key Features

- **Modern & Responsive UI:** A sleek interface built with Tailwind CSS, fully optimized for Mobile, Tablet, and Desktop.
- **Dynamic Multi-Product Ordering:** 
  - Customers can add multiple mango varieties (Himsagar, Langra, Amrapali, etc.) to a single order.
  - Real-time cart management with the ability to add/remove items.
- **Smart Business Logic:**
  - **Dynamic Shipping:** Delivery charges calculated per kg (15 BDT/kg).
  - **Minimum Variety Limit:** At least 5kg must be ordered per variety.
  - **Minimum Order Threshold:** A total order must be at least 10kg to proceed to checkout.
- **Real-time Bill Calculation:** Instant updates of product totals, shipping costs, and grand totals.
- **User Experience Enhancements:** 
  - Automated **Scroll-to-Top** on page transitions.
  - Visual feedback and warnings for order requirements.

---

## 🛠 Tech Stack

- **Frontend Library:** [React.js](https://reactjs.org/) (Vite)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Routing:** [React Router DOM v6](https://reactrouter.com/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
- **State Management:** React Hooks (`useState`, `useEffect`, `useLocation`)

---

## 🚀 Getting Started

Follow these steps to set up the project locally:

### 1. Clone the repository
```bash
git clone [https://github.com/your-username/amrakunja-mango-shop.git](https://github.com/your-username/amrakunja-mango-shop.git)
2. Navigate to the project directory
Bash
cd amrakunja-mango-shop
3. Install dependencies
Bash
npm install
4. Run the development server
Bash
npm run dev
Open http://localhost:5173 in your browser to view the application.

📂 Project Structure
Plaintext
src/
 ├── assets/          # High-resolution images of mangoes and banners
 ├── components/      # Reusable UI components (Navbar, Footer, ScrollToTop)
 ├── pages/           # Main views (Home, ProductGrid, OrderPage)
 ├── router/          # Routing configuration
 └── App.jsx          # Root component
⚖️ Order Policy
To ensure logistics efficiency, the following rules apply:

Shipping: 15 BDT per kg.

Minimum Item Weight: 5 kg per variety.

Minimum Total Weight: 10 kg per order.

🤝 Contributing
Contributions are welcome! If you have suggestions for improvements or want to add new features:

Fork the Project.

Create your Feature Branch (git checkout -b feature/NewFeature).

Commit your Changes (git commit -m 'Add NewFeature').

Push to the Branch (git push origin feature/NewFeature).

Open a Pull Request.

📄 License
This project is licensed under the MIT License.

Developed by [Your Name]

Bringing the authentic taste of Rajshahi to your home.