
# Yacht Maintenance Workflow System – Conversation Summary

## 1. Architecture Overview
- Use of **AWS Amplify**, **EventBridge**, and **Lambda** to manage workflow logic.
- Workflows contain checklists, which contain ordered actions assigned to users.
- Event-driven processing ensures sequential execution.

## 2. Data Models
```json
// Workflow
{
  "id": "workflow-001",
  "name": "Pre-Charter Maintenance",
  "checklists": ["checklist-001", "checklist-002"]
}

// Checklist
{
  "id": "checklist-001",
  "title": "Engine Inspection",
  "assignedTo": "user-123",
  "actions": ["action-001", "action-002"],
  "status": "pending",
  "order": 1
}

// Action
{
  "id": "action-001",
  "title": "Check oil level",
  "status": "completed",
  "timestamp": "2025-05-09T10:00:00Z",
  "order": 1
}
```

## 3. Lambda and EventBridge Integration
- Lambda triggers when a checklist is marked complete.
- EventBridge handles routing and sequencing of workflow stages.
- Checklist activation events are sent to individual assignees.

## 4. Machine Learning with SageMaker
- SageMaker used to **predict expected duration** of checklists.
- Trained on historical data from action logs.
- Supports **delay detection and forecasting**.

## 5. Lambda Integration with SageMaker
- Lambda gathers features (e.g., action types, checklist history).
- Sends input to SageMaker endpoint and receives predictions.
- Prediction affects scheduling logic and triggers warnings.

## 6. Gantt Chart Timeline
- Visual representation of your tasks from **May 9–15**.
- Actions color-coded by type: architecture, ML, planning, integration.
- Supports overview of progress vs available time (1–1.5 hrs/day).

## 7. Weekly Task Planning
### Week 1: May 9–15
- Setup Amplify backend
- Implement EventBridge + Lambda for checklist activation
- Start basic SageMaker model and integrate with Lambda

### Week 2: May 16–22
- Plan and test GenAI summaries
- Design analytics schema
- Build dashboard and checklist UI enhancements

### Week 3: May 23–29
- Design and implement Amazon Lex integration
- Add smart prioritization and retraining logic
- Review and scope Phase 2

## 8. Lex Integration
- Amazon Lex allows **voice or text interaction** with workflow assistant.
- Sample intents: "Show my checklists", "What’s next?", "Update status".
- Lex bot integrated with Lambda for checklist retrieval.

## 9. GenAI and ML Enhancements
- Automatic checklist summaries using Bedrock or SageMaker
- Predict bottlenecks and delays based on workflow history
- Smart ranking of critical actions
- Log analytics for retraining and continuous improvement

## 10. Deliverables
- ✅ Task board (.md format): `yacht_workflow_followup_task_board.md`
- ⏳ PDF export (pending due to tool issue – retry later)
