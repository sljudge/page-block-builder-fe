import Nav from '@/components/Nav';
import { getPageSections } from '@/services/directus';

export default async function Home() {
  const pageSections = await getPageSections();

  return (
    <>
      <header>
        <Nav logo={{ src: '', alt: 'logo' }} links={pageSections} />
      </header>
      <main className=""></main>
    </>
  );
}
