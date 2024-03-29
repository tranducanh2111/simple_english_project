import { StaticImageData } from 'next/image'
import React from 'react'
import Image from 'next/image'

interface ButtonProps {
  title?: string
  onClick?: () => void
  textColor?: string
  bgColor?: string
  icon?: StaticImageData
  className?: string
  classNameIcon?: string
  disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({
  title,
  onClick,
  textColor,
  bgColor,
  icon,
  className,
  classNameIcon,
  disabled = false,
}: ButtonProps) => {
  // Manually concatenate class strings
  const buttonClasses = `flex items-center justify-center px-[9px] sm:px-[15px] py-[8px] h-[36px] rounded-md transition duration-300 ease-in-out text-[${textColor}] bg-[${bgColor}] ${
    className || ''
  }`

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      aria-label={title}
    >
      {icon ? (
          <span className='flex items-center justify-center'>
            <Image
              src={icon}
              alt="Logo"
              width={14}
              height={14}
              className={classNameIcon}
            />
            <span className='max-w-content text-body'>{title}</span>
          </span>
      )
      :(
        title
      )}
    </button>
  )
}

export default Button