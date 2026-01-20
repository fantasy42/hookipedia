import {DocsLayout} from '@/components/DocsLayout';
import {source} from '@/lib/source';

export default function Layout({children}: LayoutProps<'/docs'>) {
  return <DocsLayout tree={source.getPageTree()}>{children}</DocsLayout>;
}
