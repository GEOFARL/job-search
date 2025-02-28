'use client';

const ProfileDropdown = dynamic(
  () => import('@/components/Profile/ProfileDropdown'),
  { ssr: false }
);
import dynamic from 'next/dynamic';
import Link from 'next/link';
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <header className="bg-blue-600 p-4 text-white flex justify-between items-center">
          <h1 className="text-xl font-bold">Job Search</h1>

          <nav className="flex gap-4 items-center">
            <Link href="/jobs" className="hover:underline">
              Jobs
            </Link>
            <Link href="/liked" className="hover:underline">
              Liked Jobs
            </Link>
            <ProfileDropdown />
          </nav>
        </header>

        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
