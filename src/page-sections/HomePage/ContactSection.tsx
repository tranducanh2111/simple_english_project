import React from 'react'
import Heading from '../../components/Heading'
import Form from '@/components/Form'
import Input from '@/components/Input'
import Button from '@/components/Button'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const ContactSection: React.FC = () => {

    return (
        <div className="pb-[20px] pt-[90px] px sm:pt-[80px] bg-cover bg-top bg-contact-section mt-[60px]">
            <div className="max-w-[1160px] py-15 mx-auto lg:flex lg:flex-row content-center lg:items-start lg:gap-4 xl:col xl:flex-row xl:items-start xl:justify-between mb-10 justify-around">
                <div className='introduction pb-10 sm:text-center w-full lg:w-[50%] pl-[20px] xl:pl-0'>
                    <Heading
                        title="Let's connect about something!"
                        description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
                        titleClassName='text-h2 font-bold pb-[10px]'
                        className=' text-secondary max-w-[405px] xl:max-w-none'
                        descriptionClassName='text-body'
                    />
                </div>
                <div className='introduction max-w-screen-sm sm:w-[500px] mx-auto xl:mx-0 w-[90%] my-[32px] '>
                    <Form>
                        <Heading title='Please fill this form'
                            description='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
                            titleClassName='text-h2 font-bold  pb-[10px]'
                            descriptionClassName='text-[#11181C] text-body'
                        />
                        <div className='flex flex-col gap-5 mt-8 mb-4'>
                            <Input placeHolder='Full name' className='w-full rounded-md px-3 py-2 border border-light-grey placeholder:text-light-grey placeholder:text-body' />
                            <Input placeHolder='Email' className='w-full rounded-md px-3 py-2 border border-light-grey placeholder:text-light-grey placeholder:text-body' />
                            <PhoneInput
                                country={'vn'}
                                placeholder='Phone number*'
                                inputClass='phone-input' 
                                buttonClass='phone-input-dropdown'
                                searchClass='phone-input-flag'  
                                value={null}   
                            />

                            {/* <Input placeHolder='Phone number' className='w-full rounded-md px-3 py-2 border border-secondary' /> */}
                            <div className='flex flex-row items-start text-body'>
                                <Input type='checkbox' className='w-5 h-5 mr-3' />
                                <p>I have read and accept the <strong>Terms of Service</strong> and <strong>Privacy Policy</strong>.</p>
                            </div>
                        </div>
                        <Button title='Submit' className='bg-primary w-full text-white text-h5 justify-center'/>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default ContactSection
