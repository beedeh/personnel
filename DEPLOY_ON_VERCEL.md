# วิธี Deploy เว็บ Next.js (Tailwind) ขึ้น Vercel

## 1. เตรียม Repository บน GitHub
1. สร้าง repository ใหม่บน GitHub (หรือใช้ repo นี้ `beedeh/personnel`)
2. อัปโหลดไฟล์โค้ดตัวอย่างที่ได้ให้ไว้ (เช่น `app/page.tsx`, `package.json`, ฯลฯ)

## 2. สมัครและเข้าสู่ระบบ Vercel (https://vercel.com)
- ใช้ GitHub login ได้เลย

## 3. สร้าง Project ใหม่
1. คลิก "Add New..." > "Project"
2. เลือก repo ที่อัปโหลดไว้
3. กด Deploy

## 4. รอระบบ Build และ Deploy
- ระบบจะ Build อัตโนมัติ (ใช้ค่า default ได้เลยสำหรับ Next.js)
- เมื่อเสร็จ จะมีลิ้งค์เว็บใหม่ให้ทันที เช่น  
  `https://personnel-yourname.vercel.app`

## 5. ปรับแต่ง (ถ้าต้องการ)
- ตั้ง Custom Domain หรือแก้ไข Environment Variables ได้ภายหลัง

---

**หมายเหตุ:**
- ทุกครั้งที่ push โค้ดขึ้น GitHub ระบบจะ deploy อัตโนมัติ
- รองรับ responsive/mobile ครบ
- ถ้าต้องการ deploy บน Netlify, Railway หรือโฮสต์อื่น ขั้นตอนคล้ายคลึงกัน

---

### ตัวอย่างลิ้งค์เว็บใหม่ (สมมุติ)
```
https://personnel-yourname.vercel.app
```
**(ลิ้งค์จริงจะได้หลังจาก deploy สำเร็จ)**

---

หากต้องการไฟล์ README.md พร้อม badge deploy now หรือเจอปัญหา build แจ้งได้เลยครับ!