import React from "react";
import Card from "./components/Card";

const App = () => {
  const jobOpenings = [
  {
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    companyName: "Google",
    daysAgo: 2,
    jobTitle: "Frontend Developer",
    jobType: "Full-time",
    level: "Junior",
    payPerHour: "$40/hr",
    location: "Bangalore, India"
  },
  {
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    companyName: "Amazon",
    daysAgo: 5,
    jobTitle: "Backend Developer",
    jobType: "Full-time",
    level: "Senior",
    payPerHour: "$60/hr",
    location: "Hyderabad, India"
  },
  {
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    companyName: "Microsoft",
    daysAgo: 1,
    jobTitle: "Full Stack Developer",
    jobType: "Full-time",
    level: "Junior",
    payPerHour: "$50/hr",
    location: "Pune, India"
  },
  {
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    companyName: "Netflix",
    daysAgo: 7,
    jobTitle: "UI/UX Designer",
    jobType: "Part-time",
    level: "Senior",
    payPerHour: "$70/hr",
    location: "Remote"
  },
  {
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
    companyName: "Meta",
    daysAgo: 3,
    jobTitle: "React Developer",
    jobType: "Full-time",
    level: "Junior",
    payPerHour: "$45/hr",
    location: "Mumbai, India"
  },
  {
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
    companyName: "Tesla",
    daysAgo: 10,
    jobTitle: "Software Engineer",
    jobType: "Full-time",
    level: "Senior",
    payPerHour: "$80/hr",
    location: "Remote"
  },
  {
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg",
    companyName: "Spotify",
    daysAgo: 4,
    jobTitle: "Backend Engineer",
    jobType: "Part-time",
    level: "Junior",
    payPerHour: "$35/hr",
    location: "Remote"
  },
  {
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png",
    companyName: "Uber",
    daysAgo: 6,
    jobTitle: "Mobile App Developer",
    jobType: "Full-time",
    level: "Senior",
    payPerHour: "$75/hr",
    location: "Delhi, India"
  },
  {
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg",
    companyName: "Airbnb",
    daysAgo: 8,
    jobTitle: "Node.js Developer",
    jobType: "Part-time",
    level: "Junior",
    payPerHour: "$38/hr",
    location: "Remote"
  },
  {
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    companyName: "Apple",
    daysAgo: 2,
    jobTitle: "iOS Developer",
    jobType: "Full-time",
    level: "Senior",
    payPerHour: "$85/hr",
    location: "Bangalore, India"
  }
];
  return (
    <div className="parent">
      {jobOpenings.map((elem) =>{
        return (
          <Card logo={elem.companyLogo} name={elem.companyName} days ={elem.daysAgo} title ={elem.jobTitle} type={elem.jobType} level={elem.level} pay = {elem.payPerHour} location ={elem.location}/>
        )
      })}
    </div>
  );
};

export default App;
