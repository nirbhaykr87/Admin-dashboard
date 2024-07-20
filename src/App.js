import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/material';
import { lightTheme, darkTheme, createCustomTheme } from './theme';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import Employees from './pages/Employees';
import Customers from './pages/Customers';
import Tables from './components/Tables';
import Calendar from './components/Calendar';
import Charts from './components/Charts';
import Kanban from './components/Kanban';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import ThemeSidebar from './components/ThemeSidebar';

function App() {
  const [theme, setTheme] = useState(lightTheme);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div style={{ display: 'flex' }}>
          <Sidebar />
          <ThemeSidebar onThemeChange={handleThemeChange} />
          <div style={{ flexGrow: 1 }}>
            <TopBar />
            <Container style={{ marginTop: 64, padding: '16px' }}>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/tables" element={<Tables />} />
                <Route path="/ThemeSidebar" element={<ThemeSidebar />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/charts" element={<Charts />} />
                <Route path="/kanban" element={<Kanban />} />
              </Routes>
            </Container>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
