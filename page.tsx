import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-tr from-blue-50 to-indigo-100 font-sans">
      <header className="bg-white/80 backdrop-blur border-b sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto flex items-center py-4 px-4 justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="logo" className="w-10 h-10" />
            <span className="font-bold text-xl text-indigo-800">กองบริหารงานบุคคล</span>
          </div>
          <nav className="flex gap-6 text-indigo-800">
            <Link href="#about">เกี่ยวกับองค์กร</Link>
            <Link href="#services">บริการบุคลากร</Link>
            <Link href="#info">ระบบสารสนเทศ</Link>
            <Link href="#news">ข่าวสาร</Link>
            <Link href="#jobs">รับสมัครงาน</Link>
            <Link href="#docs">เอกสาร</Link>
          </nav>
        </div>
      </header>
      <section className="container mx-auto py-8 px-4" id="hero">
        <h1 className="text-4xl font-bold text-indigo-900 mb-4 animate-bounce">ยินดีต้อนรับสู่ระบบงานบุคคล</h1>
        <p className="text-xl text-indigo-700 mb-6">แหล่งรวมข้อมูล ข่าวสาร และบริการครบวงจรสำหรับบุคลากร</p>
        <div className="flex flex-wrap gap-4">
          <input className="rounded px-4 py-2 border shadow-md w-80" placeholder="ค้นหาข้อมูล..." />
          <button className="bg-indigo-600 text-white rounded px-6 py-2 hover:bg-indigo-700 transition">ค้นหา</button>
        </div>
      </section>
      <section className="container mx-auto py-6 px-4 grid md:grid-cols-2 gap-8" id="about">
        <div>
          <h2 className="font-bold text-2xl text-indigo-800 mb-2">เกี่ยวกับองค์กร</h2>
          <ul className="list-disc ml-6 text-indigo-700 space-y-2">
            <li>ประวัติและวิสัยทัศน์ของกองบริหารงานบุคคล <span className="text-green-700 text-xs">(ดึงข้อมูลได้)</span></li>
            <li>โครงสร้างองค์กรและรายชื่อผู้บริหาร <span className="text-green-700 text-xs">(ดึงข้อมูลได้)</span></li>
            <li>นโยบายหลักและแนวทางการดำเนินงาน <span className="text-green-700 text-xs">(ดึงข้อมูลได้)</span></li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-2xl text-indigo-800 mb-2">กิจกรรมเด่น & ไฮไลท์</h2>
          <div className="h-40 bg-gradient-to-br from-indigo-300 to-blue-100 rounded shadow flex items-center justify-center">
            <span className="text-indigo-800">[สไลด์กิจกรรม / แกลเลอรี่อัตโนมัติ <span className="text-green-700 text-xs">(ดึงข้อมูลได้)</span>]</span>
          </div>
        </div>
      </section>
      <section className="container mx-auto py-6 px-4" id="services">
        <h2 className="font-bold text-2xl text-indigo-800 mb-2">บริการบุคลากร</h2>
        <ul className="list-disc ml-6 text-indigo-700 space-y-2">
          <li>สวัสดิการ – ข้อมูลสิทธิประโยชน์ <span className="text-yellow-700 text-xs">(ต้องจัดเตรียม/ดึงไม่ได้)</span></li>
          <li>การลา & หนังสือรับรอง – ระบบยื่นคำร้องออนไลน์ <span className="text-yellow-700 text-xs">(ต้องพัฒนาใหม่)</span></li>
          <li>การพัฒนาทรัพยากรบุคคล – หลักสูตรฝึกอบรม <span className="text-green-700 text-xs">(ดึงข้อมูลได้บางส่วน)</span></li>
          <li>ระบบแจ้งเตือนอัตโนมัติ <span className="text-yellow-700 text-xs">(ต้องพัฒนาใหม่)</span></li>
        </ul>
      </section>
      <section className="container mx-auto py-6 px-4 grid md:grid-cols-2 gap-8" id="info">
        <div>
          <h2 className="font-bold text-2xl text-indigo-800 mb-2">ระบบสารสนเทศ</h2>
          <ul className="list-disc ml-6 text-indigo-700 space-y-2">
            <li>ITA (การประเมินความโปร่งใสองค์กร) <span className="text-yellow-700 text-xs">(ลิงก์เท่านั้น/ไม่มี API)</span></li>
            <li>KM (ระบบจัดการความรู้) <span className="text-yellow-700 text-xs">(ลิงก์เท่านั้น/ไม่มี API)</span></li>
            <li>HR Dashboard <span className="text-yellow-700 text-xs">(ต้องพัฒนาใหม่)</span></li>
            <li>SDGs (โครงการพัฒนาที่ยั่งยืน) <span className="text-yellow-700 text-xs">(ข้อมูลต้องเตรียมเอง)</span></li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-2xl text-indigo-800 mb-2">เมนูลัด</h2>
          <div className="flex flex-wrap gap-2">
            <button className="bg-indigo-200 px-4 py-2 rounded shadow">ระบบลางาน</button>
            <button className="bg-indigo-200 px-4 py-2 rounded shadow">ทะเบียนประวัติ</button>
            <button className="bg-indigo-200 px-4 py-2 rounded shadow">แบบฟอร์มราชการ</button>
            {/* ลูกเล่น: ปุ่ม hover/animation */}
          </div>
        </div>
      </section>
      <section className="container mx-auto py-6 px-4" id="news">
        <h2 className="font-bold text-2xl text-indigo-800 mb-2">ข่าวสารและกิจกรรม</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {/* ตัวอย่าง: ดึงข่าวประชาสัมพันธ์ */}
          <NewsFeed />
          {/* ตัวอย่าง: กิจกรรมพัฒนาบุคลากร */}
          <div className="col-span-2 bg-white rounded shadow p-4">
            <h3 className="font-bold text-lg text-indigo-700 mb-2">กิจกรรมพัฒนาบุคลากร</h3>
            <p className="text-indigo-600">[ปฏิทินกิจกรรมดึงข้อมูลได้บางส่วน]</p>
          </div>
        </div>
      </section>
      <section className="container mx-auto py-6 px-4" id="jobs">
        <h2 className="font-bold text-2xl text-indigo-800 mb-2">รับสมัครงาน</h2>
        <div className="bg-white rounded shadow p-4">
          <ul className="list-disc ml-6 text-indigo-700 space-y-2">
            <li>รายละเอียดตำแหน่งงานที่เปิดรับ <span className="text-green-700 text-xs">(ดึงข้อมูลได้)</span></li>
            <li>ระบบสมัครงานออนไลน์ <span className="text-yellow-700 text-xs">(ต้องพัฒนาใหม่)</span></li>
            <li>คู่มือเตรียมตัวสัมภาษณ์ <span className="text-yellow-700 text-xs">(ต้องจัดเตรียมเอง)</span></li>
          </ul>
        </div>
      </section>
      <section className="container mx-auto py-6 px-4" id="docs">
        <h2 className="font-bold text-2xl text-indigo-800 mb-2">เอกสารและดาวน์โหลด</h2>
        <div className="bg-white rounded shadow p-4">
          <ul className="list-disc ml-6 text-indigo-700 space-y-2">
            <li>ระเบียบข้อบังคับและหนังสือเวียน <span className="text-green-700 text-xs">(ดึงข้อมูลได้บางส่วน)</span></li>
            <li>แบบฟอร์มและเอกสารราชการ <span className="text-green-700 text-xs">(ดึงข้อมูลได้)</span></li>
            <li>ระบบแจ้งเตือนเมื่อมีเอกสารใหม่ <span className="text-yellow-700 text-xs">(ต้องพัฒนาใหม่)</span></li>
          </ul>
        </div>
      </section>
      <footer className="bg-indigo-900 text-white py-6 mt-8">
        <div className="container mx-auto px-4 text-center text-xs">
          &copy; {new Date().getFullYear()} กองบริหารงานบุคคล มหาวิทยาลัยเทคโนโลยีราชมงคลกรุงเทพ
        </div>
      </footer>
    </main>
  );
}

// ตัวอย่าง component ดึงข่าว RSS
async function NewsFeed() {
  // สมมุติ dummpy: fetch RSS แปลงเป็น json
  const news = [
    { title: "รับสมัครงานใหม่", link: "#", date: "13 มิ.ย. 2568" },
    { title: "ประกาศปรับปรุงระบบ", link: "#", date: "10 มิ.ย. 2568" },
  ];
  return (
    <div className="bg-white rounded shadow p-4">
      <h3 className="font-bold text-lg text-indigo-700 mb-2">ข่าวประชาสัมพันธ์</h3>
      <ul className="space-y-2">
        {news.map((item, i) => (
          <li key={i}>
            <a href={item.link} className="text-indigo-900 underline hover:text-indigo-500">{item.title}</a>
            <span className="ml-2 text-xs text-indigo-400">{item.date}</span>
          </li>
        ))}
      </ul>
      <p className="text-green-600 text-xs mt-2">* ข่าวประชาสัมพันธ์: ดึงข้อมูลได้ (RSS/Scraping)</p>
    </div>
  );
}