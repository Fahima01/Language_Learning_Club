import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../CourseCard.js/CourseCard.css'



const RightSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://laguage-server.vercel.app/course-categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className='pt-5'>

            <div className='pt-5'>
                {
                    categories.map(category => <p className='rightsidenav shadow-lg p-3 mb-3 bg-body rounded' key={category.id}>
                        <Link className='text-dark' to={`/course-categories/${category.id}`}>{category.name}</Link>

                    </p>)
                }
            </div>
        </div>
    );
};

export default RightSideNav;