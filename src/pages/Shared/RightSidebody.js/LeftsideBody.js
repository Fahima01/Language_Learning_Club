import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard.js/CourseCard';

const LeftsideBody = () => {
    const allCourses = useLoaderData()
    return (
        <div>
            <h3 className='text-center py-5'>We Have {allCourses.length} Best Courses For You!!</h3>
            <div className='course-card'>
                {
                    allCourses.map(course => <CourseCard
                        key={course.id}
                        course={course}

                    ></CourseCard>)
                }
            </div>
        </div>
    );
};

export default LeftsideBody;