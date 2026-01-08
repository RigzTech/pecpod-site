export const portfolioCategories = [
    'ALL',
    'ANNUAL REPORTS',
    'BRAND IDENTITY',
    'BROCHURES AND FLYERS',
    'CORPORATE',
    'DOCUMENTARIES',
    'GOVERNMENT',
    'INFOGRAPHICS',
    'MAGAZINES',
    'POLICY',
    'STORY TELLING',
    'STRATEGIC PLAN',
    'UX-UI'
];

export const portfolioData = [
    // ANNUAL REPORTS
    {
        id: 'ar-1',
        title: 'Agribiz Annual Report',
        category: 'ANNUAL REPORTS',
        client: 'Kenya Climate Innovation Center',
        date: '2023',
        role: 'Editorial Design & Art Direction',
        image: '/portfolio-files/Annual Reports/Agribiz-report-cover.png',
        document: '/portfolio-files/Annual Reports/Agribiz-Annual Progress Report.pdf',
        size: 'large',
        isLight: true, // White BG
        content: `
            <div class="magazine-intro">
                <p>The Agribiz Annual Report stands as a testament to the transformative power of agricultural innovation. Our design approach was centered on humanizing the data—turning cold statistics into warm, relatable stories of growth and resilience.</p>
                <p>We employed a clean, modular grid system that allows for the seamless integration of large-scale photography and detailed infographics. The result is a document that invites the reader to explore, rather than just scan.</p>
            </div>

            <div class="magazine-grid-2">
                <img src="/portfolio-files/Annual Reports/Agribiz Report 4.png" class="magazine-grid-img" alt="Report Spread 1" />
                <img src="/portfolio-files/Annual Reports/Agribiz Report1.png" class="magazine-grid-img" alt="Report Spread 2" />
            </div>

            <div class="magazine-section">
                <h3>Visual Strategy</h3>
                <p>Agriculture is vibrant. It is green fields, golden harvests, and the rich earth tones of the soil. We reflected this natural palette in our design choices, using organic colors to punctuate the clean white space of the page layouts.</p>
                <p>Typography played a crucial role. We selected a serif font for the headers to evoke a sense of tradition and reliability, paired with a modern sans-serif for the body text to ensure readability and contemporary appeal.</p>
            </div>

            <div class="pull-quote">
                "Growth is never by mere chance; it is the result of forces working together."
            </div>

            <img src="/portfolio-files/Annual Reports/Agribiz Report2.png" class="magazine-image-full" alt="Full Width Spread" />

            <div class="magazine-section">
                <h3>Impact by the Numbers</h3>
                <p>The report needed to highlight key success metrics without boring the audience. We utilized custom iconography and bold data visualization techniques to make the numbers pop. Each chart and graph was designed to be a standalone piece of art, communicating its message instantly.</p>
            </div>
        `
    },
    {
        id: 'ar-2',
        title: 'Safire Report',
        category: 'ANNUAL REPORTS',
        image: '/portfolio-files/Annual Reports/Safire cover1.png',
        document: '/portfolio-files/Annual Reports/Safire Report.pdf',
        size: 'medium',
        isLight: true, // White BG
        content: `
            <div class="magazine-intro">
                <p>The Safire Report required a grounded, earthy aesthetic to reflect the organization's commitment to sustainable development. We chose a palette inspired by nature and a layout that emphasizes clarity and openness.</p>
            </div>

            <img src="/portfolio-files/Annual Reports/Safirepage3.png" class="magazine-image-full" alt="Full Width Spread" />

            <div class="magazine-section">
                <h3>Organic Growth</h3>
                <p>The visual language of the report mirrors the organic growth of the projects it details. We used soft curves and natural textures to soften the delivery of the hard data, making the report feel approachable and human-centric.</p>
            </div>
            
             <img src="/portfolio-files/Annual Reports/safirepage2.png" class="magazine-image-full" alt="Internal Page Layout" />
        `
    },
    {
        id: 'ar-3',
        title: 'Annual Report 2020',
        category: 'ANNUAL REPORTS',
        image: '/portfolio-files/Annual Reports/AnnualReport_2020_cover.png',
        document: '/portfolio-files/Annual Reports/Annual Report 2020.pdf',
        size: 'medium',
        isLight: true // White BG
    },
    {
        id: 'ar-4',
        title: 'Changing Faces, Changing Spaces',
        category: 'ANNUAL REPORTS',
        image: '/portfolio-files/Annual Reports/Changing Faces, Changing Spaces VII_Page_01.png',
        document: '/portfolio-files/Annual Reports/Changing Faces, Changing Spaces VII.pdf',
        size: 'large',
        isLight: true,
        content: `
            <div class="magazine-intro">
                <p>Changing Faces, Changing Spaces is a flagship initiative that demands a bold visual presence. For the seventh edition, we aimed to capture the energy and dynamism of the movement through a vibrant, collage-inspired layout.</p>
                <p>The design breaks the grid to symbolize the breaking of barriers. We used overlapping elements and bold typography to create a sense of movement and progress on every page.</p>
            </div>

            <div class="magazine-grid-2">
                <img src="/portfolio-files/Annual Reports/Changing Faces, Changing Spaces VII_Page_05.png" class="magazine-grid-img" alt="Report Spread 1" />
                <img src="/portfolio-files/Annual Reports/Changing Faces, Changing Spaces VII_Page_15.png" class="magazine-grid-img" alt="Report Spread 2" />
            </div>

            <div class="magazine-section">
                <h3>A Visual Manifesto</h3>
                <p>We treated this report less like a corporate document and more like a manifesto. The imagery is raw and authentic, avoiding stock photography in favor of real on-the-ground captures that tell the true story of the initiative's impact.</p>
            </div>
             
             <img src="/portfolio-files/Annual Reports/Changing Faces, Changing Spaces VII_Page_09.png" class="magazine-image-full" alt="Full Width Visual" />
        `
    },
    {
        id: 'ar-kcic-1',
        title: 'KCIC Annual Report 18-19',
        category: 'ANNUAL REPORTS',
        image: '/portfolio-files/Annual Reports/Environmental/Green-biz-poster-web.png',
        document: '/portfolio-files/Annual Reports/Environmental/KCIC Annual Report 2018-19 with 3mm.pdf',
        size: 'medium',
        isLight: true
    },
    {
        id: 'ar-kcic-2',
        title: 'KCIC Annual Report 19-20',
        category: 'ANNUAL REPORTS',
        image: '/portfolio-files/Annual Reports/Agribiz-report-cover2.png',
        document: '/portfolio-files/Annual Reports/Environmental/KCIC Report 2019-2019.pdf',
        size: 'medium',
        isLight: true
    },
    {
        id: 'ar-uhai',
        title: 'UHAI Report',
        category: 'ANNUAL REPORTS',
        image: '/portfolio-files/Annual Reports/vWFRvxGnRJl.png',
        document: '/portfolio-files/Annual Reports/UHAI REPORt.docx',
        size: 'medium',
        isLight: true
    },

    // BRAND IDENTITY
    {
        id: 'bi-1',
        title: 'CODECS Logo',
        category: 'BRAND IDENTITY',
        image: '/portfolio-files/Brand identity/Logo Design/CODECS Logo.png',
        document: '/portfolio-files/Brand identity/Logo Design/CODECS Logo.png', // Image as document
        size: 'small',
        isLight: true // White BG
    },
    {
        id: 'bi-2',
        title: 'Promo Poster',
        category: 'BRAND IDENTITY',
        image: '/portfolio-files/Brand identity/Posters/Promo-Poster.png',
        document: '/portfolio-files/Brand identity/Posters/Promo-Poster.png',
        size: 'medium'
    },

    // GOVERNMENT
    {
        id: 'gov-1',
        title: 'AYRH Framework',
        category: 'GOVERNMENT',
        image: '/portfolio-files/Government/AYRH-Framework.png',
        document: '/portfolio-files/Government/AYSRH Framework 2019-2022.pdf', // Assumed connection
        size: 'medium',
        isLight: true // White BG
    },
    {
        id: 'gov-2',
        title: 'Somaliland Elections',
        category: 'GOVERNMENT',
        client: 'The Brenthurst Foundation',
        date: '2021',
        role: 'Photography & Publication Design',
        image: '/portfolio-files/Government/Somaliland-cover.png',
        document: '/portfolio-files/Government/SOMALILAND- AN OVERVIEW OF THE 2021 PARLIAMENTARY AND LOCAL COUNCIL ELECTIONS.pdf',
        size: 'large',
        isLight: true, // White BG
        content: `
            <div class="magazine-intro">
                <p>The 2021 Parliamentary and Local Council Elections in Somaliland were a pivotal moment in the region's democratic history. Our task was to document this process with transparency, dignity, and historical weight.</p>
                <p>We moved away from the typical bureaucratic aesthetic of government reports. Instead, we embraced a cinematic approach, using panoramic photography and stark, powerful typography to capture the scale of the event.</p>
            </div>

            <div class="magazine-grid-2">
                <img src="/portfolio-files/Government/Somaliland-1.png" class="magazine-grid-img" alt="Election Day Queues" />
                <img src="/portfolio-files/Government/Somaliland-2.png" class="magazine-grid-img" alt="Voting Process" />
            </div>

            <div class="magazine-section">
                <h3>Design for Democracy</h3>
                <p>Designing for a government body requires a careful balance of gravitas and accessibility. The colors chosen were drawn directly from the national flag, but desaturated slightly to lend a more modern, editorial feel.</p>
                <p>The layout prioritizes the faces of the voters. We wanted to emphasize that democracy is a human act, not just a procedural one. Every page features candid moments of citizens engaging in the democratic process.</p>
            </div>

            <div class="pull-quote">
                "The vote is the most powerful instrument ever devised by man for breaking down injustice."
            </div>

            <img src="/portfolio-files/Government/Somaliland-3.png" class="magazine-image-full" alt="Full Width Crowd Shot" />
        `
    },
    {
        id: 'gov-3',
        title: 'COVID-19 Vaccine Plan',
        category: 'GOVERNMENT',
        image: '/portfolio-files/Government/National  COVID 19-1.png',
        document: '/portfolio-files/Government/National COVID-19 Vaccine Deployment Plan outline .pdf',
        size: 'medium',
        isLight: true // White BG
    },

    // INFOGRAPHICS
    {
        id: 'info-1',
        title: 'Theory of Change',
        category: 'INFOGRAPHICS',
        image: '/portfolio-files/Infographics/Theory-of-Change-R.jpg',
        document: '/portfolio-files/Infographics/Theory-of-Change-R.jpg',
        size: 'large',
        isLight: true // Light map background
    },
    {
        id: 'info-2',
        title: 'Electoral Process',
        category: 'INFOGRAPHICS',
        image: '/portfolio-files/Infographics/The-Electoral-Process-In-Somaliland-copy.jpg',
        document: '/portfolio-files/Infographics/The-Electoral-Process-In-Somaliland-copy.jpg',
        size: 'medium',
        isLight: true // White BG
    },
    {
        id: 'info-3',
        title: 'Somaliland Timeline',
        category: 'INFOGRAPHICS',
        image: '/portfolio-files/Infographics/Somaliland-Elections-Timeline.jpg',
        document: '/portfolio-files/Infographics/Somaliland-Elections-Timeline.jpg',
        size: 'wide',
        isLight: false
    },

    // MAGAZINES
    {
        id: 'mag-1',
        title: 'Live Green Magazine',
        category: 'MAGAZINES',
        image: '/portfolio-files/Magazines/Cover mockup.png',
        document: '/portfolio-files/Magazines/Live Green Magazine.pdf',
        size: 'large'
    },
    {
        id: 'mag-2',
        title: 'SRHR Newsletter',
        category: 'MAGAZINES',
        image: '/portfolio-files/Magazines/SRHR-Newsletter-cover.png',
        document: '/portfolio-files/Magazines/SRHR_Alliance_newslette_key_cover.pdf',
        size: 'medium'
    },

    // POLICY
    {
        id: 'pol-1',
        title: 'Maputo Protocol',
        category: 'POLICY',
        image: '/portfolio-files/Policy/Maputo_Protocol_POLICY_BRIEF_Page_1.jpg',
        document: '/portfolio-files/Policy/Maputo_Protocol_POLICY_BRIEF_Page_1.jpg', // Placeholder doc
        size: 'medium',
        isLight: true // White BG
    },
    {
        id: 'pol-2',
        title: 'Media Policy Brief',
        category: 'POLICY',
        image: '/portfolio-files/Policy/Media Policy Brief on the World Tuberculosis Day_Page_1.jpg',
        document: '/portfolio-files/Policy/Media Policy Brief on the World Tuberculosis Day_Page_1.jpg',
        size: 'medium',
        isLight: true // White BG
    },
    {
        id: 'pol-3',
        title: 'African Commission Brief',
        category: 'POLICY',
        image: '/portfolio-files/Policy/The African Commission On Human and Peoples Rights Policy Brief _Page_1.jpg',
        document: '/portfolio-files/Policy/The African Commission On Human and Peoples Rights Policy Brief _Page_1.jpg',
        size: 'medium',
        isLight: true
    },
    {
        id: 'pol-4',
        title: 'Adolescent Advocacy Toolkit',
        category: 'POLICY',
        image: '/portfolio-files/Policy/Adolescent Advocacy Toolkit/AdolescentAdvocacyToolkit_cover.png',
        document: '#',
        size: 'large',
        isLight: false
    },

    // STRATEGIC PLAN
    {
        id: 'sp-1',
        title: 'Strategic Plan 2021-2025',
        category: 'STRATEGIC PLAN',
        client: 'Biovision Africa Trust',
        date: '2021',
        role: 'Strategy Visualization',
        image: '/portfolio-files/Strategic Plan/A4_Brochure_Mockup_Cover_02.png',
        document: '/portfolio-files/Strategic Plan/Strategic Plan 2021-2025 interactive.pdf',
        size: 'large',
        isLight: true, // Light grey/white mockup
        content: `
            <div class="magazine-intro">
                <p>A strategic plan is more than a document; it is a roadmap for the future. For the 2021-2025 period, we were tasked with visualizing a bold new direction. The goal was to make the abstract concrete.</p>
                <p>We utilized a highly structured, almost architectural layout to signal stability and foresight. The use of isometric illustrations helped to break down complex multi-year goals into digestible visual bites.</p>
            </div>

             <img src="/portfolio-files/Strategic Plan/A4_Brochure_Mockup_Inside_01.png" class="magazine-image-full" alt="Internal Spread Mockup" />

            <div class="magazine-section">
                <h3>Structure & Clarity</h3>
                <p>The document was divided into clear, color-coded sections, allowing stakeholders to jump immediately to the areas relevant to them. We treated the typography with the same rigor as a financial report, ensuring that every heading and sub-heading established a clear hierarchy of information.</p>
            </div>

            <div class="magazine-grid-2">
                <img src="/portfolio-files/Strategic Plan/Strategic Plan 2021-2025 interactive_Page_01.jpg" class="magazine-grid-img" alt="Executive Summary" />
                <img src="/portfolio-files/Strategic Plan/Strategic Plan 2021-2025 interactive_Page_76.jpg" class="magazine-grid-img" alt="Financials" />
            </div>

            <div class="pull-quote">
                "Strategy is about making choices, trade-offs; it's about deliberately choosing to be different."
            </div>

            <div class="magazine-section">
                <h3>The Digital Dimension</h3>
                <p>Alongside the print version, we developed an interactive digital version. This allowed for real-time updates to the key performance indicators, turning a static plan into a living dashboard of progress.</p>
            </div>
        `
    },
    {
        id: 'sp-2',
        title: 'BvAT Strategic Plan',
        category: 'STRATEGIC PLAN',
        image: '/portfolio-files/Strategic Plan/BvAT Strategic Plan Summary 2_Page_01.jpg',
        document: '/portfolio-files/Strategic Plan/Strategic-Plan-2021-2024-BvAT-PRINT.pdf',
        size: 'medium',
        isLight: true // White BG
    },

    // CORPORATE
    {
        id: 'corp-1',
        title: 'Poverty Reduction',
        category: 'CORPORATE',
        image: '/portfolio-files/Corporate/poverty-4561704_1920.jpg',
        document: '/portfolio-files/Corporate/poverty-4561704_1920.jpg',
        size: 'medium'
    },

    // EMPTY CATEGORIES - USING CREATIVE REUSE/PLACEHOLDERS
    {
        id: 'broch-1',
        title: 'Corporate Brochure',
        category: 'BROCHURES AND FLYERS',
        image: '/portfolio-files/Strategic Plan/A4_Brochure_Mockup_Inside_01.png', // Reusing mockup
        document: '/portfolio-files/Strategic Plan/A4_Brochure_Mockup_Inside_01.png',
        size: 'medium',
        isLight: true // White mockup
    },
    {
        id: 'doc-1',
        title: 'Impact Documentary',
        category: 'DOCUMENTARIES',
        image: '/portfolio-files/Annual Reports/Changing Faces, Changing Spaces VII_Page_05.png', // Cinematic frame feel
        document: '#',
        size: 'large'
    },
    {
        id: 'story-v1',
        title: 'Storytelling Video 1',
        category: 'STORY TELLING',
        image: 'https://img.youtube.com/vi/o3JEVG1nJvw/hqdefault.jpg', // Switched to hqdefault for reliability
        document: 'https://www.youtube.com/watch?v=o3JEVG1nJvw',
        size: 'medium',
        isVideo: true
    },
    {
        id: 'story-v2',
        title: 'Storytelling Video 2',
        category: 'STORY TELLING',
        image: 'https://img.youtube.com/vi/H70qg7lc2tI/maxresdefault.jpg',
        document: 'https://www.youtube.com/watch?v=H70qg7lc2tI',
        size: 'wide',
        isVideo: true
    },
    {
        id: 'story-v3',
        title: 'Storytelling Video 3',
        category: 'STORY TELLING',
        image: 'https://img.youtube.com/vi/ttSURoLacfY/maxresdefault.jpg',
        document: 'https://www.youtube.com/watch?v=ttSURoLacfY',
        size: 'medium',
        isVideo: true
    },
    {
        id: 'ux-1',
        title: 'Interactive Dashboard',
        category: 'UX-UI',
        image: '/portfolio-files/Government/Thin_Book_Hard_Cover_Mockup_2.png', // Using a clean mockup
        document: '#',
        size: 'medium',
        isLight: true // Light mockup
    }
];
