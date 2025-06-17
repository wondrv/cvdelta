import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '#beranda', label: 'Beranda' },
    { href: '#tentang', label: 'Tentang Kami' },
    { href: '#produk', label: 'Produk' },
    { href: '#kontak', label: 'Kontak' },
  ];

  const productCategories = [
    'Botol Plastik',
    'Cup & Lid',
    'Kemasan Box',
    'Seal & Cap',
    'Label Shrink',
    'Kemasan Custom'
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="section-padding py-16">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <img 
                  src="/cv delta.png" 
                  alt="CV Delta Mitra Persada" 
                  className="h-10 w-auto"
                />
                <div>
                  <h3 className="text-xl font-bold">CV Delta Mitra Persada</h3>
                  <p className="text-gray-400 text-sm">Solusi Kemasan Terpercaya</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Menyediakan berbagai produk kemasan berkualitas tinggi untuk industri 
                makanan dan minuman dengan pengalaman lebih dari 15 tahun.
              </p>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="p-2 bg-gray-800 hover:bg-primary-600 rounded-lg transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Menu Utama</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Kategori Produk</h4>
              <ul className="space-y-3">
                {productCategories.map((category, index) => (
                  <li key={index}>
                    <a
                      href="#produk"
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {category}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Kontak Kami</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="text-primary-400 mt-1 flex-shrink-0" size={18} />
                  <div className="text-gray-300">
                    <p>Jl. Industri No. 123</p>
                    <p>Jakarta Timur, DKI Jakarta 13450</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="text-primary-400 flex-shrink-0" size={18} />
                  <div className="text-gray-300">
                    <p>+62 812-3456-7890</p>
                    <p>+62 21-1234-5678</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="text-primary-400 flex-shrink-0" size={18} />
                  <div className="text-gray-300">
                    <p>info@cvdeltamitra.com</p>
                    <p>sales@cvdeltamitra.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container-max section-padding py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} CV Delta Mitra Persada. All rights reserved.
            </p>
            
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;