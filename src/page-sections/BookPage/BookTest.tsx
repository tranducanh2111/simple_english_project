import React, { useEffect, useState } from 'react';
import SkillTestBoxList from '@/components/SkillTestBoxList';
import HeadingSection from '@/components/SectionHeader';
import bookData from '@/components/SampleData/bookData.json';
import Tab from '@/components/Tab';

// Define a type for the inputData object
type inputData = {
    [key: string]: unknown[];
};

const BookTest = () => {
  const book = bookData.books[0];
  const units = book.units; // Assuming you have an array of units in the book

  // State to track the selected unit index
  const [selectedUnitIndex, setSelectedUnitIndex] = useState(0);

  // Function to set the data for the selected unit
  const getSelectedUnitData = () => {
    return units[selectedUnitIndex].practice_tests;
  };

  // Dummy inputData and setFilteredData function (modify as needed)
  const inputData: inputData = {};
  const setFilteredData = (data: unknown[]) => {
    // Implement filtering logic here
  };

  // Use the Tab component to select the unit
  const handleTabChange = (index: number) => {
    setSelectedUnitIndex(index);
  };

  return (
    <section className='w-full sm:w-[1070px] space-y-[20px] sm:space-y-[40px]'>
      <div className='space-y-[12px] sm:space-y-[16px]'>
        <Tab
          categories={units.map((unit) => `Unit ${unit.unit_number}`)}
          selectedCategoryIndex={selectedUnitIndex}
          setSelectedCategoryIndex={handleTabChange}
          setFilteredData={setFilteredData}
          inputData={inputData}
        />
        <HeadingSection
          headingText={book.book_name}
          paragraphText={book.description}
          showFilterBar={false}
        />
      </div>
      <div className='flex flex-col items-center'>
        <div className='w-[65%] space-y-[20px] sm:space-y-[40px]'>
        {getSelectedUnitData().map((test, index) => (

            <SkillTestBoxList key={index} testData={test} />

        ))}
        </div>
      </div>
    </section>
  );
};

export default BookTest;