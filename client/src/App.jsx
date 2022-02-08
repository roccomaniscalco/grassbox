import { Route, Routes } from "react-router-dom"
import DashboardLayout from "./components/layouts/DashboardLayout"
import Github from "./components/pages/Github"
import Index from "./components/pages/Index"
import Japanese from "./components/pages/Japanese"
import Users from "./components/pages/users"
import Weather from "./components/pages/weather"

function App() {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<Index />} />
        <Route path="/experimental">
          <Route path="weather" element={<Weather />} />
          <Route path="users" element={<Users />} />
          <Route path="github" element={<Github />} />
          <Route path="japanese" element={<Japanese />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
