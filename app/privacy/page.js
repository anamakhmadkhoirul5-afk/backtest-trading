'use client';

import { Shield, Eye, Lock, Users, Calendar, Mail } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Kami menghargai privasi Anda dan berkomitmen melindungi data pribadi Anda
            </p>
            <p className="text-sm text-blue-200 mt-4">
              Terakhir diperbarui: 1 Januari 2024
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Quick Summary */}
        <div className="bg-blue-50 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Ringkasan Kebijakan Privasi</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Data Protection</h3>
                <p className="text-sm text-gray-600">Kami menggunakan enkripsi tingkat militer untuk melindungi data Anda</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Eye className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Transparency</h3>
                <p className="text-sm text-gray-600">Kami tidak pernah menjual data pribadi Anda kepada pihak ketiga</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Lock className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Control</h3>
                <p className="text-sm text-gray-600">Anda memiliki kontrol penuh atas data pribadi Anda</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">GDPR Compliant</h3>
                <p className="text-sm text-gray-600">Kami mematuhi standar internasional perlindungan data</p>
              </div>
            </div>
          </div>
        </div>

        {/* Privacy Policy Content */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Informasi yang Kami Kumpulkan</h2>
            <p className="text-gray-600 mb-4">
              Kami mengumpulkan informasi yang Anda berikan secara langsung kepada kami, seperti ketika Anda:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li>Membuat akun di platform ForexBot Pro</li>
              <li>Menggunakan layanan trading dan backtesting kami</li>
              <li>Menghubungi customer support</li>
              <li>Berlangganan newsletter atau konten edukasi</li>
              <li>Berpartisipasi dalam survei atau feedback</li>
            </ul>
            <p className="text-gray-600">
              Informasi yang dikumpulkan meliputi nama, email, nomor telepon, informasi pembayaran, 
              preferensi trading, dan data penggunaan platform.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Bagaimana Kami Menggunakan Informasi</h2>
            <p className="text-gray-600 mb-4">
              Kami menggunakan informasi yang dikumpulkan untuk:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Menyediakan dan memelihara layanan platform trading</li>
              <li>Memproses transaksi dan mengelola akun Anda</li>
              <li>Mengirimkan notifikasi penting tentang akun dan layanan</li>
              <li>Memberikan customer support yang responsif</li>
              <li>Menganalisis penggunaan platform untuk peningkatan layanan</li>
              <li>Mematuhi persyaratan hukum dan regulasi</li>
              <li>Mencegah penipuan dan aktivitas yang mencurigakan</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Berbagi Informasi</h2>
            <p className="text-gray-600 mb-4">
              Kami tidak menjual, memperdagangkan, atau menyewakan informasi pribadi Anda kepada pihak ketiga. 
              Kami hanya dapat membagikan informasi dalam situasi berikut:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Dengan persetujuan eksplisit Anda</li>
              <li>Kepada penyedia layanan yang membantu operasi platform (dengan perjanjian kerahasiaan)</li>
              <li>Untuk mematuhi kewajiban hukum atau perintah pengadilan</li>
              <li>Untuk melindungi hak, properti, atau keamanan ForexBot Pro dan pengguna</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Keamanan Data</h2>
            <p className="text-gray-600 mb-4">
              Kami menerapkan langkah-langkah keamanan teknis dan organisasi untuk melindungi informasi pribadi Anda:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Enkripsi SSL/TLS untuk semua transmisi data</li>
              <li>Enkripsi database dengan standar AES-256</li>
              <li>Autentikasi dua faktor (2FA) untuk akun pengguna</li>
              <li>Monitoring keamanan 24/7</li>
              <li>Backup data reguler di lokasi yang aman</li>
              <li>Pelatihan keamanan rutin untuk karyawan</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Hak Anda</h2>
            <p className="text-gray-600 mb-4">
              Sesuai dengan peraturan perlindungan data yang berlaku, Anda memiliki hak untuk:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Mengakses informasi pribadi yang kami miliki tentang Anda</li>
              <li>Memperbarui atau mengoreksi informasi yang tidak akurat</li>
              <li>Menghapus akun dan data pribadi Anda</li>
              <li>Membatasi pemrosesan data pribadi Anda</li>
              <li>Memportabilitas data ke platform lain</li>
              <li>Menolak pemrosesan untuk tujuan pemasaran</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookies dan Teknologi Tracking</h2>
            <p className="text-gray-600 mb-4">
              Kami menggunakan cookies dan teknologi serupa untuk meningkatkan pengalaman Anda di platform:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Cookies esensial untuk fungsi dasar platform</li>
              <li>Cookies analitik untuk memahami penggunaan platform</li>
              <li>Cookies preferensi untuk mengingat pengaturan Anda</li>
              <li>Anda dapat mengelola preferensi cookies di pengaturan browser</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Retensi Data</h2>
            <p className="text-gray-600">
              Kami menyimpan informasi pribadi Anda selama akun aktif dan periode tambahan yang diperlukan 
              untuk memenuhi kewajiban hukum, menyelesaikan sengketa, dan menegakkan perjanjian. 
              Data trading historis dapat disimpan lebih lama untuk keperluan analisis dan pelaporan.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Kontak</h2>
            <p className="text-gray-600 mb-4">
              Jika Anda memiliki pertanyaan tentang kebijakan privasi ini atau ingin menggunakan hak-hak Anda, 
              silakan hubungi kami:
            </p>
            <div className="flex items-center space-x-4 text-gray-600">
              <Mail className="w-5 h-5 text-blue-600" />
              <span>Email: privacy@forexbotpro.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}