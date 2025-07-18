'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('/api/blog/getAll')
      .then(res => res.json())
      .then(setBlogs);
  }, []);

  return (
    <div>
      <h2>All Blogs</h2>
      {blogs.map(blog => (
        <div key={blog._id}>
          <h3>{blog.title}</h3>
          <p>{blog.content.slice(0, 100)}...</p>
          <Link href={`/blogs/${blog._id}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
}
