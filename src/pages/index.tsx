import React, { Fragment } from 'react'
import Head from 'next/head'
import Banner from 'public/testImage.jpg'
import CoursesSection from '@/page-sections/HomePage/CoursesSection'
import HomeBanner from '@/page-sections/HomePage/HomeBanner'
import ContactSection from '@/page-sections/HomePage/ContactSection'
import TestimonialsSection from '@/page-sections/HomePage/TestimonialsSection'
import WorkshopSection from '@/page-sections/HomePage/WorkshopSection'
import BookTest from 'public/Test.png'
import CambridgeIelts16 from '../../public/cambridge16.png'
import CambridgeIelts17 from '../../public/cambridge17.png'
import BlocksSection from '@/page-sections/HomePage/BlocksSection'
import ArticlesSection from '@/page-sections/HomePage/ArticlesSection'

const Home: React.FC = () => {
  const imageList = [Banner, Banner,Banner,Banner]
  
  const collectionList = [
    {
      title: 'IELTS Mock Test 2023',
      tests: [
        {
          title: 'IELTS Mock Test 2023',
          description:
            '',
          url: 'https://www.google.com/',
          imageSrc: BookTest,
        },
        {
          title: 'IELTS Mock Test 2023',
          description:
            '',
          url: 'https://www.google.com/',
          imageSrc: CambridgeIelts16,
        },
        {
          title: 'IELTS Mock Test 2023',
          description:
            '',
          url: 'https://www.google.com/',
          imageSrc: CambridgeIelts17,
        },
      ],
    },
    {
      title: 'TOEFL Mock Test 2022',
      tests: [
        {
          title: 'TOEFL Mock Test 2022',
          description:
            '',
          url: 'https://www.google.com/',
          imageSrc: BookTest,
        },
        {
          title: 'TOEFL Mock Test 2022',
          description:
            '',
          url: 'https://www.google.com/',
          imageSrc: CambridgeIelts16,
        },
        {
          title: 'TOEFL Mock Test 2022',
          description:
            '',
          url: 'https://www.google.com/',
          imageSrc: CambridgeIelts17,
        },
      ],
    },
    {
      title: 'TOEIC Mock Test 2021',
      tests: [
        {
          title: 'TOEIC Mock Test 2021',
          description:
            '',
          url: 'https://www.google.com/',
          imageSrc: BookTest,
        },
        {
          title: 'TOEIC Mock Test 2021',
          description:
            '',
          url: 'https://www.google.com/',
          imageSrc: CambridgeIelts16,
        },
        {
          title: 'TOEIC Mock Test 2021',
          description:
            '',
          url: 'https://www.google.com/',
          imageSrc: CambridgeIelts17,
        },
      ],
    },
    {
      title: 'SAT Mock Test 2020',
      tests: [
        {
          title: 'SAT Mock Test 2020',
          description:
            '',
          url: 'https://www.google.com/',
          imageSrc: BookTest,
        },
        {
          title: 'SAT Mock Test 2020',
          description:
            '',
          url: 'https://www.google.com/',
          imageSrc: CambridgeIelts16,
        },
        {
          title: 'SAT Mock Test 2020',
          description:
            '',
          url: 'https://www.google.com/',
          imageSrc: CambridgeIelts17,
        },
      ],
    },
  ];
  return (
    <Fragment>
      <Head>
        <title>IELTS PLATFORM</title>
      </Head>
      <div className="homepage relative bg-white">
        <HomeBanner imageList={imageList} />
        <div className="max-w-[1160px] flex flex-col mx-auto mt-[60px] mb-10 gap-[60px] px-5">
          <CoursesSection collectionList={collectionList}/>
          <WorkshopSection />
          <BlocksSection />
        </div>
        <TestimonialsSection />
        <ArticlesSection/>
        <ContactSection/>
      </div>
    </Fragment>
  )
}

export default Home
