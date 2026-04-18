// ============================================
// WreathToday - Product Data (ราคาจริง + รหัสสินค้าจริง)
// เรียงตามชื่อไฟล์ 1-47
// ============================================

const PRODUCTS = [
    // --- ดอกไม้สด (Fresh Flowers) ---
    { id: 100, name: "Muthita", sku: "wd16", category: "fresh", categoryName: "ดอกไม้สด",
      price: 1090, originalPrice: null, image: "image/1.jpg", badge: "hot",
      description: "พวงหรีดดอกไม้สดโทนขาว เบญจมาศขาว เยอบีร่า โบว์เขียวอ่อน เรียบหรูสง่างาม",
      size: "80 ซม.", flowers: ["เบญจมาศขาว","เยอบีร่าขาว","โบว์ผ้าเขียว"] },

    { id: 101, name: "Ratchaya", sku: "wd47", category: "fresh", categoryName: "ดอกไม้สด",
      price: 1090, originalPrice: null, image: "image/2.jpg", badge: "hot",
      description: "พวงหรีดดอกไม้สดโทนส้ม-เหลือง ผ้าโบว์ดำสง่างาม เยอบีร่าส้ม เบญจมาศเหลือง",
      size: "80 ซม.", flowers: ["เยอบีร่าส้ม","เบญจมาศเหลือง","เบญจมาศขาว","โบว์ผ้าดำ"] },

    { id: 102, name: "Wimala", sku: "wd1", category: "fresh", categoryName: "ดอกไม้สด",
      price: 1090, originalPrice: null, image: "image/3.jpg", badge: null,
      description: "พวงหรีดดอกไม้สดโทนเหลือง-ส้ม-ขาว เบญจมาศ เยอบีร่า โบว์ผ้าเขียวใหญ่",
      size: "80 ซม.", flowers: ["เยอบีร่าส้ม","เบญจมาศเหลือง","เบญจมาศขาว","โบว์เขียว"] },

    { id: 103, name: "Pensiri", sku: "wd45", category: "fresh", categoryName: "ดอกไม้สด",
      price: 1100, originalPrice: null, image: "image/4.jpg", badge: "hot",
      description: "พวงหรีดดอกไม้สดโทนขาวล้วน ลิลลี่ขาว หน้าวัวขาว เบญจมาศ ใบยูคาลิปตัส",
      size: "80 ซม.", flowers: ["ลิลลี่ขาว","หน้าวัวขาว","เบญจมาศขาว","ใบยูคาลิปตัส"] },

    { id: 104, name: "Onanong", sku: "wd42", category: "fresh", categoryName: "ดอกไม้สด",
      price: 1100, originalPrice: null, image: "image/5.jpg", badge: null,
      description: "พวงหรีดดอกไม้สดโทนขาว-เขียว ลิลลี่ขาว เบญจมาศ ปิงปองเขียว ใบปรง",
      size: "80 ซม.", flowers: ["ลิลลี่ขาว","เบญจมาศขาว","ปิงปองเขียว","ใบปรง"] },

    { id: 105, name: "Praiwan", sku: "wd44", category: "fresh", categoryName: "ดอกไม้สด",
      price: 1100, originalPrice: null, image: "image/5.1.jpg", badge: null,
      description: "พวงหรีดดอกไม้สดโทนชมพู-ขาว เบญจมาศ คาร์เนชั่นชมพู โบว์อ่อนหวาน",
      size: "80 ซม.", flowers: ["เบญจมาศขาว","คาร์เนชั่นชมพู","โบว์ชมพู"] },

    { id: 106, name: "Panawan", sku: "wd43", category: "fresh", categoryName: "ดอกไม้สด",
      price: 1100, originalPrice: null, image: "image/6.jpg", badge: "new",
      description: "พวงหรีดดอกไม้สดโทนเขียว-ขาว ปิงปองเขียว เบญจมาศขาว สไตล์ธรรมชาติ",
      size: "80 ซม.", flowers: ["ปิงปองเขียว","เบญจมาศขาว","คาร์เนชั่น","โบว์เขียว"] },

    { id: 107, name: "Nipala", sku: "wd4", category: "fresh", categoryName: "ดอกไม้สด",
      price: 1400, originalPrice: null, image: "image/6.1.jpg", badge: null,
      description: "พวงหรีดดอกไม้สดโทนเหลือง-ขาว เบญจมาศเหลือง เยอบีร่า โบว์เขียว",
      size: "80 ซม.", flowers: ["เบญจมาศเหลือง","เยอบีร่าขาว","โบว์เขียว","ใบยูคาลิปตัส"] },

    { id: 108, name: "Panita", sku: "wd12", category: "fresh", categoryName: "ดอกไม้สด",
      price: 1200, originalPrice: null, image: "image/6.2.jpg", badge: null,
      description: "พวงหรีดดอกไม้สดโทนขาว-เขียว เบญจมาศ เยอบีร่า ริบบิ้นทอง",
      size: "80 ซม.", flowers: ["เบญจมาศขาว","เยอบีร่าขาว","ริบบิ้นทอง","ใบยูคาลิปตัส"] },

    { id: 109, name: "Pinnara", sku: "wd13", category: "fresh", categoryName: "ดอกไม้สด",
      price: 1200, originalPrice: null, image: "image/6.3.jpg", badge: null,
      description: "พวงหรีดดอกไม้สดโทนเหลือง-ส้ม-ขาว เบญจมาศ หน้าวัว สดใสอบอุ่น",
      size: "80 ซม.", flowers: ["เบญจมาศเหลือง","หน้าวัว","เยอบีร่าส้ม","เบญจมาศขาว"] },

    { id: 110, name: "Waraya", sku: "wd10", category: "fresh", categoryName: "ดอกไม้สด",
      price: 1500, originalPrice: null, image: "image/7.jpg", badge: "hot",
      description: "พวงหรีดดอกไม้สดหลากสี ม่วง ชมพู ส้ม เหลือง ขาว สดใสสะดุดตา",
      size: "90 ซม.", flowers: ["แวนด้าม่วง","เบญจมาศ","เยอบีร่าส้ม","คาร์เนชั่น"] },

    { id: 111, name: "Manaree", sku: "wd14", category: "fresh", categoryName: "ดอกไม้สด",
      price: 1700, originalPrice: null, image: "image/7.1.jpg", badge: null,
      description: "พวงหรีดดอกไม้สดโทนชมพู-ส้ม หน้าวัวแดง เบญจมาศ ปิงปอง",
      size: "90 ซม.", flowers: ["หน้าวัวแดง","เบญจมาศขาว","ปิงปองเขียว","เยอบีร่าส้ม"] },

    { id: 112, name: "Ratchanok", sku: "wd46", category: "fresh", categoryName: "ดอกไม้สด",
      price: 1400, originalPrice: null, image: "image/7.2.jpg", badge: null,
      description: "พวงหรีดดอกไม้สดโทนขาว-เขียว เบญจมาศ หน้าวัว โบว์เขียว ปิงปองเขียว",
      size: "80 ซม.", flowers: ["เบญจมาศขาว","หน้าวัว","ปิงปองเขียว","โบว์เขียว"] },

    { id: 113, name: "Junphapa", sku: "wd19", category: "fresh", categoryName: "ดอกไม้สด",
      price: 1500, originalPrice: null, image: "image/7.3.jpg", badge: null,
      description: "พวงหรีดดอกไม้สดโทนม่วง-ขาว แวนด้าม่วง เบญจมาศ โบว์ม่วง",
      size: "90 ซม.", flowers: ["แวนด้าม่วง","เบญจมาศขาว","เบญจมาศเหลือง","โบว์ม่วง"] },

    { id: 114, name: "Pimwadee", sku: "wd8", category: "fresh", categoryName: "ดอกไม้สด",
      price: 1500, originalPrice: null, image: "image/7.4.jpg", badge: null,
      description: "พวงหรีดดอกไม้สดโทนส้ม-ชมพู กุหลาบส้ม ลิลลี่ชมพู เดนโดรเบียม",
      size: "90 ซม.", flowers: ["กุหลาบส้ม","ลิลลี่ชมพู","เยอบีร่า","เดนโดรเบียมชมพู"] },

    { id: 115, name: "Lalita", sku: "wd40", category: "fresh", categoryName: "ดอกไม้สด",
      price: 1400, originalPrice: null, image: "image/7.5.jpg", badge: "new",
      description: "พวงหรีดดอกไม้สดโทนชมพู-ม่วง ออร์คิดม่วง ลิลลี่ชมพู เบญจมาศ",
      size: "80 ซม.", flowers: ["ออร์คิดม่วง","ลิลลี่ชมพู","เยอบีร่าแดง","เบญจมาศ"] },

    { id: 116, name: "Urarai", sku: "wd39", category: "fresh", categoryName: "ดอกไม้สด",
      price: 1500, originalPrice: null, image: "image/7.6.jpg", badge: null,
      description: "พวงหรีดดอกไม้สดโทนม่วง-ขาว แวนด้าม่วง เบญจมาศ โบว์ม่วงอ่อน",
      size: "90 ซม.", flowers: ["แวนด้าม่วง","เบญจมาศขาว","โบว์ม่วงอ่อน"] },

    { id: 117, name: "Supanna", sku: "wd21", category: "fresh", categoryName: "ดอกไม้สด",
      price: 1500, originalPrice: null, image: "image/7.6.1.jpg", badge: null,
      description: "พวงหรีดดอกไม้สดโทนชมพู-ม่วง เบญจมาศ เยอบีร่า โบว์ม่วงใหญ่",
      size: "90 ซม.", flowers: ["เบญจมาศชมพู","เยอบีร่าชมพู","เบญจมาศขาว","โบว์ม่วง"] },

    { id: 118, name: "Munin", sku: "wd36", category: "fresh", categoryName: "ดอกไม้สด",
      price: 1500, originalPrice: null, image: "image/7.7.jpg", badge: null,
      description: "พวงหรีดดอกไม้สดโทนแดง-ขาว เยอบีร่าแดง เบญจมาศ โบว์แดง",
      size: "90 ซม.", flowers: ["เยอบีร่าแดง","เบญจมาศขาว","คาร์เนชั่น","โบว์แดง"] },

    { id: 119, name: "Wanna", sku: "wd37", category: "fresh", categoryName: "ดอกไม้สด",
      price: 1500, originalPrice: null, image: "image/7.8.jpg", badge: null,
      description: "พวงหรีดดอกไม้สดโทนขาว-ม่วง เบญจมาศขาว สแตติสม่วง เรียบง่าย",
      size: "90 ซม.", flowers: ["เบญจมาศขาว","สแตติสม่วง"] },

    { id: 120, name: "Pensree", sku: "wd38", category: "fresh", categoryName: "ดอกไม้สด",
      price: 1500, originalPrice: null, image: "image/7.9.jpg", badge: null,
      description: "พวงหรีดดอกไม้สดโทนแดง-ชมพู เบญจมาศ หน้าวัว ออร์คิด",
      size: "90 ซม.", flowers: ["เบญจมาศแดง","หน้าวัวขาว","ออร์คิด","เยอบีร่าชมพู"] },

    { id: 121, name: "Ruttana", sku: "wd18", category: "fresh", categoryName: "ดอกไม้สด",
      price: 1500, originalPrice: null, image: "image/8.jpg", badge: "new",
      description: "พวงหรีดดอกไม้สดโทนขาว-เขียว ลิลลี่เหลือง ออร์คิดขาว ริบบิ้นทอง",
      size: "90 ซม.", flowers: ["ลิลลี่เหลือง","ออร์คิดขาว","เบญจมาศ","ริบบิ้นทอง"] },

    { id: 122, name: "Yupin", sku: "wd35", category: "fresh", categoryName: "ดอกไม้สด",
      price: 1400, originalPrice: null, image: "image/9.jpg", badge: null,
      description: "พวงหรีดดอกไม้สดโทนส้ม-เหลือง-ขาว หน้าวัว เบญจมาศ ปิงปอง",
      size: "80 ซม.", flowers: ["หน้าวัวขาว","เยอบีร่าส้ม","เบญจมาศเหลือง","ปิงปองเขียว"] },

    { id: 123, name: "Mura", sku: "wd34", category: "fresh", categoryName: "ดอกไม้สด",
      price: 1800, originalPrice: null, image: "image/10.jpg", badge: "hot",
      description: "พวงหรีดดอกไม้สดโทนขาว-เขียว ออร์คิด กุหลาบขาว ปิงปองเขียว",
      size: "90 ซม.", flowers: ["ออร์คิดเขียว","กุหลาบขาว","ปิงปองเขียว","เบญจมาศ"] },

    { id: 124, name: "Wipanee", sku: "wd11", category: "fresh", categoryName: "ดอกไม้สด",
      price: 1800, originalPrice: null, image: "image/11.jpg", badge: "new",
      description: "พวงหรีดดอกไม้สดโทนพาสเทล กุหลาบ ไฮเดรนเยีย ยูคาลิปตัส ริบบิ้นม่วง",
      size: "90 ซม.", flowers: ["กุหลาบชมพู","ไฮเดรนเยียฟ้า","เบญจมาศ","ยูคาลิปตัส"] },

    { id: 125, name: "Pimala", sku: "wd20", category: "fresh", categoryName: "ดอกไม้สด",
      price: 1800, originalPrice: null, image: "image/11.1.jpg", badge: null,
      description: "พวงหรีดดอกไม้สดโทนม่วง-เหลือง ออร์คิดม่วง เยอบีร่า เบญจมาศ",
      size: "90 ซม.", flowers: ["ออร์คิดม่วง","เยอบีร่าเหลือง","เบญจมาศ","โบว์ม่วง"] },

    { id: 126, name: "Sirima", sku: "wd6", category: "fresh", categoryName: "ดอกไม้สด",
      price: 1800, originalPrice: null, image: "image/11.2.jpg", badge: null,
      description: "พวงหรีดดอกไม้สดโทนชมพู-ขาว หน้าวัว เบญจมาศ เยอบีร่าชมพู",
      size: "90 ซม.", flowers: ["หน้าวัวชมพู","เบญจมาศขาว","เยอบีร่าชมพู","กุหลาบแดง"] },

    { id: 127, name: "Pinnida", sku: "wd7", category: "fresh", categoryName: "ดอกไม้สด",
      price: 2200, originalPrice: null, image: "image/12.jpg", badge: null,
      description: "พวงหรีดดอกไม้สดโทนขาวล้วน ลิลลี่ คาร์เนชั่น เบญจมาศ ริบบิ้นทอง",
      size: "100 ซม.", flowers: ["ลิลลี่ขาว","คาร์เนชั่นขาว","เบญจมาศขาว","ริบบิ้นทอง"] },

    { id: 128, name: "Piyachat", sku: "wd49", category: "fresh", categoryName: "ดอกไม้สด",
      price: 2000, originalPrice: null, image: "image/13.jpg", badge: null,
      description: "พวงหรีดดอกไม้สดโทนขาว-เขียว ลิลลี่ เบญจมาศ เยอบีร่า ริบบิ้นเขียวทอง",
      size: "90 ซม.", flowers: ["ลิลลี่ขาว","เบญจมาศขาว","เยอบีร่า","ริบบิ้นเขียว-ทอง"] },

    { id: 129, name: "Leela", sku: "wd50", category: "fresh", categoryName: "ดอกไม้สด",
      price: 2300, originalPrice: null, image: "image/15.jpg", badge: null,
      description: "พวงหรีดดอกไม้สดโทนส้ม-ขาว หน้าวัว เบญจมาศ โบว์ครีม",
      size: "100 ซม.", flowers: ["เยอบีร่าส้ม","หน้าวัว","เบญจมาศขาว","โบว์ครีม"] },

    { id: 130, name: "Saiyud", sku: "wd51", category: "fresh", categoryName: "ดอกไม้สด",
      price: 2700, originalPrice: null, image: "image/16.jpg", badge: "new",
      description: "พวงหรีดดอกไม้สดโทนชมพู-ม่วง เยอบีร่าชมพู หน้าวัว ไฮเดรนเยีย ริบบิ้นทอง",
      size: "100 ซม.", flowers: ["เยอบีร่าชมพู","หน้าวัว","ไฮเดรนเยียม่วง","ริบบิ้นทอง"] },

    { id: 131, name: "Mintala", sku: "wd5", category: "fresh", categoryName: "ดอกไม้สด",
      price: 2500, originalPrice: null, image: "image/17.jpg", badge: "hot",
      description: "พวงหรีดดอกไม้สดโทนแดง-ขาว กุหลาบแดง ลิลลี่ชมพู เบญจมาศ สง่างาม",
      size: "100 ซม.", flowers: ["กุหลาบแดง","ลิลลี่ชมพู","เบญจมาศขาว","ยูคาลิปตัส"] },

    { id: 132, name: "Sirinmara", sku: "wd15", category: "fresh", categoryName: "ดอกไม้สด",
      price: 2800, originalPrice: null, image: "image/18.jpg", badge: null,
      description: "พวงหรีดดอกไม้สดโทนขาว-เขียว คาร์เนชั่นขาว หน้าวัว ลิลลี่ ใบไม้",
      size: "100 ซม.", flowers: ["คาร์เนชั่นขาว","หน้าวัว","ลิลลี่ขาว","ยูคาลิปตัส"] },

    { id: 133, name: "Siripon", sku: "wd9", category: "fresh", categoryName: "ดอกไม้สด",
      price: 3200, originalPrice: null, image: "image/19.jpg", badge: null,
      description: "พวงหรีดดอกไม้สดโทนขาว-ฟ้า ไฮเดรนเยียฟ้า ลิลลี่ หน้าวัว โบว์ผ้าไหม",
      size: "100 ซม.", flowers: ["ไฮเดรนเยียฟ้า","ลิลลี่ขาว","หน้าวัว","โบว์ผ้าไหม"] },

    { id: 134, name: "Panalin", sku: "wd3", category: "fresh", categoryName: "ดอกไม้สด",
      price: 2000, originalPrice: null, image: "image/20.jpg", badge: null,
      description: "พวงหรีดดอกไม้สดโทนชมพู-ม่วง-ขาว คาร์เนชั่น เบญจมาศ โบว์ขาว",
      size: "90 ซม.", flowers: ["คาร์เนชั่นชมพู","เบญจมาศขาว","ม่วงอัญชัน","โบว์ขาว"] },

    { id: 135, name: "Pimpaka", sku: "wd2", category: "fresh", categoryName: "ดอกไม้สด",
      price: 2400, originalPrice: null, image: "image/20.1.jpg", badge: null,
      description: "พวงหรีดดอกไม้สดหลากสี ลิลลี่ ทานตะวัน เยอบีร่า เบญจมาศ",
      size: "100 ซม.", flowers: ["ลิลลี่ขาว","ทานตะวัน","เยอบีร่าส้ม","เบญจมาศ"] },

    { id: 136, name: "Siwilai", sku: "wd22", category: "fresh", categoryName: "ดอกไม้สด",
      price: 2500, originalPrice: null, image: "image/21.jpg", badge: null,
      description: "พวงหรีดดอกไม้สดโทนชมพู-ม่วง แวนด้าม่วง ไฮเดรนเยียฟ้า เบญจมาศ",
      size: "100 ซม.", flowers: ["แวนด้าม่วง","ไฮเดรนเยียฟ้า","เบญจมาศ","คาร์เนชั่น"] },

    { id: 137, name: "Nuanchan", sku: "wd23", category: "fresh", categoryName: "ดอกไม้สด",
      price: 2500, originalPrice: null, image: "image/22.jpg", badge: "sale",
      description: "พวงหรีดดอกไม้สดโทนฟ้า-ชมพูพาสเทล ไฮเดรนเยียฟ้า กุหลาบชมพู",
      size: "100 ซม.", flowers: ["ไฮเดรนเยียฟ้า","กุหลาบชมพู","เบญจมาศขาว","เดลฟิเนียม"] },

    { id: 138, name: "Lumphai", sku: "wd24", category: "fresh", categoryName: "ดอกไม้สด",
      price: 3500, originalPrice: null, image: "image/23.jpg", badge: "hot",
      description: "พวงหรีดดอกไม้สดโทนขาวล้วน หน้าวัวขาว ลิลลี่ เบญจมาศ ขาวสง่า",
      size: "100 ซม.", flowers: ["หน้าวัวขาว","ลิลลี่ขาว","เบญจมาศ","ปิงปอง"] },

    { id: 139, name: "Rumphueng", sku: "wd25", category: "fresh", categoryName: "ดอกไม้สด",
      price: 2600, originalPrice: null, image: "image/24.jpg", badge: "new",
      description: "พวงหรีดดอกไม้สดโทนม่วง-ชมพู ออร์คิดม่วง หน้าวัวชมพู กุหลาบ",
      size: "100 ซม.", flowers: ["ออร์คิดม่วง","หน้าวัวชมพู","กุหลาบ","เบญจมาศ"] },

    { id: 140, name: "Karnda", sku: "wd26", category: "fresh", categoryName: "ดอกไม้สด",
      price: 2200, originalPrice: null, image: "image/25.jpg", badge: null,
      description: "พวงหรีดดอกไม้สดโทนเขียว-เหลือง ทานตะวัน เบญจมาศ เยอบีร่า",
      size: "100 ซม.", flowers: ["ทานตะวัน","เบญจมาศ","เยอบีร่า","ปิงปองเขียว"] },

    { id: 141, name: "Kunlada", sku: "wd17", category: "fresh", categoryName: "ดอกไม้สด",
      price: 3900, originalPrice: null, image: "image/26.jpg", badge: null,
      description: "พวงหรีดดอกไม้สดโทนขาวล้วน กุหลาบขาวเต็มดอก สง่าบริสุทธิ์",
      size: "XL (80x140 ซม.)", flowers: ["กุหลาบขาว","มะลิ","เบญจมาศขาว"] },

    // ===== พัดลม (Fan Wreaths) - fwd =====
    { id: 200, name: "Ausama", sku: "fwd16-1", category: "fan", categoryName: "พวงหรีดพัดลม",
      price: 1800, originalPrice: null, image: "image/29.jpg", badge: "hot",
      description: "พวงหรีดพัดลมตั้งโต๊ะ กุหลาบขาว หน้าวัว ปิงปองเขียว ม่อนสเตอร่า",
      size: "พัดลม 16 นิ้ว", flowers: ["กุหลาบขาว","หน้าวัว","ปิงปองเขียว","ม่อนสเตอร่า"] },

    { id: 201, name: "Sirinda", sku: "fwd16-2", category: "fan", categoryName: "พวงหรีดพัดลม",
      price: 1900, originalPrice: null, image: "image/30.jpg", badge: "new",
      description: "พวงหรีดพัดลมตั้งโต๊ะ ลิลลี่ชมพู กุหลาบ หน้าวัว ริบบิ้นดำ",
      size: "พัดลม 16 นิ้ว", flowers: ["ลิลลี่ชมพู","กุหลาบชมพู","หน้าวัว","ริบบิ้นดำ"] },

    { id: 202, name: "Napada", sku: "fwd16-3", category: "fan", categoryName: "พวงหรีดพัดลม",
      price: 2200, originalPrice: null, image: "image/31.jpg", badge: null,
      description: "พวงหรีดพัดลมตั้งโต๊ะ กุหลาบครีม คาร์เนชั่น ยูคาลิปตัส ริบบิ้นเขียว",
      size: "พัดลม 16 นิ้ว", flowers: ["กุหลาบครีม","คาร์เนชั่น","ยูคาลิปตัส","ริบบิ้นเขียว"] },

    { id: 203, name: "Sangmanee", sku: "fwd16-5", category: "fan", categoryName: "พวงหรีดพัดลม",
      price: 2300, originalPrice: null, image: "image/31.1.jpg", badge: null,
      description: "พวงหรีดพัดลมตั้งโต๊ะ กุหลาบขาว ไฮเดรนเยีย ยูคาลิปตัส ริบบิ้นน้ำเงิน",
      size: "พัดลม 16 นิ้ว", flowers: ["กุหลาบขาว","ไฮเดรนเยีย","ยูคาลิปตัส","ริบบิ้นน้ำเงิน"] },

    { id: 204, name: "Wanitha", sku: "fwd16-6", category: "fan", categoryName: "พวงหรีดพัดลม",
      price: 2300, originalPrice: null, image: "image/32.jpg", badge: null,
      description: "พวงหรีดพัดลมตั้งโต๊ะ หน้าวัวชมพู คาร์เนชั่น เยอบีร่า ริบบิ้นชมพู",
      size: "พัดลม 16 นิ้ว", flowers: ["หน้าวัวชมพู","คาร์เนชั่น","เยอบีร่า","ริบบิ้นชมพู"] },

    { id: 205, name: "Bussama", sku: "fwd16-7", category: "fan", categoryName: "พวงหรีดพัดลม",
      price: 2300, originalPrice: null, image: "image/33.jpg", badge: "hot",
      description: "พวงหรีดพัดลมตั้งโต๊ะ คาร์เนชั่นชมพู กุหลาบ ลิลลี่ ริบบิ้นส้ม",
      size: "พัดลม 16 นิ้ว", flowers: ["คาร์เนชั่นชมพู","กุหลาบ","ลิลลี่","ริบบิ้นส้ม"] },

    { id: 206, name: "Orravan", sku: "fwd16-8", category: "fan", categoryName: "พวงหรีดพัดลม",
      price: 2300, originalPrice: null, image: "image/34.jpg", badge: null,
      description: "พวงหรีดพัดลมตั้งโต๊ะ กุหลาบชมพู ลิซิแอนทัส ใบเฟิร์น ริบบิ้นชมพู",
      size: "พัดลม 16 นิ้ว", flowers: ["กุหลาบชมพู","ลิซิแอนทัส","ใบเฟิร์น","ริบบิ้นชมพู"] },

    { id: 2065, name: "Mathita", sku: "fwd16-9", category: "fan", categoryName: "พวงหรีดพัดลม",
      price: 2500, originalPrice: null, image: "image/34.5.jpg", badge: null,
      description: "พวงหรีดพัดลมตั้งโต๊ะ ลิลลี่ขาว กุหลาบชมพู คาร์เนชั่น สแตติส",
      size: "พัดลม 16 นิ้ว", flowers: ["ลิลลี่ขาว","กุหลาบชมพู","คาร์เนชั่นชมพู","สแตติส"] },

    { id: 207, name: "Pantida", sku: "fwd18-2", category: "fan", categoryName: "พวงหรีดพัดลม",
      price: 3200, originalPrice: null, image: "image/35.jpg", badge: "new",
      description: "พวงหรีดพัดลมตั้งพื้น 2 ชั้น หน้าวัว ปิงปองเหลือง กุหลาบ สง่างาม",
      size: "พัดลมตั้งพื้น 16 นิ้ว", flowers: ["หน้าวัว","ปิงปองเหลือง","กุหลาบ","ยูคาลิปตัส"] },

    { id: 208, name: "Laweewan", sku: "fwd18-3", category: "fan", categoryName: "พวงหรีดพัดลม",
      price: 3500, originalPrice: null, image: "image/35.5.jpg", badge: null,
      description: "พวงหรีดพัดลมตั้งพื้น 2 ชั้น หน้าวัว กุหลาบขาว ปิงปอง ยูคาลิปตัส",
      size: "พัดลมตั้งพื้น 16 นิ้ว", flowers: ["หน้าวัว","กุหลาบขาว","ปิงปองเขียว","ยูคาลิปตัส"] },

    { id: 209, name: "Wilailuk", sku: "fwd18-1", category: "fan", categoryName: "พวงหรีดพัดลม",
      price: 3500, originalPrice: null, image: "image/36.jpg", badge: "hot",
      description: "พวงหรีดพัดลมตั้งพื้น 2 ชั้น ลิลลี่ชมพู กุหลาบ หน้าวัว หรูหรา",
      size: "พัดลมตั้งพื้น 16 นิ้ว", flowers: ["ลิลลี่ชมพู","กุหลาบชมพู","หน้าวัว","ยูคาลิปตัส"] },

    // ===== พรีเมียม =====
    { id: 300, name: "Laongtip", sku: "wd31", category: "premium", categoryName: "พวงหรีดพรีเมียม",
      price: 4000, originalPrice: null, image: "image/39.jpg", badge: "hot",
      description: "พวงหรีดพรีเมียมทรงกลม ฐานผ้าทอ กุหลาบม่วง ดอกไม้จันทน์ มะลิ",
      size: "กลม 80 ซม.", flowers: ["กุหลาบม่วง","ดอกไม้จันทน์","มะลิ","พวงมาลัย"] },

    { id: 301, name: "Mantana", sku: "wd32", category: "premium", categoryName: "พวงหรีดพรีเมียม",
      price: 4000, originalPrice: null, image: "image/40.jpg", badge: "new",
      description: "พวงหรีดพรีเมียมทรงกลม ฐานผ้าทอ กุหลาบขาว ปิงปอง ดอกไม้จันทน์",
      size: "กลม 80 ซม.", flowers: ["กุหลาบขาว","ปิงปองเขียว","เบญจมาศ","ดอกไม้จันทน์"] },

    { id: 302, name: "Sukanda", sku: "wd28", category: "premium", categoryName: "พวงหรีดพรีเมียม",
      price: 4500, originalPrice: null, image: "image/41.jpg", badge: null,
      description: "พวงหรีดพรีเมียมทรงหยดน้ำ ออร์คิดม่วง กุหลาบชมพู ดอกไม้จันทน์ พวงมาลัย",
      size: "หยดน้ำ 60x90 ซม.", flowers: ["ออร์คิดม่วง","กุหลาบชมพู","ดอกไม้จันทน์","พวงมาลัย"] },

    { id: 303, name: "Supanaree", sku: "wd33", category: "premium", categoryName: "พวงหรีดพรีเมียม",
      price: 4900, originalPrice: null, image: "image/42.jpg", badge: null,
      description: "พวงหรีดพรีเมียมทรงวงรี ดอกไม้จันทน์ขาว กุหลาบขาว ปิงปอง ฐานผ้าทอ",
      size: "วงรี 60x90 ซม.", flowers: ["ดอกไม้จันทน์","กุหลาบขาว","ปิงปองเขียว","คาร์เนชั่น"] },

    { id: 304, name: "Nuthida", sku: "wd27", category: "premium", categoryName: "พวงหรีดพรีเมียม",
      price: 4500, originalPrice: null, image: "image/42.1.jpg", badge: null,
      description: "พวงหรีดพรีเมียมทรงหยดน้ำ กุหลาบเหลือง ออร์คิด ปิงปอง ดอกไม้จันทน์",
      size: "หยดน้ำ 60x90 ซม.", flowers: ["กุหลาบเหลือง","ออร์คิด","ปิงปองเขียว","ดอกไม้จันทน์"] },

    { id: 305, name: "Chanthorn", sku: "wd52", category: "premium", categoryName: "พวงหรีดพรีเมียม",
      price: 4900, originalPrice: null, image: "image/43.jpg", badge: null,
      description: "พวงหรีดพรีเมียมทรงวงรี กุหลาบชมพู ดอกไม้จันทน์ มะลิ พวงมาลัย",
      size: "วงรี 60x90 ซม.", flowers: ["กุหลาบชมพู","ดอกไม้จันทน์","มะลิ","พวงมาลัย"] },

    { id: 306, name: "Sudathip", sku: "wd53", category: "premium", categoryName: "พวงหรีดพรีเมียม",
      price: 4900, originalPrice: null, image: "image/43.1.jpg", badge: null,
      description: "พวงหรีดพรีเมียมทรงวงรี กุหลาบชมพู ปิงปอง ดอกไม้จันทน์ ฐานผ้าทอ",
      size: "วงรี 60x90 ซม.", flowers: ["กุหลาบชมพู","ปิงปองเขียว","ดอกไม้จันทน์","มะลิ"] },

    { id: 307, name: "Kanchana", sku: "wd54", category: "premium", categoryName: "พวงหรีดพรีเมียม",
      price: 4900, originalPrice: null, image: "image/44.jpg", badge: null,
      description: "พวงหรีดพรีเมียมทรงวงรี ดอกไม้จันทน์ กุหลาบขาว ปิงปอง พวงมาลัย",
      size: "วงรี 60x90 ซม.", flowers: ["ดอกไม้จันทน์","กุหลาบขาว","ปิงปองเขียว","พวงมาลัย"] },

    { id: 308, name: "Pannawadee", sku: "wd29", category: "premium", categoryName: "พวงหรีดพรีเมียม",
      price: 5700, originalPrice: null, image: "image/45.jpg", badge: null,
      description: "พวงหรีดพรีเมียมทรงวงรี มะลิ พวงมาลัย ดอกไม้จันทน์ กุหลาบ งานไทยประณีต",
      size: "วงรี 60x100 ซม.", flowers: ["มะลิ","ดอกไม้จันทน์","กุหลาบ","พวงมาลัย"] },

    { id: 309, name: "Budsaba", sku: "wd30", category: "premium", categoryName: "พวงหรีดพรีเมียม",
      price: 7000, originalPrice: null, image: "image/46.jpg", badge: "hot",
      description: "พวงหรีดพรีเมียมระดับสูง กุหลาบชมพู ออร์คิด มะลิ พวงมาลัยทอง ฐานผ้าทอทอง",
      size: "วงรี 70x110 ซม.", flowers: ["กุหลาบชมพู","ออร์คิด","มะลิ","พวงมาลัยทอง","ดอกไม้จันทน์"] },

    { id: 310, name: "Suwannee", sku: "wd55", category: "premium", categoryName: "พวงหรีดพรีเมียม",
      price: 7000, originalPrice: null, image: "image/47.jpg", badge: "new",
      description: "พวงหรีดพรีเมียมทรงวงรี ฟาแลนนอปซิส กุหลาบ มะลิ พวงมาลัยทอง หรูหราเหนือระดับ",
      size: "วงรี 70x110 ซม.", flowers: ["ฟาแลนนอปซิส","กุหลาบขาว","มะลิ","พวงมาลัยทอง"] }
];

