import { useState } from 'react';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('hsyn');

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author }

        console.log(blog)
    }

    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={ handleSubmit }>
                <label htmlFor="title">Blog title:</label>
                <input 
                    type="text" 
                    id="title" 
                    required 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} 
                />

                <label htmlFor="body">Blog body:</label>
                <textarea 
                    id="body" 
                    required
                    value={ body }
                    onChange={(e) => setBody(e.target.value)}
                >
                </textarea>

                <label>Blog author:</label>
                <select 
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="father">Huseyin</option>
                    <option value="mother">Gözde</option>
                    <option value="child">Mirza</option>
                </select>

                <button>Add blog</button>
            </form>
        </div>
     );
}
 
export default Create;