import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../pages/Blog/Blog";
import CourseDetails from "../../pages/Course_Details/CourseDetails";
import FAQ from "../../pages/FAQ/FAQ";
import Home from "../../pages/Home/Home";
import LanguageCourses from "../../pages/Language_courses/LanguageCourses";
import Category from "../../pages/Shared/category/Category";
import RightSideNav from "../../pages/Shared/Right_side_nav/RightSideNav";

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
                element: <LanguageCourses></LanguageCourses>
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
                element: <Category></Category>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/course/:id',
                element: <CourseDetails></CourseDetails>
            },

        ]
    }
]);