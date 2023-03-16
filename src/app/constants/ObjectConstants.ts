import { IFaqs, ISectionWithImg, ITestimonials } from "../interfaces/i-common";

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
            title: "How will you get my information?",
            description: "It's the simplest step, you just need to login and upload an existing resume if you have or fill an introductory form where you can let us know more about your background, current goals, and experiences. The form takes only about a few minutes to complete. Your responses will help us determine the content and structure of your resume."
        },
        {
            id: "faq01",
            title: "How do you develop my resume?",
            description: `We collect your data, and then our pre-trained generative tech writes your resume, which then goes to a human resume vetting analyst for coherence and consistency of the resume - just the way you want it.
            Finally, the resume is delivered to you in word and PDF formats. We are a comprehensive solution provider for your career application needs. Just provide us with your information like work-ex, education, skills and extra-curriculars, and we will take care of the rest.`
        },
        {
            id: "faq02",
            title: "How much will it cost to use the CVbanade services?",
            description: "You have a variety of options to choose from here. The kickstarter plan starts from Rs. 299 only."
        },
        {
            id: "faq03",
            title: "How long should a resume be?",
            description: "It is always recommended to make a one-page document. However, if you're a professional (CA, lawyer, freelancer) or academician with a considerable amount of experience in your industry, you can make a two-page document that enlists all roles, publications and assignments taken so far."
        },
        {
            id: "faq04",
            title: "What does CVbanade exactly offer?",
            description: "CVbanade offers an end-to-end solution for a tedious, time-consuming resume writing exercise. We not only save you from spending hours deciding on the perfect format or description. We collect your data and deliver your personalized resume directly to you."
        },
        {
            id: "faq05",
            title: "What can I do if I need help with my CVbanade account?",
            description: "If you experience any issues while using the CVbanade website, you can mail us at team@cvbanade.com."
        },
        {
            id: "faq06",
            title: "How do I build a resume in CVbanade?",
            description: "You give us your details in a simple form or an old resume if you have and we craft a personalized resume for you. You don't have to spend hours deciding the right skills or fuss over the right font or the right description of your past jobs. CVbanade provides you with a comprehensive solution from collecting information to delivering you an ATS compliant, clean and crisp resume."
        },
        {
            id: "faq07",
            title: "Will my resume be accessible to everyone?",
            description: "Your information will be kept private and will be accessible only to you using your login credentials."
        }];

    public static HOME_PG_ICON_SECTION: ISectionWithImg[] = [
        {
            title: "ELEVATE your game",
            img: "fa-solid fa-bug-slash content-info-icon",
            description: `ELEVATE your game with our comprehensive solution that covers everything from curating and vetting the content to design setting you up for SUCCESS.`
        },
        {
            title: "STANDOUT from your peers",
            img: "fa-solid fa-hand-sparkles content-info-icon",
            description: `Don't let your resume get lost on the career portals - our expertly crafted, ATS-compliant resumes helps you STANDOUT and get you noticed by the hiring managers from Day 1.`
        },
        {
            title: "MAXIMIZE your chances",
            img: "fa fa-file-signature content-info-icon",
            description: `MAXIMIZE your chances of securing your dream job with our team of dedicated human resume experts and proofreaders, who help you truly represent your skills and experience.`
        }];

    public static TESTIMONIAL_NAV_ICON: string[] = [
        `<i class="fa-solid fa-caret-left"></i>`, `<i class="fa-solid fa-caret-right"></i>`
    ]
}