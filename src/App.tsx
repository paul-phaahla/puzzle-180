import React from 'react';
import { Bot, MessageSquare, Zap, Shield, Users, ChevronRight, Github, Linkedin, Twitter } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header/Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Bot className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">AIConnect</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600">Features</a>
              <a href="#solutions" className="text-gray-600 hover:text-blue-600">Solutions</a>
              <a href="#pricing" className="text-gray-600 hover:text-blue-600">Pricing</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Transform Your Business with
            <span className="text-blue-600"> AI-Powered</span> Assistants
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Enhance customer experience and streamline operations with our intelligent chatbot solutions. Available 24/7, scalable, and customized to your needs.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
              Start Free Trial <ChevronRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors">
              Watch Demo
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Our AI Assistants?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <MessageSquare className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Natural Conversations</h3>
              <p className="text-gray-600">Advanced language processing for human-like interactions and understanding.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Zap className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">24/7 Availability</h3>
              <p className="text-gray-600">Always-on support to handle customer inquiries at any time.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Shield className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Secure & Reliable</h3>
              <p className="text-gray-600">Enterprise-grade security with 99.9% uptime guarantee.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Social Proof */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
            <p className="text-gray-600">Join hundreds of businesses already transforming their customer service</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 items-center justify-items-center">
            <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=128&h=128&fit=crop&crop=entropy&q=80" alt="Company logo" className="h-12 opacity-50 hover:opacity-100 transition-opacity" />
            <img src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=128&h=128&fit=crop&crop=entropy&q=80" alt="Company logo" className="h-12 opacity-50 hover:opacity-100 transition-opacity" />
            <img src="https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=128&h=128&fit=crop&crop=entropy&q=80" alt="Company logo" className="h-12 opacity-50 hover:opacity-100 transition-opacity" />
            <img src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=128&h=128&fit=crop&crop=entropy&q=80" alt="Company logo" className="h-12 opacity-50 hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Start your free trial today and experience the power of AI-driven customer service.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
            Get Started Now
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Bot className="h-8 w-8 text-blue-500" />
                <span className="ml-2 text-xl font-bold text-white">AIConnect</span>
              </div>
              <p className="text-sm">Transforming businesses with intelligent AI solutions.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="hover:text-white">About</a></li>
                <li><a href="#careers" className="hover:text-white">Careers</a></li>
                <li><a href="#blog" className="hover:text-white">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#docs" className="hover:text-white">Documentation</a></li>
                <li><a href="#help" className="hover:text-white">Help Center</a></li>
                <li><a href="#api" className="hover:text-white">API Reference</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="#twitter" className="hover:text-white"><Twitter className="h-6 w-6" /></a>
                <a href="#linkedin" className="hover:text-white"><Linkedin className="h-6 w-6" /></a>
                <a href="#github" className="hover:text-white"><Github className="h-6 w-6" /></a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
            <p>&copy; 2025 AIConnect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;