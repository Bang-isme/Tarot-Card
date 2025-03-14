import React from 'react';

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-[#4B0082] to-[#1C2526] min-h-screen">
      {/* Thanh điều hướng */}
      <header className="bg-transparent">
        <nav className="container mx-auto px-4 flex justify-between items-center py-4">
          {/* Placeholder logo */}
          <div className="w-[150px] h-[50px] bg-gray-300"></div>
          {/* Menu điều hướng */}
          <ul className="flex space-x-4 text-white text-base">
            <li><a href="#" className="hover:underline">Trang chủ</a></li>
            <li><a href="#" className="hover:underline">Về chúng tôi</a></li>
            <li><a href="#" className="hover:underline">Các Tarot Reader</a></li>
            <li><a href="#" className="hover:underline">Bói Tarot</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Liên hệ</a></li>
          </ul>
        </nav>
      </header>

      {/* Phần nội dung chính */}
      <main className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Phần text bên trái */}
          <div className="md:w-1/2 max-w-2xl">
            <h1 className="text-3xl font-bold uppercase text-amber-500">
              GIẢI MÃ CUỘC SỐNG VỚI TAROT
            </h1>
            <h2 className="text-2xl uppercase text-white mt-2">
              BÓI BÀI TAROT ONLINE MIỄN PHÍ VÀ CHÍNH XÁC NHẤT – <span className="font-bold">BOITAROT.VN</span>
            </h2>
            <p className="text-white text-lg mt-4">
              Tarot là phương pháp sử dụng những lá bài Tarot để xem bói và dự đoán về tương lai, tình yêu, công việc, tiền tài và sức khỏe. Đạt được xuất hiện tại Châu Âu vào cuối thế kỷ 14. Mỗi cơ bài Tarot bao gồm 78 lá bài, mỗi lá bài mang một ý nghĩa và biểu tượng riêng biệt, tượng trưng cho những khía cạnh khác nhau của cuộc sống. Việc sử dụng bài Tarot để xem bói không chỉ giúp dự đoán tương lai mà còn mở ra những khám phá mới về bản thân. Điều này giúp bạn hướng tới một cuộc sống hạnh phúc và bình yên hơn, thấm chí làm sáng tỏ những điều bí ẩn, sâu thẳm trong cuộc sống của mình.
            </p>
            <p className="text-white text-lg mt-4">
              Boitarot.vn là một website chuyên về bói Tarot nhằm giúp người dùng giải đáp thắc mắc, khám phá và hiểu sâu hơn về các khía cạnh khác nhau trong cuộc sống một cách chính xác nhất.
            </p>
            <button className="mt-6 bg-orange-500 text-white font-bold py-2 px-6 rounded-full shadow-lg">
              Bói Tarot Online
            </button>
          </div>

          {/* Placeholder ảnh bên phải */}
          <div className="md:w-1/2 mt-4 md:mt-0">
            <div className="bg-gray-500 w-[300px] h-[400px] rounded-lg mx-auto"></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;