import useBlogs from "../hooks/useBlogs";
import BlogCard from "./BlogCard";

const Blogs = () => {
  const { blogs, isLoading, error } = useBlogs();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching blogs.</p>;

  return (
    <div className="blog-list">
      {blogs.map((blog, index) => (
        <BlogCard key={index} blog={blog} />
      ))}
    </div>
  );
};

export default Blogs;
