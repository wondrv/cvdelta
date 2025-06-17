import React from 'react';
import { CheckCircle, Target, Eye, Heart } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    'Produk berkualitas tinggi dengan standar internasional',
    'Layanan pelanggan yang responsif dan profesional',
    'Harga kompetitif dengan kualitas terjamin',
    'Pengiriman tepat waktu ke seluruh Indonesia',
    'Konsultasi gratis untuk kebutuhan kemasan',
    'Dukungan teknis dan after-sales service'
  ];

  return (
    <section id="tentang" className="py-20 bg-white">
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="/tentangkami.jpeg" 
                alt="Tentang CV Delta Mitra Persada" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">15+</div>
                <div className="text-gray-600 font-medium">Tahun Berpengalaman</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="mb-6">
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">Tentang Kami</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
                Mitra Terpercaya untuk 
                <span className="text-primary-600"> Solusi Kemasan</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                CV Delta Mitra Persada adalah perusahaan yang bergerak di bidang penyediaan 
                kemasan untuk industri makanan dan minuman. Dengan pengalaman lebih dari 15 tahun, 
                kami telah melayani berbagai klien dari skala UMKM hingga perusahaan besar.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* Values */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <Target className="text-primary-600 mx-auto mb-2" size={24} />
                <h4 className="font-semibold text-gray-900 mb-1">Misi</h4>
                <p className="text-sm text-gray-600">Memberikan solusi kemasan terbaik</p>
              </div>
              
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <Eye className="text-primary-600 mx-auto mb-2" size={24} />
                <h4 className="font-semibold text-gray-900 mb-1">Visi</h4>
                <p className="text-sm text-gray-600">Menjadi leader di industri kemasan</p>
              </div>
              
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <Heart className="text-primary-600 mx-auto mb-2" size={24} />
                <h4 className="font-semibold text-gray-900 mb-1">Nilai</h4>
                <p className="text-sm text-gray-600">Kualitas, integritas, dan inovasi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;