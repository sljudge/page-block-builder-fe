import Nav from '@/components/Nav';
import { getLogo, getPageSections } from '@/services/directus';

export default async function Home() {
  const logo = await getLogo();
  const pageSections = await getPageSections();

  return (
    <>
      <header>
        <Nav logo={logo} links={pageSections} />
      </header>
      <main className=""></main>
    </>
  );
}
