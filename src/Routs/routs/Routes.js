import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../pages/Blog/Blog";
import CourseDetails from "../../pages/Course_Details/CourseDetails";
import FAQ from "../../pages/FAQ/FAQ";
import Home from "../../pages/Home/Home";
import LanguageCourses from "../../pages/Language_courses/LanguageCourses";
import Login from "../../pages/login/Login";
import NotFound from "../../pages/NotFound";
import Category from "../../pages/Shared/category/Category";
import LeftsideBody from "../../pages/Shared/RightSidebody.js/LeftsideBody";
import RightSideNav from "../../pages/Shared/Right_side_nav/RightSideNav";
import SignUp from "../../pages/Signin/SignUp";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <LanguageCourses></LanguageCourses>,
                loader: () => fetch(`https://laguage-server.vercel.app/course`)


            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },

            {
                path: '/course-categories/:id',
                element: <LeftsideBody></LeftsideBody>,
                loader: ({ params }) => fetch(`https://laguage-server.vercel.app/category/${params.id}`)
            },
            {
                path: '/course/:id',
                element: <PrivateRoute><CourseDetails></CourseDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://laguage-server.vercel.app/course/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ],


    },

    {
        path: '*',
        element: <NotFound></NotFound>
    }
]);