# Sprint: Sprint 6 (Updated)

## User Story: US019

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

---

## User Story: US027

**Persona**: Admin

**Story**:  
As the Admin, I want to log into the application so I can review the status of all in-flight workflows

**Acceptance Criteria**:  
* login success leads to dashboard with in-flight workflows panel
* workflows show status: not started, in progress, completed
* each entry includes vessel, checklist, and assigned crew
* ability to sort/filter by vessel, owner, and date
* errors or delays in workflows are highlighted
