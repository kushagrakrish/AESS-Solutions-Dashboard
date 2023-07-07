import React from "react";
import Rating1 from "../assets/Rating1.png";
import Rating2 from "../assets/Rating2.png";
import { chartItems, doughnutData, ratingItems } from "../constants/data";
import ChartCards from "./ChartCards";

const ItCharts = () => {
  const chartItem = [
    {
      bg: "#5BC4BF",
      title: "Assest",
      desc: "45",
    },
    {
      bg: "#5BC4BF",
      title: "Assest",
      desc: "45",
    },
    {
      bg: "#5BC4BF",
      title: "Assest",
      desc: "45",
    },
    {
      bg: "#5BC4BF",
      title: "Assest",
      desc: "45",
    },
    {
      bg: "#5BC4BF",
      title: "Assest",
      desc: "45",
    },
  ];
  return (
    <>
      <div className='w-full bg-[#78787807] p-3 md:p-5 '>
        <div className='grid grid-cols-1 items-start w-full justify-center gap-5 lg:grid-cols-2 xl:grid-cols-3 '>
          <div className='w-full'>
            <ChartCards
              title='Top 5 Request Categories'
              doughnutData={doughnutData}
              chartItems={chartItems}
            />
          </div>
          <div className='w-full'>
            <ChartCards
              title='Top 5 Request Categories'
              doughnutData={doughnutData}
              chartItems={chartItems}
            />
          </div>
          <div className='w-full'>
            <ChartCards
              title='Top 5 Incident Request'
              doughnutData={doughnutData}
              chartItems={chartItems}
            />
          </div>
          <div className='w-full'>
            <ChartCards
              title='Top 5 Request Categories'
              doughnutData={doughnutData}
              chartItems={chartItems}
            />
          </div>

          {/* Rating */}
          <div className='w-full lg:col-span-2'>
            <h1 className='text-base font-medium  font-poppins text-[#555555] border-b-[0.75px] pb-1 border-[#E6E6E6]'>
              Overall Ratings
            </h1>
            <div className='bg-[#E6E6E6] mt-2 lg:py-[72px] px-4 w-full'>
              <div className='flex flex-col md:flex-row justify-between  w-full '>
                {ratingItems?.map((item, idx) => (
                  <p
                    key={idx}
                    className='text-sm font-medium font-poppins text-[#555555] py-1'
                  >
                    {item}
                  </p>
                ))}
              </div>
              <div className='flex items-center flex-col mt-2 xl:mt-5 xl:flex-row w-full justify-between xl:justify-around'>
                <img src={Rating1} alt='chart' />
                <img src={Rating2} alt='chart' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItCharts;
