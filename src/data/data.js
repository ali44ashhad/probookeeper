import images from '../assets/images.js'
import {
  LineChart,
  Users,
  CreditCard,
  Headphones,
  FileText,
  Clock,
  Calculator, 
  DollarSign, 
  TrendingUp, 
  ListChecks, 
  Award,
   Tag, Search
} from 'lucide-react';

export const cardData = [
  {
    icon: LineChart,
    title: 'See your profits at a glance',
    description: 'Get a clear snapshot of your income and expenses over time.',
  },
  {
    icon: Users,
    title: 'Simplify payroll',
    description: 'Pay your team accurately while we handle payroll taxes for you.',
  },
  {
    icon: CreditCard,
    title: 'Get paid faster',
    description: 'Accept payments online or on the go via card, eCheck, ACH, and more.',
  },
  {
    icon: Headphones,
    title: 'Done-for-you bookkeeping',
    description: 'Keep your books clean for tax season and managed all year round.',
  },
  {
    icon: FileText,
    title: 'Track every expense',
    description: 'Stay on top of spending and never miss a tax deduction.',
  },
  {
    icon: Clock,
    title: 'Manage time with ease',
    description: "Track, edit, and approve your team's hours from any device.",
  },
];


// cards //
export const features = [
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'We’re committed to delivering results and are available around the clock to support your business whenever you need us.',
  },
  {
    icon: Calculator,
    title: 'High-Quality Service',
    description: 'Our team builds strong, supportive relationships and consistently delivers service that exceeds your expectations.',
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    description: 'No hidden fees or surprise charges—pay only for the services you actually use.',
  },
  {
    icon: TrendingUp,
    title: 'Boost Your Growth',
    description: 'We help position your business for success and drive steady growth with strategies that keep you ahead.',
  },
  {
    icon: ListChecks,
    title: 'Scalable Solutions',
    description: 'Our expert team grows with you, ensuring your bookkeeping stays organized as your business expands.',
  },
  {
    icon: Award,
    title: 'Trusted & Reliable',
    description: 'With years of experience, businesses rely on us for dependable and accurate financial management.',
  },
];

// seventth section home page data //
export const productData = [
  {
    title: 'Probook Pro Plus 2022 – Yearly Subscription',
    users: '1 User',
    price: '$399.99',
    oldPrice: '$599.99',
    sale: false,
    image: images.QBSpro,
  },
  {
    title: 'Probook Pro 2021 – Non Subscription 1 User',
    users: '1 User',
    price: '$399.99',
    oldPrice: '$599.99',
    sale: true,
    image: images.QBS2021,
  },
  {
    title: 'Probook Premier Plus 2021 – Yearly Subscription',
    users: '1 User',
    price: '$449.99',
    oldPrice: '$799.99',
    sale: false,
    image: images.QBSpremier,
  },
  {
    title: 'Probook Mac 2021 – Non Subscription',
    users: '1 User',
    price: '$499.99',
    oldPrice: '$699.99',
    sale: true,
    image: images.QBSmac,
  },
];


export const faqData = [
  {
    id: 1,
    question: "Which Probook Desktop version is right for me?",
    answer: "Choosing the right Probook Desktop version depends on your business needs, number of users, and required features. We offer personalized consultations to assess your requirements and recommend the best fit (Pro, Premier, or Enterprise) so you have the right tools to succeed."
  },
  {
    id: 2,
    question: "How much does Probook cleanup or reconciliation cost?",
    answer: "Cleanup or reconciliation costs vary based on the complexity and volume of transactions. We provide a free initial assessment and a clear, upfront quote tailored to your business’s current situation."
  },
  {
    id: 3,
    question: "How much does Probook setup cost?",
    answer: "Setup pricing depends on the version (Online/Desktop) and how complex your data migration is. Our packages include complete data setup, customization, and training to get you fully up and running."
  },
  {
    id: 4,
    question: "How do I hire a Probook expert?",
    answer: "You can hire one of our US-based certified ProAdvisors through our consulting service. We connect you with an expert who understands your industry and business requirements."
  },
  {
    id: 5,
    question: "Which accounting software is best for small and medium-sized businesses?",
    answer: "For many small and mid-sized businesses, Probook is a leading choice due to its powerful features, scalability, and integrations. We help tailor it to fit your specific business needs."
  },
  {
    id: 6,
    question: "Is Probook cloud hosting a good choice for my business?",
    answer: "Cloud hosting provides benefits like anytime access, automatic backups, and improved security. It’s a great option for businesses that need flexibility, and we can help determine if it’s right for you."
  },
  {
    id: 7,
    question: "When will Probook 2024 be available?",
    answer: "We keep track of official release updates. New versions are typically launched in the fall, and we notify our clients as soon as they’re available while helping with smooth upgrades."
  },
];

