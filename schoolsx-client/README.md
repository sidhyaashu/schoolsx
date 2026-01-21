```textarea
.
├── packages/
│   ├── ai/
│   │   ├── prompts/
│   │   ├── policies/
│   │   ├── safety/
│   │   ├── tutor/
│   │   ├── analytics/
│   │   └── index.ts
│   ├── api-client/
│   │   ├── auth.ts
│   │   ├── student.ts
│   │   ├── teacher.ts
│   │   ├── parent.ts
│   │   ├── admin.ts
│   │   └── index.ts
│   ├── auth/
│   │   ├── rbac.ts
│   │   ├── guards.ts
│   │   ├── session.ts
│   │   └── index.ts
│   ├── design-tokens/
│   │   ├── colors.ts
│   │   ├── typography.ts
│   │   ├── spacing.ts
│   │   └── index.ts
│   ├── hooks/
│   │   ├── useAuth.ts
│   │   ├── useRole.ts
│   │   └── index.ts
│   └── lib/
│       ├── constants.ts
│       ├── enums.ts
│       └── index.ts
│
├── services/
│   ├── api/
│   │   ├── app/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── schemas/
│   │   ├── models/
│   │   └── main.py
│   ├── ingestion/
│   │   ├── ocr/
│   │   ├── transcripts/
│   │   └── pipelines/
│   ├── ml/
│   │   ├── embeddings/
│   │   ├── recommendations/
│   │   ├── prediction/
│   │   └── evaluation/
│   └── workers/
│       ├── queues/
│       ├── jobs/
│       └── scheduler/
│
├── public/
│   ├── images/
│   ├── icons/
│   └── logos/
│
├── src/
│   ├── app/
│   │   ├── (auth)/
│   │   │   ├── login/
│   │   │   │   └── page.tsx
│   │   │   ├── select-role/
│   │   │   │   └── page.tsx
│   │   │   └── select-school/
│   │   │       └── page.tsx
│   │   │
│   │   ├── (web-landing)/
│   │   │   ├── page.tsx
│   │   │   ├── about/page.tsx
│   │   │   ├── features/page.tsx
│   │   │   ├── schools/page.tsx
│   │   │   ├── pricing/page.tsx
│   │   │   └── contact/page.tsx
│   │   │
│   │   ├── (portal-student)/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   ├── dashboard/page.tsx
│   │   │   ├── subjects/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [subjectId]/
│   │   │   │       └── chapters/
│   │   │   │           └── [chapterId]/page.tsx
│   │   │   ├── live-classes/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [classId]/page.tsx
│   │   │   ├── recorded-classes/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [recordingId]/page.tsx
│   │   │   ├── assignments/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [assignmentId]/
│   │   │   │       ├── page.tsx
│   │   │   │       └── submit/page.tsx
│   │   │   ├── ai-tutor/page.tsx
│   │   │   ├── practice/
│   │   │   │   ├── page.tsx
│   │   │   │   └── quizzes/[quizId]/page.tsx
│   │   │   ├── resources/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [resourceId]/page.tsx
│   │   │   ├── progress/page.tsx
│   │   │   ├── gamification/
│   │   │   │   ├── page.tsx
│   │   │   │   └── badges/page.tsx
│   │   │   ├── announcements/page.tsx
│   │   │   └── settings/page.tsx
│   │   │
│   │   ├── (portal-teacher)/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   ├── dashboard/page.tsx
│   │   │   ├── classes/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [classId]/
│   │   │   │       ├── page.tsx
│   │   │   │       ├── students/page.tsx
│   │   │   │       ├── assignments/page.tsx
│   │   │   │       └── analytics/page.tsx
│   │   │   ├── subjects/
│   │   │   │   └── [subjectId]/chapters/[chapterId]/page.tsx
│   │   │   ├── ai-assistant/page.tsx
│   │   │   ├── assignments/page.tsx
│   │   │   ├── quizzes/page.tsx
│   │   │   ├── live-classes/page.tsx
│   │   │   ├── recorded-classes/page.tsx
│   │   │   ├── resources/page.tsx
│   │   │   ├── analytics/page.tsx
│   │   │   ├── question-bank/page.tsx
│   │   │   ├── announcements/page.tsx
│   │   │   └── settings/page.tsx
│   │   │
│   │   ├── (portal-parent)/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   ├── dashboard/page.tsx
│   │   │   ├── children/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [childId]/page.tsx
│   │   │   ├── performance/page.tsx
│   │   │   ├── homework/page.tsx
│   │   │   ├── attendance/page.tsx
│   │   │   ├── exams/page.tsx
│   │   │   ├── ai-insights/page.tsx
│   │   │   ├── communication/page.tsx
│   │   │   ├── classes/
│   │   │   │   ├── live/page.tsx
│   │   │   │   └── recorded/page.tsx
│   │   │   ├── resources/page.tsx
│   │   │   └── settings/page.tsx
│   │   │
│   │   ├── (portal-admin)/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   ├── dashboard/page.tsx
│   │   │   ├── hierarchy/page.tsx
│   │   │   ├── users/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── students/page.tsx
│   │   │   │   ├── teachers/page.tsx
│   │   │   │   ├── parents/page.tsx
│   │   │   │   └── roles/page.tsx
│   │   │   ├── timetable/page.tsx
│   │   │   ├── live-classes/page.tsx
│   │   │   ├── content/
│   │   │   │   ├── page.tsx
│   │   │   │   └── review/page.tsx
│   │   │   ├── assignments/page.tsx
│   │   │   ├── assessments/page.tsx
│   │   │   ├── analytics/page.tsx
│   │   │   ├── admissions/page.tsx
│   │   │   ├── billing/page.tsx
│   │   │   ├── branding/page.tsx
│   │   │   ├── audit-logs/page.tsx
│   │   │   └── settings/page.tsx
│   │   │
│   │   ├── (kiosk)/
│   │   │   └── page.tsx
│   │   │
│   │   ├── unauthorized/page.tsx
│   │   ├── not-found.tsx
│   │   ├── layout.tsx
│   │   └── globals.css
│   │
│   ├── components/
│   │   ├── layouts/
│   │   ├── charts/
│   │   ├── feedback/
│   │   └── ui/
│   │
│   ├── domain/
│   │   ├── student/
│   │   ├── teacher/
│   │   ├── parent/
│   │   ├── admin/
│   │   ├── assignment/
│   │   ├── analytics/
│   │   └── class/
│   │
│   ├── hooks/
│   │   └── use-mobile.ts
│   └── lib/
│       └── utils.ts
│
├── .gitignore
├── components.json
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```