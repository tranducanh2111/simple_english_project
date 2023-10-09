import React, { useEffect, useState } from 'react';
import PrimaryCard, { TestProps } from '../../components/PrimaryCard';
import Heading from '@/components/Heading';
import ReactPaginate from 'react-paginate';

export interface CoursesSectionProps {
  collectionList: {
    title: string;
    tests: TestProps[];
  }[];
}

// Define interface for Tests component props
interface TestsProps {
  currentTests: TestProps[];
}

// Update component to use the new prop type
const Tests: React.FC<TestsProps> = ({ currentTests }) => (
  <>
    {currentTests.map((test, index) => (
      <PrimaryCard key={index} {...test} />
    ))}
  </>
);

const ExamListSection: React.FC<CoursesSectionProps> = ({ collectionList }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const [numberOfItems, setNumberOfItems] = useState(0);

  useEffect(() => {
    if (collectionList.length > 0) {
      setNumberOfItems(collectionList[0].tests.length);
    }
  }, [collectionList]);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * 3) % numberOfItems;
    setItemOffset(newOffset);
  };

  return (
    <div className="courses">
      {collectionList.map((collection, index) => {
        const endOffset = itemOffset + 3;
        const currentTests = collection.tests.slice(itemOffset, endOffset);
        const pageCount = Math.ceil(collection.tests.length / 3);

        return (
          <div key={index} className='mt-[32px] '>
            <div className='flex justify-between'>
                <Heading
                  title={collection.title}
                  description=""
                  titleClassName="text-[20px] font-bold"
                  descriptionClassName="my-[8px]"
                  className="max-w-[432px]"
                />
                <ReactPaginate
                  breakLabel="..."
                  nextLabel=">"
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={5}
                  containerClassName='flex'
                  nextClassName='ml-[5px]'
                  previousClassName='mr-[5px]'
                  pageClassName='w-[24px] h-[24px] px-[8px] mx-[5px]'
                  pageCount={pageCount}
                  activeClassName='border border-primary text-primary'
                  previousLabel="<"
                  renderOnZeroPageCount={null}
                />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-10">
              <Tests currentTests={currentTests} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ExamListSection;
