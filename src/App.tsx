import React from 'react';
import emailjs from 'emailjs-com';
import { Home, Book, Mail, Menu, X, ArrowRight, Phone, MapPin, Clock, Facebook, Instagram, Twitter, Youtube, Moon, Sun } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const [formData, setFormData] = React.useState({ name: '', email: '', message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: 'tiger3homs@gmail.com',
      name: formData.name, // Add this line
      email: formData.email // Add this line
    };

    emailjs.send('service_bdj14o3', 'template_2e2nikq', templateParams, 'UBLU57PsLej7OB6PR')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
      }, (error) => {
        console.log('FAILED...', error);
        alert('Failed to send message. Please try again later.');
      });
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Navigation */}
      <nav className={`shadow-sm ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Home className={`h-8 w-8 ${isDarkMode ? 'text-white' : 'text-blue-600'}`} />
              <span className="ml-2 text-xl font-semibold">OS Design</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className={`hover:text-blue-600 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Home</a>
              <a href="#services" className={`hover:text-blue-600 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Services</a>
              <a href="#about" className={`hover:text-blue-600 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>About</a>
              <a href="#contact" className={`hover:text-blue-600 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Contact</a>
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isDarkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
            </button>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className={`block px-3 py-2 hover:text-blue-600 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Home</a>
              <a href="#services" className={`block px-3 py-2 hover:text-blue-600 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Services</a>
              <a href="#about" className={`block px-3 py-2 hover:text-blue-600 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>About</a>
              <a href="#contact" className={`block px-3 py-2 hover:text-blue-600 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Contact</a>
            </div>
          </div>
        )}
      </nav>
      
      {/* Hero Section */}
      <div id="home" className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
                  <span className="block">Transform Your</span>
                  <span className={`block ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>Digital Presence</span>
                </h1>
                <p className="mt-3 text-base sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  We help businesses grow by creating exceptional digital experiences that connect with their audience.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a href="#contact" className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white ${isDarkMode ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700'} md:py-4 md:text-lg md:px-10`}>
                      Get Started
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
            alt="Team working"
          />
        </div>
      </div>

      {/* Features Section */}
      <div id="services" className={`py-12 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className={`text-base font-semibold tracking-wide uppercase ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>Our Services</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
              Everything you need to succeed
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Digital Strategy",
                  description: "Build a roadmap for your digital success with our comprehensive strategy services.",
                  icon: <Book className={`h-6 w-6 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                },
                {
                  title: "24/7 Support",
                  description: "Round-the-clock support to ensure your business never misses a beat.",
                  icon: <Clock className={`h-6 w-6 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                },
                {
                  title: "Global Reach",
                  description: "Connect with customers worldwide through our international network.",
                  icon: <MapPin className={`h-6 w-6 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                }
              ].map((feature, index) => (
                <div key={index} className={`relative p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
                  <div>
                    <div className={`absolute h-12 w-12 flex items-center justify-center rounded-md ${isDarkMode ? 'bg-blue-900' : 'bg-blue-50'}`}>
                      {feature.icon}
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium">{feature.title}</p>
                  </div>
                  <div className="mt-2 ml-16 text-base">
                    {feature.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className={`py-12 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className={`text-base font-semibold tracking-wide uppercase ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>About us</h2>
          </div>
          <p className="mt-3 text-base sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            We are a creative web design company specializing in crafting custom, user-friendly websites. From responsive design and e-commerce solutions to SEO and graphic design, we help your business stand out online and deliver an exceptional user experience.
          </p>
        </div>

        <div className={`py-12 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className={`text-base font-semibold tracking-wide uppercase h-12 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>Links</h2>
            </div>
            <div className="flex justify-center space-x-6">
              <a href="https://x.com/" className={`hover:text-blue-400 transition-colors ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <Twitter size={24} />
              </a>
              <a href="https://youtube.com/" className={`hover:text-blue-400 transition-colors ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <Youtube size={24} />
              </a>
              <a href="https://facebook.com/" className={`hover:text-blue-400 transition-colors ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <Facebook size={24} />
              </a>
              <a href="https://instagram.com/" className={`hover:text-blue-400 transition-colors ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className={`py-16 px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              Contact Us
            </h2>
            <p className="mt-4 text-lg">
              Get in touch with our team to learn more about how we can help you succeed.
            </p>
          </div>
          <div className="mt-12">
            <form className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium">
                  Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}
                  ></textarea>
                </div>
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white ${isDarkMode ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                >
                  Send Message
                  <Mail className="ml-2 h-5 w-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className={`py-12 px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-800'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center">
                <Home className="h-8 w-8 text-white" />
                <span className="ml-2 text-xl font-semibold text-white">OS Design</span>
              </div>
              <p className="mt-4 text-gray-400">
                Building better digital experiences for forward-thinking businesses.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white">Services</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-400">
                  <Phone className="h-5 w-5 mr-2" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center text-gray-400">
                  <Mail className="h-5 w-5 mr-2" /><a href="mailto:tiger3homs@gmail.com" className="hover:text-blue-400 transition-colors">
                    <span>tiger3homs@gmail.com</span>
                  </a>
                </li>
                <li className="flex items-center text-gray-400">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>123 Business St, Suite 100</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400">&copy; 2025. Built and designed by Tiger3homs.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;