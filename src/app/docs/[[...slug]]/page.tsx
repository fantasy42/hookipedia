import type {Metadata} from 'next';

import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
  PageLastUpdate,
} from 'fumadocs-ui/layouts/docs/page';
import {createRelativeLink} from 'fumadocs-ui/mdx';
import {notFound} from 'next/navigation';

import {ScrollTop} from '@/components/ScrollTop';
import {CopyPage} from '@/components/CopyPage';
import {EditSource} from '@/components/EditSource';
import {getMDXComponents} from '@/components/getMdxComponents';
import {getLLMText, getPageImage, source} from '@/lib/source';

export default async function Page({params}: PageProps<'/docs/[[...slug]]'>) {
  const {slug} = await params;
  const page = source.getPage(slug);

  if (!page) {
    notFound();
  }

  const MDX = page.data.body;
  const markdown = await getLLMText(page);
  const lastModified = page.data.lastModified;

  return (
    <DocsPage
      toc={page.data.toc}
      full={page.data.full}
      tableOfContent={{
        style: 'clerk',
        footer: (
          <div className="my-3 space-y-3">
            <div role="none" className="w-full h-px bg-fd-border" />
            <EditSource path={page.path} />
            <ScrollTop />
            <CopyPage text={markdown} />
          </div>
        ),
      }}
    >
      <DocsTitle className="mb-4 text-4xl tracking-tight">
        {page.data.title}
      </DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody className="mx-auto w-full">
        <MDX
          components={getMDXComponents({
            a: createRelativeLink(source, page),
          })}
        />
        {lastModified && <PageLastUpdate date={lastModified} />}
      </DocsBody>
    </DocsPage>
  );
}

export async function generateMetadata(
  props: PageProps<'/docs/[[...slug]]'>
): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);

  if (!page) {
    notFound();
  }

  return {
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      images: getPageImage(page).url,
    },
  };
}

export function generateStaticParams() {
  return source.generateParams();
}
