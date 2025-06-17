import React from 'react';
import { ArrowRight, Shield, Award, Users } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="beranda" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.8), rgba(29, 78, 216, 0.8)), url(/berandabg.jpeg)'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 section-padding py-20 w-full">
        <div className="container-max">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Solusi Kemasan
              <span className="block text-yellow-300">Terpercaya</span>
              untuk Bisnis Anda
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              CV Delta Mitra Persada menyediakan berbagai produk kemasan berkualitas tinggi 
              untuk memenuhi kebutuhan industri makanan dan minuman Anda.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="#produk" className="btn-primary bg-yellow-500 hover:bg-yellow-600 text-gray-900">
                Lihat Produk Kami
                <ArrowRight size={20} />
              </a>
              <a href="#kontak" className="btn-secondary bg-white/10 hover:bg-white/20 text-white border-white/30">
                Hubungi Kami
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
              <div className="flex items-center gap-3 text-white">
                <div className="p-3 bg-white/20 rounded-lg">
                  <Shield size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-blue-100">Kualitas Terjamin</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-white">
                <div className="p-3 bg-white/20 rounded-lg">
                  <Award size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-blue-100">Tahun Pengalaman</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-white">
                <div className="p-3 bg-white/20 rounded-lg">
                  <Users size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-blue-100">Klien Puas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;