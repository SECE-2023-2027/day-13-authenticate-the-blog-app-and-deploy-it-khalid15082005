import './globals.css';

export const metadata = {
  title: 'Next Blog App',
  description: 'A full-featured blog app with admin and user panels',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1 style={{ textAlign: 'center', marginTop: '20px' }}>📝 Blog Application</h1>
        </header>
        <main>{children}</main>
        <footer style={{ textAlign: 'center', marginTop: '40px', padding: '20px 0', borderTop: '1px solid #ccc' }}>
          © 2024 Blog App
        </footer>
      </body>
    </html>
  );
}
