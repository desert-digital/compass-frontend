
# 📚 User Stories – Sprint 9: Foundation & Flow

### User Stories

#### 1. As a **crew**, I want to receive my checklist only when the previous one is complete, so I can focus on my current responsibilities without confusion.
- **Success Criteria**:
  - Checklists are locked until the previous is marked complete.
  - UI and API prevent early access.

#### 2. As an **ops_manager**, I want workflows to automatically advance based on checklist completion, so I don't have to manage the process manually.
- **Success Criteria**:
  - Completion of a checklist triggers EventBridge.
  - Lambda activates the next checklist without manual input.

#### 3. As an **admin**, I want logs of checklist and action timestamps to be recorded, so I can generate reports and analyze delays.
- **Success Criteria**:
  - Timestamps (`startedAt`, `completedAt`) are saved for actions and checklists.
  - DynamoDB entries are updated consistently.

#### 4. As a **crew**, I want to be prevented from skipping checklist actions, so I ensure all tasks are properly completed.
- **Success Criteria**:
  - UI disables out-of-order actions.
  - API validates sequential completion.
