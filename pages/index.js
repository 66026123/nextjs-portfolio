export default function Home() {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold">Waralee Sathung</h1>
        <p className="mt-2 text-xl">ยินดีต้อนรับสู่ portfolio ของฉัน</p>
        
        <section className="mt-8">
          <h2 className="text-2xl">เกี่ยวกับฉัน</h2>
          <p>
            สวัสดีค่ะ นักศึกษาจากมหาวิทยาลัยพะเยา 
            กำลังมองหาโอกาสในการทำงานในตำแหน่ง Front-end Developer, Project Manager หรือด้านเทคโนโลยีอื่น ๆ
          </p>
        </section>
        
        <section className="mt-8">
          <h2 className="text-2xl">ทักษะ</h2>
          <ul>
            <li>HTML, CSS, JavaScript</li>
            <li>React, Next.js</li>
            <li>Version Control: Git & GitHub</li>
            <li>UI/UX Design (Figma)</li>
          </ul>
        </section>
        
        <section className="mt-8">
          <h2 className="text-2xl">โปรเจกต์</h2>
          <ul>
            <li>
              <strong>Personal Portfolio Website:</strong> เว็บไซต์ส่วนตัวที่ใช้ในการนำเสนอข้อมูลเกี่ยวกับตัวเอง โดยใช้ HTML, CSS, JavaScript.
            </li>
          </ul>
        </section>
        
        <section className="mt-8">
          <h2 className="text-2xl">การศึกษา</h2>
          <p>
            <strong>ปริญญาตรี สาขาวิศวกรรมซอฟต์แวร์</strong><br />
            มหาวิทยาลัยพะเยา<br />
            คาดว่าจะจบการศึกษาในปี 2026
          </p>
        </section>
  
        <section className="mt-8">
          <h2 className="text-2xl">ติดต่อ</h2>
          <div className="contact-buttons">
            <a href="https://www.facebook.com/profile.php?id=100024735470504&mibextid=ZbWKwL" className="button">Facebook</a>
            <a href="mailto:66026123@up.ac.th" className="button">Gmail</a>
            <a href="https://github.com/66026123" className="button">Github</a>
            <a href="#" className="button">Fastwork</a>
          </div>
        </section>
      </div>
    );
  }