/// plans //
export const plans = [
  {
    name: 'Simple Start',
    originalPrice: '$30/mo',
    price: '$15 / mo',
    features: [
      'Monitor income and expenses',
      'Create invoices and receive payments',
      'Optimize tax deductions',
      'Generate basic reports',
      'Capture and organize receipts',
      'Track mileage',
      'Manage cash flow effectively',
      'Track sales and sales tax',
      'Create and send estimates',
      'Handle 1099 contractors',
      'Connect one sales channel',
    ],
    buttonColor: 'bg-green-700 hover:bg-green-800',
  },
  {
    name: 'Essentials',
    originalPrice: '$55/mo',
    price: '$27.50 / mo',
    features: [
      'Monitor income and expenses',
      'Create invoices and receive payments',
      'Optimize tax deductions',
      'Generate detailed reports',
      'Capture and organize receipts',
      'Track mileage',
      'Manage cash flow effectively',
      'Track sales and sales tax',
      'Create and send estimates',
      'Handle 1099 contractors',
      'Connect up to 3 sales channels',
      'Supports up to 3 users',
      'Manage and pay bills',
      'Track billable time',
    ],
    buttonColor: 'bg-green-700 hover:bg-green-800',
  },
  {
    name: 'Plus',
    originalPrice: '$85/mo',
    price: '$42.50 / mo',
    features: [
      'Monitor income and expenses',
      'Create invoices and receive payments',
      'Optimize tax deductions',
      'Generate advanced reports',
      'Capture and organize receipts',
      'Track mileage',
      'Manage cash flow effectively',
      'Track sales and sales tax',
      'Create and send estimates',
      'Handle 1099 contractors',
      'Connect unlimited sales channels',
      'Supports up to 5 users',
      'Manage and pay bills',
      'Track billable time',
      'Track inventory',
      'Monitor project profitability',
    ],
    buttonColor: 'bg-green-700 hover:bg-green-800',
  },
  {
    name: 'Advanced',
    originalPrice: '$200/mo',
    price: '$100 / mo',
    features: [
      'Monitor income and expenses',
      'Create invoices and receive payments',
      'Optimize tax deductions',
      'Generate powerful, in-depth reports',
      'Capture and organize receipts',
      'Track mileage',
      'Manage cash flow effectively',
      'Track sales and sales tax',
      'Create and send estimates',
      'Handle 1099 contractors',
      'Connect unlimited sales channels',
      'Supports up to 25 users',
      'Manage and pay bills',
      'Track billable time',
      'Track inventory',
      'Monitor project profitability',
      'Advanced analytics with Excel',
    ],
    buttonColor: 'bg-green-700 hover:bg-green-800',
  },
];

