import { TriangleAlert } from 'lucide-react'
import { Link } from 'react-router-dom'
import { LegalClause, LegalLayout } from '../components/LegalLayout.tsx'
import { APP_URL, CONTACT_EMAIL, INSTITUTION, PLATFORM_VERSION } from '../constants.ts'

export default function TermsOfService() {
  return (
    <LegalLayout
      title="ข้อกำหนดและเงื่อนไขการใช้งาน"
      subtitle="Terms of Service"
      intro={
        <p>
          ข้อกำหนดนี้ใช้กับการใช้งานแพลตฟอร์ม Pudding ผ่าน LINE Official Account และเว็บไซต์ www.pudding-p.com
          การเพิ่มเพื่อนหรือใช้งานระบบถือว่าคุณได้อ่าน เข้าใจ และยอมรับข้อกำหนดนี้
          รวมถึง
          <Link to="/privacy" className="font-medium text-brand hover:underline"> นโยบายความเป็นส่วนตัว</Link>
        </p>
      }
    >
      <LegalClause number={1} title="ลักษณะของบริการ">
        <p>
          Pudding เป็นแพลตฟอร์มจัดการ Assignment และ Quiz ที่พัฒนาขึ้นเพื่อการวิจัยระดับปริญญาเอก ณ {INSTITUTION.nameTh}
          โดยครูจัดการรายวิชา ห้องเรียน งาน และการเช็กชื่อผ่านเว็บไซต์ (Web UI) ระบบ LINE Bot จะประกาศในกลุ่ม LINE ของชั้นเรียนที่เชื่อมไว้ และนักเรียนทำและส่งงานผ่านหน้าเว็บ LINE Front-end Framework (LIFF) ที่เปิดภายในแอป LINE
          ให้บริการโดยไม่มีค่าใช้จ่าย ในรูปแบบ “ตามสภาพ” (as-is) ระหว่างช่วงการวิจัย
        </p>
      </LegalClause>

      <LegalClause number={2} title="สิทธิและหน้าที่ของครูผู้สอน">
        <ul>
          <li>ลงทะเบียนบนเว็บไซต์ สร้างรายวิชาและห้องเรียน และเชิญ Pudding Bot เข้ากลุ่ม LINE ของชั้นเรียนเพื่อเชื่อมกับห้องเรียน</li>
          <li>สร้าง แก้ไข และมอบหมาย Assignment, Quiz และการเช็กชื่อเข้าเรียนให้แก่นักเรียนในห้องเรียนของตน</li>
          <li>ดูสถานะการส่งงาน คำตอบ คะแนน และข้อมูลการเข้าเรียนของนักเรียนในห้องเรียนของตน</li>
          <li>เชิญบอทเข้าเฉพาะกลุ่ม LINE ที่ใช้เพื่อการเรียนการสอน</li>
          <li>เป็นผู้ตัดสินและรับรองผลคะแนนขั้นสุดท้ายของนักเรียน</li>
          <li>แจ้งนักเรียน (และผู้ปกครองในกรณีผู้เยาว์) ถึงการใช้ระบบและการเก็บข้อมูลเพื่อการวิจัย</li>
          <li>ไม่นำข้อมูลของนักเรียนไปใช้นอกเหนือวัตถุประสงค์ทางการศึกษา</li>
        </ul>
      </LegalClause>

      <LegalClause number={3} title="สิทธิและหน้าที่ของนักเรียน">
        <ul>
          <li>เข้าร่วมห้องเรียนผ่านลิงก์ LIFF ที่บอทส่งในกลุ่ม LINE ของชั้นเรียน</li>
          <li>กดปุ่มจากบอทเพื่อทำงาน ทำแบบทดสอบ เช็กชื่อ และส่งงานผ่าน LINE LIFF</li>
          <li>ส่งงานและเช็กชื่อด้วยตนเองตามหลักความซื่อสัตย์ทางวิชาการ</li>
          <li>ขอเข้าถึง แก้ไข หรือลบข้อมูลของตนได้ตามนโยบายความเป็นส่วนตัว</li>
        </ul>
      </LegalClause>

      <LegalClause number={4} title={`สถานะฟีเจอร์ AI ในเวอร์ชัน ${PLATFORM_VERSION}`}>
        <div className="flex gap-3 rounded-xl border border-brand-line bg-brand-wash p-4">
          <TriangleAlert className="mt-0.5 h-5 w-5 shrink-0 text-brand-strong" />
          <p className="text-sm">
            ฟีเจอร์การประเมินผลด้วย AI ใน v{PLATFORM_VERSION} <strong>อยู่ในระยะวิจัย (Research Phase)</strong>
            ยังไม่ใช่ระบบตรวจให้คะแนนอย่างเป็นทางการ
          </p>
        </div>
        <ul>
          <li>ขณะนี้ระบบอยู่ในช่วงเก็บรวบรวมข้อมูลคำตอบ (Data Collection) เพื่อพัฒนาโมเดลในเวอร์ชันถัดไป</li>
          <li>ผลลัพธ์ใด ๆ ที่สร้างโดย AI เป็นเพียงข้อเสนอแนะ และอาจคลาดเคลื่อนได้</li>
          <li>คะแนนอย่างเป็นทางการต้องได้รับการพิจารณาและยืนยันโดยครูผู้สอนเสมอ</li>
        </ul>
      </LegalClause>

      <LegalClause number={5} title="ข้อห้ามในการใช้งาน">
        <ul>
          <li>อัปโหลดเนื้อหาที่ผิดกฎหมาย หยาบคาย ละเมิดสิทธิ หรือข้อมูลส่วนบุคคลของผู้อื่นโดยไม่ได้รับอนุญาต</li>
          <li>พยายามเข้าถึงระบบหรือข้อมูลของผู้อื่นโดยไม่ได้รับอนุญาต หรือรบกวนการทำงานของระบบ</li>
          <li>ใช้ระบบเพื่อวัตถุประสงค์ทางการค้าโดยไม่ได้รับอนุญาตจากโครงการ</li>
        </ul>
      </LegalClause>

      <LegalClause number={6} title="ทรัพย์สินทางปัญญา">
        <p>
          ผลงานและคำตอบที่ผู้ใช้ส่งเข้าระบบยังคงเป็นของผู้ใช้ โดยผู้ใช้อนุญาตให้โครงการใช้ข้อมูลดังกล่าว
          ในรูปแบบที่ไม่ระบุตัวตนเพื่อการวิจัยตามนโยบายความเป็นส่วนตัว
          ส่วนซอฟต์แวร์ การออกแบบ และโมเดลของ Pudding เป็นทรัพย์สินของโครงการวิจัย
        </p>
      </LegalClause>

      <LegalClause number={7} title="ข้อจำกัดความรับผิดชอบ">
        <p>
          เนื่องจากระบบอยู่ในระยะวิจัย โครงการไม่รับประกันว่าบริการจะพร้อมใช้งานตลอดเวลาหรือปราศจากข้อผิดพลาด
          และอาจปรับเปลี่ยน ระงับ หรือยุติบริการบางส่วนได้ โดยจะแจ้งให้ทราบล่วงหน้าตามความเหมาะสม
          ผู้ใช้ควรเก็บสำรองข้อมูลที่สำคัญด้วยตนเอง
        </p>
      </LegalClause>

      <LegalClause number={8} title="การยุติการใช้งาน">
        <p>
          ผู้ใช้สามารถยุติการใช้งานได้ทุกเมื่อโดยการบล็อกหรือลบ LINE Official Account และขอลบข้อมูลทางอีเมล
          โครงการขอสงวนสิทธิระงับบัญชีที่ละเมิดข้อกำหนดนี้
        </p>
      </LegalClause>

      <LegalClause number={9} title="กฎหมายที่ใช้บังคับและการติดต่อ">
        <p>ข้อกำหนดนี้อยู่ภายใต้กฎหมายแห่งราชอาณาจักรไทย</p>
        <p>
          หากมีคำถามเกี่ยวกับข้อกำหนดนี้ โปรดติดต่อ{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="font-medium break-all text-brand hover:underline">
            {CONTACT_EMAIL}
          </a>{' '}
          หรือเข้าสู่ระบบที่{' '}
          <a href={APP_URL} target="_blank" rel="noopener noreferrer" className="font-medium text-brand hover:underline">
            www.pudding-p.com
          </a>
        </p>
      </LegalClause>
    </LegalLayout>
  )
}
