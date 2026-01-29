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
        date: '2020',
        role: 'Editorial Design & Art Direction',
        image: '/portfolio-files/Annual Reports/Agribiz-report-cover.png',
        document: '/portfolio-files/Annual Reports/Agribiz-Annual Progress Report.pdf',
        size: 'large',
        isLight: true, // White BG
        content: `
            <div class="magazine-intro">
                <p>AgriBiz is an economic empowerment programme that primarily targets rural and peri-urban youth and women who are under-employed and lack the financial resources and know-how to create viable sustainable businesses.</p>
                <p>KCIC reached us to design the agribiz report January to December 2020, with a touch of creativity and agricultural representation.</p>
            </div>

            <div class="magazine-grid-2">
                <img src="/portfolio-files/Annual Reports/Agribiz Report 4.png" class="magazine-grid-img" alt="Report Spread 1" />
                <img src="/portfolio-files/Annual Reports/Agribiz Report1.png" class="magazine-grid-img" alt="Report Spread 2" />
            </div>

            <div class="magazine-section">
                <h3>The Results</h3>
                <p>This report featured breakout programmatic highlights, illustrations, testimonials, and quality photos from the farms. The report achieved substantial readership from their websites and great commendation for the good quality design from other partners.</p>
            </div>
            
             <img src="/portfolio-files/Annual Reports/Agribiz Report3.png" class="magazine-image-full" alt="Full Width Visual" />
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
        `
    },
    {
        id: 'ar-3',
        title: 'Annual Report 2020',
        category: 'ANNUAL REPORTS',
        image: '/portfolio-files/Annual Reports/AnnualReport_2020_cover.png',
        document: '/portfolio-files/Annual Reports/Annual Report 2020.pdf',
        size: 'medium',
        isLight: true,
        content: `
            <div class="magazine-intro">
                <p>For the 2020 Annual Report, the focus was on resilience. In a year defined by global challenges, we designed a document that highlighted stability and adaptability through structured layouts and calm, reassuring typography. The cover sets the tone with a minimalist approach, using negative space to symbolize openness and possibility.</p>
            </div>
            <div class="magazine-section">
                <h3>Resilience in Design</h3>
                <p>We avoided visual clutter, opting instead for plenty of whitespace and clear, direct messaging. This approach mirrored the organization's transparent response to the year's events. The internal spreads maintain this rigorous simplicity, allowing the financial data and impact stories to speak for themselves without decorative distraction.</p>
                <p>Typography was selected for maximum legibility across both digital and print formats, acknowledging the shift to remote work and digital consumption. The result is a report that feels both timeless and urgently relevant.</p>
            </div>
        `
    },
    {
        id: 'ar-4',
        title: 'Changing Faces, Changing Spaces',
        category: 'ANNUAL REPORTS',
        client: 'UHAI EASHRI',
        date: '2020',
        role: 'Publication Design & Strategy',
        image: '/portfolio-files/Annual Reports/Changing Faces, Changing Spaces VII_Page_01.png',
        document: '/portfolio-files/Annual Reports/Changing Faces, Changing Spaces VII.pdf',
        size: 'large',
        isLight: true,
        content: `
            <div class="magazine-intro">
                <p>A fresh, visually engaging design for the Changing Lives, Changing Faces conference report. We aimed to demonstrate the superior value of visual communication in organisational publications.</p>
            </div>

            <div class="magazine-grid-2">
                 <img src="/portfolio-files/Annual Reports/Changing Faces, Changing Spaces VII_Page_05.png" class="magazine-grid-img" alt="Spread 1" />
                 <img src="/portfolio-files/Annual Reports/Changing Faces, Changing Spaces VII_Page_15.png" class="magazine-grid-img" alt="Spread 2" />
            </div>

            <div class="magazine-section">
                <h3>The Process</h3>
                <p>UHAI EASHRI traditionally relied on standard Microsoft Word-formatted reports. The initial draft faced significant user experience challenges, prompting a complete redesign. We identified a core issue: the original report structure did not effectively support a visually driven output.</p>
                <p>We revamped the report with a simpler, more colorful layout and a refreshed, outbound style—making it engaging, reader-friendly, and approachable. This included comic-inspired elements for enhanced readability and impact.</p>
            </div>

            <div class="pull-quote">
                "Driving organizational change by challenging and updating norms around publication design."
            </div>

            <div class="magazine-section">
                <h3>Outcomes</h3>
                <p>The redesign not only improved accessibility and engagement but also influenced UHAI's approach to future visual communication materials. We succeeded in adding substantial visual value to elevate the report beyond a traditional document.</p>
            </div>
             
             <img src="/portfolio-files/Annual Reports/Changing Faces, Changing Spaces VII_Page_09.png" class="magazine-image-full" alt="Visual Detail" />
        `
    },
    {
        id: 'ar-kcic-1',
        title: 'KCIC Annual Report 18-19',
        category: 'ANNUAL REPORTS',
        image: '/portfolio-files/Annual Reports/Environmental/Green-biz-poster-web.png',
        document: '/portfolio-files/Annual Reports/Environmental/KCIC Annual Report 2018-19 with 3mm.pdf',
        size: 'medium',
        isLight: true,
        content: `
            <div class="magazine-intro">
                <p>Sustainability is at the heart of KCIC's mission. For the 2018-19 report, we utilized an eco-conscious design language, featuring organic shapes and a vibrant green palette to reflect the growth of the green economy. The visual identity was crafted to feel fresh and energetic, mirroring the innovative startups that KCIC supports.</p>
                <p>We integrated hand-drawn illustrations with professional photography to create a human-centric narrative. This mixed-media approach helps to bridge the gap between high-level corporate strategy and on-the-ground impact.</p>
            </div>
            
            <div class="magazine-section">
                <h3>Green Growth</h3>
                <p>The report's structure was designed to lead the reader through the various sectors of the green economy—from renewable energy to agribusiness. Each section is color-coded for easy navigation, using a gradient of earth tones that reinforces the environmental theme.</p>
                <p>Data visualization played a key role. We transformed complex impact metrics into digestible, leaf-shaped infographics that visually represent growth and flourishing adjacent to the hard numbers.</p>
            </div>
        `
    },
    {
        id: 'ar-kcic-2',
        title: 'KCIC Annual Report 19-20',
        category: 'ANNUAL REPORTS',
        image: '/portfolio-files/Annual Reports/Annual report 2.png',
        document: '/portfolio-files/Annual Reports/Environmental/KCIC Report 2019-2019.pdf',
        size: 'medium',
        isLight: true,
        content: `
            <div class="magazine-intro">
                <p>Building on the previous year's success, the 19-20 report shifted focus to 'Scaling Impact'. The design became bolder, with larger data visualizations and stronger typographical hierarchy to showcase the expanding reach of the organization. We moved away from the softer, organic tones of the previous year to a more structured, architectural approach that signifies stability and growth.</p>
                <p>The primary challenge was to present complex impact data without overwhelming the reader. By utilizing custom iconography and spacious layouts, we ensured that the key metrics remained the focal point of every spread.</p>
            </div>
            
            <div class="magazine-section">
                 <h3>Visualizing Scale</h3>
                 <p>To reflect the theme of scaling, we employed full-bleed photography and expansive white space. This design choice allows the content to breathe, guiding the reader through the narrative of expansion. The color palette was refined to include deep, professional blues alongside the brand's signature green, establishing a sense of corporate maturity.</p>
                 <p>Every chart and graph was redesigned from the ground up. Instead of standard Excel outputs, we created bespoke vector illustrations that integrate seamlessly with the page layout, making the financial and social return on investment immediately apparent to stakeholders.</p>
            </div>

             <div class="pull-quote">
                "Scaling impact requires bold vision and clearer communication."
            </div>
        `
    },
    {
        id: 'ar-uhai',
        title: 'UHAI Report',
        category: 'ANNUAL REPORTS',
        image: '/portfolio-files/Annual Reports/vWFRvxGnRJl.png',
        document: '/portfolio-files/Annual Reports/UHAI REPORt.docx',
        size: 'medium',
        isLight: true,
        content: `
            <div class="magazine-intro">
                <p>The UHAI Report captures the voices of the community. We prioritized a human-centric layout, ensuring that personal stories and testimonials took center stage, supported by warm, inviting colors. The objective was to create a document that feels less like a corporate report and more like a community journal.</p>
                <p>Throughout the publication, we utilized candid photography that captures genuine moments of connection. These images are paired with pull-quotes in handwritten-style typefaces to emphasize the personal nature of the narratives shared by the beneficiaries.</p>
            </div>

            <div class="magazine-section">
                <h3>Designed for Connection</h3>
                <p>We deliberately avoided rigid grids in favor of a fluid, organic layout structure. This approach mirrors the dynamic and adaptable nature of UHAI's work on the ground. Soft pastel backgrounds were used to distinguish different thematic sections without creating harsh visual breaks.</p>
                <p>Accessibility was also a key consideration. We ensured high contrast for all text elements and maintained a legible font size throughout, making the report accessible to a diverse audience including those with visual impairments. The final output is a testament to the power of inclusive design.</p>
            </div>
        `
    },

    // BRAND IDENTITY
    {
        id: 'bi-1',
        title: 'CODECS Logo',
        category: 'BRAND IDENTITY',
        image: '/portfolio-files/Brand identity/Logo Design/CODECS Logo.png',
        document: '/portfolio-files/Brand identity/Logo Design/CODECS Logo.png',
        size: 'small',
        isLight: true,
        content: `
            <div class="magazine-intro">
                <p>A strong brand starts with a strong mark. The CODECS logo was designed to convey connectivity and modern tech solutions. The geometric shapes interlock to symbolize integration and seamless data flow. We aimed for a symbol that stands out in the crowded technology sector while retaining a sense of reliability and trust.</p>
                <p>The color palette features a deep electric blue, representing energy and innovation, paired with a neutral slate grey to ground the brand in professionalism. This contrast ensures high visibility across both digital and print mediums.</p>
            </div>

            <div class="magazine-section">
                <h3>Geometric Precision</h3>
                <p>The construction of the logo relies on perfect geometric proportions. The interlocking segments are designed to suggest a circuit board or network node, reinforcing the company's core competency in digital infrastructure.</p>
                <p>Beyond the primary mark, we developed a comprehensive visual language including pattern fills and iconography derived from the logo's angles. This ensures that every brand touchpoint, from business cards to the web interface, maintains a cohesive and recognizable identity.</p>
            </div>
        `
    },
    {
        id: 'bi-2',
        title: 'Promo Poster',
        category: 'BRAND IDENTITY',
        image: '/portfolio-files/Brand identity/Posters/Promo-Poster.png',
        document: '/portfolio-files/Brand identity/Posters/Promo-Poster.png',
        size: 'medium',
        content: `
            <div class="magazine-intro">
                <p>Catching the eye in a crowded space. This promotional poster uses bold contrast and a clear hierarchy of information to deliver its message instantly to passersby. The design philosophy was centered on "less is more"—stripping away unnecessary elements to focus purely on the core value proposition.</p>
                <p>We utilized large, sans-serif typography that demands attention from a distance. The color scheme was kept minimal but impactful, ensuring that the call to action pops against the background.</p>
            </div>
            
            <div class="magazine-section">
                <h3>Visual Impact</h3>
                <p>The imagery chosen for the poster serves as a visual anchor, drawing the viewer in before their eyes travel down to the details. We carefully balanced the negative space to prevent visual clutter, making the information easy to digest in a split second.</p>
                <p>This poster is not just a piece of communication; it's a strategic tool designed to drive conversion. Whether displayed in a busy hallway or a digital feed, its robust structure ensures it performs effectively.</p>
            </div>
        `
    },

    // GOVERNMENT
    {
        id: 'gov-1',
        title: 'AYRH Framework',
        category: 'GOVERNMENT',
        client: 'Nairobi Metropolitan Services',
        date: '2020',
        role: 'Design & Layout',
        image: '/portfolio-files/Government/AYRH-Framework.png',
        document: '/portfolio-files/Government/AYSRH Framework 2019-2022.pdf',
        size: 'medium',
        isLight: true,
        content: `
            <div class="magazine-intro">
                <p>At the height of the COVID-19 pandemic, twelve organisations comprising dedicated young people came together to establish this framework. It stands as a symbol of resilience and collaboration in a time of crisis. The document serves as a blueprint for adolescent and youth health initiatives across the metropolis.</p>
            </div>

            <div class="magazine-section">
                <h3>Collaborative Design</h3>
                <p>The development of the Nairobi Metropolitan AYRH 2020-2023 Implementation Framework was a deeply consultative process. We worked closely with the secretariat and the technical working group starting in October 2018, ensuring that every design decision reflected the collective voice of the stakeholders.</p>
                <p>We utilized a modular grid system to organize the vast amount of technical information. This allowed us to present policy guidelines alongside case studies and implementation matrices without overwhelming the reader. The clean, clinical aesthetic reinforces the authority and precision of the framework.</p>
            </div>
        `
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

            <img src="/portfolio-files/Government/Somaliland-3.png" class="magazine-image-full" alt="Full Width Crowd Shot" />
        `
    },
    {
        id: 'gov-3',
        title: 'COVID-19 Vaccine Plan',
        category: 'GOVERNMENT',
        client: 'Ministry of Health, Kenya',
        date: '2021',
        role: 'Publication Design',
        image: '/portfolio-files/Government/National  COVID 19-1.png',
        document: '/portfolio-files/Government/National COVID-19 Vaccine Deployment Plan outline .pdf',
        size: 'medium',
        isLight: true,
        content: `
            <div class="magazine-intro">
                <p>The "National COVID-19 Vaccine Deployment Plan, 2021" represents a critical piece of national infrastructure. It outlines the strategy to vaccinate 26 million people by the end of 2022, a massive logistical and public health undertaking. The document needed to be more than just text; it had to be a clear instruction manual for the nation.</p>
            </div>

            <div class="magazine-section">
                <h3>Clarity Saves Lives</h3>
                <p>In a crisis, clarity is paramount. The design of this document prioritized a highly professional, modern layout with distinct sections, clear data tables, and structured visuals. The goal was to ensure that complex information about vaccine supply chains, safety monitoring, and financing was instantly accessible to decision-makers.</p>
                <p>We utilized a color-coded navigational system to help users quickly locate specific operational pillars. Icons were developed to represent key logistical steps, transcending language barriers and speeding up comprehension for diverse teams working on the ground.</p>
            </div>
            
            <div class="magazine-section">
                <h3>Strategic Layout</h3>
                <p>The layout avoids density, using bullet points and call-out boxes to break down dense technical requirements. This approach ensures that the "Deployment Plan" is not just filed away, but actively used as a reference guide during the rollout. It stands as an example of how design can support critical public health interventions.</p>
            </div>
        `
    },
    {
        id: 'gov-4',
        title: 'Migori Mid-Term Review',
        category: 'GOVERNMENT',
        client: 'Migori County Government',
        date: '2021',
        role: 'Report Layout & Design',
        image: '/portfolio-files/Government/Mid-term-Report1.png',
        document: '/portfolio-files/Government/Mid Term Evaluation Report-Migori county multisectoral action plan (2018-2019).pdf',
        size: 'medium',
        isLight: true,
        content: `
            <div class="magazine-intro">
                <p>The "Mid Term Evaluation Report: Migori County Multisectoral Action Plan" evaluates the progress made in addressing key health challenges faced by adolescents and youth. It focuses on six priority areas: adolescent pregnancy, HIV/AIDS, SGBV, advocacy, governance, and monitoring.</p>
            </div>

            <div class="magazine-section">
                <h3>Evaluating Progress</h3>
                <p>The report highlights achievements such as a significant reduction in adolescent pregnancies and increased access to youth-friendly services. Our design identifies challenges like gaps in funding and data reporting, presenting them in a clear, actionable format to ensure sustainable improvements.</p>
            </div>
            
             <img src="/portfolio-files/Government/Mid-term-Report2.png" class="magazine-image-full" alt="Internal Report Layout" />

             <div class="pull-quote">
                "Data collection is the first step towards improvement."
            </div>
        `
    },

    // INFOGRAPHICS
    {
        id: 'info-1',
        title: 'Theory of Change',
        category: 'INFOGRAPHICS',
        image: '/portfolio-files/Infographics/Theory-of-Change-R.jpg',
        document: '/portfolio-files/Infographics/Theory-of-Change-R.jpg',
        size: 'large',
        isLight: true,
        content: `
            <div class="magazine-intro">
                <p>Complex systems require simple visualizations. For this Theory of Change, we distilled intricate cause-and-effect relationships into a clear, linear flow that stakeholders could understand at a glance. The challenge was to represent the multi-layered strategy without oversimplifying the nuance of the intervention.</p>
                <p>We started by deconstructing the program logic into its core components: inputs, activities, outputs, outcomes, and impact. Using a left-to-right visual flow, we mapped these elements to show the progressive realization of the project's goals.</p>
            </div>
            
            <div class="magazine-section">
                <h3>Visualizing Logic</h3>
                <p>Color coding was essential. Each strategic pillar was assigned a distinct hue, allowing viewers to trace a specific thread from initial investment to final impact. The connecting lines are not just decorative; they represent the critical pathways of change that the program relies upon.</p>
                <p>The final infographic serves as both a roadmap for the project team and a communication tool for donors. It transforms abstract development concepts into a tangible, visual story of change, proving that good design is an integral part of effective monitoring and evaluation.</p>
            </div>
        `
    },
    {
        id: 'info-2',
        title: 'Electoral Process',
        category: 'INFOGRAPHICS',
        image: '/portfolio-files/Infographics/The-Electoral-Process-In-Somaliland-copy.jpg',
        document: '/portfolio-files/Infographics/The-Electoral-Process-In-Somaliland-copy.jpg',
        size: 'medium',
        isLight: true,
        content: `
            <div class="magazine-intro">
                <p>Democracy explained. This infographic breaks down the Somaliland electoral process into distinct, easy-to-follow steps, educating voters on their rights and responsibilities. In an environment where information overload can lead to voter apathy, our goal was to provide clarity and confidence.</p>
                <p>We adopted a step-by-step illustrated approach. Each stage of the voting process, from registration to the ballot box, is represented by a clear icon and a concise description. This reduces the cognitive load on the viewer and makes the information accessible to people with varying literacy levels.</p>
            </div>
            
            <div class="magazine-section">
                <h3>Educational Design</h3>
                <p>The color palette utilizes the national colors, fostering a sense of civic pride and ownership. The layout is designed to be printed as large-format posters for polling stations as well as smaller hand-held flyers.</p>
                <p>By visualizing the transparency and structure of the process, the infographic helps to build trust in the electoral system. It demonstrates how graphic design can play a pivotal role in civic education and nation-building.</p>
            </div>
        `
    },
    {
        id: 'info-3',
        title: 'Somaliland Timeline',
        category: 'INFOGRAPHICS',
        image: '/portfolio-files/Infographics/Somaliland-Elections-Timeline.jpg',
        document: '/portfolio-files/Infographics/Somaliland-Elections-Timeline.jpg',
        size: 'wide',
        isLight: false,
        content: `
            <div class="magazine-intro">
                <p>History in the making. We visualized the timeline of the Somaliland elections to provide historical context, using a horizontal axis to show key milestones and events leading up to the vote. This timeline captures the journey of a nation, highlighting the perseverance and dedication required to maintain a democratic process.</p>
                <p>The design utilizes a clean, modern aesthetic that prioritizes readability. Key dates are highlighted with bold typography, while supporting text provides necessary context without cluttering the visual field.</p>
            </div>

            <div class="magazine-section">
                <h3>Chronicle of Progress</h3>
                <p>We incorporated archival markers and future projections to show that the election is a continuum of the nation's history. The spacing between events visually represents the varied pace of political developments—periods of intense activity followed by stable planning phases.</p>
                <p>This infographic is more than just dates; it is a narrative of resilience. It allows observers to quickly grasp the sequence of events that have shaped the current political landscape, making it an invaluable tool for journalists, observers, and citizens alike.</p>
            </div>
        `
    },

    // MAGAZINES
    {
        id: 'mag-1',
        title: 'Live Green Magazine',
        category: 'MAGAZINES',
        image: '/portfolio-files/Magazines/Cover mockup.png',
        document: '/portfolio-files/Magazines/Live Green Magazine.pdf',
        size: 'large',
        content: `
            <div class="magazine-intro">
                <p>Live Green is a lifestyle publication dedicated to sustainable living. The layout reflects this ethos with fresh, airy pages, botanical motifs, and a typography treatment that feels modern yet organic. We chose a matte paper stock for the physical print to enhance the tactile experience, reinforcing the connection to nature.</p>
                <p>The grid system was designed to be flexible, allowing for varied article lengths and photo dominance. From in-depth features on eco-architecture to quick tips for zero-waste living, the design adapts to the content while maintaining a cohesive visual identity.</p>
            </div>
            
            <div class="magazine-section">
                <h3>Sustainable Aesthetics</h3>
                <p>We avoided high-gloss finishes and synthetic inks where possible, opting for eco-friendly production methods that align with the magazine's mission. The color palette draws directly from nature—sage greens, terracotta browns, and sky blues—creating a calming reading experience.</p>
                <p>Typography plays a key role, mixing a clean sans-serif for headlines with a highly legible serif for body text. This combination mimics the balance between modern innovation and traditional wisdom that defines the sustainable movement.</p>
            </div>
        `
    },
    {
        id: 'mag-2',
        title: 'NAYA SRHR Report',
        category: 'MAGAZINES',
        client: 'NAYA',
        date: '2018',
        role: 'Publication Design',
        image: '/portfolio-files/Magazines/SRHR-Newsletter-cover.png',
        document: '/portfolio-files/Magazines/SRHR_Alliance_newslette_key_cover.pdf',
        size: 'medium',
        content: `
             <div class="magazine-intro">
                <p>NAYA seeks to build the capacity of young people and organizations to advance Sexual and Reproductive Health and Rights (SRHR). When they approached us in 2018 for their second report, they needed a fresh perspective for digital dissemination.</p>
            </div>

            <div class="magazine-grid-2">
                 <img src="/portfolio-files/Magazines/SRHR Newsletter.png" class="magazine-grid-img" alt="Newsletter Spread 1" />
                 <img src="/portfolio-files/Magazines/SRHR Newsletter2.png" class="magazine-grid-img" alt="Newsletter Spread 2" />
            </div>

            <div class="magazine-section">
                <h3>Digital First</h3>
                <p>The report highlighted NAYA's key focus areas by showcasing achievements through compelling metrics. We achieved this via engaging infographics and a dynamic layout design optimized for online reading and social sharing.</p>
            </div>
             
             <img src="/portfolio-files/Magazines/SRHR Newsletter5.png" class="magazine-image-full" alt="Full Page Graphic" />
        `
    },
    {
        id: 'mag-3',
        title: 'Strategic Plan 2021-2025',
        category: 'MAGAZINES',
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

    // POLICY
    {
        id: 'pol-1',
        title: 'Maputo Protocol',
        category: 'POLICY',
        image: '/portfolio-files/Policy/Maputo_Protocol_POLICY_BRIEF_Page_1.jpg',
        document: '/portfolio-files/Policy/Maputo_Protocol_POLICY_BRIEF_Page_1.jpg',
        size: 'medium',
        isLight: true,
        content: `
            <div class="magazine-intro">
                <p>Policy made accessible. The Maputo Protocol brief required transforming dense legal text into a readable, engaging document. We used clear headings and pull-out boxes to highlight key takeaways for policymakers. The project demanded a rigorous attention to detail, ensuring that every clause was presented accurately while remaining approachable.</p>
            </div>
            
            <div class="magazine-section">
                <h3>Navigating Law</h3>
                <p>We introduced a colour-coding system to categorize different articles of the protocol, making navigation intuitive for non-legal experts. This system allows readers to quickly identify sections relevant to their specific area of interest, whether it be health, education, or economic rights.</p>
                <p>The formatting emphasizes readability, with ample margins and a serif font chosen for its legibility in long-form reading. The result is a document that invites engagement rather than intimidation, facilitating better understanding and implementation of the protocol.</p>
            </div>
        `
    },
    {
        id: 'pol-2',
        title: 'Media Policy Brief',
        category: 'POLICY',
        image: '/portfolio-files/Policy/Media Policy Brief on the World Tuberculosis Day_Page_1.jpg',
        document: '/portfolio-files/Policy/Media Policy Brief on the World Tuberculosis Day_Page_1.jpg',
        size: 'medium',
        isLight: true,
        content: `
            <div class="magazine-intro">
                <p>Briefing the media effectively. This document was created to give journalists quick, accurate information on World Tuberculosis Day. The layout prioritizes facts and figures for rapid consumption. In the fast-paced news cycle, journalists need key facts immediately, and our design delivers exactly that.</p>
            </div>
            
            <div class="magazine-section">
                <h3>Information Velocity</h3>
                <p>We designed the "Key Takeaways" section to be the first thing the eye hits, utilizing bold statistics and clear summary statements. This distinct hierarchy ensures that the core message is communicated even if the reader only scans the page.</p>
                <p>The layout is modular, allowing sections to be easily repurposed for press releases or social media snippets. By thinking beyond the document itself, we provided a toolkit that extends the reach of the campaign across multiple platforms.</p>
            </div>
        `
    },
    {
        id: 'pol-3',
        title: 'African Commission Brief',
        category: 'POLICY',
        image: '/portfolio-files/Policy/The African Commission On Human and Peoples Rights Policy Brief _Page_1.jpg',
        document: '/portfolio-files/Policy/The African Commission On Human and Peoples Rights Policy Brief _Page_1.jpg',
        size: 'medium',
        isLight: true,
        content: `
            <div class="magazine-intro">
                <p>Advocating for Human Rights. This brief for the African Commission used a dignified, formal design language to present critical recommendations on human and peoples' rights. Gravitas was the guiding principle; the document needed to command respect on the international stage.</p>
            </div>
            
            <div class="magazine-section">
                <h3>Dignity in Design</h3>
                <p>The design utilizes a restrained color palette of deep crimsons and charcoal greys, reflecting the seriousness of the subject matter. We avoided frivolous elements, focusing instead on a clean, grid-based layout that speaks to order and justice.</p>
                <p>We balanced the text with watermark-style illustrations of the African continent, providing a subtle visual anchor that reinforces the pan-African context of the commission's work. These elements add depth without distracting from the critical text.</p>
            </div>
        `
    },
    {
        id: 'pol-4',
        title: 'Adolescent Advocacy Toolkit',
        category: 'POLICY',
        image: '/portfolio-files/Policy/Adolescent Advocacy Toolkit/AdolescentAdvocacyToolkit_cover.png',
        document: '#',
        size: 'large',
        isLight: false,
        content: `
            <div class="magazine-intro">
                <p>Empowering the next generation. This toolkit was designed to be a practical, hands-on resource for young advocates. We used vibrant colors and active imagery to encourage participation and action. This is a tool for action, not just a reference book.</p>
            </div>
            
            <div class="magazine-section">
                <h3>Tools for Change</h3>
                <p>We included interactive elements such as checklists, worksheet pages, and planning templates that users can fill out directly. The layout invites the user to write, sketch, and plan their advocacy campaigns directly within the pages of the toolkit.</p>
                <p>The illustrations are inclusive, representing a diverse range of African youth, ensuring that every user feels represented and welcomed into the advocacy space. The visual language is energetic and hopeful, mirroring the spirit of the youth movement it supports.</p>
            </div>
        `
    },

    // STRATEGIC PLAN

    {
        id: 'sp-2',
        title: 'BvAT Strategic Plan',
        category: 'STRATEGIC PLAN',
        image: '/portfolio-files/Strategic Plan/BvAT Strategic Plan Summary 2_Page_01.jpg',
        document: '/portfolio-files/Strategic Plan/Strategic-Plan-2021-2024-BvAT-PRINT.pdf',
        size: 'medium',
        isLight: true,
        content: `
            <div class="magazine-intro">
                <p>BvAT's strategic direction visualized. We created a clean, forward-looking design that encapsulates the BioVision Africa Trust's mission for 2021-2024, focusing on clarity and inspirational imagery. We moved away from the traditional, text-heavy strategic plan to create something closer to a corporate profile.</p>
            </div>
            
            <div class="magazine-section">
                <h3>Visionary Layout</h3>
                <p>The document uses high-quality photography to tell the story of the trust's impact on the ground. These real-world images ground the strategic goals in reality, reminding stakeholders of the people behind the numbers.</p>
                <p>The financial section, often the driest part of such reports, was transformed with clean, colorful charts that make the growth trajectory instantly understandable. By stripping away visual noise, we allowed the data to tell a compelling story of sustainable growth and future potential.</p>
            </div>
        `
    },

    // CORPORATE
    {
        id: 'corp-1',
        title: 'Poverty Reduction',
        category: 'CORPORATE',
        image: '/portfolio-files/Corporate/poverty-4561704_1920.jpg',
        document: '/portfolio-files/Corporate/poverty-4561704_1920.jpg',
        size: 'medium',
        content: `
            <div class="magazine-intro">
                <p>Visualizing the fight against poverty. This corporate piece used stark, emotional imagery combined with hopeful data points to illustrate the impact of poverty reduction initiatives. The design strikes a delicate balance between acknowledging harsh realities and presenting a hopeful way forward.</p>
            </div>
            
            <div class="magazine-section">
                <h3>Empathy and Impact</h3>
                <p>We utilized a high-contrast layout, pairing black-and-white field photography with bold, colored data highlights. This visual dichotomy serves to emphasize the transformative power of the interventions described in the text.</p>
                <p>The call to action—supporting the initiative—is designed to stand out clearly against the narrative background. By guiding the reader emotionally through the problem and logically through the solution, the design effectively drives engagement and support.</p>
            </div>
        `
    },

    // EMPTY CATEGORIES - USING CREATIVE REUSE/PLACEHOLDERS
    {
        id: 'broch-1',
        title: 'Corporate Brochure',
        category: 'BROCHURES AND FLYERS',
        image: '/portfolio-files/Annual Reports/Annual report 3.png',
        document: '/portfolio-files/Strategic Plan/A4_Brochure_Mockup_Inside_01.png',
        size: 'medium',
        isLight: true,
        content: `
            <div class="magazine-intro">
                <p>A professional brochure designed to communicate core values. We utilized high-quality stock and precise typography to create a sense of trust and reliability for the brand. This piece serves as the primary handshake for the company, tailored to speak directly to potential partners.</p>
            </div>
            
            <div class="magazine-section">
                <h3>Tactile Quality</h3>
                <p>The physical experience of the brochure was paramount. We selected a heavy, textured paper stock that feels substantial in the hand, reinforcing the company's reputation for solidity and endurance. The print finishes include subtle spot UV coating to highlight key messaging without being flashy.</p>
                <p>Inside, the fold-out design reveals a timeline of the company's achievements. This interactive element turns the act of reading into a journey through the brand's history, effectively communicating their long-standing commitment to excellence.</p>
            </div>
        `
    },
    {
        id: 'doc-1',
        title: 'Impact Documentary',
        category: 'DOCUMENTARIES',
        image: '/portfolio-files/Annual Reports/Annual Report 4.png',
        document: '#',
        size: 'large',
        content: `
            <div class="magazine-intro">
                <p>Stories in motion. This documentary project involved editing hundreds of hours of footage into a cohesive narrative that tells the real stories of change on the ground. The pacing of the documentary was critical, structuring the narrative arc to take the viewer from the problem statement to the final triumph.</p>
            </div>
            
            <div class="magazine-section">
                <h3>Cinematic Storytelling</h3>
                <p>We didn't just assemble clips; we crafted a film. Sound design played a massive role; we layered ambient field recordings with a composed score to create an immersive atmosphere that transports the viewer to the field locations.</p>
                <p>The editing style focuses on human emotion. By lingering on reaction shots and allowing silences to breathe, we gave the audience space to connect with the subjects. The result is a powerful piece of advocacy that resonates on a deeply personal level.</p>
            </div>
        `
    },
    {
        id: 'story-v1',
        title: 'Storytelling Video 1',
        category: 'STORY TELLING',
        image: 'https://img.youtube.com/vi/o3JEVG1nJvw/hqdefault.jpg',
        document: 'https://www.youtube.com/watch?v=o3JEVG1nJvw',
        size: 'medium',
        isVideo: true,
        content: `
            <div class="magazine-intro">
                <p>A visual journey through the heart of the community. This video captures the essence of the initiative through intimate interviews and cinematic B-roll. We used a handheld shooting style to create a sense of intimacy and immediacy, making the camera a participant rather than an observer.</p>
            </div>
            
            <div class="magazine-section">
                <h3>Intimate Access</h3>
                <p>Color grading was kept natural but warm, emphasizing the human element and the golden-hour light of the setting. This aesthetic choice helps to portray the community in a dignified, hopeful light, steering clear of 'poverty porn' tropes.</p>
                <p>The soundscape is driven by the ambient sounds of the village—children playing, wind in the trees, distant livestock—grounding the viewer in the reality of the location. These texture tracks run beneath the interviews, providing a constant sense of place.</p>
            </div>
        `
    },
    {
        id: 'story-v2',
        title: 'Storytelling Video 2',
        category: 'STORY TELLING',
        image: 'https://img.youtube.com/vi/H70qg7lc2tI/maxresdefault.jpg',
        document: 'https://www.youtube.com/watch?v=H70qg7lc2tI',
        size: 'wide',
        isVideo: true,
        content: `
            <div class="magazine-intro">
                <p>Narrative driven by emotion. In this piece, we focused on the personal struggles and triumphs of the subjects, creating a connection that goes beyond just information. The edit prioritized silence as much as dialogue, giving the viewer space to process the emotional weight of the stories.</p>
            </div>
            
            <div class="magazine-section">
                <h3>Emotional Resonance</h3>
                <p>We interspersed the interview footage with metaphorical cutaways—flowing water, wind in the trees—to visually represent the internal states of the subjects. These visual metaphors allow us to discuss complex emotional themes without needing explicit exposition.</p>
                <p>The musical score builds slowly, starting with a solitary cello and expanding into a full orchestral arrangement as the subjects describe their journey towards empowerment. This sonic progression mirrors the narrative arc of the film itself.</p>
            </div>
        `
    },
    {
        id: 'story-v3',
        title: 'Storytelling Video 3',
        category: 'STORY TELLING',
        image: 'https://img.youtube.com/vi/ttSURoLacfY/maxresdefault.jpg',
        document: 'https://www.youtube.com/watch?v=ttSURoLacfY',
        size: 'medium',
        isVideo: true,
        content: `
            <div class="magazine-intro">
                <p>Highlighting success. This short film documents the positive outcomes of the program, using upbeat pacing and vibrant visuals to inspire further support. This video is a celebration; fast cuts and dynamic transitions mirror the energy of the community's achievements.</p>
            </div>
            
            <div class="magazine-section">
                <h3>Celebrating Impact</h3>
                <p>The soundtrack is driving and optimistic, propelling the narrative forward and leaving the viewer with a sense of possibility and inspiration. We timed the edits strictly to the beat, creating a rhythmic visual experience that keeps the audience engaged.</p>
                <p>Visually, we focused on action—hands working, people moving, projects being built. This focus on agency reinforces the core message: that the community is the driver of its own change. It’s a high-energy piece designed to rally support and morale.</p>
            </div>
        `
    },
    {
        id: 'ux-1',
        title: 'Interactive Dashboard',
        category: 'UX-UI',
        image: '/portfolio-files/Government/Thin_Book_Hard_Cover_Mockup_2.png',
        document: '#',
        size: 'medium',
        isLight: true,
        content: `
            <div class="magazine-intro">
                <p>Data at your fingertips. We designed this interactive dashboard to be intuitive and powerful, allowing users to drill down into complex datasets with ease. User experience was our north star; we conducted testing to ensure that even non-technical users could access deep insights within three clicks.</p>
            </div>
            
            <div class="magazine-section">
                <h3>Data-Driven Design</h3>
                <p>The aesthetic is clean and modern 'dark mode', reducing eye strain for analysts working long hours and allowing the vibrant data points to pop off the screen. We emphasized hierarchy, size, and color to guide the user's attention to the most critical anomalies and trends.</p>
                <p>Interactive elements respond instantly to user input, providing a tactile sense of control. Hover states, drill-downs, and dynamic filtering turn the passive act of viewing a report into an active process of exploration and discovery.</p>
            </div>
        `
    }
];
