import aspLogo from "../media/AspLabs-removebg-preview.png"
import rtiLogo from "../media/logo_with_rti_v2 (1).png"
import nppktLogo from "../media/nppkt-removebg-preview.png"
import iwLogo from "../media/iw-removebg-preview.png"

export const workFabTabs = [ "HISTORY", "SKILLS", "PORTFOLIO" ];
export const workHistory = [
    {
        companyColor: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(163, 163, 163, 0.4), rgba(0, 0, 0, 0))",
        companyCard: {
            companyLogo: aspLogo,
            companyName: "ASP Labs",
            companyObjective: "Cyber security company",
            companyDescription: "Development of a comprehensive solution to ensure information security, " +
                "tailored to the specifics of industrial enterprises.",
            companySiteLink: "https://asplabs.ru/"
        },
        companyHistory: [
            {
                position: "Information Security Auditor",
                positionStartDate : "February 2018",
                positionEndDate: "September 2018",
                positionDescription: "Conducting information security audits for the largest energy companies " +
                    "in Russia.Drafting of normative documents and acts regarding the conducted audits. " +
                    "Writing an expert opinion and recommendations"
            }
        ]
    },
    {
        companyColor: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(255, 0, 0, 0.4), rgba(0, 0, 0, 0))",
        companyCard: {
            companyLogo: nppktLogo,
            companyName: "JSC \"NPPKT\"",
            companyObjective: "Cyber security company",
            companyDescription: "Development of elements of a trusted environment (software and hardware platform) " +
                "for the creation of automated systems in a secure design (APS) and automated control systems (ACS)",
            companySiteLink: "https://xn--j1afgaq.xn--p1ai/"
        },
        companyHistory: [
            {
                position: "Information Security Auditor",
                positionStartDate : "September 2018",
                positionEndDate: "September 2019",
                positionDescription: "Conducting information security audits for the largest energy companies " +
                    "in Russia.Drafting of normative documents and acts regarding the conducted audits. " +
                    "Writing an expert opinion and recommendations"
            }
        ]
    },
    {
        companyColor: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 251, 254, 0.4), rgba(0, 0, 0, 0))",
        companyCard: {
            companyLogo: rtiLogo,
            companyName: "JSC \"RTI\"",
            companyObjective: "Developer, manufacturer and supplier of automated control systems",
            companyDescription: "A diversified group of companies specializing in the development of information and " +
                "analytical systems, circulation and custom software, the production of communications and data " +
                "transmission and the provision of IT services.",
            companySiteLink: "https://www.aorti.ru/"
        },
        companyHistory: [
            {
                position: "Head of Information Security Audit Department",
                positionStartDate : "November 2018",
                positionEndDate: "October 2019",
                positionDescription: "Conducting information security audits for the largest energy companies " +
                    "in Russia. Drafting of normative documents and acts regarding the conducted audits. " +
                    "Writing an expert opinion and recommendations"
            },
        ]
    },
    {
        companyColor: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(25, 255, 25, 0.4), rgba(0, 0, 0, 0))",
        companyCard: {
            companyLogo: iwLogo,
            companyName: "Infowatch",
            companyObjective: "A group of companies developing information security software products and solutions",
            companyDescription: "InfoWatch products allow clients to reduce to a minimum the risks associated with " +
                "the processing, movement and storage of information within the corporate secure area and outside it.",
            companySiteLink: "https://www.infowatch.ru/"
        },
        companyHistory: [
            {
                position: "Software developer",
                positionStartDate : "November 2019",
                positionEndDate: "December 2020",
                positionDescription: "Started my professional journey in software engineering. Made from scratch " +
                    "several major projects of ARMA family (Infowatch partner company) - ARMA Management console, " +
                    "ARMA Industrial Endpoint",
            },
            {
                position: "Middle Software developer",
                positionStartDate : "December 2020",
                positionEndDate: "June 2021",
                positionDescription: "Continued my journey with Infowatch ARMA team. Shifted toward ARMA Management " +
                    "console solution. Started to take role in major product architecture and project decisions.",
            },
            {
                position: "Team lead",
                positionStartDate : "June 2021",
                positionEndDate: "Current time",
                positionDescription: "Got promoted to take lead role on ARMA Management console solution. Continued to " +
                    "work hard on this project, but now leading a team of 6 people"
            },
        ]
    },
]
