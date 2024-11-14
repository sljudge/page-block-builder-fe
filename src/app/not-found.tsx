import Link from 'next/link';

export default async function NotFound() {
  return (
    <div className="h-screen w-screen bg-secondary p-xxl">
      <div className="m-auto w-max bg-primary p-xl">
        <h2 className="text-title-lg">Page Not Found</h2>
        <p className="pt-md text-center text-body-xl text-cta underline">
          <Link href="/">Go to site</Link>
        </p>
      </div>
    </div>
  );
}
