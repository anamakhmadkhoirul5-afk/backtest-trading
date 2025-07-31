'use client';

import { FileText, AlertTriangle, Shield, Users, Calendar, Mail } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Syarat dan ketentuan penggunaan platform ForexBot Pro
            </p>
            <p className="text-sm text-blue-200 mt-4">
              Terakhir diperbarui: 1 Januari 2024
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Important Notice */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8 mb-12">
          <div className="flex items-start space-x-4">
            <AlertTriangle className="w-8 h-8 text-yellow-600 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-bold text-yellow-800 mb-2">Peringatan Risiko Trading</h2>
              <p className="text-yellow-700">
                Trading forex dan CFD melibatkan risiko tinggi dan dapat mengakibatkan kerugian modal. 
                Pastikan Anda memahami risiko sebelum menggunakan platform ini. 
                Performa masa lalu tidak menjamin hasil masa depan.
              </p>
            </div>
          </div>
        </div>

        {/* Terms Content */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Penerimaan Syarat</h2>
            <p className="text-gray-600 mb-4">
              Dengan mengakses dan menggunakan platform ForexBot Pro, Anda menyetujui untuk terikat oleh 
              syarat dan ketentuan ini. Jika Anda tidak setuju dengan syarat ini, mohon untuk tidak 
              menggunakan platform kami.
            </p>
            <p className="text-gray-600">
              Syarat ini berlaku untuk semua pengguna platform, termasuk tetapi tidak terbatas pada 
              trader individual, institusi, dan afiliasi.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Deskripsi Layanan</h2>
            <p className="text-gray-600 mb-4">
              ForexBot Pro menyediakan:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Platform trading otomatis dengan algoritma AI</li>
              <li>Sistem backtesting untuk strategi trading</li>
              <li>Analisis pasar real-time dan signal trading</li>
              <li>Dashboard monitoring performa portfolio</li>
              <li>Edukasi dan konten pembelajaran trading</li>
              <li>Customer support 24/7</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Persyaratan Pengguna</h2>
            <p className="text-gray-600 mb-4">
              Untuk menggunakan platform ini, Anda harus:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li>Berusia minimal 18 tahun</li>
              <li>Memiliki kapasitas hukum untuk membuat kontrak</li>
              <li>Tidak berada dalam yurisdiksi yang melarang trading forex</li>
              <li>Memberikan informasi yang akurat dan lengkap saat registrasi</li>
              <li>Menjaga keamanan akun dan password</li>
            </ul>
            <p className="text-gray-600">
              Kami berhak menolak atau menangguhkan akses kepada siapa pun tanpa pemberitahuan sebelumnya.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Penggunaan Platform</h2>
            <p className="text-gray-600 mb-4">
              Anda setuju untuk menggunakan platform secara bertanggung jawab dan tidak akan:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Menggunakan platform untuk aktivitas ilegal atau penipuan</li>
              <li>Mengganggu atau merusak sistem keamanan platform</li>
              <li>Mencoba mengakses akun pengguna lain</li>
              <li>Menggunakan bot atau script untuk manipulasi sistem</li>
              <li>Menyebarkan malware atau virus</li>
              <li>Melanggar hak kekayaan intelektual kami atau pihak ketiga</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Risiko Trading</h2>
            <p className="text-gray-600 mb-4">
              Anda mengakui dan memahami bahwa:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Trading forex melibatkan risiko kehilangan modal yang signifikan</li>
              <li>Performa masa lalu tidak menjamin hasil masa depan</li>
              <li>Algoritma trading tidak menjamin profit</li>
              <li>Kondisi pasar dapat berubah dengan cepat dan tidak terduga</li>
              <li>Anda bertanggung jawab penuh atas keputusan trading</li>
              <li>ForexBot Pro tidak memberikan nasihat investasi personal</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Biaya dan Pembayaran</h2>
            <p className="text-gray-600 mb-4">
              Penggunaan platform dikenakan biaya berlangganan sesuai paket yang dipilih:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li>Pembayaran dilakukan di muka untuk periode berlangganan</li>
              <li>Biaya dapat berubah dengan pemberitahuan 30 hari sebelumnya</li>
              <li>Tidak ada refund untuk biaya yang sudah dibayar</li>
              <li>Akses akan ditangguhkan jika pembayaran terlambat</li>
            </ul>
            <p className="text-gray-600">
              Semua pembayaran diproses melalui gateway payment yang aman dan teregulasi.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Kekayaan Intelektual</h2>
            <p className="text-gray-600 mb-4">
              Platform dan semua kontennya adalah milik eksklusif ForexBot Pro, termasuk:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Algoritma dan strategi trading</li>
              <li>Desain dan antarmuka platform</li>
              <li>Konten edukasi dan analisis</li>
              <li>Logo, trademark, dan brand assets</li>
              <li>Data dan database</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Batasan Tanggung Jawab</h2>
            <p className="text-gray-600 mb-4">
              ForexBot Pro tidak bertanggung jawab atas:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Kerugian finansial akibat trading</li>
              <li>Gangguan teknis atau downtime platform</li>
              <li>Kesalahan data atau signal yang tidak akurat</li>
              <li>Kerugian akibat force majeure</li>
              <li>Tindakan pihak ketiga (broker, bank, dll)</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Penghentian Layanan</h2>
            <p className="text-gray-600">
              Kami dapat menghentikan atau menangguhkan akses Anda kapan saja jika terjadi pelanggaran 
              syarat ini, aktivitas mencurigakan, atau alasan lain yang kami anggap perlu. 
              Anda juga dapat menghentikan akun kapan saja melalui pengaturan platform.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Hukum yang Berlaku</h2>
            <p className="text-gray-600">
              Syarat ini diatur oleh hukum Republik Indonesia. Setiap sengketa akan diselesaikan 
              melalui pengadilan yang berwenang di Jakarta atau melalui arbitrase sesuai kesepakatan para pihak.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Kontak</h2>
            <p className="text-gray-600 mb-4">
              Jika Anda memiliki pertanyaan tentang syarat dan ketentuan ini, silakan hubungi kami:
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-4 text-gray-600">
                <Mail className="w-5 h-5 text-blue-600" />
                <span>Email: legal@forexbotpro.com</span>
              </div>
              <div className="flex items-center space-x-4 text-gray-600">
                <FileText className="w-5 h-5 text-blue-600" />
                <span>Address: Jl. Sudirman No. 123, Jakarta Selatan 12190</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}