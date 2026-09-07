// Course Data
function loadMockCourses() {
    return [
  {
    "course_code": "BC001",
    "course_title": "Cyber Security",
    "subject_area": "Computing and Digital Technologies",
    "qualification_type": "T-Level",
    "qualification_level": 3,
    "campus": "Bispham Campus",
    "start_date": "2027-09-13",
    "summary": "Cyber Security is a professionally focused programme designed to develop specialist knowledge and practical skills within computing and digital technologies. Learners take part in workshops, projects and employer-informed activities that build confidence, technical ability and real-world experience. The course provides clear progression routes into employment, apprenticeships or higher levels of study while helping students develop valuable transferable skills such as communication, teamwork and problem solving."
  },
  {
    "course_code": "BC002",
    "course_title": "Digital Software Development",
    "subject_area": "Computing and Digital Technologies",
    "qualification_type": "T-Level",
    "qualification_level": 3,
    "campus": "University Centre",
    "start_date": "2027-09-20",
    "summary": "Digital Software Development is a professionally focused programme designed to develop specialist knowledge and practical skills within computing and digital technologies. Learners take part in workshops, projects and employer-informed activities that build confidence, technical ability and real-world experience. The course provides clear progression routes into employment, apprenticeships or higher levels of study while helping students develop valuable transferable skills such as communication, teamwork and problem solving."
  },
  {
    "course_code": "BC003",
    "course_title": "Data Analytics",
    "subject_area": "Computing and Digital Technologies",
    "qualification_type": "Degree",
    "qualification_level": 5,
    "campus": "Gateway Campus",
    "start_date": "2028-01-10",
    "summary": "Data Analytics is a professionally focused programme designed to develop specialist knowledge and practical skills within computing and digital technologies. Learners take part in workshops, projects and employer-informed activities that build confidence, technical ability and real-world experience. The course provides clear progression routes into employment, apprenticeships or higher levels of study while helping students develop valuable transferable skills such as communication, teamwork and problem solving."
  },
  {
    "course_code": "BC004",
    "course_title": "Network Engineering",
    "subject_area": "Computing and Digital Technologies",
    "qualification_type": "Degree",
    "qualification_level": 6,
    "campus": "Fleetwood Nautical Campus",
    "start_date": "2028-04-17",
    "summary": "Network Engineering is a professionally focused programme designed to develop specialist knowledge and practical skills within computing and digital technologies. Learners take part in workshops, projects and employer-informed activities that build confidence, technical ability and real-world experience. The course provides clear progression routes into employment, apprenticeships or higher levels of study while helping students develop valuable transferable skills such as communication, teamwork and problem solving."
  },
  {
    "course_code": "BC005",
    "course_title": "Computer Science",
    "subject_area": "Computing and Digital Technologies",
    "qualification_type": "Degree",
    "qualification_level": 6,
    "campus": "Bispham Campus",
    "start_date": "2027-09-13",
    "summary": "Computer Science is a professionally focused programme designed to develop specialist knowledge and practical skills within computing and digital technologies. Learners take part in workshops, projects and employer-informed activities that build confidence, technical ability and real-world experience. The course provides clear progression routes into employment, apprenticeships or higher levels of study while helping students develop valuable transferable skills such as communication, teamwork and problem solving."
  },
  {
    "course_code": "BC006",
    "course_title": "Esports Production",
    "subject_area": "Computing and Digital Technologies",
    "qualification_type": "T-Level",
    "qualification_level": 3,
    "campus": "University Centre",
    "start_date": "2027-09-20",
    "summary": "Esports Production is a professionally focused programme designed to develop specialist knowledge and practical skills within computing and digital technologies. Learners take part in workshops, projects and employer-informed activities that build confidence, technical ability and real-world experience. The course provides clear progression routes into employment, apprenticeships or higher levels of study while helping students develop valuable transferable skills such as communication, teamwork and problem solving."
  },
  {
    "course_code": "BC007",
    "course_title": "Business Management",
    "subject_area": "Business and Enterprise",
    "qualification_type": "Degree",
    "qualification_level": 6,
    "campus": "Gateway Campus",
    "start_date": "2028-01-10",
    "summary": "Business Management is a professionally focused programme designed to develop specialist knowledge and practical skills within business and enterprise. Learners take part in workshops, projects and employer-informed activities that build confidence, technical ability and real-world experience. The course provides clear progression routes into employment, apprenticeships or higher levels of study while helping students develop valuable transferable skills such as communication, teamwork and problem solving."
  },
  {
    "course_code": "BC008",
    "course_title": "Business Studies",
    "subject_area": "Business and Enterprise",
    "qualification_type": "T-Level",
    "qualification_level": 3,
    "campus": "Fleetwood Nautical Campus",
    "start_date": "2028-04-17",
    "summary": "Business Studies is a professionally focused programme designed to develop specialist knowledge and practical skills within business and enterprise. Learners take part in workshops, projects and employer-informed activities that build confidence, technical ability and real-world experience. The course provides clear progression routes into employment, apprenticeships or higher levels of study while helping students develop valuable transferable skills such as communication, teamwork and problem solving."
  },
  {
    "course_code": "BC009",
    "course_title": "Accounting and Finance",
    "subject_area": "Business and Enterprise",
    "qualification_type": "Degree",
    "qualification_level": 5,
    "campus": "Bispham Campus",
    "start_date": "2027-09-13",
    "summary": "Accounting and Finance is a professionally focused programme designed to develop specialist knowledge and practical skills within business and enterprise. Learners take part in workshops, projects and employer-informed activities that build confidence, technical ability and real-world experience. The course provides clear progression routes into employment, apprenticeships or higher levels of study while helping students develop valuable transferable skills such as communication, teamwork and problem solving."
  },
  {
    "course_code": "BC010",
    "course_title": "Marketing and Social Media",
    "subject_area": "Business and Enterprise",
    "qualification_type": "T-Level",
    "qualification_level": 3,
    "campus": "University Centre",
    "start_date": "2027-09-20",
    "summary": "Marketing and Social Media is a professionally focused programme designed to develop specialist knowledge and practical skills within business and enterprise. Learners take part in workshops, projects and employer-informed activities that build confidence, technical ability and real-world experience. The course provides clear progression routes into employment, apprenticeships or higher levels of study while helping students develop valuable transferable skills such as communication, teamwork and problem solving."
  },
  {
    "course_code": "BC011",
    "course_title": "People Practice",
    "subject_area": "Business and Enterprise",
    "qualification_type": "Apprenticeship",
    "qualification_level": 3,
    "campus": "Gateway Campus",
    "start_date": "2028-01-10",
    "summary": "People Practice is a professionally focused programme designed to develop specialist knowledge and practical skills within business and enterprise. Learners take part in workshops, projects and employer-informed activities that build confidence, technical ability and real-world experience. The course provides clear progression routes into employment, apprenticeships or higher levels of study while helping students develop valuable transferable skills such as communication, teamwork and problem solving."
  },
  {
    "course_code": "BC012",
    "course_title": "Project Management",
    "subject_area": "Business and Enterprise",
    "qualification_type": "Apprenticeship",
    "qualification_level": 4,
    "campus": "Fleetwood Nautical Campus",
    "start_date": "2028-04-17",
    "summary": "Project Management is a professionally focused programme designed to develop specialist knowledge and practical skills within business and enterprise. Learners take part in workshops, projects and employer-informed activities that build confidence, technical ability and real-world experience. The course provides clear progression routes into employment, apprenticeships or higher levels of study while helping students develop valuable transferable skills such as communication, teamwork and problem solving."
  },
  {
    "course_code": "BC013",
    "course_title": "Mechanical Engineering",
    "subject_area": "Engineering",
    "qualification_type": "Degree",
    "qualification_level": 6,
    "campus": "Bispham Campus",
    "start_date": "2027-09-13",
    "summary": "Mechanical Engineering is a professionally focused programme designed to develop specialist knowledge and practical skills within engineering. Learners take part in workshops, projects and employer-informed activities that build confidence, technical ability and real-world experience. The course provides clear progression routes into employment, apprenticeships or higher levels of study while helping students develop valuable transferable skills such as communication, teamwork and problem solving."
  },
  {
    "course_code": "BC014",
    "course_title": "Electrical Engineering",
    "subject_area": "Engineering",
    "qualification_type": "T-Level",
    "qualification_level": 3,
    "campus": "University Centre",
    "start_date": "2027-09-20",
    "summary": "Electrical Engineering is a professionally focused programme designed to develop specialist knowledge and practical skills within engineering. Learners take part in workshops, projects and employer-informed activities that build confidence, technical ability and real-world experience. The course provides clear progression routes into employment, apprenticeships or higher levels of study while helping students develop valuable transferable skills such as communication, teamwork and problem solving."
  },
  {
    "course_code": "BC015",
    "course_title": "Robotics and Automation",
    "subject_area": "Engineering",
    "qualification_type": "Degree",
    "qualification_level": 6,
    "campus": "Gateway Campus",
    "start_date": "2028-01-10",
    "summary": "Robotics and Automation is a professionally focused programme designed to develop specialist knowledge and practical skills within engineering. Learners take part in workshops, projects and employer-informed activities that build confidence, technical ability and real-world experience. The course provides clear progression routes into employment, apprenticeships or higher levels of study while helping students develop valuable transferable skills such as communication, teamwork and problem solving."
  },
  {
    "course_code": "BC016",
    "course_title": "Manufacturing Engineering",
    "subject_area": "Engineering",
    "qualification_type": "T-Level",
    "qualification_level": 3,
    "campus": "Fleetwood Nautical Campus",
    "start_date": "2028-04-17",
    "summary": "Manufacturing Engineering is a professionally focused programme designed to develop specialist knowledge and practical skills within engineering. Learners take part in workshops, projects and employer-informed activities that build confidence, technical ability and real-world experience. The course provides clear progression routes into employment, apprenticeships or higher levels of study while helping students develop valuable transferable skills such as communication, teamwork and problem solving."
  },
  {
    "course_code": "BC017",
    "course_title": "Aeronautical Engineering",
    "subject_area": "Engineering",
    "qualification_type": "Degree",
    "qualification_level": 4,
    "campus": "Bispham Campus",
    "start_date": "2027-09-13",
    "summary": "Aeronautical Engineering is a professionally focused programme designed to develop specialist knowledge and practical skills within engineering. Learners take part in workshops, projects and employer-informed activities that build confidence, technical ability and real-world experience. The course provides clear progression routes into employment, apprenticeships or higher levels of study while helping students develop valuable transferable skills such as communication, teamwork and problem solving."
  },
  {
    "course_code": "BC018",
    "course_title": "Engineering Operations",
    "subject_area": "Engineering",
    "qualification_type": "Apprenticeship",
    "qualification_level": 2,
    "campus": "University Centre",
    "start_date": "2027-09-20",
    "summary": "Engineering Operations is a professionally focused programme designed to develop specialist knowledge and practical skills within engineering. Learners take part in workshops, projects and employer-informed activities that build confidence, technical ability and real-world experience. The course provides clear progression routes into employment, apprenticeships or higher levels of study while helping students develop valuable transferable skills such as communication, teamwork and problem solving."
  },
  {
    "course_code": "BC019",
    "course_title": "Applied Science",
    "subject_area": "Science",
    "qualification_type": "T-Level",
    "qualification_level": 3,
    "campus": "Gateway Campus",
    "start_date": "2028-01-10",
    "summary": "Applied Science is a professionally focused programme designed to develop specialist knowledge and practical skills within science. Learners take part in workshops, projects and employer-informed activities that build confidence, technical ability and real-world experience. The course provides clear progression routes into employment, apprenticeships or higher levels of study while helping students develop valuable transferable skills such as communication, teamwork and problem solving."
  },
  {
    "course_code": "BC020",
    "course_title": "Chemistry",
    "subject_area": "Science",
    "qualification_type": "GCSE",
    "qualification_level": 2,
    "campus": "Fleetwood Nautical Campus",
    "start_date": "2028-04-17",
    "summary": "Chemistry is a professionally focused programme designed to develop specialist knowledge and practical skills within science. Learners take part in workshops, projects and employer-informed activities that build confidence, technical ability and real-world experience. The course provides clear progression routes into employment, apprenticeships or higher levels of study while helping students develop valuable transferable skills such as communication, teamwork and problem solving."
  },
  {
    "course_code": "BC021",
    "course_title": "Biology",
    "subject_area": "Science",
    "qualification_type": "GCSE",
    "qualification_level": 2,
    "campus": "Bispham Campus",
    "start_date": "2027-09-13",
    "summary": "Biology is a professionally focused programme designed to develop specialist knowledge and practical skills within science. Learners take part in workshops, projects and employer-informed activities that build confidence, technical ability and real-world experience. The course provides clear progression routes into employment, apprenticeships or higher levels of study while helping students develop valuable transferable skills such as communication, teamwork and problem solving."
  },
  {
    "course_code": "BC022",
    "course_title": "Environmental Science",
    "subject_area": "Science",
    "qualification_type": "Degree",
    "qualification_level": 5,
    "campus": "University Centre",
    "start_date": "2027-09-20",
    "summary": "Environmental Science is a professionally focused programme designed to develop specialist knowledge and practical skills within science. Learners take part in workshops, projects and employer-informed activities that build confidence, technical ability and real-world experience. The course provides clear progression routes into employment, apprenticeships or higher levels of study while helping students develop valuable transferable skills such as communication, teamwork and problem solving."
  },
  {
    "course_code": "BC023",
    "course_title": "Animal Management",
    "subject_area": "Science",
    "qualification_type": "T-Level",
    "qualification_level": 3,
    "campus": "Gateway Campus",
    "start_date": "2028-01-10",
    "summary": "Animal Management is a professionally focused programme designed to develop specialist knowledge and practical skills within science. Learners take part in workshops, projects and employer-informed activities that build confidence, technical ability and real-world experience. The course provides clear progression routes into employment, apprenticeships or higher levels of study while helping students develop valuable transferable skills such as communication, teamwork and problem solving."
  },
  {
    "course_code": "BC024",
    "course_title": "Animal Care",
    "subject_area": "Science",
    "qualification_type": "Apprenticeship",
    "qualification_level": 2,
    "campus": "Fleetwood Nautical Campus",
    "start_date": "2028-04-17",
    "summary": "Animal Care is a professionally focused programme designed to develop specialist knowledge and practical skills within science. Learners take part in workshops, projects and employer-informed activities that build confidence, technical ability and real-world experience. The course provides clear progression routes into employment, apprenticeships or higher levels of study while helping students develop valuable transferable skills such as communication, teamwork and problem solving."
  },
  {
    "course_code": "BC025",
    "course_title": "Adult Health and Social Care",
    "subject_area": "Health and Social Care",
    "qualification_type": "Degree",
    "qualification_level": 5,
    "campus": "Bispham Campus",
    "start_date": "2027-09-13",
    "summary": "Adult Health and Social Care is a professionally focused programme designed to develop specialist knowledge and practical skills within health and social care. Learners take part in workshops, projects and employer-informed activities that build confidence, technical ability and real-world experience. The course provides clear progression routes into employment, apprenticeships or higher levels of study while helping students develop valuable transferable skills such as communication, teamwork and problem solving."
  },
  {
    "course_code": "BC026",
    "course_title": "Nursing Preparation",
    "subject_area": "Health and Social Care",
    "qualification_type": "T-Level",
    "qualification_level": 3,
    "campus": "University Centre",
    "start_date": "2027-09-20",
    "summary": "Nursing Preparation is a professionally focused programme designed to develop specialist knowledge and practical skills within health and social care. Learners take part in workshops, projects and employer-informed activities that build confidence, technical ability and real-world experience. The course provides clear progression routes into employment, apprenticeships or higher levels of study while helping students develop valuable transferable skills such as communication, teamwork and problem solving."
  },
  {
    "course_code": "BC027",
    "course_title": "Adult Care Worker",
    "subject_area": "Health and Social Care",
    "qualification_type": "Apprenticeship",
    "qualification_level": 3,
    "campus": "Gateway Campus",
    "start_date": "2028-01-10",
    "summary": "Adult Care Worker is a professionally focused programme designed to develop specialist knowledge and practical skills within health and social care. Learners take part in workshops, projects and employer-informed activities that build confidence, technical ability and real-world experience. The course provides clear progression routes into employment, apprenticeships or higher levels of study while helping students develop valuable transferable skills such as communication, teamwork and problem solving."
  },
  {
    "course_code": "BC028",
    "course_title": "Allied Health Professions",
    "subject_area": "Health and Social Care",
    "qualification_type": "Degree",
    "qualification_level": 4,
    "campus": "Fleetwood Nautical Campus",
    "start_date": "2028-04-17",
    "summary": "Allied Health Professions is a professionally focused programme designed to develop specialist knowledge and practical skills within health and social care. Learners take part in workshops, projects and employer-informed activities that build confidence, technical ability and real-world experience. The course provides clear progression routes into employment, apprenticeships or higher levels of study while helping students develop valuable transferable skills such as communication, teamwork and problem solving."
  },
  {
    "course_code": "BC029",
    "course_title": "Sport Health and Performance",
    "subject_area": "Sport",
    "qualification_type": "Degree",
    "qualification_level": 5,
    "campus": "Bispham Campus",
    "start_date": "2027-09-13",
    "summary": "Sport Health and Performance is a professionally focused programme designed to develop specialist knowledge and practical skills within sport. Learners take part in workshops, projects and employer-informed activities that build confidence, technical ability and real-world experience. The course provides clear progression routes into employment, apprenticeships or higher levels of study while helping students develop valuable transferable skills such as communication, teamwork and problem solving."
  },
  {
    "course_code": "BC030",
    "course_title": "Sports Coaching",
    "subject_area": "Sport",
    "qualification_type": "T-Level",
    "qualification_level": 3,
    "campus": "University Centre",
    "start_date": "2027-09-20",
    "summary": "Sports Coaching is a professionally focused programme designed to develop specialist knowledge and practical skills within sport. Learners take part in workshops, projects and employer-informed activities that build confidence, technical ability and real-world experience. The course provides clear progression routes into employment, apprenticeships or higher levels of study while helping students develop valuable transferable skills such as communication, teamwork and problem solving."
  },
  {
    "course_code": "BC031",
    "course_title": "Acting",
    "subject_area": "Creative Arts",
    "qualification_type": "Degree",
    "qualification_level": 4,
    "campus": "Gateway Campus",
    "start_date": "2028-01-10",
    "summary": "Acting is a professionally focused programme designed to develop specialist knowledge and practical skills within creative arts. Learners take part in workshops, projects and employer-informed activities that build confidence, technical ability and real-world experience. The course provides clear progression routes into employment, apprenticeships or higher levels of study while helping students develop valuable transferable skills such as communication, teamwork and problem solving."
  },
  {
    "course_code": "BC032",
    "course_title": "Art and Design",
    "subject_area": "Creative Arts",
    "qualification_type": "T-Level",
    "qualification_level": 3,
    "campus": "Fleetwood Nautical Campus",
    "start_date": "2028-04-17",
    "summary": "Art and Design is a professionally focused programme designed to develop specialist knowledge and practical skills within creative arts. Learners take part in workshops, projects and employer-informed activities that build confidence, technical ability and real-world experience. The course provides clear progression routes into employment, apprenticeships or higher levels of study while helping students develop valuable transferable skills such as communication, teamwork and problem solving."
  },
  {
    "course_code": "BC033",
    "course_title": "Graphic Design",
    "subject_area": "Creative Arts",
    "qualification_type": "Degree",
    "qualification_level": 5,
    "campus": "Bispham Campus",
    "start_date": "2027-09-13",
    "summary": "Graphic Design is a professionally focused programme designed to develop specialist knowledge and practical skills within creative arts. Learners take part in workshops, projects and employer-informed activities that build confidence, technical ability and real-world experience. The course provides clear progression routes into employment, apprenticeships or higher levels of study while helping students develop valuable transferable skills such as communication, teamwork and problem solving."
  },
  {
    "course_code": "BC034",
    "course_title": "Photography",
    "subject_area": "Creative Arts",
    "qualification_type": "T-Level",
    "qualification_level": 3,
    "campus": "University Centre",
    "start_date": "2027-09-20",
    "summary": "Photography is a professionally focused programme designed to develop specialist knowledge and practical skills within creative arts. Learners take part in workshops, projects and employer-informed activities that build confidence, technical ability and real-world experience. The course provides clear progression routes into employment, apprenticeships or higher levels of study while helping students develop valuable transferable skills such as communication, teamwork and problem solving."
  },
  {
    "course_code": "BC035",
    "course_title": "Film and Media",
    "subject_area": "Creative Arts",
    "qualification_type": "Degree",
    "qualification_level": 5,
    "campus": "Gateway Campus",
    "start_date": "2028-01-10",
    "summary": "Film and Media is a professionally focused programme designed to develop specialist knowledge and practical skills within creative arts. Learners take part in workshops, projects and employer-informed activities that build confidence, technical ability and real-world experience. The course provides clear progression routes into employment, apprenticeships or higher levels of study while helping students develop valuable transferable skills such as communication, teamwork and problem solving."
  },
  {
    "course_code": "BC036",
    "course_title": "Light Vehicle Maintenance and Repair",
    "subject_area": "Automotive",
    "qualification_type": "Apprenticeship",
    "qualification_level": 2,
    "campus": "Fleetwood Nautical Campus",
    "start_date": "2028-04-17",
    "summary": "Light Vehicle Maintenance and Repair is a professionally focused programme designed to develop specialist knowledge and practical skills within automotive. Learners take part in workshops, projects and employer-informed activities that build confidence, technical ability and real-world experience. The course provides clear progression routes into employment, apprenticeships or higher levels of study while helping students develop valuable transferable skills such as communication, teamwork and problem solving."
  },
  {
    "course_code": "BC037",
    "course_title": "Motorsport Engineering",
    "subject_area": "Automotive",
    "qualification_type": "Degree",
    "qualification_level": 5,
    "campus": "Bispham Campus",
    "start_date": "2027-09-13",
    "summary": "Motorsport Engineering is a professionally focused programme designed to develop specialist knowledge and practical skills within automotive. Learners take part in workshops, projects and employer-informed activities that build confidence, technical ability and real-world experience. The course provides clear progression routes into employment, apprenticeships or higher levels of study while helping students develop valuable transferable skills such as communication, teamwork and problem solving."
  },
  {
    "course_code": "BC038",
    "course_title": "Vehicle Body Repair",
    "subject_area": "Automotive",
    "qualification_type": "T-Level",
    "qualification_level": 3,
    "campus": "University Centre",
    "start_date": "2027-09-20",
    "summary": "Vehicle Body Repair is a professionally focused programme designed to develop specialist knowledge and practical skills within automotive. Learners take part in workshops, projects and employer-informed activities that build confidence, technical ability and real-world experience. The course provides clear progression routes into employment, apprenticeships or higher levels of study while helping students develop valuable transferable skills such as communication, teamwork and problem solving."
  },
  {
    "course_code": "BC039",
    "course_title": "English Language",
    "subject_area": "English",
    "qualification_type": "GCSE",
    "qualification_level": 2,
    "campus": "Gateway Campus",
    "start_date": "2028-01-10",
    "summary": "English Language is a professionally focused programme designed to develop specialist knowledge and practical skills within english. Learners take part in workshops, projects and employer-informed activities that build confidence, technical ability and real-world experience. The course provides clear progression routes into employment, apprenticeships or higher levels of study while helping students develop valuable transferable skills such as communication, teamwork and problem solving."
  },
  {
    "course_code": "BC040",
    "course_title": "Mathematics",
    "subject_area": "Mathematics",
    "qualification_type": "GCSE",
    "qualification_level": 2,
    "campus": "Fleetwood Nautical Campus",
    "start_date": "2028-04-17",
    "summary": "Mathematics is a professionally focused programme designed to develop specialist knowledge and practical skills within mathematics. Learners take part in workshops, projects and employer-informed activities that build confidence, technical ability and real-world experience. The course provides clear progression routes into employment, apprenticeships or higher levels of study while helping students develop valuable transferable skills such as communication, teamwork and problem solving."
  }
];
}