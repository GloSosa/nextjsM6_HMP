import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <AcmeLogo />
      </div>

      <div className="mt-4 rounded-lg bg-gray-50 p-6 shadow-sm md:mt-10 md:w-2/5">
        <p className={`${lusitana.className} text-gray-600`}>
          <strong>Welcome to Acme.</strong> This is the example for the{' '}
          <a href="https://nextjs.org/learn" className="text-blue-500">Next.js Learn Course</a>,
          brought to you by Vercel.
        </p>
        <Link
          href="/login"
          className="mt-4 flex items-center gap-5 self-start rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-400"
        >
          Log in <ArrowRightIcon className="w-5" />
        </Link>
      </div>

      {/* Hero images */}
      <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
        <Image
          src="/hero-desktop.png"
          width={1000}
          height={760}
          className="hidden md:block"
          alt="Screenshots of the dashboard project showing desktop version"
        />
        <Image
          src="/hero-mobile.png"
          width={560}
          height={620}
          className="block md:hidden"
          alt="Screenshots of the dashboard project showing mobile version"
        />
      </div>
    </main>
  );
}
