'use client';

import { Search, MessageCircle, FileText, Video, Users, ArrowRight } from 'lucide-react';

function FAQItem({ question, answer }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{question}</h3>
      <p className="text-gray-600">{answer}</p>
    </div>
  );
}

function HelpCard({ icon: Icon, title, description, link }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 group">
      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href={link} className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
        Learn more <ArrowRight className="w-4 h-4 ml-1" />
      </a>
    </div>
  );
}

export default function HelpPage() {
  const faqs = [
    {
      question: "Bagaimana cara memulai trading dengan ForexBot Pro?",
      answer: "Daftar akun, verifikasi email, deposit minimal $100, pilih strategi trading, dan aktivkan bot. Tim support kami siap membantu 24/7."
    },
    {
      question: "Apakah dana saya aman di platform ini?",
      answer: "Ya, kami menggunakan enkripsi tingkat bank dan menyimpan dana di broker teregulasi. Dana Anda tidak pernah disimpan di server kami."
    },
    {
      question: "Berapa profit yang bisa saya harapkan?",
      answer: "Profit bervariasi tergantung strategi dan kondisi market. Rata-rata user mendapatkan 5-15% per bulan, namun past performance tidak menjamin hasil masa depan."
    },
    {
      question: "Bisakah saya menghentikan bot kapan saja?",
      answer: "Tentu! Anda memiliki kontrol penuh. Bisa pause, stop, atau adjust parameter kapan saja melalui dashboard."
    },
    {
      question: "Apakah ada biaya tersembunyi?",
      answer: "Tidak ada biaya tersembunyi. Hanya subscription fee bulanan yang transparan sesuai paket yang dipilih."
    },
    {
      question: "Bagaimana cara withdraw profit?",
      answer: "Withdraw bisa dilakukan kapan saja ke bank lokal atau e-wallet. Proses 1-3 hari kerja tanpa minimum withdraw."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Help Center</h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Temukan jawaban untuk semua pertanyaan Anda tentang ForexBot Pro
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Cari topik bantuan..."
                className="w-full pl-12 pr-4 py-4 rounded-xl border-0 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Help Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Kategori Bantuan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <HelpCard
              icon={Users}
              title="Getting Started"
              description="Panduan lengkap untuk memulai trading dengan ForexBot Pro"
              link="#getting-started"
            />
            <HelpCard
              icon={FileText}
              title="Trading Strategies"
              description="Pelajari berbagai strategi trading dan cara mengoptimalkannya"
              link="#strategies"
            />
            <HelpCard
              icon={Video}
              title="Video Tutorials"
              description="Tutorial video step-by-step untuk semua fitur platform"
              link="#tutorials"
            />
            <HelpCard
              icon={MessageCircle}
              title="Live Support"
              description="Chat langsung dengan tim support 24/7"
              link="#support"
            />
            <HelpCard
              icon={FileText}
              title="Documentation"
              description="Dokumentasi lengkap API dan fitur advanced"
              link="#docs"
            />
            <HelpCard
              icon={Users}
              title="Community"
              description="Bergabung dengan komunitas trader ForexBot Pro"
              link="#community"
            />
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>

        {/* Contact Support */}
        <div className="bg-blue-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Masih butuh bantuan?</h3>
          <p className="text-gray-600 mb-6">Tim support kami siap membantu Anda 24/7</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Contact Support
            </a>
            <a
              href="mailto:support@forexbotpro.com"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}