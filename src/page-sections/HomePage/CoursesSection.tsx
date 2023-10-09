import React from 'react'
import Category from '../../components/Category'
import Heading from '../../components/Heading'
import Button from '../../components/Button'
import ArrowRight from 'public/arrow-right.svg'
import PrimaryCard, { TestProps } from '../../components/PrimaryCard'
export interface CoursesSectionProps {
  collectionList: {
    title: string
    tests: TestProps[]
  }[]
}
const CoursesSection: React.FC<CoursesSectionProps> = ({collectionList}) => {
  const [selectedCategory, setSelectedCategory] = React.useState(0)
  const handleClick = (index:number) => {
    setSelectedCategory(index);
  }

  const categoryList = collectionList.map((collection) => collection.title)

  return (
    <div className="max-w-[1160px]">
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <div className="introduction flex items-center w-[100%]">
          <Heading
            title="Courses"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
            titleClassName="text-h2 font-bold"
            descriptionClassName="my-[8px]"
            className="max-w-[432px]"
          />
          <div className="view_more_button ml-auto">
            <Button
              title="View More"
              bgColor="white"
              icon={ArrowRight}
              // onClick={handleClick}
              classNameIcon="mr-[8px]"
              className="flex items-center text-primary"
            />
          </div>
        </div>
      </div>
      <div className="courses">
        <div className="">
          <Category categoryList={categoryList} selectedCategory={selectedCategory} onClick={handleClick} />
        </div>
        <div className='mt-[20px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-10'>
          {collectionList[selectedCategory].tests.map((test, index) => (
            <PrimaryCard key={index} {...test} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CoursesSection