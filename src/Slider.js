import { Link } from "react-router-dom";

const Slider = ({ blogs }) => {
  return (
    <>
      <h2 className="slider-title">Latest Blogs</h2>
      <div className="slider">
        {blogs.slice(-3).map((blog) => (
          <Link to={`/blogs/${blog.id}`} key={blog.id}>
            <div className="slide">
              <img src={blog.img || require("./img/blog-default.jpg")} alt="" />
              <div className="slide-texts">
                <h3>{blog.title}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Slider;
