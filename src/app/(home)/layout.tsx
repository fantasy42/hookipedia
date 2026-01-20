import {HomeLayout} from '@/components/HomeLayout';

export default function Layout({children}: LayoutProps<'/'>) {
  return <HomeLayout>{children}</HomeLayout>;
}
