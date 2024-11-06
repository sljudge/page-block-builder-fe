import { draftMode } from 'next/headers';

import BlockMap from '@/blocks';
import PageSection from '@/layout/PageSection';
import { getPageSection } from '@/services/directus';

type PageSectionPreviewProps = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function PageSectionPreview({
  params: { id },
  searchParams
}: PageSectionPreviewProps) {
  const { isEnabled } = draftMode();
  const pageSection = await getPageSection(Number(id), searchParams.version?.toString());

  if (!isEnabled) {
    return <>Draft mode is not enabled</>;
  }

  return (
    <PageSection id={id} zIndex={0}>
      <BlockMap sectionKey={id} blocks={pageSection.blocks} />
    </PageSection>
  );
}
