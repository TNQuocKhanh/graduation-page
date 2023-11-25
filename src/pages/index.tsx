import React from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'

const DynamicHomeHero = dynamic(() => import('../components/home/hero'))
const MoreInfoSection = dynamic(() => import('../components/home/more'))

const Home: NextPageWithLayout = () => {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <DynamicHomeHero />
      {/* @ts-expect-error Server Component */}
      <MoreInfoSection />

    </>
  )
}

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default Home
