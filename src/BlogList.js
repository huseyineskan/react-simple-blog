import { Link } from "react-router-dom";

const BlogList = ({ title, blogs }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <div className="blog-list-img">
              <img src={blog.img || require("./img/blog-default.jpg")} alt="" />
            </div>
            <div className="blog-list-text-section">
              <h3>{blog.title}</h3>
              <p className="blog-list-written-by">Written by {blog.author}</p>
              <p className="blog-list-text">
                {blog.body.length > 100
                  ? blog.body.slice(0, 100) + "..."
                  : blog.body}
              </p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
