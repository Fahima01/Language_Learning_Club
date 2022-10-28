import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseDetails from '../Course_Details/CourseDetails';
import CourseCard from '../Shared/CourseCard.js/CourseCard';
const CourseRead = () => {
    const courseDetails = useLoaderData();
    return (
        <div>
            {
                courseDetails.map(course => <CourseCard
                    key={course.id}
                    course={course}

                ></CourseCard>)

            }
        </div>
    );
};

export default CourseRead;