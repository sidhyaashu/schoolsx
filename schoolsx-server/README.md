```textarea
backend/
├── package.json
├── package-lock.json
├── tsconfig.json
├── nodemon.json
├── .env
├── .env.example
├── .gitignore
├── README.md
│
├── src/
│   ├── main.ts
│   ├── server.ts
│   ├── app.ts
│   │
│   ├── config/
│   │   ├── env.ts
│   │   ├── db.ts
│   │   ├── redis.ts
│   │   ├── cors.ts
│   │   └── logger.ts
│   │
│   ├── loaders/
│   │   ├── express.loader.ts
│   │   ├── db.loader.ts
│   │   ├── queue.loader.ts
│   │   └── index.ts
│   │
│   ├── routes/
│   │   ├── index.ts
│   │   ├── auth.routes.ts
│   │   ├── student.routes.ts
│   │   ├── teacher.routes.ts
│   │   ├── parent.routes.ts
│   │   ├── admin.routes.ts
│   │   ├── class.routes.ts
│   │   ├── assignment.routes.ts
│   │   ├── quiz.routes.ts
│   │   ├── analytics.routes.ts
│   │   ├── ai.routes.ts
│   │   └── content.routes.ts
│   │
│   ├── controllers/
│   │   ├── auth.controller.ts
│   │   ├── student.controller.ts
│   │   ├── teacher.controller.ts
│   │   ├── parent.controller.ts
│   │   ├── admin.controller.ts
│   │   ├── class.controller.ts
│   │   ├── assignment.controller.ts
│   │   ├── quiz.controller.ts
│   │   ├── analytics.controller.ts
│   │   ├── ai.controller.ts
│   │   └── content.controller.ts
│   │
│   ├── services/
│   │   ├── auth.service.ts
│   │   ├── student.service.ts
│   │   ├── teacher.service.ts
│   │   ├── parent.service.ts
│   │   ├── admin.service.ts
│   │   ├── class.service.ts
│   │   ├── assignment.service.ts
│   │   ├── quiz.service.ts
│   │   ├── analytics.service.ts
│   │   ├── ai.service.ts
│   │   ├── notification.service.ts
│   │   └── content.service.ts
│   │
│   ├── domain/
│   │   ├── student/
│   │   ├── teacher/
│   │   ├── parent/
│   │   ├── admin/
│   │   ├── class/
│   │   ├── assignment/
│   │   ├── quiz/
│   │   └── analytics/
│   │
│   ├── models/
│   │   ├── user.model.ts
│   │   ├── student.model.ts
│   │   ├── teacher.model.ts
│   │   ├── parent.model.ts
│   │   ├── class.model.ts
│   │   ├── subject.model.ts
│   │   ├── assignment.model.ts
│   │   ├── quiz.model.ts
│   │   ├── content.model.ts
│   │   └── analytics.model.ts
│   │
│   ├── schemas/
│   │   ├── auth.schema.ts
│   │   ├── student.schema.ts
│   │   ├── teacher.schema.ts
│   │   ├── parent.schema.ts
│   │   ├── admin.schema.ts
│   │   ├── class.schema.ts
│   │   ├── assignment.schema.ts
│   │   ├── quiz.schema.ts
│   │   ├── analytics.schema.ts
│   │   └── content.schema.ts
│   │
│   ├── middlewares/
│   │   ├── auth.middleware.ts
│   │   ├── rbac.middleware.ts
│   │   ├── error.middleware.ts
│   │   ├── rate-limit.middleware.ts
│   │   ├── validate.middleware.ts
│   │   └── audit.middleware.ts
│   │
│   ├── utils/
│   │   ├── jwt.ts
│   │   ├── password.ts
│   │   ├── response.ts
│   │   ├── pagination.ts
│   │   └── constants.ts
│   │
│   ├── queues/
│   │   ├── ai.queue.ts
│   │   ├── email.queue.ts
│   │   └── analytics.queue.ts
│   │
│   ├── jobs/
│   │   ├── ai.job.ts
│   │   ├── report.job.ts
│   │   └── notification.job.ts
│   │
│   └── tests/
│       ├── auth.test.ts
│       ├── student.test.ts
│       ├── teacher.test.ts
│       └── admin.test.ts
│
└── dist/
```
