export const APP_URL = 'https://www.pudding-p.com'
export const CONTACT_EMAIL = 'd6922300063@g.siit.tu.ac.th'
export const PLATFORM_VERSION = '0.0.1'

export const RESEARCHER = {
  nameTh: 'นายชุติพนธ์ ตรีรัตนานุรักษ์',
  nameEn: 'Chutipon Trirattananurak',
  roleTh: 'นักศึกษาปริญญาเอก / นักวิจัย',
  roleEn: 'Ph.D. Student & Researcher',
}

export const INSTITUTION = {
  nameTh: 'สถาบันเทคโนโลยีนานาชาติสิรินธร (SIIT) มหาวิทยาลัยธรรมศาสตร์',
  nameEn: 'Sirindhorn International Institute of Technology (SIIT), Thammasat University',
  campus: 'ศูนย์รังสิต',
  address: '99 หมู่ 18 ต.คลองหนึ่ง อ.คลองหลวง จ.ปทุมธานี 12120',
  hours: 'จันทร์ - ศุกร์ (08:30 - 16:30 น.)',
}

export const NAV_LINKS = [
  { id: 'about', label: 'เกี่ยวกับโครงการ' },
  { id: 'features', label: 'ฟีเจอร์' },
  { id: 'how-it-works', label: 'ขั้นตอนการใช้งาน' },
  { id: 'research', label: 'โครงงานวิจัย SIIT' },
  { id: 'team', label: 'ทีมผู้พัฒนา' },
  { id: 'legal', label: 'นโยบายและข้อกำหนด' },
] as const

export const TEAM = [
  {
    badge: 'Main Developer & Researcher',
    nameTh: RESEARCHER.nameTh,
    nameEn: RESEARCHER.nameEn,
    roleTh: 'ผู้พัฒนาระบบหลักและนักวิจัย',
    affiliationTh: 'ภาควิชา ICT สถาบันเทคโนโลยีนานาชาติสิรินธร (SIIT) มหาวิทยาลัยธรรมศาสตร์',
    affiliationEn: 'ICT Department, SIIT, Thammasat University',
    duties: [
      'นักศึกษาปริญญาเอก ผู้รับผิดชอบหลักในการวางแผนและดำเนินโครงการวิจัย',
      'ออกแบบและพัฒนาระบบ Pudding ทั้งเว็บไซต์ LINE Bot และ LIFF แบบครบวงจร',
      'วิจัยและพัฒนาโมเดลตรวจคำตอบสั้นภาษาไทยอัตโนมัติ (ASAG)',
      'ผู้ควบคุมข้อมูลส่วนบุคคลและดูแลความปลอดภัยของข้อมูลในโครงการ',
    ],
    email: CONTACT_EMAIL,
    photo: '/team/chutipon.webp',
    primary: true,
  },
  {
    badge: 'Research Advisor',
    nameTh: 'ผศ.ดร. ศศิพร อุษณวศิน',
    nameEn: 'Asst. Prof. Sasiporn Usanavasin',
    roleTh: 'อาจารย์ที่ปรึกษางานวิจัย',
    affiliationTh: 'ภาควิชา ICT สถาบันเทคโนโลยีนานาชาติสิรินธร (SIIT) มหาวิทยาลัยธรรมศาสตร์',
    affiliationEn: 'ICT Department, SIIT, Thammasat University',
    duties: [
      'ให้คำปรึกษาและกำกับดูแลงานวิจัยของโครงการ',
      'ให้คำแนะนำด้านระเบียบวิธีวิจัยและการออกแบบการทดลอง',
      'ตรวจสอบความถูกต้องของผลการวิจัยและการเผยแพร่ผลงานวิชาการ',
      'กำกับดูแลด้านจริยธรรมการวิจัยและการคุ้มครองข้อมูลส่วนบุคคล',
    ],
    email: 'sasiporn.us@siit.tu.ac.th',
    photo: '/team/sasiporn.webp',
    primary: false,
  },
  {
    badge: 'Project Assistant',
    nameTh: 'นางสาวธิปนรรจ์ จันทร์แก้ว',
    nameEn: 'Tippanan Jankaew',
    roleTh: 'ผู้ช่วยโครงการ / ครูผู้สอน',
    affiliationTh: 'แผนกวิชาสามัญสัมพันธ์ วิทยาลัยเทคนิคสุราษฎร์ธานี',
    affiliationEn: 'General Education Department, Surat Thani Technical College',
    duties: [
      'ให้ข้อเสนอแนะในการออกแบบและพัฒนาระบบจากมุมมองครูผู้สอน',
      'ตรวจสอบความถูกต้องของคะแนนคำตอบที่ใช้ฝึกและประเมินโมเดล (Validation)',
      'นำการทดลองใช้ระบบนำร่อง (Pilot Study) และการเก็บรวบรวมข้อมูล',
      'ประสานงานกับสถานศึกษาและครูผู้สอนท่านอื่นในการใช้งานระบบ',
    ],
    email: 'tippanan.jan@srtc.ac.th',
    photo: '/team/tippanan.webp',
    primary: false,
  },
]
