import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const RightSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/course-categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div>
            <h3>Courses catagories {categories.length}</h3>

            <div>
                {
                    categories.map(category => <p className='shadow-sm p-3 mb-2 bg-body rounded' key={category.id}>
                        <Link className='text-dark' to={`/course-categories/${category.id}`}>{category.name}</Link>

                    </p>)
                }
            </div>
        </div>
    );
};

export default RightSideNav;