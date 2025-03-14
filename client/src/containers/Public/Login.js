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
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 flex items-center justify-between">
        {/* Nội dung văn bản */}
        <div className="w-2/3">
          <h2 className="text-[#FFD700] text-lg font-semibold">
            GIẢI MÃ CUỘC SỐNG VỚI TAROT
          </h2>
          <h1 className="text-4xl font-bold mb-6 leading-tight text-white">
            Bói bài Tarot online miễn phí và <br /> chính xác nhất - BoiTarot.vn
          </h1>
          <p className="text-lg mb-6">
            Tarot là phương pháp sử dụng những lá bài Tarot để xem bói và dự đoán về
            tương lai, tình yêu, công việc, tiền tài và sức khỏe,... bắt đầu xuất hiện
            tại Châu Âu vào cuối thế kỷ 14. Một cỗ bài Tarot bao gồm 78 lá bài, mỗi lá
            bài mang một ý nghĩa và biểu tượng riêng biệt, tượng trưng cho những khía
            cạnh khác nhau của cuộc sống. Việc sử dụng bài Tarot để xem bói không chỉ
            giúp dự đoán tương lai mà còn mở ra những khám phá mới về bản thân.
          </p>
          <p className="text-lg mb-6">
            Boitarot.vn là một website chuyên về bói Tarot nhằm giúp người dùng giải đáp
            thắc mắc, khám phá và hiểu sâu hơn về các khía cạnh khác nhau trong cuộc sống
            một cách chính xác nhất.
          </p>
          <button className="bg-[#FF4500] hover:bg-[#D13900] text-white font-bold py-3 px-8 rounded-lg shadow-lg transition">
            Bói Tarot Online
          </button>
        </div>

        {/* Ảnh minh họa */}
        <div className="w-1/3 flex justify-end">
          <img
            src="https://placehold.co/300x400"
            alt="Tarot card"
            className="rounded-lg shadow-xl border-2 border-[#FFD700]"
          />
        </div>
      </section>
    </div>
  );
};

export default Login;
