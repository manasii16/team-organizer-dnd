## Components & Logic 

### `EmpDashboard.jsx`

- When the component first appears on the screen, it asks Redux to fetch employee data by calling dispatch(fetch_emp()).
- It then reads the latest pool, team, loading, and error values from the Redux store with useSelector.
- When a drag‑and‑drop action finishes, it passes the details to the moveEmployee reducer so Redux can move the employee to the right list.
- Handles drag end via `@hello-pangea/dnd` and dispatches `moveEmployee` reducer

### `Column.jsx`

- Shows one of the two columns — either “Employee Pool” or “My Team”.
- The entire column is marked as a droppable area so cards can be dropped into it.
- Inside, it handles four cases:
  1. Loading spinner while data is being fetched
  2. Error message if the request failed
  3. “Empty” text when the list has no employees
  4. A stack of employee cards, each wrapped in a draggable wrapper so the user can move them 

### `EmployeeCard.jsx`

- Displays name and avatar inside a styled MUI `<Card>`
- Uses props passed from `Column.jsx`

### `employeesSlice.js`

- Redux slice managing `pool`, `team`, `loading`, and `error` states
- Includes:
  - `fetch_emp`: `createAsyncThunk` to fetch employee data
  - `moveEmployee`: Moves an employee between lists

### `employeesAPI.js`

- Uses `axios.get()` to fetch from:
  ```env
  VITE_API_URL=https://randomuser.me/api/?results=25

---

## UX Notes

- Hover on a card: adds shadow + animation
- Dragging: creates a smooth transition between pool & team
- Avatar fallback: MUI auto-fallback when image not available
