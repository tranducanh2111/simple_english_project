import { ArticleProps } from '@/components/Article/Article'
import ArticleList from '@/components/Article/ArticleList'
import Button from '@/components/Button'
import Heading from '@/components/Heading'
import ArrowRight from 'public/arrow-right.svg'
import TestImg from 'public/Test.png'
import React from 'react'

const ArticlesSection: React.FC = () => {
  const handleClick = () => {
    console.log('clicked')
  }

  const tests: ArticleProps[] = [
    {
      imgSrc: TestImg,
      description:
        'Possible charges Cardi B might face after throwing a microphone at an audience member',
      url: 'https://www.google.com/',
    },
    {
      imgSrc: TestImg,
      description:
        'Possible charges Cardi B might face after throwing a microphone at an audience member',
      url: 'https://www.google.com/',
    },
    {
      imgSrc: TestImg,
      description:
        'Possible charges Cardi B might face after throwing a microphone at an audience member',
      url: 'https://www.google.com/',
    },
  ]

  return (
    <div className="max-w-[1160px] m-auto mt-[60px] space-y-[40px]">
      <div className="flex flex-col xl:flex-row  xl:items-start justify-between pl-[20px] sm:pl-0">
        <div className="introduction">
          <Heading
            title="Blog"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
            titleClassName="text-h2 font-bold"
            className="max-w-[432px]"
          />
        </div>
        <div className="view_more_button ml-auto">  
          <Button
            title="View More"
            bgColor="white"
            icon={ArrowRight}
            onClick={handleClick}
            classNameIcon="mr-[8px]"
            className="flex items-center text-primary"
          />
        </div>
      </div>
      <div>
        <ArticleList articles={tests} />
      </div>
    </div>
  )
}

export default ArticlesSection