// refund policy data //
export const refundData = [
  {
    title: "General Refund Eligibility",
    content: [
      "Refund requests must be submitted within 30 days of the original purchase date.",
      "To be eligible for a refund, the service or product must meet the specific criteria outlined in the relevant section below.",
      "All refunds are subject to a review process and may take 5-10 business days to process once approved."
    ]
  },
  {
    title: "Service/Consultation Fee Refunds",
    content: [
      "**Prior to Service Commencement:** A full refund will be issued if the cancellation request is received before any consultation, work, or service delivery has begun.",
      "**Partial Completion:** If the service has commenced but is less than 50% complete, a partial refund, minus the costs incurred for completed work and administrative fees, may be provided.",
      "**Service Completion:** No refunds will be provided for services that have been fully rendered or completed, as determined by the agreed-upon scope of work."
    ]
  },
  {
    title: "Software & Digital Product Refunds (Reseller Products)",
    content: [
      "Refunds for third-party software (e.g., Probook products) are strictly governed by the original software publisher's policy (Probook). We will assist in facilitating the refund process based on their terms.",
      "For digital downloads or license keys that have been activated or downloaded, refunds are generally not permitted unless the product is proven to be defective and a resolution cannot be provided.",
      "Subscription service cancellations will result in the service remaining active until the end of the current billing period, with no prorated refunds issued for the remaining time."
    ]
  },
  {
    title: "Non-Refundable Items",
    content: [
      "Administrative or transaction processing fees.",
      "Custom development or integration costs specifically incurred for the client.",
      "Expired promotional or discounted purchases.",
      "Any services or products explicitly marked as 'Non-Refundable' at the time of purchase."
    ]
  },
  {
    title: "How to Submit a Refund Request",
    content: [
      "All refund requests must be initiated by contacting our support team via email or through the client portal.",
      "The request must include the original order number, date of purchase, the reason for the refund, and any supporting documentation.",
      "Failure to provide adequate information may delay the refund process."
    ]
  }
];


// terms //
export const termsSections = [
  {
    title: "1. Acceptance of Terms",
    content: [
      "By accessing and using the services provided by **QBS Accouning** ('we', 'us', or 'our'), you accept and agree to be bound by the terms and provision of this agreement.",
      "If you do not agree to abide by these terms, please do not use our services or access our website."
    ]
  },
  {
    title: "2. Provision of Services",
    content: [
      "We provide accounting, bookkeeping, and software reseller services. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without notice.",
      "While we strive for accuracy, we do not warrant that the information provided on our website or through our services is entirely error-free, complete, or current."
    ]
  },
  {
    title: "3. User Responsibilities",
    content: [
      "You agree to provide accurate, current, and complete information as required for the provision of our services.",
      "You are responsible for maintaining the confidentiality of any account information, including usernames and passwords, and for all activities that occur under your account.",
      "You agree not to use our services for any unlawful purpose or in any way that could damage, disable, overburden, or impair our infrastructure."
    ]
  },
  {
    title: "4. Payment and Invoicing",
    content: [
      "Fees for services and products are due as strictly outlined in the specific service agreement or invoice provided.",
      "**Late Payments:** We reserve the right to charge interest on overdue amounts or suspend services until payment is received in full.",
      "Prices for software products (e.g., Probook) are subject to change based on the vendor's (Probook) pricing policies."
    ]
  },
  {
    title: "5. Intellectual Property",
    content: [
      "All content provided on this website, including text, graphics, logos, and software, is the property of QBS Accouning or its content suppliers and is protected by international copyright laws.",
      "You may not reproduce, duplicate, copy, sell, resell, or exploit any portion of the Service without express written permission by us."
    ]
  },
  {
    title: "6. Limitation of Liability",
    content: [
      "In no event shall QBS Accouning be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our services.",
      "Our total liability for any claim arising out of or relating to these terms or our services shall not exceed the amount paid by you for the specific service giving rise to the claim."
    ]
  },
  {
    title: "7. Governing Law",
    content: [
      "These Terms and Conditions are governed by and construed in accordance with the laws of the jurisdiction in which our company is established, without regard to its conflict of law principles."
    ]
  },
  {
    title: "8. Changes to Terms",
    content: [
      "We reserve the right to update or modify these Terms and Conditions at any time without prior notice. Your continued use of the website or services following any changes constitutes your acceptance of the new Terms."
    ]
  }
];

