import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:8000/blogs/" + id);
  const history = useHistory();

  const handleClick = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };
  console.log(blog);

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <div className="breadcrumb">
            <Link to="/">back</Link>
            <Link to="/">Home</Link>
            <span></span>
          </div>
          <div className="blog-img">
            <img src={blog.img || require("./img/blog-default.jpg")} alt="" />
          </div>
          <h2>{blog.title}</h2>
          <p className="blog-list-written-by">Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>Delete this blog</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
