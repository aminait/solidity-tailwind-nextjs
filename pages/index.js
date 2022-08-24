import { Hero, Address, Currency } from '@components/home';
import { Footer, Navbar, Breadcrumbs } from '@components/ui';
import { OrderInfo } from '@components/order';
import { CourseList } from '@components/course';
import { BaseLayout } from '@components/layout';
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <BaseLayout>
      <Hero />

      <Breadcrumbs />

      <Address />

      <Currency />

      <OrderInfo />

      <CourseList />
    </BaseLayout>
  );
}
