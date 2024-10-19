Great! Tailwind CSS can really simplify styling and make your React components more concise. I'll modify the previous approach to use Tailwind CSS for the layout and styling.

### Step 1: Install Tailwind CSS
First, install Tailwind in your React project.

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

Now configure your `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Next, add Tailwind's base, components, and utilities to your `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Step 2: Update the React Components with Tailwind

#### `App.js`
```jsx
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Fleet from "./components/Fleet";
import WhyChooseUs from "./components/WhyChooseUs";
import SpecialOffer from "./components/SpecialOffer";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <Fleet />
      <WhyChooseUs />
      <SpecialOffer />
      <Footer />
    </div>
  );
}

export default App;
```

#### `Header.js`
```jsx
import React from "react";

function Header() {
  return (
    <header className="bg-gray-800 text-white">
      <nav className="flex justify-between items-center py-4 px-8">
        <div className="logo text-3xl font-bold">
          Limos
        </div>
        <ul className="flex space-x-8">
          <li><a href="#" className="hover:text-green-500">Home</a></li>
          <li><a href="#" className="hover:text-green-500">Vehicles</a></li>
          <li><a href="#" className="hover:text-green-500">Blog</a></li>
          <li><a href="#" className="hover:text-green-500">Contacts</a></li>
        </ul>
        <div className="text-sm">
          ENG
        </div>
      </nav>
    </header>
  );
}

export default Header;
```

#### `Hero.js`
```jsx
import React from "react";

function Hero() {
  return (
    <section className="bg-cover bg-center h-screen flex justify-between items-center px-8" style={{ backgroundImage: "url('your-background-image-url')" }}>
      <div className="text-white max-w-lg">
        <h2 className="text-5xl font-bold mb-4">Luxury Limo Hire</h2>
        <p className="text-xl mb-6">We offer professional car rental & limousine services with our high-end vehicles.</p>
        <button className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg">Open Fleet</button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700">Pick-up Address</label>
            <input type="text" className="border border-gray-300 p-2 w-full rounded" />
          </div>
          <div>
            <label className="block text-gray-700">Drop-off Address</label>
            <input type="text" className="border border-gray-300 p-2 w-full rounded" />
          </div>
          <div>
            <label className="block text-gray-700">Pick-up Date</label>
            <input type="date" className="border border-gray-300 p-2 w-full rounded" />
          </div>
          <div>
            <label className="block text-gray-700">Pick-up Time</label>
            <input type="time" className="border border-gray-300 p-2 w-full rounded" />
          </div>
          <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded">Reserve Now</button>
        </form>
      </div>
    </section>
  );
}

export default Hero;
```

#### `Services.js`
```jsx
import React from "react";

function Services() {
  return (
    <section className="py-16 bg-gray-100">
      <h3 className="text-4xl text-center font-bold mb-12">Services</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img src="airport-transfer.jpg" alt="Airport Transfers" className="mb-4" />
          <h4 className="text-2xl font-bold mb-2">Airport Transfers</h4>
          <p className="mb-4">With additional wait time and flight tracking, our airport transfer service is ready to serve you.</p>
          <a href="#" className="text-green-500 hover:underline">Read More</a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img src="intercity-trip.jpg" alt="Intercity Trips" className="mb-4" />
          <h4 className="text-2xl font-bold mb-2">Intercity Trips</h4>
          <p className="mb-4">Your seamless solution for traveling between cities with comfort.</p>
          <a href="#" className="text-green-500 hover:underline">Read More</a>
        </div>
        {/* Add more service cards */}
      </div>
    </section>
  );
}

export default Services;
```

#### `Fleet.js`
```jsx
import React from "react";

function Fleet() {
  return (
    <section className="py-16">
      <h3 className="text-4xl text-center font-bold mb-12">Our Fleet</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img src="mercedes-s-class.jpg" alt="Mercedes S Class" className="mb-4" />
          <h4 className="text-2xl font-bold mb-2">Mercedes Benz S Class</h4>
          <p>Seats: 2, Luggage: 2</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img src="mercedes-v-class.jpg" alt="Mercedes V Class" className="mb-4" />
          <h4 className="text-2xl font-bold mb-2">Mercedes Benz V Class</h4>
          <p>Seats: 6, Luggage: 4</p>
        </div>
        {/* Add more fleet cards */}
      </div>
    </section>
  );
}

export default Fleet;
```

#### `WhyChooseUs.js`
```jsx
import React from "react";

function WhyChooseUs() {
  return (
    <section className="py-16 bg-gray-100">
      <h3 className="text-4xl text-center font-bold mb-12">Why Choose Us</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        <div className="text-center">
          <img src="easy-booking-icon.png" alt="Easy Booking" className="mx-auto mb-4" />
          <h4 className="text-2xl font-bold">Easy Online Booking</h4>
        </div>
        <div className="text-center">
          <img src="professional-driver-icon.png" alt="Professional Drivers" className="mx-auto mb-4" />
          <h4 className="text-2xl font-bold">Professional Drivers</h4>
        </div>
        {/* Add more features */}
      </div>
    </section>
  );
}

export default WhyChooseUs;
```

#### `SpecialOffer.js`
```jsx
import React from "react";

function SpecialOffer() {
  return (
    <section className="py-16 bg-gray-800 text-white">
      <h3 className="text-4xl text-center font-bold mb-12">Only Today: $75/day</h3>
      <div className="flex flex-col md:flex-row justify-center items-center max-w-4xl mx-auto">
        <img src="cadillac-escalade.jpg" alt="Cadillac Escalade" className="w-80 mb-8 md:mb-0 md:mr-8" />
        <div>
          <h4 className="text-3xl font-bold mb-4">Cadillac Escalade</h4>
          <ul className="space-y-2 mb-6">
            <li>Seats 8 passengers</li>
            <li>Incredible sound system</li>