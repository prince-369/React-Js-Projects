import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';
import DocVerify from './components/DocVerify';
import RequestPage from './components/RequestPage';
import DashboardPage from './components/DashboardPage';
import TeacherComponent from './components/TeacherComponent';
import ClassesComponent from './components/ClassesComponent';
import CoursesComponent from './components/CoursesComponent';


const router = createBrowserRouter([
  {
    path: "/",
    element: <SignupPage />, // Create this component
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/document-verification",
    element: <DocVerify />,
  },
  {
    path: "/request",
    element: <RequestPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
    children: [
      { path: "teacher", element: <TeacherComponent /> },
      { path: "classes", element: <ClassesComponent /> },
      { path: "courses", element: <CoursesComponent /> },
      { index: true, element: <TeacherComponent /> }
    ]
  },

]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
