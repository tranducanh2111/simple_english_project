import { StaticImageData } from 'next/image'
import React from 'react'
import Image from 'next/image'
import Heading from './Heading'
import Button from './Button'
import IconTakeTest from 'public/icon-take-test.svg'
import Link from 'next/link'
export interface TestProps {
  title: string
  description: string
  imageSrc: StaticImageData
  url: string
}
const PrimaryCard: React.FC<TestProps> = ({
  title,
  description,
  url,
  imageSrc,
}) => {
  return (
    <div className="h-min rounded-b-xl shadow-lg">
      <div>
        <Image
            src={imageSrc}
            alt="test"
            width={341}
            height={249}
            className="rounded-t-xl w-full"
          />
      </div>
      
      <div className="rounded-b-xl border-[1px]">
        <div className="text-center mb-[10px] mx-[16px] mt-[16px]">
          <Heading
            title={title}
            description={description}
            titleClassName="text-[24px] font-semibold"
            descriptionClassName="text-[#00000073]"
          />
          <p className='text-left text-[14px] text-[#00000073] mt-[8px]'>150k lượt tham gia</p>
          <Link href={url}>
            <Button
              title="Take test"
              icon={IconTakeTest}
              className="flex items-center my-[8px] bg-primary text-white py-[6.4px] px-[15px] border-[#FFA380] border-[1px]"
              classNameIcon="mr-[4px]"
            />
          </Link>
        </div>
      </div>
    </div>
  )
}
export default PrimaryCard
