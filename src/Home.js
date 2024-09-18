import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: "My new website", body: "This is huseyin's text", author: 'Huseyin', id:1},
        {title: "Welcome Party!", body: "This is gozde's text", author: 'Gözde', id:2},
        {title: "Web dev top tips!", body: "This is mirza's text", author: 'Mirza', id:3}
    ]);

    return (  
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!"/>
            <BlogList blogs={blogs.filter((blog) => blog.author === "Huseyin")} title="Huseyin's Blog!"/>
        </div>
    );
}
 
export default Home;