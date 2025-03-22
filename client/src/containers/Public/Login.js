import React from "react";

const Login = () => {
  return (
    <div className="bg-gradient-to-b from-[#2A0845] to-[#15072A] text-[#F8F8F8] min-h-screen">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold">
          <img
            src="https://placehold.co/150x50"
            alt="Bói Tarot.vn logo"
            className="h-12"
          />
        </a>
        <nav className="space-x-6 text-lg">
          <a href="#" className="hover:text-gray-400">Trang chủ</a>
          <a href="#" className="hover:text-gray-400">Về chúng tôi</a>
          <a href="#" className="hover:text-gray-400">Các Tarot Reader</a>
          <a href="#" className="hover:text-gray-400">Bói Tarot</a>
          <a href="#" className="hover:text-gray-400">Blog</a>
          <a href="#" className="hover:text-gray-400">Liên hệ</a>
          <button>
            Đăng nhập
          </button>
          <button>
            Đăng ký
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 flex items-center justify-between">
        {/* Nội dung văn bản */}
        <div className="w-2/3">
        <h1 className="text-4xl font-extrabold uppercase text-amber-400 leading-tight">
            Giải Mã Cuộc Sống Với Tarot
          </h1>
          <h2 className="text-2xl uppercase text-white mt-3">
            Bói bài tarot online miễn phí và chính xác nhất
          </h2>
          <p className="text-gray-300 text-lg mt-5 leading-relaxed">
            Tarot là phương pháp sử dụng những lá bài để xem bói, dự đoán về tương lai, tình yêu, công việc và sức khỏe. Hãy khám phá bản thân và hướng tới một cuộc sống tốt đẹp hơn với Tarot!
          </p>
          <button className="mt-6 px-8 py-3 bg-amber-500 text-lg font-semibold rounded-full shadow-lg transform hover:scale-105 transition duration-300">
            Bói Tarot Ngay 🔮
          </button>
        </div>

        {/* Ảnh minh họa */}
        <div className="w-1/3 flex justify-end">
          <img
            src="{tarotImage}"
            alt="Tarot card"
            className="rounded-lg shadow-xl border-2 border-[#FFD700]"
          />
        </div>
      </section>
    </div>
  );
};

export default Login;
