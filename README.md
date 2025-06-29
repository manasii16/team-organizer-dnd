# Team Organizer(React, Redux, MUI, DnD)

This project is a Team Organizer that helps you manage a list of employees. You can easily drag and drop employees from a pool to your team, and vice versa. It’s built with React, Redux Toolkit, and Material UI, and supports smooth drag-and-drop interaction using @hello-pangea/dnd.

---

## Tech Stack / Libraries Used

| Tool / Library | Purpose |
|----------------|---------|
| **React** (Vite) | UI framework |
| **Redux Toolkit** | State management (with slices and async thunks) |
| **@mui/material** | UI components (Card, Avatar, Grid, etc.) |
| **@hello-pangea/dnd** | Drag-and-drop functionality |
| **Axios** | API calls |
| **randomuser.me API** | Employee data (name, avatar, id) |
| **Vite** | Fast development and bundling |

---

## What does this project do?

1. It fetches employee data from an API.
2. Shows employees in a clean card-based layout.
3. Lets you drag employees from one list to another (like Pool → Team).
4. Keeps track of everything using a global Redux state.

## How Redux works here

1. Redux Toolkit is used to manage two lists:
2. pool - employees you can choose from
3. team - employees you’ve selected
4. The slice handles async fetching of employees and moving items between pool and team

## Getting Started – How to run locally
1. Clone the project
   - git clone https://github.com/your-username/team-organizer-dnd.git
   - cd team-organizer-dnd

2. Install dependencies
   - npm install

3. Create .env file
   - VITE_API_URL=https://randomuser.me/api/?results=25

4. Start the development server
   - npm run dev

Open http://localhost:5173 to view it in the browser.


## What’s next or possible improvements?

1. Add the ability to remove people from the team
2. Store team data in local storage or backend
3. Add employee role, email, or more info
4. Add unit testing
