import { IFaqs, ISectionWithImg } from "../interfaces/i-common";

export class ObjectConstants {
    public static CAROUSEL_IMGS: string[] = ['cvbc-03.jpg', 'cvbc-02.jpg', 'cvbc-01.jpg'];

    public static CLIENT_TESTIMONY: ISectionWithImg[] = [
        {
            title: "Binny Chopra",
            img: "dummy-t1.jpg",
            description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit."
        },
        {
            title: "Partth Mahajan",
            img: "dummy-t2.jpg",
            description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit."
        },
        {
            title: "Ashneer Grover",
            img: "dummy-t4.jpg",
            description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit."
        },
        {
            title: "Falguni Nayyar",
            img: "dummy-t5.jpg",
            description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit."
        },
        {
            title: "Rishi Sunak",
            img: "dummy-t3.jpg",
            description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit."
        },
        {
            title: "No pic user",
            img: "dummy-t6.png",
            description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit."
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
}