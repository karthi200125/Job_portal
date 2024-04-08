export const usersdata = [
    {
        id: 1,
        isProuser: false,
        role: 'jobseeker',
        gender: 'male',
        username: 'karthi',
        country: 'India',
        state: 'Tamil Nadu',
        city: 'Chennai',
        profilePic: 'path/to/profilePic.jpg',
        bannerPic: 'path/to/bannerPic.jpg',
        jobRole: 'Software Developer',
        exp: 'Fresher',
        companyName: '',
        aboutMe: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci exercitationem distinctio eveniet, unde magni natus laborum? Vel illum dolorum facilis!',
        socialLink: 'https://www.example.com/karthi',
        profileViews: 20,
        skills: ['Reactjs', 'Redux', 'Vitejs'],
        followers: ['user1', 'user2', 'user3'],
        following: ['user4', 'user5'],
        appliedJobs: ['job1', 'job2', 'job3', 'job4', 'job5'],
        education: [
            {
                collegeName: 'AVS Technology',
                degree: 'Computer Science and Engineering',
                grade: '80%',
                start: 'Aug 2018',
                end: 'Sep 2021'
            },
            {
                schoolName: 'Public School',
                degree: 'Computer Science',
                grade: '90%',
                start: 'Aug 2012',
                end: 'May 2018'
            },
        ],
        projects: [
            {
                proName: 'E-commerce',
                proImage: 'path/to/ecommerce.jpg',
                proDesc: 'A platform for online buying and selling of goods.',
                proLink: 'https://www.example.com/ecommerce'
            },
            {
                proName: 'Blogs',
                proImage: 'path/to/blogs.jpg',
                proDesc: 'A collection of articles and posts on various topics.',
                proLink: 'https://www.example.com/blogs'
            },
        ],
        notifications: [
            {
                from: 'David',
                profilePic: 'path/to/david.jpg',
                username: 'David',
                notMsg: 'Hey there! Just wanted to say hello.'
            },
            {
                from: 'Me',
                notMsg: 'You have received a new message. Check it out!'
            },
        ],
    },
    {
        id: 2,
        isProuser: true,
        role: 'employer',
        gender: 'female',
        username: 'jennifer',
        country: 'United States',
        state: 'California',
        city: 'Los Angeles',
        profilePic: 'path/to/jenniferPic.jpg',
        bannerPic: 'path/to/jenniferBanner.jpg',
        companyName: 'TechCorp',
        aboutMe: 'I am a recruiter at TechCorp looking for talented software developers to join our team!',
        socialLink: 'https://www.linkedin.com/in/jennifer-techcorp',
        profileViews: 50,
        followers: ['user6', 'user7'],
        following: ['user8', 'user9'],
        jobOpenings: ['jobOpening1', 'jobOpening2'],
        notifications: [
            {
                from: 'Admin',
                notMsg: 'Congratulations! Your job opening has been featured on our homepage.'
            },
            {
                from: 'Me',
                notMsg: 'You have received new applications for the software developer position.'
            },
        ],
    },
    {
        id: 3,
        isProuser: false,
        role: 'jobseeker',
        gender: 'non-binary',
        username: 'sam',
        country: 'Canada',
        state: 'Ontario',
        city: 'Toronto',
        profilePic: 'path/to/samPic.jpg',
        bannerPic: 'path/to/samBanner.jpg',
        jobRole: 'Data Analyst',
        exp: 'Intermediate',
        companyName: '',
        aboutMe: 'Passionate about data analysis and visualization. Currently seeking new opportunities in the field.',
        socialLink: 'https://www.twitter.com/sam_data',
        profileViews: 35,
        skills: ['SQL', 'Python', 'Tableau'],
        followers: ['user10', 'user11'],
        following: ['user12', 'user13'],
        appliedJobs: ['job6', 'job7', 'job8'],
        education: [
            {
                collegeName: 'University of Toronto',
                degree: 'Bachelor of Science in Statistics',
                grade: '85%',
                start: 'Sep 2016',
                end: 'May 2020'
            },
        ],
        projects: [
            {
                proName: 'Market Analysis Dashboard',
                proImage: 'path/to/marketAnalysisDashboard.jpg',
                proDesc: 'Developed a dashboard to visualize market trends and perform competitor analysis.',
                proLink: 'https://www.example.com/market-analysis-dashboard'
            },
            {
                proName: 'Customer Segmentation Model',
                proImage: 'path/to/customerSegmentationModel.jpg',
                proDesc: 'Built a machine learning model to segment customers based on their behavior and demographics.',
                proLink: 'https://www.example.com/customer-segmentation'
            },
        ],
        notifications: [
            {
                from: 'TechNews',
                notMsg: 'Check out our latest article on the future of data analysis!'
            },
            {
                from: 'Me',
                notMsg: 'You have received new messages from potential employers.'
            },
        ],
    }
]

export const user = {
    id: 1,
    isProuser: false,
    role: 'jobseeker',
    gender: 'male',
    username: 'karthi',
    country: 'India',
    state: 'Tamil Nadu',
    city: 'Chennai',
    profilePic: 'https://media.licdn.com/dms/image/D5635AQGgzAhEC3f9Zw/profile-framedphoto-shrink_200_200/0/1706085213108?e=1712908800&v=beta&t=kvbZMrvj1-Ncqnnd6F4vfS1h5SVPyRxq1zy7Ve78Iy8',
    bannerPic: 'https://media.licdn.com/dms/image/D5616AQHOPhqZf_TRzg/profile-displaybackgroundimage-shrink_350_1400/0/1708433130629?e=1717632000&v=beta&t=SGqFkHigrlH8RjvFJdGxw40-jFiOgj4DvL56S-fEGFI',
    jobRole: 'Software Developer',
    exp: 'Fresher',
    companyName: '',
    aboutMe: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci exercitationem distinctio eveniet, unde magni natus laborum? Vel illum dolorum facilis!',
    socialLink: 'https://www.example.com/karthi',
    profileViews: 20,
    skills: ['Reactjs', 'Redux', 'Vitejs'],
    followers: ['user1', 'user2', 'user3'],
    following: ['user4', 'user5'],
    appliedJobs: ['job1', 'job2', 'job3', 'job4', 'job5'],
    education: [
        {
            orgName: 'AVS Technology',
            degree: 'Computer Science and Engineering',
            grade: '80%',
            start: 'Aug 2018',
            end: 'Sep 2021'
        },
        {
            orgName: 'Public School',
            degree: 'Computer Science',
            grade: '90%',
            start: 'Aug 2012',
            end: 'May 2018'
        },
    ],
    projects: [
        {
            proName: 'E-commerce',
            proImage: 'path/to/ecommerce.jpg',
            proDesc: 'A platform for online buying and selling of goods.',
            proLink: 'https://www.example.com/ecommerce'
        },
        {
            proName: 'Blogs',
            proImage: 'path/to/blogs.jpg',
            proDesc: 'A collection of articles and posts on various topics.',
            proLink: 'https://www.example.com/blogs'
        },
    ],
    notifications: [
        {
            from: 'David',
            profilePic: 'path/to/david.jpg',
            username: 'David',
            notMsg: 'Hey there! Just wanted to say hello.'
        },
    ],
}