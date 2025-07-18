'use client';
import { useEffect, useState } from 'react';
import BlogCard from '@/components/BlogCard';
import Link from 'next/link';

export default function AdminDashboard() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('/api/blog/getAll').then(res => res.json()).then(setBlogs);
  }, []);

  const deleteBlog = async (id) => {
    await fetch('/api/blog/delete', {
      method: 'POST',
      body: JSON.stringify({ id }),
    });
    setBlogs(blogs.filter(blog => blog._id !== id));
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <Link href="/admin/create">Create New Blog</Link>
      {blogs.map(blog => (
        <BlogCard key={blog._id} blog={blog} isAdmin onDelete={deleteBlog} />
      ))}
    </div>
  );
}
