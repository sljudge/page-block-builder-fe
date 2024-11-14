import { draftMode } from 'next/headers';

import BlockMap from '@/blocks';
import PageSection from '@/layout/PageSection';
import { getPageSection } from '@/services/directus';

export const dynamic = 'force-dynamic';

type PageSectionPreviewProps = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function PageSectionPreview({
  params,
  searchParams
}: PageSectionPreviewProps) {
  const { id } = await params;
  const { version } = await searchParams;
  const { isEnabled } = await draftMode();
  const pageSection = await getPageSection(Number(id), version?.toString());

  if (!isEnabled) {
    return <>Draft mode is not enabled</>;
  }

  return (
    <PageSection id={id} zIndex={0}>
      <BlockMap sectionKey={id} blocks={pageSection.blocks} />
    </PageSection>
  );
}
