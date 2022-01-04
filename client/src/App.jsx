import { Route, Routes } from "react-router-dom"
import DefaultLayout from "./components/layouts/DefaultLayout"
import Users from "./components/pages/users"
import Weather from "./components/pages/weather"

function App() {
  return (
    <Routes>
      <Route path="/experimental" element={<DefaultLayout />}>
        <Route path="weather" element={<Weather />} />
        <Route path="users" element={<Users />} />
      </Route>
    </Routes>
  )
}

export default App
