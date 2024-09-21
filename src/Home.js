import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: "My new website", body: "This is huseyin's text", author: 'Huseyin', id:1},
        {title: "Welcome Party!", body: "This is gozde's text", author: 'Gözde', id:2},
        {title: "Web dev top tips!", body: "This is mirza's text", author: 'Mirza', id:3}
    ]);

    const [name, setName] = useState('Huseyin');
    const [lname, setLname] = useState('Eskan');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log("useEffect ran")
        console.log(name, lname)
    }, [name, lname]);

    return (  
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
            <button onClick={() => setName('Gözde')}>Change name</button>
            <button onClick={() => setLname('Karabekiroğlu')}>Change lname</button>
            <p>{ name } { lname }</p>
        </div>
    );
}
 
export default Home;