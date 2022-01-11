import { Route, Routes } from "react-router-dom"
import DefaultLayout from "./components/layouts/DefaultLayout"
import Github from "./components/pages/Github"
import Index from "./components/pages/Index"
import Users from "./components/pages/users"
import Weather from "./components/pages/weather"

function App() {
  return (
    <Routes>
      <Route index element={<Index />} />
      <Route path="/experimental" element={<DefaultLayout />}>
        <Route path="weather" element={<Weather />} />
        <Route path="users" element={<Users />} />
        <Route path="github" element={<Github />} />
      </Route>
    </Routes>
  )
}

export default App
