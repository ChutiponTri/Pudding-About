# 🍮 Pudding (พุดดิ้ง): About site

The public information site for **Pudding**, an online classroom for Thai schools built around LINE.

- **This site:** https://about.pudding-p.com
- **The Pudding app:** https://www.pudding-p.com

---

## What is Pudding?

Pudding lets teachers run their classes from a web portal while students do everything inside **LINE**, the app they already use every day. Students don't need to install anything or create an account.

### For teachers

- **Courses and classrooms:** set up courses each semester, invite students with a code, and post announcements to a class timeline.
- **Homework and quizzes:** multiple choice, true/false, short answer and file upload. Work can be scheduled, reused between classes, or given as a retake quiz to selected students.
- **Grading:** choice questions are scored automatically. Short answers and files are graded one student after another, with feedback.
- **Fair quizzes:** each submission is marked Normal, Watch or Suspicious, based on things like leaving the quiz or copy and paste.
- **Attendance:** students check in from LINE, with present, late and absent records.
- **LINE groups:** new work, results and deadline reminders are posted to the class's LINE group automatically.
- **Excel reports:** gradebook, attendance, submissions and missing work.
- **Co-teaching:** several teachers can share a classroom.

### For students

- A to-do list of open work, new results and open check-ins, all inside LINE.
- Quizzes with a countdown timer.
- Links in LINE messages open the exact assignment or result.
- Upload images and PDFs as homework.
- Hand in work on a classmate's phone when their own phone has a problem.

---

## What's on this site

| Section | Content |
|---|---|
| **About** | What Pudding is and the platform's current status |
| **Features** | What teachers and students can do |
| **How it works** | Getting started, step by step |
| **Research** | The SIIT research project behind Pudding, including Thai short-answer grading (ASAG) |
| **Team** | The developers, the research advisor and the project assistant |
| **Policies** | Privacy policy (`/privacy`) and terms of service (`/terms`) |

The site is in Thai.

---

## The team

Pudding is a research project at the **Sirindhorn International Institute of Technology (SIIT), Thammasat University**.

- **Chutipon Trirattananurak:** main developer and researcher (Ph.D. student, School of ICT, SIIT)
- **Asst. Prof. Sasiporn Usanavasin:** research advisor (School of ICT, SIIT)
- **Tippanan Jankaew:** project assistant and teacher (Surat Thani Technical College)

Contact: d6922300063@g.siit.tu.ac.th

---

## Running the site locally

Requires Node.js 20 or later.

```bash
npm install
npm run dev        # start a local preview
npm run build      # build for production (output in dist/)
npm run preview    # view the production build
```

Built with React, Vite and Tailwind CSS, and hosted on Vercel. Contact details, team members and navigation labels live in `src/constants.ts`.
