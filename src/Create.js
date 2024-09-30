import { useState } from 'react';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('hsyn');

    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form>
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
                    <option value="baba">Huseyin</option>
                    <option value="anne">Gözde</option>
                    <option value="cocuk">Mirza</option>
                </select>

                <button>Add blog</button>
                <p>{ title }</p>
                <p>{ body }</p>
                <p>{ author }</p>
            </form>
        </div>
     );
}
 
export default Create;