# กองบริหารงานบุคคล - เว็บใหม่ (Next.js + Tailwind)

## โครงสร้างไฟล์
- app/page.tsx
- app/globals.css
- tailwind.config.js
- package.json

## วิธีใช้งาน
1. ติดตั้ง dependencies
   ```bash
   npm install
   ```
2. รันบนเครื่อง
   ```bash
   npm run dev
   ```
3. Deploy ขึ้น Vercel
   - Push โค้ดขึ้น GitHub
   - สร้างโปรเจกต์ใหม่บน https://vercel.com แล้วเลือก repo นี้
   - รอระบบ build และ deploy
   - ได้ลิงก์เว็บใหม่ทันที

## หมายเหตุ
- หากต้องการปรับแต่งหน้าตา/เนื้อหา เพิ่มเติมได้ที่ `app/page.tsx`
- ถ้าเจอปัญหาการ build หรือ style แจ้งใน Issues ได้