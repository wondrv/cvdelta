import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
}

const Products: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products: Product[] = [
    {
      id: 1,
      name: 'Botol Plastik',
      category: 'botol',
      image: '/products/botol.jpg',
      description: 'Botol plastik berkualitas tinggi untuk berbagai kebutuhan minuman'
    },
    {
      id: 2,
      name: 'Lid Cup',
      category: 'cup',
      image: '/products/lidcup.png',
      description: 'Tutup cup yang rapat dan aman untuk minuman panas dan dingin'
    },
    {
      id: 3,
      name: 'Box AMDK',
      category: 'kemasan',
      image: '/products/boxamdk.jpg',
      description: 'Kemasan box untuk air minum dalam kemasan yang praktis'
    },
    {
      id: 4,
      name: 'Cap Seal',
      category: 'seal',
      image: '/products/capseal.jpg',
      description: 'Segel tutup botol yang aman dan higienis'
    },
    {
      id: 5,
      name: 'Cup 120ml',
      category: 'cup',
      image: '/products/cup120ml.jpg',
      description: 'Cup plastik 120ml ideal untuk minuman porsi kecil'
    },
    {
      id: 6,
      name: 'Cup 220ml',
      category: 'cup',
      image: '/products/cup220ml.jpg',
      description: 'Cup plastik 220ml untuk minuman porsi sedang'
    },
    {
      id: 7,
      name: 'Seal Galon',
      category: 'seal',
      image: '/products/sealgalon.jpg',
      description: 'Segel galon yang kuat dan tahan lama'
    },
    {
      id: 8,
      name: 'AMDK Straw Pack',
      category: 'kemasan',
      image: '/products/amdkstrawpack.jpg',
      description: 'Kemasan AMDK dengan sedotan yang praktis'
    },
    {
      id: 9,
      name: 'AMDK Straw Steril',
      category: 'kemasan',
      image: '/products/amdkstrawsteril.jpg',
      description: 'Kemasan AMDK steril dengan sedotan higienis'
    },
    {
      id: 10,
      name: 'Box Minyak Goreng',
      category: 'kemasan',
      image: '/products/boxminyakgoreng.png',
      description: 'Kemasan box untuk minyak goreng yang aman'
    },
    {
      id: 11,
      name: 'Label Botol Shrink 1',
      category: 'label',
      image: '/products/labelbotolshrink1.jpg',
      description: 'Label shrink untuk botol dengan kualitas cetak tinggi'
    },
    {
      id: 12,
      name: 'Label Botol Shrink 2',
      category: 'label',
      image: '/products/labelbotolshrink2.jpg',
      description: 'Label shrink botol dengan desain menarik'
    }
  ];

  const categories = [
    { value: 'all', label: 'Semua Produk' },
    { value: 'botol', label: 'Botol' },
    { value: 'cup', label: 'Cup' },
    { value: 'kemasan', label: 'Kemasan' },
    { value: 'seal', label: 'Seal' },
    { value: 'label', label: 'Label' }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="produk" className="py-20 bg-gray-50">
      <div className="container-max section-padding">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">Produk Kami</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Koleksi Produk
            <span className="text-primary-600"> Kemasan Berkualitas</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Temukan berbagai pilihan produk kemasan yang sesuai dengan kebutuhan bisnis Anda
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Cari produk..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          {/* Category Filter */}
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none bg-white min-w-[200px]"
            >
              {categories.map(category => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="card overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded-full font-medium capitalize">
                    {categories.find(cat => cat.value === product.category)?.label || product.category}
                  </span>
                  <button className="text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors">
                    Detail →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search size={48} className="mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Produk tidak ditemukan</h3>
            <p className="text-gray-600">Coba ubah kata kunci pencarian atau filter kategori</p>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Tidak menemukan produk yang Anda cari? Hubungi kami untuk konsultasi gratis!
          </p>
          <a href="#kontak" className="btn-primary">
            Konsultasi Sekarang
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;