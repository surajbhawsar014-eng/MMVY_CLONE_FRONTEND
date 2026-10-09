export const HERO_BG =
  "https://plain-apac-prod-public.komododecks.com/202609/07/TuMdchcF2rXCEo1wodnl/image.png"

export const LOGO =
  "https://www.medhavikalyan.mp.gov.in/MedhaviChhatra/Medhavi_New/images/logo/logo.svg"

// type: "dropdown" | "link" | "faq"
export const NAV_ITEMS = [
  {
    label: "Home", icon: "fa-house", type: "dropdown",
    children: [
      { label: "Home", url: "#main-content" },
      { label: "About MMVY", url: "#main-content" },
    ],
  },
  { label: "Login", icon: "fa-right-to-bracket", type: "link", url: "https://mptasc.mp.gov.in/login" },
  {
    label: "Scheme", icon: "fa-cube", type: "dropdown",
    children: [
      { label: "Scheme Details", url: "#main-content" },
      { label: "Eligibility", url: "#main-content" },
    ],
  },
  { label: "FAQ", icon: "fa-circle-question", type: "faq", url: "#main-content" },
  {
    label: "Institutes and their Codes", icon: "fa-building-columns", type: "dropdown",
    children: [
      { label: "Institute List", url: "#institutes" },
      { label: "Institute Codes", url: "#institutes" },
    ],
  },
  {
    label: "Courses", icon: "fa-book", type: "dropdown",
    children: [{ label: "Course List", url: "#courses" }],
  },
  {
    label: "Application for MMVY ONLY", icon: "fa-list", type: "dropdown",
    children: [
      { label: "New Application", url: "#main-content" },
      { label: "Renewal Application", url: "#main-content" },
    ],
  },
  { label: "Scheme Documents", icon: "fa-print", type: "link", url: "#main-content" },
]

export const CATEGORIES = [
  "Medical Colleges",
  "IIT Institutes",
  "NIT Institutes",
  "IIM Institutes",
  "CLAT(NLIU) Institutes",
  "Higher Education Institutes",
  "Technical Education Institutes",
  "Others",
]

export const INSTRUCTIONS = [
  "MMVY योजना का क्रियान्वयन सरल एवं पेपर-लेस प्रक्रिया के अनुसार सुनिश्चित करने हेतु संस्थाओं को छात्रों के प्रपोजल की स्कैन कॉपी को पोर्टल पर अपलोड करने की बाध्यता को समाप्त कर दिया गया है।",
  "MMVY योजना का क्रियान्वयन सरल एवं पेपर-लेस प्रक्रिया के अनुसार सुनिश्चित करने हेतु Sanctioning Authorities को छात्रों के छात्रवृत्ति स्वीकृति आदेश / sanction order की स्कैन कॉपी को पोर्टल पर अपलोड करने की बाध्यता को समाप्त कर दिया गया है।",
  "Facility to report the recovery of MMVY benefit and permit the applicant to apply for some other scheme has been provided to Sanctioning / Recovery Authority.",
]

export const NAV_CARDS = [
  { title: "Institutes Module", text: "Institutes", icon: "fa-building-columns", url: "#institutes" },
  { title: "Out of State Guidelines", text: "Guidelines of Out of State Students / Institutes", icon: "fa-file-lines", url: "#out-of-state" },
  { title: "Courses Module", text: "Courses", icon: "fa-book", url: "#courses" },
  { title: "Students Portal", text: "Students", icon: "fa-user-graduate", url: "#students" },
  { title: "Social Audit & RTI", text: "Social Audit / R.T.I.", icon: "fa-magnifying-glass", url: "#rti" },
  { title: "Medical Education", text: "Medical Education", icon: "fa-user-doctor", url: "#medical" },
]

// red = highlighted text
export const NOTICES = [
  { red: false, text: "सत्र 2025-26 में प्रवेशित विद्यार्थियों के नवीन आवेदन (fresh applications) तथा सत्र 2024-25 एवं सत्र 2023-24 हेतु नवीनीकरण आवेदनों (renewal applications) को पोर्टल पर प्राप्त करने हेतु निम्न तालिकाओं में उल्लेखित तिथि अनुसार आवेदन जमा करने की अंतिम तिथि निर्धारित की जाती है :-" },
  { red: true, text: "सत्र 2025-26 (नवीन आवेदन/fresh application) जमा करने हेतु अंतिम तिथि: 20/08/2026" },
  { red: true, text: "सत्र 2024-25 एवं सत्र 2023-24 के (नवीनीकरण आवेदन/renewal application) जमा करने हेतु अंतिम तिथि: 20/08/2026" },
  { red: false, text: "अंतिम तिथि के पश्चात आवेदन पोर्टल पर स्वीकार नहीं किए जाएंगे। सत्र 2022-23 एवं इससे पूर्व सत्रों के आवेदनों को जमा करने की निर्धारित तिथि समाप्त हो चुकी है, अतः इन सत्रों के लिए पोर्टल पर कोई भी आवेदन स्वीकार नहीं किया जा रहा है।" },
  { red: false, text: "संस्थाओं से अनुरोध है कि, उक्त अंतिम तिथि के संबंध में विद्यार्थियों को तत्काल सूचित करें एवं प्राप्त आवेदनों को सत्यापित एवं स्वीकृत करने का कष्ट करें।" },
  { red: false, text: "विलंब की स्थिति में योजना के लाभ से वंचित रह जाने पर समस्त जिम्मेदारी विद्यार्थी/संस्था की होगी।" },
  { red: false, helpline: true, text: "" },
  { red: true, text: "वर्तमान में सत्र 2026-27 के नवीन/नवीनीकरण आवेदन पोर्टल पर स्वीकार नहीं किए जा रहे हैं एवं इन आवेदनों को प्राप्त करने के संबंध में आवश्यक जानकारी पृथक से पोर्टल पर प्रदर्शित की जाएगी।" },
]
