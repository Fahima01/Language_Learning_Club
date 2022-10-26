import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import CourseDetails from "../../pages/Course_Details/CourseDetails";
import Home from "../../pages/Home/Home";
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
                path: '/course-categories/:id',
                element: <RightSideNav></RightSideNav>
            },
            {
                path: '/course/:id',
                element: <CourseDetails></CourseDetails>
            },

        ]
    }
]);