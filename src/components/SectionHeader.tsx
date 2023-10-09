import React from 'react';
import Tab from "@/components/Tab";
import Button from './Button';
import ThinArrow from "/public/thin-arrow.svg"
import Link from 'next/link';

// Define the type for the test overview data
type TestOverview = {
    [key: string]: unknown[];
};

type BaseHeadingSectionProps = {
    headingText: string; // Prop for the heading text
    paragraphText?: string; // Prop for the paragraph text
    viewMoreLink?: string; // Prop for the View More link URL
};

type WithFilterBarProps = BaseHeadingSectionProps & {
    showFilterBar: true; // Indicate that FilterBar is required
    categories: string[];
    selectedCategoryIndex: number;
    setSelectedCategoryIndex: (index: number) => void;
    setFilteredData: (data: unknown) => void;
    inputData: TestOverview;
};

type WithoutFilterBarProps = BaseHeadingSectionProps & {
    showFilterBar: false; // Indicate that FilterBar is not required
};

type HeadingSectionProps = WithFilterBarProps | WithoutFilterBarProps;

// Define the HeadingSection component
const HeadingSection = ({
    headingText,
    paragraphText,
    viewMoreLink,
    showFilterBar,
    categories,
    selectedCategoryIndex,
    setSelectedCategoryIndex,
    setFilteredData,
    inputData,
}: HeadingSectionProps) => {
    return (
        <div className="mb-12 w-full flex flex-col sm:flex-row justify-between items-center space-y-[12px]">
            <div className='w-full max-w-[532px]'>
                <h2 className="text-h2 mb-[4px] max-w-[418px]">{headingText}</h2>
                <p className="text-body text-grey line-[22px] max-w-[418px]">
                    {paragraphText}
                </p>
                {/* Conditionally render FilterBar */}
                {showFilterBar && (
                    <Tab
                        categories={categories}
                        inputData={inputData}
                        selectedCategoryIndex={selectedCategoryIndex}
                        setSelectedCategoryIndex={setSelectedCategoryIndex}
                        setFilteredData={setFilteredData}
                    />
                )}
            </div>
            {/* View More button */}
            {viewMoreLink && (
            <Link href={viewMoreLink} className="flex items-center max-w-content h-[30px] text-primary px-1 py-[4px] rounded-[2px] ml-auto">
                <Button className='font-medium' icon={ThinArrow} title='View more'/>
            </Link>
            )}
        </div>
    );
};

export default HeadingSection;