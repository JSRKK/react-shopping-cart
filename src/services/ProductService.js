const service = {};

service.getAllProduct = () => {
    return datas;
}

service.getProductById = (id) => {
    let res = datas.find(item => item.id === parseInt(id));
    res.quantity = 1;
    return res;
}

var datas = [
    {
        id: 1,
        title: "Nike Air Max 270 React (Impressionism Art)",
        subTitle: "รองเท้าผู้ชาย",
        price: 5500,
        images: [
            require("../assets/images/products/nike-air-max-270-react/nike-air-max-270-react-1.jpg"),
            require("../assets/images/products/nike-air-max-270-react/nike-air-max-270-react-2.jpg"),
            require("../assets/images/products/nike-air-max-270-react/nike-air-max-270-react-3.jpg"),
            require("../assets/images/products/nike-air-max-270-react/nike-air-max-270-react-4.jpg"),
            require("../assets/images/products/nike-air-max-270-react/nike-air-max-270-react-5.jpg"),
            require("../assets/images/products/nike-air-max-270-react/nike-air-max-270-react-6.jpg")
        ],
        impression: "ความประทับใจสร้างได้ในพริบตาเดียว ทำให้เก็บความหรูหราในทุกการเคลื่อนไหว เพียงแค่สวม Nike Air Max 270 React ที่ได้แรงบันดาลใจจากศิลปะแนวอิมเพรสชันนิสม์ สีน้ำเงินและสีเทามิกซ์เข้าด้วยกันเพื่อรังสรรค์บรรยากาศของการใช้ชีวิตในเมือง พร้อมระบบลดแรงกระแทกนุ่มที่ให้คุณลื่นไถลเข้าไปในจิตใจของใครก็ตามที่ผ่านเข้ามา",
    },
    {
        id: 2,
        title: "NikeCourt Air Zoom Prestige",
        subTitle: "รองเท้าเทนนิสคอร์ทปูนผู้ชาย",
        price: 3600,
        images: [
            require("../assets/images/products/nike-court-air-zoom-prestige/nike-court-air-zoom-prestige-1.jpg"),
            require("../assets/images/products/nike-court-air-zoom-prestige/nike-court-air-zoom-prestige-2.jpg"),
            require("../assets/images/products/nike-court-air-zoom-prestige/nike-court-air-zoom-prestige-3.jpg"),
            require("../assets/images/products/nike-court-air-zoom-prestige/nike-court-air-zoom-prestige-4.jpg"),
            require("../assets/images/products/nike-court-air-zoom-prestige/nike-court-air-zoom-prestige-5.jpg"),
            require("../assets/images/products/nike-court-air-zoom-prestige/nike-court-air-zoom-prestige-6.jpg")
        ],
        impression: "NikeCourt Air Zoom Prestige ผสานการตอบสนองจากเทคโนโลยี Zoom Air เข้ากับการล็อคกระชับจากระบบ Dynamic Fit เพื่อความสบายเหมือนใส่ถุงมือและการรองรับบนคอร์ทปูน"
    },
    {
        id: 3,
        title: "Nike Air Zoom Terra Kiger 5",
        subTitle: "รองเท้าวิ่งเทรลผู้หญิง",
        price: 5000,
        images: [
            require("../assets/images/products/nike-air-zoom-terra-kiger5/nike-air-zoom-terra-kiger5-1.jpg"),
            require("../assets/images/products/nike-air-zoom-terra-kiger5/nike-air-zoom-terra-kiger5-2.jpg"),
            require("../assets/images/products/nike-air-zoom-terra-kiger5/nike-air-zoom-terra-kiger5-3.jpg"),
            require("../assets/images/products/nike-air-zoom-terra-kiger5/nike-air-zoom-terra-kiger5-4.jpg"),
            require("../assets/images/products/nike-air-zoom-terra-kiger5/nike-air-zoom-terra-kiger5-5.jpg"),
            require("../assets/images/products/nike-air-zoom-terra-kiger5/nike-air-zoom-terra-kiger5-6.jpg")
        ],
        impression: "Nike Air Zoom Terra Kiger 5 ให้คุณพิชิตเส้นทางเทรลที่เปียกแฉะและเต็มไปด้วยหิน ด้วย Flymesh ที่เบาสุดๆ ซึ่งผนึกกำลังกับโฟม Nike React เพื่อให้ทุกย่างก้าวนุ่มนวล และมาพร้อมส่วนบนแบบเจาะรูระบายอากาศที่ช่วยระบายความชื้น ขณะที่พื้นรองเท้ายางเหนียวชั้นนอกให้การยึดเกาะหลายทิศทางกับหลายประเภทพื้นผิว"
    },
    {
        id: 4,
        title: "Nike Air VaporMax Flyknit 3",
        subTitle: "รองเท้าผู้ชาย",
        price: 7000,
        images: [
            require("../assets/images/products/nike-air-vapormax-flyknit3/nike-air-vapormax-flyknit3-1.jpg"),
            require("../assets/images/products/nike-air-vapormax-flyknit3/nike-air-vapormax-flyknit3-2.jpg"),
            require("../assets/images/products/nike-air-vapormax-flyknit3/nike-air-vapormax-flyknit3-3.jpg"),
            require("../assets/images/products/nike-air-vapormax-flyknit3/nike-air-vapormax-flyknit3-4.jpg"),
            require("../assets/images/products/nike-air-vapormax-flyknit3/nike-air-vapormax-flyknit3-5.jpg"),
            require("../assets/images/products/nike-air-vapormax-flyknit3/nike-air-vapormax-flyknit3-6.jpg")
        ],
        impression: "สัมผัสถึงการดีดตัวและความเบาสบายไปกับ Nike Air VaporMax Flyknit 3 ซึ่งมีส่วนบนที่โดดเด่นด้วย Flyknit เป็นโครงสร้างด้วยเส้นสายสีทูโทนที่พลิ้วไหว ยืดหยุ่นและระบายอากาศได้ดี เพื่อสไตล์สตรีทที่พร้อมเสมอแบบไม่เหมือนใคร เทคโนโลยี VaporMax Air ปฏิวัติวงการช่วยติดสปริงให้ทุกก้าวด้วยระบบลดแรงกระแทกจากส้นจรดปลาย"
    },

    {
        id: 5,
        title: "Nike M2K Tekno",
        subTitle: "รองเท้า",
        price: 3600,
        images: [
            require("../assets/images/products/nike-m2k-tekno/nike-m2k-tekno-1.jpg"),
            require("../assets/images/products/nike-m2k-tekno/nike-m2k-tekno-2.jpg"),
            require("../assets/images/products/nike-m2k-tekno/nike-m2k-tekno-3.jpg"),
            require("../assets/images/products/nike-m2k-tekno/nike-m2k-tekno-4.jpg"),
            require("../assets/images/products/nike-m2k-tekno/nike-m2k-tekno-5.jpg"),
            require("../assets/images/products/nike-m2k-tekno/nike-m2k-tekno-6.jpg")
        ],
        impression: "รองเท้า Nike M2K Tekno นำแรงบันดาลใจมาจากตระกูล Monarch พร้อมแต่งให้ใส่ได้ในยุคนี้ด้วยส้นด้านหลังล้ำอนาคตและลิ้นรองเท้านุ่มพิเศษเพื่อความสบายเพิ่มเติม"
    },

]
module.exports = service;