// privacy policy data //
export const policySections = [
  {
    title: "1. Information We Collect",
    content: [
      "**Personal Identification Information (PII):** We may collect personal information such as your name, email address, phone number, and mailing address when you register for services, subscribe to a newsletter, or contact us for support.",
      "**Financial and Accounting Data:** We collect financial information (e.g., transaction details, bank information, business revenue) strictly for the purpose of providing accounting and bookkeeping services. This data is handled with the highest level of confidentiality and security.",
      "**Non-Personal Information:** We automatically collect non-personal information about your visit, including IP address, browser type, device type, pages visited, and time spent on our site. This helps us improve our service delivery."
    ]
  },
  {
    title: "2. How We Use Your Information",
    content: [
      "**Service Delivery:** To provide and maintain the accounting, bookkeeping, and software reseller services you have requested.",
      "**Communication:** To respond to your inquiries, send administrative information, and provide updates regarding your services or account.",
      "**Improvement:** To personalize user experience, improve our website, and analyze service usage trends.",
      "**Compliance:** To comply with legal obligations and to protect against illegal activities or fraud."
    ]
  },
  {
    title: "3. How We Share Your Information",
    content: [
      "**Third-Party Vendors:** We may share necessary PII with trusted third parties who assist us in operating our business (e.g., Probook for Probook licensing, cloud hosting providers). These parties are obligated to keep your information confidential.",
      "**Legal Requirements:** We will disclose your information where required to do so by law or subpoena, or if we reasonably believe that such action is necessary to comply with the law and the reasonable requests of law enforcement.",
      "**Business Transfer:** If we are involved in a merger, acquisition, or asset sale, your information may be transferred as a business asset. We will notify you before your PII becomes subject to a different privacy policy."
    ]
  },
  {
    title: "4. Data Security",
    content: [
      "We implement a variety of security measures, including encryption and access controls, to maintain the safety of your personal and financial information.",
      "While we strive to use commercially acceptable means to protect your information, no method of transmission over the Internet or method of electronic storage is 100% secure. Therefore, we cannot guarantee its absolute security.",
      "You are responsible for keeping your password and account details confidential."
    ]
  },
  {
    title: "5. Data Retention",
    content: [
      "We retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy, including for the purpose of satisfying any legal, accounting, or reporting requirements.",
      "When we no longer need to process your personal data, we will either delete or anonymize it."
    ]
  },
  {
    title: "6. Your Rights (Applicable Jurisdictions)",
    content: [
      "Depending on your location, you may have the right to access, update, or request the deletion of your personal data.",
      "You have the right to object to the processing of your personal data and, under certain circumstances, to request data portability.",
      "To exercise any of these rights, please contact us using the information provided below."
    ]
  }
];


export const qbsBusinessData = [
  {
    icon: Clock,
    title: "Round-the-Clock Assistance",
    description:
      "Our team is available 24/7 to help resolve your software queries, ensuring your business runs smoothly without interruption.",
  },
  {
    icon: Calculator,
    title: "Professional Expertise",
    description:
      "Get reliable guidance from seasoned specialists who deliver accurate solutions with a strong commitment to professionalism.",
  },
  {
    icon: Headphones,
    title: "Affordable Solutions",
    description:
      "We provide transparent pricing with no surprise fees. Pay only for the services you need, at rates that fit your budget.",
  },
  {
    icon: Tag,
    title: "Boost Your Productivity",
    description:
      "Enhance operational efficiency with strategic support designed to streamline your workflow and maximize output.",
  },
  {
    icon: ListChecks,
    title: "Flexible & Scalable",
    description:
      "Whether your business is growing or restructuring, our adaptable services scale to match your operational demands.",
  },
  {
    icon: Search,
    title: "Trusted by Businesses",
    description:
      "Companies rely on our long-standing expertise and consistent support, earning us a reputation for reliability and trust.",
  },
];




export const qbsBusinessSuccessData = [
  {
    icon: Clock,
    title: "Instant Response Support",
    description:
      "Our dedicated support desk ensures that your queries are addressed immediately so your operations never slow down.",
  },
  {
    icon: Calculator,
    title: "Expert-Driven Solutions",
    description:
      "Work with trained professionals who deliver precise, detail-oriented solutions tailored to your financial processes.",
  },
  {
    icon: Headphones,
    title: "Cost-Effective Assistance",
    description:
      "We provide high-value services at sensible pricing, helping you manage your finances efficiently without overspending.",
  },
 
];
