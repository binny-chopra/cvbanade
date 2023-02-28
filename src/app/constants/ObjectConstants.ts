import { IFaqs, ISectionWithImg } from "../interfaces/i-common";

export class ObjectConstants {
    public static CAROUSEL_IMGS: string[] = ['cvbc-03.jpg', 'cvbc-02.jpg', 'cvbc-01.jpg'];

    public static CLIENT_TESTIMONY: ISectionWithImg[] = [
        {
            title: "Binny Chopra",
            img: "dummy-t2.jpg",
            description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit."
        },
        {
            title: "Partth Mahajan",
            img: "dummy-t1.jpg",
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
            id: "faq01",
            title: "What do I get ?",
            description: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
        },
        {
            id: "faq02",
            title: "What if I don't like or if I am not satisfied ?",
            description: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
        },
        {
            id: "faq03",
            title: "What if ?",
            description: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
        }];

    public static HOME_PG_ICON_SECTION: ISectionWithImg[] = [
        {
            title: "Beat the Resume Bots",
            img: "fa-solid fa-bug-slash content-info-icon",
            description: `75% of resumes filtered by ATS. Get to the top of "YES" pile with ATS friendly resume.`
        },
        {
            title: "Customizable Resume Templates",
            img: "fa-solid fa-hand-sparkles content-info-icon",
            description: `75% of resumes filtered by ATS. Get to the top of "YES" pile with ATS friendly resume.`
        },
        {
            title: "Expertly Written Context",
            img: "fa fa-file-signature content-info-icon",
            description: `75% of resumes filtered by ATS. Get to the top of "YES" pile with ATS friendly resume.`
        }];
}