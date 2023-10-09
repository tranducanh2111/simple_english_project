import React from 'react'
import img1 from 'public/test1.png'
import img2 from 'public/test2.png'
import img3 from 'public/test3.png'
import Button from '@/components/Button'
import { BlockItem } from '@/components/BlockItem'
import ArrowRight from 'public/arrow-right.svg'

const BlocksSection = () => {
  const blocks = [
    {
      img: img1,
      recColor: 'bg-[#E76F51]',
      name: 'Nguyen Van A',
      text: {
        line1:
          'IELTS 8.5 overall (Listening 8.5 Reading 9.0 Writing 7.5 Speaking 8.0) - hoàn toàn tự học',
        line2:
          'IELTS 8.5 overall (Listening 8.5 Reading 9.0 Writing 7.5 Speaking 8.0) - hoàn toàn tự học',
        line3:
          'IELTS 8.5 overall (Listening 8.5 Reading 9.0 Writing 7.5 Speaking 8.0) - hoàn toàn tự học',
      },
      order: 'odd',
    },
    {
      img: img2,
      recColor: 'bg-[#2A9D8F]',
      name: 'Nguyen Van A',
      text: {
        line1:
          'IELTS 8.5 overall (Listening 8.5 Reading 9.0 Writing 7.5 Speaking 8.0) - hoàn toàn tự học',
        line2:
          'IELTS 8.5 overall (Listening 8.5 Reading 9.0 Writing 7.5 Speaking 8.0) - hoàn toàn tự học',
        line3:
          'IELTS 8.5 overall (Listening 8.5 Reading 9.0 Writing 7.5 Speaking 8.0) - hoàn toàn tự học',
      },
      order: 'even',
    },
    {
      img: img3,
      recColor: 'bg-[#E9C46A]',
      name: 'Nguyen Van A',
      text: {
        line1:
          'IELTS 8.5 overall (Listening 8.5 Reading 9.0 Writing 7.5 Speaking 8.0) - hoàn toàn tự học',
        line2:
          'IELTS 8.5 overall (Listening 8.5 Reading 9.0 Writing 7.5 Speaking 8.0) - hoàn toàn tự học',
        line3:
          'IELTS 8.5 overall (Listening 8.5 Reading 9.0 Writing 7.5 Speaking 8.0) - hoàn toàn tự học',
      },
      order: 'odd',
    },
  ]

  return (
    <div>
      <div className="max-w-[1070px] mx-auto flex flex-col xs:flex-row items-center justify-between">
        <div className="self-start">
          <p className="text-h2">Block</p>
          <p className="text-body text-black/[0.45] max-w-[365px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>
        </div>
        <div className="view_more_button ml-auto">  
          <Button
            title="View More"
            bgColor="white"
            icon={ArrowRight}
            classNameIcon="mr-[8px]"
            className="flex items-center text-primary"
          />
        </div>
      </div>

      <div className="max-w-[791px] flex flex-col mx-auto mt-10 sm:mt-[50px] gap-4 sm:gap-10">
        {blocks.map((block, index) => (
          <BlockItem
            key={index}
            img={block.img}
            recColor={block.recColor}
            name={block.name}
            text={block.text}
            order={index % 2 === 0 ? 'odd' : 'even'}
          />
        ))}
      </div>
    </div>
  )
}

export default BlocksSection
