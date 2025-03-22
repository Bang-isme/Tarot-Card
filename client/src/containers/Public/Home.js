import React from 'react';
import tarotImage from "../../assets/image/Tarot.png";

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-[#4B0082] to-[#1C2526] min-h-screen text-white">
      {/* Thanh điều hướng */}
      <header className="bg-transparent py-4">
        <nav className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-amber-400">
            🔮 TarotMystic
          </div>
          {/* Menu điều hướng */}
          <ul className="flex space-x-6 text-lg">
  {["Trang chủ", "Về chúng tôi", "Các Reader", "Bói Tarot", "Blog", "Liên hệ", "Đăng nhập", "Đăng ký"].map((item) => (
    <li key={item}>
      {item === "Đăng nhập" || item === "Đăng ký" ? (
        <button
          className={`px-4 py-2 rounded-lg font-semibold transition duration-300 ${
            item === "Đăng nhập"
              ? "bg-transparent border border-white text-white hover:bg-white hover:text-black"
              : "bg-amber-500 text-black hover:bg-amber-600"
          }`}
        >
          {item}
        </button>
      ) : (
        <a href="#" className="hover:text-amber-400 transition duration-300">
          {item}
        </a>
      )}
    </li>
  ))}
</ul>
        </nav>
      </header>

      {/* Phần nội dung chính */}
      <main className="container mx-auto px-6 flex flex-col md:flex-row items-center mt-10 md:mt-20">
        {/* Text bên trái */}
        <div className="md:w-1/2">
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

        {/* Hình ảnh bên phải */}
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <img
            src={tarotImage}
            alt="Tarot Cards"
            className="w-[400px] h-[500px] rounded-lg shadow-xl"
          />
        </div>
      </main>
    </div>
  );
};

export default Home;