const PROVINCES = [
    "กรุงเทพมหานคร","กระบี่","กาญจนบุรี","กาฬสินธุ์","กำแพงเพชร","ขอนแก่น","จันทบุรี","ฉะเชิงเทรา","ชลบุรี","ชัยนาท","ชัยภูมิ","ชุมพร","เชียงราย","เชียงใหม่","ตรัง","ตราด","ตาก","นครนายก","นครปฐม","นครพนม","นครราชสีมา","นครศรีธรรมราช","นครสวรรค์","นนทบุรี","นราธิวาส","น่าน","บึงกาฬ","บุรีรัมย์","ปทุมธานี","ประจวบคีรีขันธ์","ปราจีนบุรี","ปัตตานี","พระนครศรีอยุธยา","พังงา","พัทลุง","พิจิตร","พิษณุโลก","เพชรบุรี","เพชรบูรณ์","แพร่","พะเยา","ภูเก็ต","มหาสารคาม","มุกดาหาร","แม่ฮ่องสอน","ยโสธร","ยะลา","ร้อยเอ็ด","ระนอง","ระยอง","ราชบุรี","ลพบุรี","ลำปาง","ลำพูน","เลย","ศรีสะเกษ","สกลนคร","สงขลา","สตูล","สมุทรปราการ","สมุทรสงคราม","สมุทรสาคร","สระแก้ว","สระบุรี","สิงห์บุรี","สุโขทัย","สุพรรณบุรี","สุราษฎร์ธานี","สุรินทร์","หนองคาย","หนองบัวลำภู","อ่างทอง","อุดรธานี","อุทัยธานี","อุตรดิตถ์","อุบลราชธานี","อำนาจเจริญ"
];
