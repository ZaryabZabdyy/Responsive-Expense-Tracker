# 📊 Zabdy's Expense Tracker – From Simple Arrays to Advanced CRUD Operations

This repository showcases the functional evolution of a lightweight expense monitoring tool. The project has evolved from a basic, temporary array system into a fully operational application with separate user dashboards and dynamic data management.

---

## 🛠️ The Functional Shift: Before vs. After

To understand the core improvements of this system, here is how the application evolved across its development milestones:

### Phase 1: The Simple Array Prototype (Legacy)
* **Data Lifecycle:** Data was stored temporarily in a single JavaScript array variable. Refreshing the browser or restarting the application completely wiped out all records.
* **Access Control:** An open environment without any user accounts, missing any Signup or Login verification phases.
* **Operational Boundary:** Restricted to tracking only 2 basic fields (*Description* & *Price*). Users could only add and view entries, with no ability to delete mistakes.

### Phase 2: Advanced Dynamic CRUD Framework (Current)
* **Data Lifecycle:** Permanent operational storage where logs are securely recorded and survive any application restarts or reloads.
* **Access Control:** Private session assignment using dedicated login and signup credential gates to isolate user profiles.
* **Operational Boundary:** Upgraded with full operational workflows, expanding tracking fields to include specialized category tagging and real-time history logs with active row-level deletion controls.

---

## 🔄 Project Architecture & Application Flow

The system coordinates frontend interactions directly with advanced background processing scripts:
