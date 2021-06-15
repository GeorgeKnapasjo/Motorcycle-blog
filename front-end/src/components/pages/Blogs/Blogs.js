import React, { useEffect, useState } from 'react';
import BlogBanner from './BlogBanner';


const Blogs = () => {
    const [data, setData] = useState()

    useEffect(()=>{
        fetch('http://localhost:8080/Blogs')
        .then(res => res.json())
        .then(data => setData(data), console.log(data))
    })
    return(
        <BlogBanner/>

    )
}

export default Blogs