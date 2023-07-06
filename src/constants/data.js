import not from "../assets/not.png";
import list from "../assets/lsit.png";

export const serviceTypeOptions = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

export const chartItems = [
  {
    bg: "#5BC4BF",
    title: "Asset",
    desc: "45",
  },
  {
    bg: "#5BC4BF",
    title: "Asset",
    desc: "45",
  },
  {
    bg: "#5BC4BF",
    title: "Asset",
    desc: "45",
  },
  {
    bg: "#5BC4BF",
    title: "Asset",
    desc: "45",
  },
  {
    bg: "#5BC4BF",
    title: "Asset",
    desc: "45",
  },
];

export const doughnutData = {
  //   labels: ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5"],
  datasets: [
    {
      data: [20, 30, 15, 10, 25],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"],
      hoverBackgroundColor: [
        "#FF6384",
        "#36A2EB",
        "#FFCE56",
        "#4BC0C0",
        "#9966FF",
      ],
    },
  ],
};

export const ratingItems = [
  "Final Ops Rating",
  "Overall Rating: 27",
  "ITSM Rating",
  "Overall Rating: 20",
];

export const tableData = [
  {
    action: (
      <div className='flex items-center gap-2'>
        <img src={list} alt='list' className='w-6' />
        <img src={not} alt='not' className='w-6' />
      </div>
    ),
    requestNumber: 307,
    status: (
      <p className='text-blue-300 py-1 px-1 bg-blue-50 text-center rounded-md'>
        New Implementation
      </p>
    ),
    serviceType: "Request For Service Access",
    serviceCategory: "SERVER",
    description: "Test123",
    location: "Maharashtra",
    assignedTo: "Ali",
    createdOn: "22/07/23",
  },
  {
    action: (
      <div className='flex items-center gap-2'>
        <img src={list} alt='list' className='w-6' />
        <img src={not} alt='not' className='w-6' />
      </div>
    ),
    requestNumber: 308,
    status: (
      <p className='text-yellow-300 py-1 px-1 bg-yellow-50 text-center rounded-md'>
        In Progress
      </p>
    ),
    serviceType: "Change Request",
    serviceCategory: "NETWORK",
    description: "Test456",
    location: "New York",
    assignedTo: "John",
    createdOn: "23/07/23",
  },
  {
    action: (
      <div className='flex items-center gap-2'>
        <img src={list} alt='list' className='w-6' />
        <img src={not} alt='not' className='w-6' />
      </div>
    ),
    requestNumber: 309,
    status: (
      <p className='text-green-300 py-1 px-1 bg-green-50 text-center rounded-md'>
        Completed
      </p>
    ),
    serviceType: "Maintenance Request",
    serviceCategory: "DATABASE",
    description: "Test789",
    location: "California",
    assignedTo: "Emily",
    createdOn: "30/07/23",
  },
  // Add 7 more objects with similar structure for additional rows
  {
    action: (
      <div className='flex items-center gap-2'>
        <img src={list} alt='list' className='w-6' />
        <img src={not} alt='not' className='w-6' />
      </div>
    ),
    requestNumber: 310,
    status: (
      <p className='text-blue-300 py-1 px-1 bg-blue-50 text-center rounded-md'>
        New Implementation
      </p>
    ),
    serviceType: "Request For Service Access",
    serviceCategory: "NETWORK",
    description: "Test111",
    location: "Texas",
    assignedTo: "Michael",
    createdOn: "01/08/23",
  },
  {
    action: (
      <div className='flex items-center gap-2'>
        <img src={list} alt='list' className='w-6' />
      </div>
    ),
    requestNumber: 307,
    status: (
      <p className='text-blue-300 py-1 px-1 bg-blue-50 text-center rounded-md'>
        New Implementation
      </p>
    ),
    serviceType: "Request For Service Access",
    serviceCategory: "SERVER",
    description: "Test123",
    location: "Maharashtra",
    assignedTo: "Ali",
    createdOn: "22/07/23",
  },
  {
    action: (
      <div className='flex items-center gap-2'>
        <img src={list} alt='list' className='w-6' />
      </div>
    ),
    requestNumber: 308,
    status: (
      <p className='text-yellow-300 py-1 px-1 bg-yellow-50 text-center rounded-md'>
        In Progress
      </p>
    ),
    serviceType: "Change Request",
    serviceCategory: "NETWORK",
    description: "Test456",
    location: "New York",
    assignedTo: "John",
    createdOn: "23/07/23",
  },
  {
    action: (
      <div className='flex items-center gap-2'>
        <img src={list} alt='list' className='w-6' />
      </div>
    ),
    requestNumber: 309,
    status: (
      <p className='text-green-300 py-1 px-1 bg-green-50 text-center rounded-md'>
        Completed
      </p>
    ),
    serviceType: "Maintenance Request",
    serviceCategory: "DATABASE",
    description: "Test789",
    location: "California",
    assignedTo: "Emily",
    createdOn: "30/07/23",
  },
  // Add 7 more objects with similar structure for additional rows
  {
    action: (
      <div className='flex items-center gap-2'>
        <img src={list} alt='list' className='w-6' />
        <img src={not} alt='not' className='w-6' />
      </div>
    ),
    requestNumber: 310,
    status: (
      <p className='text-blue-300 py-1 px-1 bg-blue-50 text-center rounded-md'>
        New Implementation
      </p>
    ),
    serviceType: "Request For Service Access",
    serviceCategory: "NETWORK",
    description: "Test111",
    location: "Texas",
    assignedTo: "Michael",
    createdOn: "01/08/23",
  },
  {
    action: (
      <div className='flex items-center gap-2'>
        <img src={list} alt='list' className='w-6' />
        <img src={not} alt='not' className='w-6' />
      </div>
    ),
    requestNumber: 307,
    status: (
      <p className='text-blue-300 py-1 px-1 bg-blue-50 text-center rounded-md'>
        New Implementation
      </p>
    ),
    serviceType: "Request For Service Access",
    serviceCategory: "SERVER",
    description: "Test123",
    location: "Maharashtra",
    assignedTo: "Ali",
    createdOn: "22/07/23",
  },
  {
    action: (
      <div className='flex items-center gap-2'>
        <img src={list} alt='list' className='w-6' />
        <img src={not} alt='not' className='w-6' />
      </div>
    ),
    requestNumber: 308,
    status: (
      <p className='text-yellow-300 py-1 px-1 bg-yellow-50 text-center rounded-md'>
        In Progress
      </p>
    ),
    serviceType: "Change Request",
    serviceCategory: "NETWORK",
    description: "Test456",
    location: "New York",
    assignedTo: "John",
    createdOn: "23/07/23",
  },
];
