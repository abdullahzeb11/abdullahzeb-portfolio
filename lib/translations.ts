export type Locale = "en" | "ar";

export type Dictionary = (typeof translations)["en"];

export const translations = {
  en: {
    profile: {
      name: "Abdullah Zeb",
      title: "Senior Software Engineer · Full-Stack & SFCC Developer",
      role: "Senior Software Engineer",
      location: "Riyadh, Saudi Arabia",
      city: "Riyadh",
      languages: "English · Arabic",
      availability: "Open to business and startup projects",
      cta: "Let's talk",
    },
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Work",
      stack: "Stack",
      services: "Services",
      contact: "Contact",
      home: "Home",
    },
    hero: {
      status: "Available for new projects",
      headlineL1: "I build web platforms",
      headlineL2: "for ecommerce",
      headlineHighlight: "and internal teams.",
      sub:
        "I'm Abdullah, a software engineer based in Riyadh. I build business websites, ecommerce platforms, dashboards and internal systems for companies across the GCC.",
      ctaPrimary: "View projects",
      ctaSecondary: "Contact me",
      resume: "Download résumé →",
      stats: [
        { label: "Years building", value: "5+" },
        { label: "Enterprise launches", value: "10+" },
        { label: "Global retail brands", value: "3+" },
        { label: "Markets supported", value: "EN · AR" },
      ],
    },
    about: {
      eyebrow: "About",
      title: "Experience building real-world business platforms.",
      description:
        "Over five years of experience building ecommerce platforms, business systems and frontend applications for companies in Pakistan and Saudi Arabia.",
      currentlyEyebrow: "Currently",
      currentlyLine: "Building bilingual business web platforms at",
      currentlyCompany: "Daffah",
      currentlyTail: ", Riyadh.",
      labels: {
        languages: "Languages",
        based: "Based",
        experience: "Experience",
        status: "Status",
        years: "5+ years",
      },
      pillars: [
        {
          title: "Saudi market experience",
          body:
            "Day-to-day delivery for Riyadh and Jeddah-based companies. Bilingual platforms, RTL-first design and content workflows tuned for local stakeholders.",
        },
        {
          title: "SFCC at scale",
          body:
            "Salesforce Commerce Cloud SFRA cartridges, OCAPI integrations and multi-locale rollouts on global retail programmes.",
        },
        {
          title: "Business automation",
          body:
            "Workflow systems, approval chains, dashboards and integrations that take the manual work off operations teams.",
        },
        {
          title: "Quality & usability",
          body:
            "Fast, responsive interfaces with clean code and attention to usability.",
        },
      ],
    },
    experience: {
      eyebrow: "Experience",
      title: "Five years across commerce and business systems.",
      description:
        "From SFCC programmes for global retailers to bilingual Saudi business platforms. Here's the path.",
      items: [
        {
          company: "Daffah",
          role: "Web Developer",
          location: "Riyadh, Saudi Arabia",
          period: "2024 — Present",
          summary:
            "Currently contributing to the development and maintenance of the company’s Magento-based ecommerce platform and Badran HR software system, focusing on business automation, workflow development, integrations, and performance optimization.",
          highlights: [
            "Developed and maintained the company's Magento ecommerce platform in PHP, JavaScript, jQuery and MySQL.",
            "Integrated Odoo (ERP) and OTO with Magento for unified order and inventory sync.",
            "Built custom APIs connecting Magento with internal business systems.",
            "Developed automation scripts and approval workflows inside the Badran HR system, including contract renewals and employee task management.",
            "Managed hosting and deployments via aaPanel; optimized frontend responsiveness and server-side performance.",
          ],
        },
        {
          company: "Prototyping Technology",
          role: "Web Developer",
          location: "Jeddah, Saudi Arabia",
          period: "2022 — 2024",
          summary:
            "Worked as a frontend-focused web developer, building responsive websites and interactive user interfaces for business and ecommerce platforms across the GCC region.",
          highlights: [
            "Built responsive, cross-browser websites for desktop, tablet and mobile across business and ecommerce platforms.",
            "Converted Figma and PSD designs into pixel-perfect frontend interfaces.",
            "Built reusable React.js components to improve scalability and consistency.",
            "Optimized frontend performance through code reduction, asset trimming and responsive rendering.",
            "Collaborated with designers and backend developers to deliver seamless user experiences.",
          ],
        },
        {
          company: "DigitsCom Technologies",
          role: "SFCC Developer",
          location: "Pakistan",
          period: "2020 — 2022",
          summary:
            "Worked on enterprise Salesforce Commerce Cloud (SFCC) ecommerce projects for international retail brands, contributing to storefront development, feature implementation, bug fixing, and platform enhancements across SFRA and SiteGenesis architectures.",
          highlights: [
            "Built and maintained SFCC storefronts using SFRA and SiteGenesis — controllers, ISML templates, Business Manager, catalogs and promotions.",
            "Contributed to enterprise retail programmes for Dynamite Clothing, JLR MultiSites and Scarpamondo.",
            "Built and customized reusable SFCC cartridges to extend platform functionality.",
            "Integrated third-party services and payment flows via SFCC service frameworks.",
            "Enhanced cart, wishlist, checkout and product experience functionalities across multiple storefronts.",
          ],
        },
      ],
    },
    projects: {
      eyebrow: "Selected work",
      title: "A selection of business, ecommerce and frontend projects.",
      description:
        "A representative slice. Bilingual corporate platforms, internal business systems and SFCC programmes for global retailers.",
      discuss: "Discuss a project",
      live: "Live demo",
      code: "Code",
      proprietary: "Internal client work — code & demos not public",
      viewAll: "View all 11 projects",
      backHome: "Back to home",
      allTitle: "Every project, in one place.",
      allDescription:
        "The complete archive — AI tools, production SaaS, enterprise commerce and bilingual business platforms.",
      items: [
        {
          slug: "meeting-room",
          title: "Meeting Room Reservation System",
          tag: "Internal SaaS · In production",
          description:
            "Internal booking platform in daily use across the company's headquarters. Bilingual EN/AR with full RTL, realtime updates across sessions, role-based restricted rooms and a complete audit trail. Every rule — working hours, slot alignment, no double-booking — is enforced in the database with Postgres constraints and RLS, so the UI can't be bypassed.",
          metrics: [
            { label: "Users", value: "50+ staff" },
            { label: "Integrity", value: "DB-enforced" },
            { label: "Audit", value: "Full trail" },
          ],
        },
        {
          slug: "razan",
          title: "Razan · Hijama Clinic Platform",
          tag: "Healthcare · Bilingual",
          description:
            "Premium bilingual (Arabic-first / English) clinic and booking platform for a Riyadh hijama practice. Full RTL, a custom brand system, a Prisma-backed schema for appointments, services and reviews, plus SEO with MedicalBusiness JSON-LD and edge-rendered OG images.",
          metrics: [
            { label: "Markets", value: "AR · EN" },
            { label: "Layout", value: "Full RTL" },
            { label: "Type", value: "Booking SaaS" },
          ],
        },
        {
          slug: "ai-doc-qa",
          title: "AI Document Q&A",
          tag: "AI · Bilingual",
          description:
            "Upload a PDF and ask questions in natural language. Bilingual Arabic and English, with cited source passages and streaming answers.",
          metrics: [
            { label: "Model", value: "Claude API" },
            { label: "Search", value: "Vector" },
            { label: "Queries", value: "EN · AR" },
          ],
        },
        {
          slug: "fawtara",
          title: "Fawtara · VAT Invoicing",
          tag: "SaaS · Multi-tenant",
          description:
            "Multi-tenant SaaS for Saudi SMBs to issue VAT-compliant bilingual invoices, manage customers and track simple inventory.",
          metrics: [
            { label: "Type", value: "Multi-tenant" },
            { label: "Invoicing", value: "VAT-compliant" },
            { label: "PDFs", value: "EN · AR" },
          ],
        },
        {
          slug: "sfcc",
          title: "SFCC Retail Programmes",
          tag: "Salesforce Commerce Cloud",
          description:
            "Production work across Dynamite Clothing, JLR multi-site and Scarpamondo. SFRA cartridges, custom checkout, OCAPI integrations and multi-locale rollouts.",
          metrics: [
            { label: "Brands", value: "3" },
            { label: "Frameworks", value: "SFRA · SiteGenesis" },
            { label: "Type", value: "Retail commerce" },
          ],
        },
        {
          slug: "oasis-breeze",
          title: "Oasis Breeze HVAC",
          tag: "Bilingual · Business",
          description:
            "Bilingual Arabic/English corporate site for a Saudi HVAC company. Lead-generation, service catalogue, CMS-managed case studies and full RTL theming.",
          metrics: [
            { label: "Markets", value: "EN · AR" },
            { label: "Layout", value: "Full RTL" },
            { label: "Content", value: "CMS-driven" },
          ],
        },
        {
          slug: "hr-leave",
          title: "HR Leave Management System",
          tag: "Business Workflow",
          description:
            "Role-based leave automation platform with approval chains, balance accrual, calendar sync and exportable HR reporting.",
          metrics: [
            { label: "Workflow", value: "Multi-tier" },
            { label: "Access", value: "Role-based" },
            { label: "Reports", value: "Exportable" },
          ],
        },
        {
          slug: "attendance",
          title: "Employee Attendance Dashboard",
          tag: "Analytics",
          description:
            "Realtime attendance and productivity dashboard with KPI charts, anomaly detection on check-ins, geofence support and export pipelines for payroll.",
          metrics: [
            { label: "Data", value: "Realtime" },
            { label: "Access", value: "Role-based" },
            { label: "Export", value: "CSV · PDF" },
          ],
        },
        {
          slug: "restaurant",
          title: "Restaurant Ordering System",
          tag: "MERN · Commerce",
          description:
            "Full-stack ordering platform with menu management, cart, Stripe checkout, order tracking and a kitchen-facing operations console.",
          metrics: [
            { label: "Stack", value: "MERN" },
            { label: "Payments", value: "Stripe" },
            { label: "Roles", value: "Admin · Kitchen · Customer" },
          ],
        },
        {
          slug: "ai-saas",
          title: "AI SaaS Landing Experience",
          tag: "SaaS · Frontend",
          description:
            "SaaS marketing site with motion-driven storytelling, animated gradient meshes, scroll-linked sections and a clean pricing/CTA system.",
          metrics: [
            { label: "Style", value: "Motion-driven" },
            { label: "Sections", value: "Scroll-linked" },
            { label: "Build", value: "Production-ready" },
          ],
        },
        {
          slug: "construction",
          title: "Al-Sarh Al-Dhahabi Construction",
          tag: "Bilingual · Corporate",
          description:
            "Bilingual Arabic/English corporate site for a Saudi construction company. Service sections, contact form, full RTL support and instant load via CDN-based deployment.",
          metrics: [
            { label: "Markets", value: "EN · AR" },
            { label: "Layout", value: "Full RTL" },
            { label: "Build", value: "Single-page" },
          ],
        },
      ],
    },
    stack: {
      eyebrow: "Tech stack",
      title: "The toolchain I reach for daily.",
      description:
        "A pragmatic mix. Modern frontend for product polish, mature backends for reliability, commerce platforms for scale.",
      categories: {
        Frontend: "Frontend",
        Language: "Language",
        Commerce: "Commerce",
        Backend: "Backend",
        Database: "Database",
        APIs: "APIs",
        Tooling: "Tooling",
      },
    },
    services: {
      eyebrow: "Services",
      title: "What I build for clients.",
      description:
        "Services I provide for companies, startups and business teams.",
      items: [
        {
          title: "Business Web Development",
          description:
            "Production-grade websites and platforms for established companies, covering design systems, deployment and reliability.",
        },
        {
          title: "Business Dashboards",
          description:
            "Internal analytics, KPI and operations dashboards with realtime data, role-based access and exportable reporting.",
        },
        {
          title: "E-commerce Solutions",
          description:
            "Headless storefronts, custom checkout flows, payment integrations and ERP/PIM glue, built to convert and scale.",
        },
        {
          title: "SFCC Development",
          description:
            "Salesforce Commerce Cloud SFRA cartridges, multi-site rollouts, OCAPI integrations and performance optimization.",
        },
        {
          title: "Saudi Business Websites",
          description:
            "Bilingual Arabic/English corporate sites with full RTL support, on-brand polish and locally compliant content workflows.",
        },
        {
          title: "Business Automation",
          description:
            "Workflow systems, approval chains, scheduled jobs and integrations that take repetitive ops work off your team's plate.",
        },
        {
          title: "Frontend Engineering",
          description:
            "Pixel-precise interfaces, design system implementation, motion design and accessibility-first components.",
        },
        {
          title: "API Integrations",
          description:
            "Third-party APIs, webhooks, payment gateways, CRM and ERP connectors, designed for resilience and clean error surfaces.",
        },
      ],
    },
    principles: {
      eyebrow: "How I build projects",
      title: "My approach to every project.",
      description:
        "Six things that stay consistent across every project I ship.",
      items: [
        {
          title: "Performance First",
          body:
            "Fast loading. Small JavaScript bundles. Images that load only when needed. I focus on performance from the beginning instead of optimizing only at the end.",
        },
        {
          title: "Clean & Maintainable Code",
          body:
            "Small functions named for what they do. Each file does one thing. The next developer can find and fix a bug in an hour, not a day.",
        },
        {
          title: "Responsive on All Devices",
          body:
            "Mobile-first design. Works on a low-end Android phone as well as on a large desktop screen.",
        },
        {
          title: "Business-Focused Solutions",
          body:
            "Code is the tool, not the goal. Every feature removes a step from someone's day or closes a gap in their workflow.",
        },
        {
          title: "Modern UI & Accessibility",
          body:
            "Clean layouts with attention to usability and detail. Keyboard navigation works everywhere. Animations help users understand, not decorate.",
        },
        {
          title: "Continuous Improvement",
          body:
            "Measure, fix, measure again. I ship small improvements every week instead of waiting for a perfect rewrite.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's discuss your project.",
      description:
        "Feel free to reach out for projects, collaborations or freelance work.",
      formEyebrow: "Project Inquiry",
      formTitle: "Tell me about your project.",
      formSubtitle:
        "Share a few details about your project, goals and timeline. I'll get back to you as soon as possible.",
      labels: {
        name: "Name",
        email: "Email",
        company: "Company",
        message: "Project Details",
      },
      placeholders: {
        name: "Your name",
        email: "you@example.com",
        company: "Company name (optional)",
        message: "Tell me about your project, requirements and expected timeline.",
      },
      submitIdle: "Send Message",
      submitSending: "Sending...",
      submitDone: "Sent",
      successTitle: "Message sent!",
      successBody: "Thanks for reaching out. I'll get back to you soon.",
      successCta: "Send another",
      errorTitle: "Couldn't send",
      errorBody: "Something went wrong. Please try again or email me directly.",
      mailHint: "Your message will be sent directly to",
      channels: {
        Email: "Email",
        WhatsApp: "WhatsApp",
        Call: "Call",
        LinkedIn: "LinkedIn",
        GitHub: "GitHub",
      },
    },
    footer: {
      tagline:
        "Available for senior software engineering, SFCC and full-stack web projects across Saudi Arabia and remote.",
      sections: "Sections",
      connect: "Connect",
      copyright: "Crafted in Riyadh.",
      built: "Built with Next.js · Tailwind · Framer Motion",
    },
    a11y: {
      toggleLocale: "Switch language",
      toggleTheme: "Toggle theme",
      switchToLight: "Switch to light mode",
      switchToDark: "Switch to dark mode",
      menu: "Toggle menu",
    },
  },

  ar: {
    profile: {
      name: "عبدالله زيب",
      title: "مهندس برمجيات أول · مطور Full-Stack و SFCC",
      role: "مهندس برمجيات أول",
      location: "الرياض، المملكة العربية السعودية",
      city: "الرياض",
      languages: "الإنجليزية · العربية",
      availability: "متاح للأعمال والشركات الناشئة",
      cta: "لنتحدث",
    },
    nav: {
      about: "نبذة",
      experience: "الخبرة",
      projects: "الأعمال",
      stack: "التقنيات",
      services: "الخدمات",
      contact: "التواصل",
      home: "الرئيسية",
    },
    hero: {
      status: "متاح لمشاريع جديدة",
      headlineL1: "أبني منصات ويب",
      headlineL2: "للتجارة الإلكترونية",
      headlineHighlight: "والفرق الداخلية.",
      sub:
        "أنا عبدالله، مهندس برمجيات مقيم في الرياض. أبني مواقع الأعمال، منصات التجارة الإلكترونية، لوحات المعلومات، والأنظمة الداخلية لشركات في دول الخليج.",
      ctaPrimary: "عرض المشاريع",
      ctaSecondary: "تواصل معي",
      resume: "تحميل السيرة الذاتية →",
      stats: [
        { label: "سنوات الخبرة", value: "+٥" },
        { label: "إطلاقات مؤسسية", value: "+١٠" },
        { label: "علامات تجزئة عالمية", value: "+٣" },
        { label: "اللغات المدعومة", value: "EN · AR" },
      ],
    },
    about: {
      eyebrow: "نبذة",
      title: "خبرة في بناء منصات أعمال حقيقية.",
      description:
        "أكثر من خمس سنوات من الخبرة في بناء منصات التجارة الإلكترونية، أنظمة الأعمال، وتطبيقات الواجهة الأمامية لشركات في باكستان والمملكة العربية السعودية.",
      currentlyEyebrow: "حالياً",
      currentlyLine: "أبني منصات ويب أعمال ثنائية اللغة في",
      currentlyCompany: "الدفة",
      currentlyTail: "، بالرياض.",
      labels: {
        languages: "اللغات",
        based: "المقر",
        experience: "الخبرة",
        status: "الحالة",
        years: "+٥ سنوات",
      },
      pillars: [
        {
          title: "خبرة في السوق السعودي",
          body:
            "عمل يومي مع شركات في الرياض وجدة — منصات ثنائية اللغة، تصميم متوافق مع RTL، وتدفقات محتوى مهيأة لأصحاب القرار محلياً.",
        },
        {
          title: "SFCC على نطاق واسع",
          body:
            "تطوير كارتريدجات SFRA لـ Salesforce Commerce Cloud، تكاملات OCAPI، وإطلاقات متعددة اللغات لبرامج تجزئة عالمية.",
        },
        {
          title: "أتمتة الأعمال",
          body:
            "أنظمة سير العمل، سلاسل الموافقات، لوحات المعلومات والتكاملات التي تخفف العبء اليدوي عن فرق العمليات.",
        },
        {
          title: "الجودة وسهولة الاستخدام",
          body:
            "واجهات سريعة ومتجاوبة بكود نظيف واهتمام بسهولة الاستخدام.",
        },
      ],
    },
    experience: {
      eyebrow: "الخبرة",
      title: "خمس سنوات في التجارة الإلكترونية وأنظمة الأعمال.",
      description:
        "من برامج SFCC لكبرى شركات التجزئة العالمية إلى منصات أعمال سعودية ثنائية اللغة. هذا هو المسار.",
      items: [
        {
          company: "الدفة",
          role: "مطور ويب",
          location: "الرياض، المملكة العربية السعودية",
          period: "٢٠٢٤ — حتى الآن",
          summary:
            "المساهمة حالياً في تطوير وصيانة منصة التجارة الإلكترونية المبنية على Magento ونظام Badran HR، مع التركيز على أتمتة الأعمال، تطوير سير العمل، التكاملات، وتحسين الأداء.",
          highlights: [
            "تطوير وصيانة منصة Magento للتجارة الإلكترونية باستخدام PHP وJavaScript وjQuery وMySQL.",
            "ربط Odoo (ERP) وOTO بـ Magento لمزامنة موحدة للطلبات والمخزون.",
            "بناء واجهات API مخصصة تربط Magento بأنظمة الأعمال الداخلية.",
            "تطوير سكربتات أتمتة وسير عمل الموافقات داخل نظام Badran HR، بما في ذلك تجديد العقود وإدارة مهام الموظفين.",
            "إدارة الاستضافة والنشر عبر aaPanel، وتحسين استجابة الواجهة الأمامية وأداء الخادم.",
          ],
        },
        {
          company: "Prototyping Technology",
          role: "مطور ويب",
          location: "جدة، المملكة العربية السعودية",
          period: "٢٠٢٢ — ٢٠٢٤",
          summary:
            "عملت مطور ويب متخصص في الواجهة الأمامية، ببناء مواقع متجاوبة وواجهات مستخدم تفاعلية لمنصات الأعمال والتجارة الإلكترونية في دول الخليج.",
          highlights: [
            "بناء مواقع متجاوبة ومتوافقة مع جميع المتصفحات لأجهزة سطح المكتب والأجهزة اللوحية والهواتف عبر منصات الأعمال والتجارة الإلكترونية.",
            "تحويل تصميمات Figma وPSD إلى واجهات أمامية بدقة البكسل.",
            "بناء مكونات React.js قابلة لإعادة الاستخدام لتحسين قابلية التوسع والاتساق.",
            "تحسين أداء الواجهة الأمامية عبر تقليل الكود وتنظيف الأصول والعرض المتجاوب.",
            "التعاون مع المصممين ومطوري الخلفية لتقديم تجارب مستخدم سلسة.",
          ],
        },
        {
          company: "DigitsCom Technologies",
          role: "مطور SFCC",
          location: "باكستان",
          period: "٢٠٢٠ — ٢٠٢٢",
          summary:
            "عملت على مشاريع Salesforce Commerce Cloud (SFCC) المؤسسية لعلامات تجزئة عالمية، بالمساهمة في تطوير المتاجر، تنفيذ الميزات، إصلاح الأخطاء، وتحسينات المنصة عبر بنى SFRA وSiteGenesis.",
          highlights: [
            "بناء وصيانة متاجر SFCC باستخدام SFRA وSiteGenesis: وحدات تحكم، قوالب ISML، Business Manager، الكتالوجات والعروض.",
            "المساهمة في برامج تجزئة مؤسسية لـ Dynamite Clothing وJLR MultiSites وScarpamondo.",
            "بناء وتخصيص كارتريدجات SFCC قابلة لإعادة الاستخدام لتوسيع وظائف المنصة.",
            "تكامل خدمات الطرف الثالث وتدفقات الدفع عبر أُطر خدمات SFCC.",
            "تحسين وظائف السلة وقائمة الأمنيات والدفع وتجربة المنتج عبر متاجر متعددة.",
          ],
        },
      ],
    },
    projects: {
      eyebrow: "أعمال مختارة",
      title: "مجموعة مختارة من مشاريع الأعمال والتجارة الإلكترونية والواجهة الأمامية.",
      description:
        "عينة تمثيلية — منصات شركات ثنائية اللغة، أنظمة أعمال داخلية، وبرامج SFCC لكبرى شركات التجزئة العالمية.",
      discuss: "نقاش حول مشروع",
      live: "عرض مباشر",
      code: "الكود",
      proprietary: "عمل داخلي لعميل — الكود والعروض غير متاحة للعامة",
      viewAll: "عرض جميع المشاريع (11)",
      backHome: "العودة للرئيسية",
      allTitle: "جميع المشاريع في مكان واحد.",
      allDescription:
        "الأرشيف الكامل — أدوات ذكاء اصطناعي، منتجات SaaS في الإنتاج، تجارة إلكترونية للمؤسسات، ومنصات أعمال ثنائية اللغة.",
      items: [
        {
          slug: "meeting-room",
          title: "نظام حجز قاعات الاجتماعات",
          tag: "نظام داخلي · قيد الإنتاج",
          description:
            "منصة حجز داخلية تُستخدم يومياً في المقر الرئيسي للشركة. ثنائية اللغة (عربي/إنجليزي) مع دعم RTL كامل، تحديثات لحظية عبر الجلسات، قاعات مقيدة حسب الصلاحية، وسجل تدقيق كامل. كل قاعدة — ساعات العمل، محاذاة الفترات، منع الحجز المزدوج — مفروضة على مستوى قاعدة البيانات عبر قيود Postgres وسياسات RLS، فلا يمكن تجاوز الواجهة.",
          metrics: [
            { label: "المستخدمون", value: "+50 موظف" },
            { label: "النزاهة", value: "على قاعدة البيانات" },
            { label: "التدقيق", value: "سجل كامل" },
          ],
        },
        {
          slug: "razan",
          title: "رزان · منصة عيادة الحجامة",
          tag: "رعاية صحية · ثنائي اللغة",
          description:
            "منصة عيادة وحجوزات فاخرة ثنائية اللغة (عربي أولاً / إنجليزي) لمركز حجامة في الرياض. دعم RTL كامل، هوية بصرية مخصصة، مخطط Prisma للمواعيد والخدمات والتقييمات، وتحسين محركات بحث مع JSON-LD وصور OG مُولّدة على الـ Edge.",
          metrics: [
            { label: "الأسواق", value: "AR · EN" },
            { label: "التصميم", value: "RTL كامل" },
            { label: "النوع", value: "حجوزات SaaS" },
          ],
        },
        {
          slug: "ai-doc-qa",
          title: "محادثة المستندات بالذكاء الاصطناعي",
          tag: "ذكاء اصطناعي · ثنائي اللغة",
          description:
            "ارفع ملف PDF واسأل بلغة طبيعية. يدعم العربية والإنجليزية، مع اقتباسات من المصدر وإجابات متدفقة.",
          metrics: [
            { label: "النموذج", value: "Claude API" },
            { label: "البحث", value: "متجهي" },
            { label: "الاستعلامات", value: "EN · AR" },
          ],
        },
        {
          slug: "fawtara",
          title: "فاتورة · فوترة VAT",
          tag: "SaaS · متعدد المستأجرين",
          description:
            "منصة SaaS متعددة المستأجرين للشركات السعودية الصغيرة والمتوسطة لإصدار فواتير ضريبة القيمة المضافة المتوافقة وثنائية اللغة، وإدارة العملاء، وتتبع المخزون.",
          metrics: [
            { label: "النوع", value: "متعدد المستأجرين" },
            { label: "الفوترة", value: "متوافقة مع VAT" },
            { label: "PDF", value: "EN · AR" },
          ],
        },
        {
          slug: "sfcc",
          title: "برامج SFCC للتجزئة",
          tag: "Salesforce Commerce Cloud",
          description:
            "أعمال إنتاجية لكل من Dynamite Clothing وJLR متعدد المواقع وScarpamondo. كارتريدجات SFRA، دفع مخصص، تكاملات OCAPI، وإطلاقات متعددة اللغات.",
          metrics: [
            { label: "العلامات", value: "٣" },
            { label: "الأُطر", value: "SFRA · SiteGenesis" },
            { label: "النوع", value: "تجارة تجزئة" },
          ],
        },
        {
          slug: "oasis-breeze",
          title: "Oasis Breeze للتكييف",
          tag: "ثنائي اللغة · أعمال",
          description:
            "موقع شركات ثنائي اللغة (عربي/إنجليزي) لشركة تكييف سعودية. توليد العملاء المحتملين، كتالوج الخدمات، دراسات حالة عبر CMS، وتنسيق RTL كامل.",
          metrics: [
            { label: "الأسواق", value: "EN · AR" },
            { label: "التخطيط", value: "RTL كامل" },
            { label: "المحتوى", value: "مُدار من CMS" },
          ],
        },
        {
          slug: "hr-leave",
          title: "نظام إدارة الإجازات",
          tag: "سير عمل أعمال",
          description:
            "منصة أتمتة إجازات قائمة على الأدوار مع سلاسل موافقات، احتساب الأرصدة، مزامنة التقويم، وتقارير قابلة للتصدير.",
          metrics: [
            { label: "سير العمل", value: "متعدد المستويات" },
            { label: "الوصول", value: "حسب الدور" },
            { label: "التقارير", value: "قابلة للتصدير" },
          ],
        },
        {
          slug: "attendance",
          title: "لوحة حضور الموظفين",
          tag: "تحليلات",
          description:
            "لوحة معلومات حضور وإنتاجية فورية مع رسوم مؤشرات أداء، اكتشاف شذوذ في تسجيل الدخول، دعم النطاق الجغرافي، وخطوط تصدير لكشوف الرواتب.",
          metrics: [
            { label: "البيانات", value: "فورية" },
            { label: "الوصول", value: "حسب الدور" },
            { label: "التصدير", value: "CSV · PDF" },
          ],
        },
        {
          slug: "restaurant",
          title: "نظام طلبات المطاعم",
          tag: "MERN · تجارة",
          description:
            "منصة طلبات متكاملة مع إدارة قائمة الطعام، سلة تسوق، دفع عبر Stripe، تتبع الطلبات، ووحدة تحكم عمليات للمطبخ.",
          metrics: [
            { label: "التقنية", value: "MERN" },
            { label: "المدفوعات", value: "Stripe" },
            { label: "الأدوار", value: "إدارة · مطبخ · عميل" },
          ],
        },
        {
          slug: "ai-saas",
          title: "تجربة هبوط لمنصة SaaS بالذكاء الاصطناعي",
          tag: "SaaS · واجهة أمامية",
          description:
            "موقع تسويقي مع سرد قائم على الحركة، شبكات تدرج متحركة، أقسام مرتبطة بالتمرير، ونظام أسعار وإحالة نظيف.",
          metrics: [
            { label: "الأسلوب", value: "حركي" },
            { label: "الأقسام", value: "مرتبطة بالتمرير" },
            { label: "البناء", value: "جاهز للإنتاج" },
          ],
        },
        {
          slug: "construction",
          title: "الصرح الذهبي للمقاولات",
          tag: "ثنائي اللغة · شركات",
          description:
            "موقع شركات ثنائي اللغة (عربي/إنجليزي) لشركة مقاولات سعودية. أقسام الخدمات، نموذج تواصل، دعم RTL كامل، وتحميل فوري عبر النشر بـ CDN.",
          metrics: [
            { label: "الأسواق", value: "EN · AR" },
            { label: "التخطيط", value: "RTL كامل" },
            { label: "البناء", value: "صفحة واحدة" },
          ],
        },
      ],
    },
    stack: {
      eyebrow: "التقنيات",
      title: "أدواتي اليومية في العمل.",
      description:
        "مزيج عملي — واجهات حديثة لتلميع المنتج، خلفيات ناضجة للموثوقية، ومنصات تجارة للتوسع.",
      categories: {
        Frontend: "واجهة أمامية",
        Language: "لغة",
        Commerce: "تجارة",
        Backend: "خلفية",
        Database: "قواعد بيانات",
        APIs: "واجهات برمجة",
        Tooling: "أدوات",
      },
    },
    services: {
      eyebrow: "الخدمات",
      title: "ما أبنيه للعملاء.",
      description:
        "خدمات أقدّمها للشركات والشركات الناشئة وفرق الأعمال.",
      items: [
        {
          title: "تطوير ويب للأعمال",
          description:
            "مواقع ومنصات بمعايير الإنتاج للشركات الراسخة. تشمل أنظمة التصميم والنشر والموثوقية.",
        },
        {
          title: "لوحات معلومات الأعمال",
          description:
            "تحليلات داخلية، لوحات مؤشرات أداء وعمليات مع بيانات فورية، صلاحيات حسب الدور، وتقارير قابلة للتصدير.",
        },
        {
          title: "حلول التجارة الإلكترونية",
          description:
            "متاجر بدون رأس، تدفقات دفع مخصصة، تكاملات الدفع، وربط ERP/PIM — مبنية للتحويل والتوسع.",
        },
        {
          title: "تطوير SFCC",
          description:
            "كارتريدجات SFRA لـ Salesforce Commerce Cloud، إطلاقات متعددة المواقع، تكاملات OCAPI، وتحسين الأداء.",
        },
        {
          title: "مواقع شركات سعودية",
          description:
            "مواقع شركات ثنائية اللغة (عربي/إنجليزي) مع دعم RTL كامل، لمسة متوافقة مع الهوية، وتدفقات محتوى محلية.",
        },
        {
          title: "أتمتة الأعمال",
          description:
            "أنظمة سير عمل، سلاسل موافقات، مهام مجدولة، وتكاملات تخفف الأعمال المتكررة عن فريقك.",
        },
        {
          title: "هندسة الواجهة الأمامية",
          description:
            "واجهات بدقة البكسل، تنفيذ نظام تصميم، تصميم حركة، ومكونات تركز على إمكانية الوصول.",
        },
        {
          title: "تكاملات API",
          description:
            "واجهات برمجة طرف ثالث، Webhooks، بوابات دفع، روابط CRM وERP — مصممة للمرونة وسطوح أخطاء نظيفة.",
        },
      ],
    },
    principles: {
      eyebrow: "كيف أبني المشاريع",
      title: "أسلوبي في كل مشروع.",
      description:
        "ستة أمور تبقى ثابتة في كل مشروع أُنجزه.",
      items: [
        {
          title: "الأداء أولاً",
          body:
            "تحميل سريع. حِزَم JavaScript صغيرة. صور تُحمَّل فقط عند الحاجة. أُركّز على الأداء منذ البداية بدل تحسينه في النهاية فقط.",
        },
        {
          title: "كود نظيف وقابل للصيانة",
          body:
            "دوال صغيرة تحمل اسماً يعبّر عن وظيفتها. كل ملف يقوم بمهمة واحدة. المطوّر التالي يجد الخطأ ويُصلحه في ساعة، لا في يوم.",
        },
        {
          title: "متجاوب على جميع الأجهزة",
          body:
            "تصميم يبدأ من الجوال أولاً. يعمل على هاتف أندرويد منخفض الفئة كما يعمل على شاشة سطح مكتب كبيرة.",
        },
        {
          title: "حلول تركّز على الأعمال",
          body:
            "الكود وسيلة لا غاية. كل ميزة تُلغي خطوة من يوم شخص ما أو تسدّ ثغرة في سير عمله.",
        },
        {
          title: "واجهة عصرية وسهولة وصول",
          body:
            "تخطيطات نظيفة مع الاهتمام بسهولة الاستخدام والتفاصيل. التنقّل بلوحة المفاتيح يعمل في كل مكان. الحركات تساعد المستخدمين على الفهم، لا للزينة.",
        },
        {
          title: "تحسين مستمر",
          body:
            "قِسْ، أصلِح، ثم قِسْ مرة أخرى. أُطلق تحسينات صغيرة كل أسبوع بدل انتظار إعادة كتابة كاملة.",
        },
      ],
    },
    contact: {
      eyebrow: "التواصل",
      title: "لنناقش مشروعك.",
      description:
        "لا تتردد في التواصل لأي مشروع أو تعاون أو عمل حر.",
      formEyebrow: "استفسار عن مشروع",
      formTitle: "أخبرني عن مشروعك.",
      formSubtitle:
        "شارك بعض التفاصيل عن مشروعك وأهدافك وجدولك الزمني. سأرد عليك في أقرب وقت ممكن.",
      labels: {
        name: "الاسم",
        email: "البريد الإلكتروني",
        company: "الشركة",
        message: "تفاصيل المشروع",
      },
      placeholders: {
        name: "اسمك",
        email: "you@example.com",
        company: "اسم الشركة (اختياري)",
        message: "أخبرني عن مشروعك ومتطلباتك والجدول الزمني المتوقع.",
      },
      submitIdle: "إرسال الرسالة",
      submitSending: "جاري الإرسال...",
      submitDone: "تم الإرسال",
      successTitle: "تم إرسال رسالتك!",
      successBody: "شكراً لتواصلك. سأعود إليك قريباً.",
      successCta: "إرسال رسالة أخرى",
      errorTitle: "تعذر الإرسال",
      errorBody: "حدث خطأ. يرجى المحاولة مرة أخرى أو مراسلتي مباشرة.",
      mailHint: "سيتم إرسال رسالتك مباشرة إلى",
      channels: {
        Email: "البريد الإلكتروني",
        WhatsApp: "واتساب",
        Call: "اتصال",
        LinkedIn: "لينكدإن",
        GitHub: "جيت‌هاب",
      },
    },
    footer: {
      tagline:
        "متاح لوظائف مهندس برمجيات أول، SFCC، ومشاريع ويب متكاملة (Full-Stack) في المملكة العربية السعودية وعن بُعد.",
      sections: "الأقسام",
      connect: "تواصل",
      copyright: "صُنع في الرياض.",
      built: "بُني بـ Next.js · Tailwind · Framer Motion",
    },
    a11y: {
      toggleLocale: "تبديل اللغة",
      toggleTheme: "تبديل الثيم",
      switchToLight: "التبديل إلى الوضع الفاتح",
      switchToDark: "التبديل إلى الوضع الداكن",
      menu: "تبديل القائمة",
    },
  },
} as const;
