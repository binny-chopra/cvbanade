import { IFaqs, IPricing, ISectionWithImg, ITestimonials } from "../interfaces/i-common";

export class ObjectConstants {
    public static CAROUSEL_IMGS: string[] = ['cvbc-03.jpg', 'cvbc-02.jpg', 'cvbc-01.jpg'];

    public static CLIENT_TESTIMONY: ITestimonials[] = [
        {
            title: "Rishabh Singhania",
            img: "dummy-t1.jpg",
            description: "I was apprehensive about spending money on these services, but my resume desperately required assistance. The staff went above and beyond to be accommodating and responsive. They were comprehensive in their inquiries regarding my needs and my desired outcomes. I would give it a 10/10.",
            rating: 5
        },
        {
            title: "Tanya Mehta",
            img: "dummy-t2.jpg",
            description: "Outstanding service. The fact that they provide an end-to-end solution saved me a lot of trouble in selecting the perfect template to sort the right things to add from my long list of job duties and responsibilities. They send me a concise document that showcases everything I want my recruiter to see in a very organized and professional way.",
            rating: 4.7
        },
        {
            title: "Jaspreet Singh",
            img: "dummy-t4.jpg",
            description: "CVbanade's price was more than fair, the return time was quick, and the service and the resume I got were just up to the mark. I don't have any reservations about recommending CVbanade to anyone, regardless of where you're at in your career.",
            rating: 4
        },
        {
            title: "Sonal Mahajan",
            img: "dummy-t5.jpg",
            description: "They know what they are doing and how to do it. Excellent service for people who are too lazy to put work into creating their CVs or just aren't really great at it. I am very satisfied with the final product.",
            rating: 4.4
        },
        {
            title: "Aretha Augustine",
            img: "dummy-t3.jpg",
            description: "I wanted to make sure my resume flowed adequately and looked professional. When I received the first edit, I was quite impressed. It truly saved me a lot of time and effort. I am extremely happy with the outcome. The expense was worthwhile.",
            rating: 5
        },
        {
            title: "Farhan Khan",
            img: "dummy-t6.png",
            description: "My qualifications were evaluated by CVbanade, who did an extremely good job of emphasizing them in my resume. The degree of expertise and attention to detail displayed by their writers definitely surprised me. My last resume was a complete mess. The improved version is unquestionably the best. I'm very glad I chose to use their services.",
            rating: 4.6
        },
        {
            title: "Shivansh Sharma",
            img: "dummy-t6.png",
            description: "It is such an innovative venture. Getting proper end-to-end support for resume writing is really something I didn't know I needed until I came across CVbanade! Their ATS complaint bot writes the first draft, and their writers make sure to convert that draft into a polished resume, just the way I wanted it to be. Great experience at such a nominal rate.",
            rating: 4.8
        },
        {
            title: "Hayat Ahmed",
            img: "dummy-t6.png",
            description: "The best part is I don't have to do anything but fill out a form sharing my details, and the next thing I know, I've got a copy of a personalized resume ready for me. It saved me from the hassle of sorting out the best template to designing and formatting the whole piece, and especially from deciding the right action words to use. The resume I got exceeded my expectations. Give CVbanade a shot! It's worth it!",
            rating: 4.9
        }];

