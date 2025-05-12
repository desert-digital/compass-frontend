
# 🧭 Compass – Your Guide to More Availability and Revenue

**Compass** is a solo-built maintenance management system for yacht charter companies.  
It increases operational **availability** and **revenue** by coordinating workflows, checklists, and actions — ensuring maintenance is never a bottleneck.

This guide helps you manage and evolve Compass using a lightweight but powerful Agile and DevOps structure tailored for solo development.)

## 🎯 Overview

This guide helps you manage your yacht maintenance workflow app efficiently using your GitHub repository. It blends Agile best practices with solo-developer pragmatism — 1 to 1.5 hours per day, focused progress, and clear artifacts.

---

## 📁 Full Repository Structure (Clickable)

```bash
your-project/
├── [README.md](README.md)
├── [COMPASS_DEVOPS_GUIDE.md](COMPASS_DEVOPS_GUIDE.md)
├── sprints/
│   ├── [sprint-6.md](sprint_6_user_stories_with_criteria.md)
│   ├── [sprint-7.md](sprint_7_user_stories_with_criteria.md)
│   ├── [sprint-8.md](sprint_8_user_stories_with_criteria.md)
│   ├── [sprint-9.md](sprint_9_user_stories_with_criteria.md)
│   ├── [sprint-10.md](sprint_10_user_stories_with_criteria.md)
│   └── [sprint-11.md](sprint_11_user_stories_with_criteria.md)
├── design-docs/
│   ├── [compass_design.md](design-docs/compass_design.md)
│   └── personas/
│       ├── [admin.md](design-docs/personas/admin.md)
│       ├── [crew.md](design-docs/personas/crew.md)
│       ├── [ops_manager.md](design-docs/personas/ops_manager.md)
│       ├── [service_manager.md](design-docs/personas/service_manager.md)
│       └── [site_admin.md](design-docs/personas/site_admin.md)
├── test-plan/
│   ├── [angular-components.md](test-plan/angular-components.md)
│   ├── [api-services.md](test-plan/api-services.md)
│   ├── [lambda-functions.md](test-plan/lambda-functions.md)
│   └── [tdd-strategy.md](test-plan/tdd-strategy.md)
└── .github/
    └── ISSUE_TEMPLATE/
        └── [user_story.md](.github/ISSUE_TEMPLATE/user_story.md)
```

---

## Current Kanban Board

[sprint-6](sprint_6_kanban_board_export.md)

## 🧩 Your DevOps Flow

### 1. 🧠 Plan the Sprint

- Open the next file in `/sprints/` (e.g., `sprint-9.md`).
- Choose 1–3 user stories you can realistically complete in 5–7 work sessions.
- Update `kanban.md`:

  ```markdown
  ## To Do
  - [ ] US019: Create login and dashboard for Admin
  - [ ] US027: Highlight delayed workflows
  ```

> 💡 *Limit yourself to 1–2 features or flows at a time to stay focused.*

---

### 2. 🛠 Start the Work

- Create a new Git branch:  
  `git checkout -b feat/us019-login-admin`
- Implement the logic — follow your checklist/action dependencies.
- Update `README.md` or `design-docs/` as architectural decisions evolve.

---

### 3. ✅ Test as You Build

- For frontend work, add/adjust unit tests in `test-plan/angular-components.md`.
- For backend logic (e.g., Lambda triggers, EventBridge), write test cases in `test-plan/lambda-functions.md`.
- Use mocks for AWS services if needed (`aws-sdk-client-mock` for Lambda/JS).

---

### 4. 🚀 Commit and Push

- Commit meaningful units:
  ```bash
  git add .
  git commit -m "US019: add login and dashboard view for Admin"
  git push origin feat/us019-login-admin
  ```
- Optional: open a Pull Request even if it's just you — helps keep commit messages and reviews clean.

---

### 5. 🧪 Close the Loop

- Mark tasks as complete in `kanban.md`:

  ```markdown
  ## Done
  - [x] US019: Create login and dashboard for Admin
  ```

- Check off acceptance criteria in the sprint file.

---

### 6. 📚 Weekly Review (Fridays or Sundays)

- Review what was finished.
- Note any technical debt, blockers, or improvements.
- Create/adjust stories in the **next sprint file** if needed.
- Archive the previous sprint by moving stories to the `Done` section.

---

## 🧠 Tips Just for You

- 💥 *No need for meetings — but always end a work session by updating `kanban.md` and writing 1–2 lines about your next step.*
- 📅 *Use GitHub’s commit history and markdown files like a journal of progress.*
- 🔁 *Tweak your workflow — this is **your** DevOps system. If something becomes overhead, cut it or automate it.*

---

## 📘 Optional Automation (If You Want Later)

- GitHub Actions to lint, test, or deploy your app
- Mermaid diagrams for visual updates in markdown
- Auto-update Kanban from issues or PRs (using a GitHub Project or simple script)
