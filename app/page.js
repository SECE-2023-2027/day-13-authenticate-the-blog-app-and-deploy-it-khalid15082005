'use client';
import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ padding: 40, fontFamily: 'sans-serif' }}>
      <h1>📝 Welcome to the Blog Platform</h1>
      <p>Select your role:</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: 20 }}>
        {/* Admin Panel */}
        <h3>👨‍💼 Admin Panel</h3>
        <Link href="/admin/register">➡️ Admin Register</Link>
        <Link href="/admin/login">➡️ Admin Login</Link>

        {/* User Panel */}
        <h3>🙋 User Panel</h3>
        <Link href="/user/register">➡️ User Register</Link>
        <Link href="/user/login">➡️ User Login</Link>

        {/* Public */}
        <h3>🌐 Public</h3>
        <Link href="/blogs">➡️ View Blogs</Link>
      </div>
    </main>
  );
}
