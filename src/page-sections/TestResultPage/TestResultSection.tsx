import React from 'react'
import key from 'public/key.svg'
import Image from 'next/image'
import AnswerKey from '@/components/TestResult/AnswerKey'

const TestResultSection = () => {
  const results = [
    { answer: 'A', result: 'A' },
    { answer: 'D', result: 'A' },
  ]
  for (let i = 0; i < 10; i++) {
    results.push({ answer: 'A', result: 'A' })
  }
  results.push({ answer: 'D', result: 'A' })
  for (let i = 0; i < 37; i++) {
    results.push({ answer: 'A', result: 'A' })
  }

  const resultList = []
  for (let i = 0; i < results.length / 11; i++) {
    resultList.push(
      <div
        key={i}
        className="w-[153px] sm:w-[196px] flex flex-col shrink-0 gap-3">
        {results.map(
          (result, index) =>
            index > i * 11 - 1 &&
            index < i * 11 + 11 && (
              <AnswerKey
                key={index}
                question={index + 1}
                answer={result.answer}
                result={result.result}
              />
            )
        )}
      </div>
    )
  }

  return (
    <div className="max-w-[1060px] mx-auto flex flex-col items-start gap-5">
      <div className="flex gap-3">
        <Image src={key} width={24} height={24} alt="key" />
        <p className="text-h5 text-black">Answer key:</p>
      </div>

      <div className="flex flex-wrap px-3 sm:px-0 self-stretch gap-5">
        {resultList}
      </div>
    </div>
  )
}

export default TestResultSection
