import React from 'react';
import Banner from '../common/Banner/Banner';
import RecentBlogs from '../RecentBlogs';
import About from '../About';
import Popular from '../Popular';
import {withRouter} from 'react-router-dom'

const Homepage = () => {
    return(<>
        <Banner />
        <RecentBlogs />
        <About />
        <Popular />
    </>)
}

export default Homepage