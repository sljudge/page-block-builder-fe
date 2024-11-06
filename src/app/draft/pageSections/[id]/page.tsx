import { draftMode } from 'next/headers';

import BlockMap from '@/blocks';
import PageSection from '@/layout/PageSection';
import { getPageSection } from '@/services/directus';

export default async function PageSectionPreview({ params: { id } }: { params: { id: string } }) {
  const { isEnabled } = draftMode();
  const pageSection = await getPageSection(Number(id));

  if (!isEnabled) {
    return <>Draft mode is not enabled</>;
  }

  return (
    <PageSection id={id} zIndex={0}>
      <BlockMap sectionKey={id} blocks={pageSection.blocks} />
    </PageSection>
  );
}