    public static FAQS: IFaqs[] = [
        {
            id: "faq00",
            title: "What do you offer?",
            description: "CVbanade offers an end-to-end solution for a tedious, time-consuming resume writing exercise. We not only save you from spending hours deciding on the perfect format or description. We collect your data and deliver your personalized resume directly to you."
        },
        {
            id: "faq01",
            title: "How do you develop my resume?",
            description: `We collect your data, and then our pre-trained generative tech writes your resume, which then goes to a human resume vetting analyst for coherence and consistency of the resume - just the way you want it.
            Finally, the resume is delivered to you in word and PDF formats. We are a comprehensive solution provider for your career application needs. Just provide us with your information like work-ex, education, skills and extra-curriculars, and we will take care of the rest.`
        },
        {
            id: "faq02",
            title: "How much will it cost?",
            description: "You have a variety of options to choose from here. The kickstarter plan starts from Rs. 299 only."
        },
        {
            id: "faq03",
            title: "What is the difference between a CV and a resume?",
            description: `A resume and a CV (curriculum vitae) are both documents used to showcase a person's professional qualifications and experiences, but they differ in length, content, and purpose.
            A resume is typically a one-page document that summarizes a person's work experience, skills, education, and achievements relevant to the job they are applying for. Resumes are usually tailored to a specific job or industry and are often used in the United States and Canada.
            On the other hand, a CV is a comprehensive document that provides a detailed overview of a person's academic and professional background. It typically includes information such as education, work experience, publications, research projects, and professional affiliations. CVs are usually used in academic, research, or medical fields and are more common in countries outside of the United States.
            In summary, a resume is a concise summary of a person's relevant qualifications for a specific job, while a CV is a comprehensive document that provides a detailed overview of a person's entire academic and professional background.`
        },
        {
            id: "faq04",
            title: "What is ATS compliance and how does it better my chances?",
            description: `ATS is an abbreviation for "Applicant Tracking System". It is a software used by organizations to manage their recruitment and hiring processes. ATS automates and streamlines the process of sourcing, screening, and tracking job candidates. It helps recruiters and hiring managers to save time and effort by automating routine tasks. It also identifies certain keywords that match the job position ad and even highlights relevant professional experience and skills.`
        },
        {
            id: "faq05",
            title: "Why is ATS compliance necessary for my resume?",
            description: `ATS compliance is necessary for your resume because many companies use ATS software to manage their recruitment process. When you submit your resume to an organization, the ATS scans your resume for specific keywords and phrases related to the job you are applying for.
            If your resume is not ATS compliant, it may not be able to pass the initial screening process, and you may not even be considered for the position. By making your resume ATS compliant, you increase your chances of passing the initial screening process and getting noticed by recruiters and hiring managers.
            To make your resume ATS compliant, you need to ensure that it includes relevant keywords and phrases related to the job, uses simple formatting, and avoids using images or graphics. At CVbanade we make sure your resume is ATS compliant for you.
            `
        },
        {
            id: "faq06",
            title: "How long should be a resume ideally?",
            description: "It is always recommended to make a one-page document. However, if you're a professional (CA, lawyer, freelancer) or academician with a considerable amount of experience in your industry, you can make a two-page document that enlists all roles, publications and assignments taken so far."
        }];

    public static HOME_PG_ICON_SECTION: ISectionWithImg[] = [
        {
            title: "ELEVATE your game",
            img: "upstairs.svg",
            description: `ELEVATE your game with our comprehensive solution that covers everything from curating and vetting the content to design setting you up for SUCCESS.`
        },
        {
            title: "STANDOUT from your peers",
            img: "standout.svg",
            description: `Don't let your resume get lost on the career portals - our expertly crafted, ATS-compliant resumes helps you STANDOUT and get you noticed by the hiring managers from Day 1.`
        },
        {
            title: "MAXIMIZE your chances",
            img: "resume-handsup.svg",
            description: `MAXIMIZE your chances of securing your dream job with our team of dedicated human resume experts and proofreaders, who help you truly represent your skills and experience.`
        }];

    public static TESTIMONIAL_NAV_ICON: string[] = [
        `<i class="fa-solid fa-caret-left"></i>`, `<i class="fa-solid fa-caret-right"></i>`
    ]

    public static PRICING_OPTIONS: IPricing[] = [
        {
            title: "KICKSTARTER",
            price: 299,
            previousPrice: 399,
            popular: false,
            features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"]
        },
        {
            title: "STANDARD",
            price: 399,
            previousPrice: 499,
            popular: false,
            features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"]
        },
        {
            title: "PROFESSIONAL",
            price: 499,
            previousPrice: 599,
            popular: true,
            features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"]
        },
        {
            title: "DREAM CV",
            price: 599,
            previousPrice: 699,
            popular: true,
            features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"]
        }
    ]
}