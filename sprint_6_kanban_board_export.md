# 📋 Sprint 6 Kanban Task Board

| User Story | Task | Estimate (hrs) | Start Date | End Date | Status |
|------------|------|----------------|------------|----------|--------|
| US019 | Create login and navigation to home page for Ops Manager | 1.5 | 2025-05-10 | 2025-05-11 | To Do |
| US019 | Display pending charters with badge count and table | 2 | 2025-05-12 | 2025-05-13 | To Do |
| US019 | Implement assign/delete menu for pending charters | 1.5 | 2025-05-14 | 2025-05-15 | To Do |
| US019 | Ensure workflow assignment updates list with timestamps | 1.5 | 2025-05-16 | 2025-05-17 | To Do |
| US027 | Implement login for Admin and access to dashboard | 1 | 2025-05-18 | 2025-05-18 | To Do |
| US027 | Build dashboard view of in-flight workflows with status | 2 | 2025-05-18 | 2025-05-19 | To Do |
| US027 | Add sorting and filtering to workflow view | 1.5 | 2025-05-20 | 2025-05-21 | To Do |
| US027 | Highlight delayed workflows in the dashboard | 1 | 2025-05-22 | 2025-05-22 | To Do |

## To Do

**Persona**: Ops Manager

**Story**:  
As the Ops Manager, I want to be able to log in to the application and see the pending charters so I can assign a workflow to the charter

**Acceptance Criteria**:  
* correct user id/password goes to home page, the messages menu item is show 
* on the home page, the pending item is shown, the number of pending charters is shown in the text or as a badge
* a table of the all pending charters is shown
* each table row includes a menu to assign or delete (?) the pending charter
* if a workflow is assigned, it becomes visible under the assigned charters list
* assignment includes timestamp and user reference

### Tasks
- [ ] Build feature components
- [ ] Implement backend logic if needed
- [ ] Integrate with frontend UI
- [ ] ✅ **Write unit tests**
- [ ] ✅ **Write integration tests**
