import React, { useState, useEffect } from 'react';


const RightSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/course-categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div>
            <h3>Courses catagories: {categories.length}</h3>
        </div>
    );
};

export default RightSideNav;