"use client"
import React, { useState } from 'react';
import RangeForm from "./_component/RangeForm";
import Result from "./_component/Result"

export default function Home() {
  const [rangeValues, setRangeValues] = useState({})
  return (
    <main className="flex flex-col lg:mt-16 items-center">
      <div className='flex flex-grow lg:flex-row w-screen max-w-4xl sm:flex-col justify-center items-center lg:gap-0 sm:gap-6'>
        <div className='grid flex-grow place-items-center gap-5 min-w-0.5'>
          <div>
            <RangeForm setRangeValues={setRangeValues}></RangeForm>
          </div>
        </div>
        <div class="grid flex-grow place-items-center">
          <Result rangeValues={rangeValues}></Result>
        </div>
      </div>
    </main>
  );
}
