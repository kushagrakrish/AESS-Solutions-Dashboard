import React from "react";
import { Doughnut } from "react-chartjs-2";

const ChartCards = ({ title, doughnutData, chartItems }) => {
  return (
    <>
      <h1 className='text-base font-medium font-poppins text-[#555555] border-b-[0.75px] pb-1 border-[#E6E6E6]'>
        {title}
      </h1>
      <div className='bg-[#ededed69] mt-2 py-2 flex items-start justify-between md:justify-evenly px-2 md:py-10'>
        <div className='object-cover flex items-center justify-center'>
          <Doughnut
            data={doughnutData}
            options={{ maintainAspectRatio: false }}
            height={150}
            width={150}
          />
        </div>
        <div>
          {chartItems?.map((item, index) => (
            <React.Fragment key={index}>
              <div className='flex items-center gap-1'>
                <div
                  className='w-3 h-3 rounded-full'
                  style={{ backgroundColor: item.bg }}
                />
                <h2 className='font-poppins text-sm font-normal'>
                  {item?.title}
                </h2>
              </div>
              <h2 className='text-[#5BC4BF] font-poppins text-base font-medium ml-3'>
                {item?.desc}%
              </h2>
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default ChartCards;
