'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function AdminSidebar() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/admin/login');
  };

  return (
    <div style={{
      width: '200px',
      height: '100vh',
      backgroundColor: '#f0f0f0',
      padding: '20px',
      position: 'fixed',
      top: 0,
      left: 0,
    }}>
      <h3>Admin Menu</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li><Link href="/admin/dashboard">Dashboard</Link></li>
        <li><Link href="/admin/create">Create Blog</Link></li>
        <li><Link href="/admin/profile">Profile</Link></li>
        <li><button onClick={handleLogout} style={{ marginTop: '10px' }}>Logout</button></li>
      </ul>
    </div>
  );
}
