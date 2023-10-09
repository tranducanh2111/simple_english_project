import React, { useState, useRef, useEffect } from 'react';
import testOverviewData from '@/dummy-data/testOverview.json';
import HeadingSection from '@/components/SectionHeader';
import PrimaryCard from "@/components/PrimaryCard";

type TestData = {
    imageURL: string;
    name: string;
    descriptions: string;
    testURL: string;
};

// Define the type for your testOverview data
type TestOverview = {
	[key: string]: {
		imageURL: string;
		name: string;
		descriptions: string;
		testURL: string;
	}[];
};

const FilteredListPanel = () => {
    const testOverview: TestOverview = testOverviewData;
    const categories = Object.keys(testOverview);

    // Pagination variables
    const itemsPerPage = 3;
    const [currentPage, setCurrentPage] = useState(1);

    // Filter variables
    const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
    const [filteredData, setFilteredData] = useState<TestData[]>([]);
	

	// Calculate the range of items to display on the current page
	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const itemsToShow = filteredData.slice(startIndex, endIndex);

	// Check if the window width is smaller than "sm" breakpoint

	useEffect(() => {
		// Initialize filtered data when the component mounts
		const selectedCategory = categories[selectedCategoryIndex];
		const filteredPeople = selectedCategory
		? testOverview[selectedCategory]
		: Object.values(testOverview).flat();
		setFilteredData(filteredPeople);
	}, [selectedCategoryIndex, categories]);

	return (
    <>
		<main className="flex flex-col justify-center p-[20px] sm:p-0">
				{/* Heading Section */}
				<HeadingSection
					categories={categories}
					inputData={testOverview} // Pass the testOverview data as a prop
					selectedCategoryIndex={selectedCategoryIndex}
					setSelectedCategoryIndex={setSelectedCategoryIndex}
					setFilteredData={setFilteredData}
					headingText={"Courses"}
					paragraphText={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae laudantium, aliquam quisquam amet assumenda facere necessitatibus?"}
					viewMoreLink={"#"}
					showFilterBar={true}
				/>
				{/* Pagination bar
				<div className="pagination-bar">
				{Array.from({ length: totalPages }, (_, i) => (
					<button
					key={i + 1}
					className={`pagination-button ${currentPage === i + 1 ? 'active' : ''}`}
					onClick={() => handlePageChange(i + 1)}
					>
					{i + 1}
					</button>
				))}
				</div> */}
		</main>
		{/* <div className='w-full h-[380px] sm:h-[470px] sm:px-[40px]  overflow-x-auto hide-scrollbar'> */}
		<div className='w-full h-[480px] overflow-x-auto hide-scrollbar'>
			<div className="flex justify-between sm:w-full w-[210vw] sm:min-w-[]">
			{/* <div className="w-full min-w-[820px]"> */}
				{itemsToShow.map((test, index) => (
					<PrimaryCard
						key={index}
						imageURL={test.imageURL}
						name={test.name}
						descriptions={test.descriptions}
						testURL={test.testURL}
					/>
				))}
			</div>
		</div>
  	</>
	);
};

export default FilteredListPanel;