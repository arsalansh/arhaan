export interface DiagnosticQuestion {
  id: string;
  number: string;
  question: string;
  category: string;
  diagnosis: string;
  strategicAction: string;
}

export interface ServiceLens {
  number: string;
  title: string;
  shortDesc: string;
  extendedScope: string;
  deliverables: string[];
  diagnosticQuery: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  activities: string[];
  deliverable: string;
}

export interface CaseStudy {
  id: string;
  caseNumber: string;
  title: string;
  clientType: string;
  category: 'Market Entry' | 'E-commerce' | 'Repositioning' | 'Omnichannel';
  challenge: string;
  strategy: string;
  outcome: string;
  detailedOverview: string;
  metrics: { label: string; value: string }[];
  frameworkSteps: string[];
  tags: string[];
}

export interface JournalArticle {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  readTime: string;
  date: string;
  summary: string;
  content: string[];
  takeaways: string[];
}

export interface FaqItem {
  number: string;
  question: string;
  answer: string;
}

export const SITE_METADATA = {
  name: "Arhaan Shaikh",
  title: "Business Consultant · Growth Strategist",
  agency: "The Bombay Digital Company",
  agencyRole: "Founder",
  coordinates: "MUMBAI, INDIA · 19.0760° N",
  exactCoordinates: "19.0760° N, 72.8777° E",
  email: "arhaan@thebombaydigitalcompany.com",
  phone: "+91 98201 44890",
  whatsappUrl: "https://wa.me/919820144890?text=Hi%20Arhaan,%20I%20would%20like%20to%20discuss%20a%20strategic%20consultation.",
  calendarUrl: "https://cal.com/arhaanshaikh/strategy-session",
  agencyUrl: "https://thebombaydigitalcompany.com",
  linkedin: "https://linkedin.com/in/arhaanshaikh",
  instagram: "https://instagram.com/thebombaydigitalco",
  heroHeadline: "Turning business problems into growth strategies.",
  heroSubtext: "I work with brands to understand what is really holding growth back—then build the right go-to-market, e-commerce, and marketing strategy to move forward.",
  aboutBrief: "A decade on both sides of growth. I’ve spent the last decade moving between strategy rooms and delivery calendars—building positioning for founders, running campaigns, shaping brands, and sitting with teams on the days the plan meets reality.",
};

export const METRICS = [
  { value: "10+", label: "Years across strategy & delivery", detail: "Consulting across consumer, tech & retail" },
  { value: "100+", label: "Brands supported by ecosystem", detail: "Early-stage venture to established market leaders" },
  { value: "06", label: "Connected growth disciplines", detail: "Unified under a single commercial logic" },
  { value: "01", label: "Clear growth roadmap", detail: "The Bombay Digital Company delivery engine" },
];

export const DIAGNOSTIC_QUESTIONS: DiagnosticQuestion[] = [
  {
    id: "diag-1",
    number: "01",
    question: "Where do I even begin with marketing?",
    category: "Foundation",
    diagnosis: "Most founders start with channels (Meta, Google, Influencers) before establishing the core value proposition and unit economics.",
    strategicAction: "We begin upstream: defining your Ideal Customer Profile, product-market fit signal, and your first 90-day demand loop before committing spend.",
  },
  {
    id: "diag-2",
    number: "02",
    question: "What’s the right marketing budget and media split for a new brand?",
    category: "Capital Allocation",
    diagnosis: "Relying on arbitrary percentage rules creates dangerous burn without testing customer acquisition cost (CAC) boundaries.",
    strategicAction: "We build a test-and-scale budget allocation: 60% proving core demand, 25% creative experimentation, and 15% brand equity reserve.",
  },
  {
    id: "diag-3",
    number: "03",
    question: "How do I make my brand stand out from day one?",
    category: "Positioning",
    diagnosis: "In crowded categories, differentiation is not about louder graphics or bigger fonts; it is about owning an unaddressed consumer anxiety or desire.",
    strategicAction: "We formulate a sharp category wedge that forces competitors into an outdated mental model, positioning your product as the obvious modern choice.",
  },
  {
    id: "diag-4",
    number: "04",
    question: "Which e-commerce platform is right for my brand?",
    category: "Tech & Architecture",
    diagnosis: "Choosing between Shopify, custom headless stacks, Amazon, or Quick Commerce portals (Blinkit/Zepto) without mapping margins leads to fatal operational bottlenecks.",
    strategicAction: "We align your fulfillment velocity, gross margins, and customer LTV with the exact technical and marketplace stack that protects unit economics.",
  },
  {
    id: "diag-5",
    number: "05",
    question: "How do I price my product right?",
    category: "Pricing & Margin",
    diagnosis: "Cost-plus pricing ignores psychological perceived value and leaves no room for customer acquisition costs at scale.",
    strategicAction: "We deploy value-based tiered pricing with bundling architecture that absorbs paid media friction while establishing premium category authority.",
  },
  {
    id: "diag-6",
    number: "06",
    question: "Why are people visiting but not buying?",
    category: "Conversion Rate",
    diagnosis: "The checkout is rarely the problem. Traffic leakage happens when ad promises don't align with landing page messaging, social proof, or friction points.",
    strategicAction: "We audit the full consideration journey: matching search intent, eliminating decision fatigue, and injecting context-driven trust cues.",
  },
  {
    id: "diag-7",
    number: "07",
    question: "How do I increase my ROAS?",
    category: "Performance Strategy",
    diagnosis: "Fixating solely on ad campaign tweaks while ignoring average order value (AOV), post-purchase retention, and creative fatigue yields diminishing returns.",
    strategicAction: "We re-architect the unit equation: improving blended ROAS through creative volume testing, high-margin upsells, and 60-day repeat repurchase funnels.",
  },
  {
    id: "diag-8",
    number: "08",
    question: "Are we ready to scale?",
    category: "Scaling Readiness",
    diagnosis: "Scaling prematurely amplifies inefficiencies in supply chain, cash flow, and retention, turning growth into a cash incinerator.",
    strategicAction: "We run a comprehensive 4-pillar stress test across retention curves, repeat rates, working capital, and operational capacity before pressing spend.",
  },
];

export const CORE_SERVICES: ServiceLens[] = [
  {
    number: "01",
    title: "Go-to-market strategy",
    shortDesc: "Your go-to-market plan: the right market, audience, and route to demand—whether you’re launching, entering, or scaling.",
    extendedScope: "Translating business vision into an operational entry playbook with clear market sizing, target ICP definitions, and competitive wedges.",
    deliverables: ["Market sizing & ICP definition", "Launch timeline & resource budget", "Channel sequencing architecture", "First 90-day traction milestones"],
    diagnosticQuery: "Are you entering a market with validated demand, or hoping ad spend creates curiosity?",
  },
  {
    number: "02",
    title: "Growth strategy",
    shortDesc: "Finding what’s slowing your growth, and building the plan to fix it.",
    extendedScope: "Diagnosing growth plateaus across customer acquisition, retention, and pricing elasticity to unlock sustainable, profitable momentum.",
    deliverables: ["Bottleneck diagnostic report", "Unit economics optimization model", "Retention & cohort analysis", "Cross-functional roadmap"],
    diagnosticQuery: "Do you have a traffic problem, a conversion problem, or an underlying retention problem?",
  },
  {
    number: "03",
    title: "E-commerce & quick commerce",
    shortDesc: "Improving the journey from first consideration to conversion, retention, and repeat value—including the right market portals.",
    extendedScope: "Orchestrating modern D2C storefronts, Amazon brand stores, and Quick Commerce ecosystems (Blinkit, Zepto, Instamart) with unified inventory and margin logic.",
    deliverables: ["Storefront UX & conversion architecture", "Marketplace & quick-commerce playbook", "Post-purchase retention sequences", "AOV & bundle engineering"],
    diagnosticQuery: "Is your digital shelf engineered for impulse purchase or high-consideration conviction?",
  },
  {
    number: "04",
    title: "Marketing strategy",
    shortDesc: "Marketing built around business goals, not vanity metrics.",
    extendedScope: "Eliminating disjointed marketing efforts by designing an integrated commercial flywheel where brand awareness fuels performance efficiency.",
    deliverables: ["Full-funnel media architecture", "Campaign thematic framework", "Creative testing matrix", "Executive reporting dashboards"],
    diagnosticQuery: "Does your leadership team know exactly how marketing spend links to EBITDA and balance sheet health?",
  },
  {
    number: "05",
    title: "Brand positioning",
    shortDesc: "What your brand stands for, who it’s for, and why it deserves to be chosen.",
    extendedScope: "Distilling your core proposition into an undeniable strategic territory that commands premium pricing and deep emotional resonance.",
    deliverables: ["Strategic positioning statement", "Brand narrative & editorial tone guide", "Competitive differentiation map", "Visual & messaging principles"],
    diagnosticQuery: "If your brand name were covered up, could a customer distinguish you from your three closest rivals?",
  },
  {
    number: "06",
    title: "Digital strategy",
    shortDesc: "Brand, performance, content, and technology working as one connected system.",
    extendedScope: "Bridging the gap between creative storytelling and hard performance engineering, ensuring tech infrastructure supports business scale.",
    deliverables: ["Marketing tech stack audit", "Omnichannel customer journey map", "Content engine workflow", "Data & attribution framework"],
    diagnosticQuery: "Are your content, performance, and development teams executing in silos or as one synchronized unit?",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Listen",
    subtitle: "Contextual immersion",
    description: "The business, category, customer, ambition, and context.",
    activities: [
      "In-depth stakeholder interviews with founders and executive leadership",
      "Customer interview synthesis and sentiment mapping",
      "Historical data analysis (financials, CAC, retention curves)",
      "Category landscape analysis and competitor benchmarking",
    ],
    deliverable: "Context Brief & Strategic Baseline",
  },
  {
    number: "02",
    title: "Audit",
    subtitle: "Root-cause diagnostics",
    description: "The real barrier—not simply the most visible symptom.",
    activities: [
      "Funnel drop-off and conversion friction analysis",
      "Positioning clarity and messaging resonance audit",
      "Paid media efficiency and unit economic health check",
      "Operational & delivery capacity evaluation",
    ],
    deliverable: "Growth Bottleneck Diagnostic Report",
  },
  {
    number: "03",
    title: "Strategize",
    subtitle: "The commercial blueprint",
    description: "The right GTM, commerce, brand, or marketing response.",
    activities: [
      "Formulation of the core strategic hypothesis",
      "Resource allocation, media split, and channel prioritization",
      "Creative direction and campaign messaging architecture",
      "Clear KPI framework and quarterly milestone roadmap",
    ],
    deliverable: "Comprehensive Growth Strategy Roadmap",
  },
  {
    number: "04",
    title: "Execute",
    subtitle: "Precision deployment",
    description: "Measurable action through the right team and specialist ecosystem.",
    activities: [
      "Translation of strategy into granular sprint briefs",
      "Deployment through The Bombay Digital Company specialist ecosystem",
      "Weekly performance governance and telemetry tracking",
      "Continuous iterative calibration based on live market feedback",
    ],
    deliverable: "Ecosystem Execution & Verified Commercial Outcomes",
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "case-01",
    caseNumber: "01",
    title: "Consumer Brand · Launch Architecture",
    clientType: "Consumer brand / name pending",
    category: "Market Entry",
    challenge: "A strong product without a clear route into a crowded category. The brand had premium formulation but zero category awareness and high initial CAC expectations.",
    strategy: "Reframed the audience, entry proposition, channel role, and first 90 days of demand creation. Built a focused wedge around daily rituals rather than clinical efficacy.",
    outcome: "A focused launch system and decision framework that lowered customer acquisition friction by 38% and secured key tier-1 retail placement.",
    detailedOverview: "Entering a hyper-competitive FMCG personal care segment required bypassing generic ad auctions. We engineered a distinctive narrative territory around modern morning routines, seeded high-credibility micro-tastemakers, and synchronized digital pre-orders with direct retail distribution.",
    metrics: [
      { label: "CAC Reduction", value: "38%" },
      { label: "Day-1 Sell-Through", value: "94%" },
      { label: "Target ROAS at Launch", value: "3.2x" },
      { label: "Distribution Reach", value: "14 Cities" },
    ],
    frameworkSteps: [
      "Category White-Space Discovery",
      "Hero SKU Value Re-Architecting",
      "Creator Seeding & Proof Engine",
      "Synchronized Omnichannel Rollout",
    ],
    tags: ["Market Entry", "FMCG", "Launch System", "GTM"],
  },
  {
    id: "case-02",
    caseNumber: "02",
    title: "D2C Brand · Conversion Re-Engineering",
    clientType: "D2C brand / name pending",
    category: "E-commerce",
    challenge: "Growing acquisition activity, but a journey that was leaking intent before purchase. Traffic was increasing by 45% MoM, but conversion rates had plummeted to 1.1%.",
    strategy: "Connected proposition, merchandising, landing experience, and retention into one commerce roadmap. Eliminated decision fatigue on mobile and streamlined checkout trust cues.",
    outcome: "A prioritized conversion program that lifted baseline conversion from 1.1% to 2.8%, elevating blended contribution margins across all paid channels.",
    detailedOverview: "Through qualitative session recordings and heatmapping, we discovered shoppers were overwhelmed by variant choices and uncertain about delivery timelines. We reconstructed the storefront hierarchy, engineered high-intent product bundles with instant value transparency, and installed automated post-purchase WhatsApp workflows.",
    metrics: [
      { label: "Conversion Rate", value: "+154%" },
      { label: "Average Order Value (AOV)", value: "+28%" },
      { label: "Mobile Bounce Rate", value: "-22%" },
      { label: "30-Day Repeat Repurchase", value: "31%" },
    ],
    frameworkSteps: [
      "Full-Funnel Drop-Off Analytics",
      "SKU Bundle & Margin Optimization",
      "Frictionless Mobile Checkout Flow",
      "Post-Purchase Retention Flywheel",
    ],
    tags: ["E-commerce", "CRO", "D2C", "Shopify Plus"],
  },
  {
    id: "case-03",
    caseNumber: "03",
    title: "Legacy Brand · Modern Category Relevance",
    clientType: "Legacy brand / name pending",
    category: "Repositioning",
    challenge: "High awareness, but weak relevance with the audience driving the next stage of growth. The brand was viewed as nostalgic but not essential to younger consumers.",
    strategy: "Defined a sharper strategic territory and translated it across product, narrative, and market activation without alienating the loyal heritage customer base.",
    outcome: "A clearer growth story and aligned execution brief. Restored double-digit growth among the 22–35 demographic and re-energized brand retail velocity.",
    detailedOverview: "Rather than abandoning 25 years of brand equity, we reframed heritage as craftsmanship. We introduced an elevated premium capsule line, modernized packaging typography, and shifted social storytelling from broadcast TV ads to culturally resonant editorial video formats.",
    metrics: [
      { label: "Audience Shift (18-35)", value: "+44%" },
      { label: "Brand Search Volume", value: "+62%" },
      { label: "Premium Tier Margin", value: "+18%" },
      { label: "Retail Velocity Index", value: "1.4x" },
    ],
    frameworkSteps: [
      "Heritage Equity Extraction",
      "Modern Cultural Archetyping",
      "Packaging & Visual Identity Shift",
      "Performance-Backed Re-Launch",
    ],
    tags: ["Repositioning", "Heritage", "Brand Equity", "Omnichannel"],
  },
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: "disrupt-the-market",
    number: "01",
    title: "Disrupt the Market",
    subtitle: "What it takes to create a sharper point of difference in a crowded category.",
    category: "Market strategy",
    readTime: "6 min read",
    date: "March 2026",
    summary: "True disruption is rarely about technological invention. In modern consumer categories, it is almost always about eliminating an accepted category compromise.",
    takeaways: [
      "Disruption is about finding what competitors consider an acceptable annoyance.",
      "A sharp point of difference must immediately justify premium unit economics.",
      "Don't outspend the incumbent; change the criteria by which the customer chooses.",
    ],
    content: [
      "Every founder wants to disrupt their market. But when you ask them how, the answer almost always resolves into spending more on Meta or signing up another roster of influencers.",
      "Real market disruption starts upstream in the product proposition. The most successful challenger brands do not attempt to be 10% better at everything their legacy competitors do. Instead, they choose one single attribute that the market takes for granted—and completely invert it.",
      "Consider the modern consumer: they are exhausted by choices that look identical, sound identical, and compete solely on discounts. When you offer a distinct philosophical reason to exist, you stop competing on price and start competing on conviction.",
      "The exercise is simple: list every standard convention in your category. The packaging, the subscription model, the delivery promise, the tone of voice. Then ask: what if we did the exact opposite for an audience that feels overlooked by the industry standard?",
    ],
  },
  {
    id: "clarity-before-channels",
    number: "02",
    title: "Clarity before channels",
    subtitle: "Why choosing media before diagnosing the business problem creates expensive motion, not progress.",
    category: "Marketing",
    readTime: "6 min read",
    date: "February 2026",
    summary: "When growth stalls, founders instinctually ask 'Which platform should we run ads on next?' That is the wrong question at the wrong time.",
    takeaways: [
      "Channels are amplifiers, not diagnostic instruments. If the message is weak, scale only amplifies the loss.",
      "Diagnostic discipline prevents expensive churn and burned investor capital.",
      "Focus first on your message-to-market resonance before scaling ad budgets.",
    ],
    content: [
      "One of the most common pitfalls I witness across both startups and scaling mid-market brands is 'channel fever.' The marketing team reports that Meta CPMs have jumped 30%, and the immediate executive reaction is to pivot entirely to Google PMax, TikTok, or Quick Commerce.",
      "Here is the uncomfortable truth: channels are simply pipes. If the water inside the pipe is contaminated—meaning your positioning is muddy, your landing experience has friction, or your pricing feels unjustified—pumping it through a new pipe will not change the outcome.",
      "Before allocating another rupee to media spend, conduct an honest diagnostic. If a customer visits your page and does not understand within five seconds who you are, what you solve, and why you are worth paying for, you do not have a channel problem. You have a clarity problem.",
      "When clarity is resolved, media efficiency naturally follows. You can spend with confidence because every click arrives at an intentional commercial system.",
    ],
  },
  {
    id: "bad-positioning-is-expensive",
    number: "03",
    title: "Bad positioning is expensive",
    subtitle: "When the proposition is unclear, every channel has to work harder to earn attention and action.",
    category: "Brand positioning",
    readTime: "7 min read",
    date: "January 2026",
    summary: "Positioning is not a marketing tagline. It is the core financial lever that determines whether you have pricing power or become a commodity.",
    takeaways: [
      "Weak positioning acts as a hidden tax across every paid click and employee hour.",
      "Clear positioning makes acquisition cheaper because the right customer self-selects.",
      "Pricing power is the direct consequence of positioning clarity.",
    ],
    content: [
      "Founders often view brand positioning as a cosmetic exercise—a moodboard created by an agency that ends up filed away in a dusty Google Drive folder.",
      "In reality, positioning is a balance sheet issue. When your positioning is fuzzy, every single ad dollar has to do double duty: first, explaining what you are, and second, convincing someone to buy. That double duty increases customer acquisition costs by 40% to 60%.",
      "Conversely, razor-sharp positioning acts as a magnet. It immediately filters out low-intent curiosity and attracts your ideal customer. They understand the premium. They don't demand constant promotional discount codes.",
      "If your sales cycle feels exhausting or your CAC continues to climb regardless of creative refreshes, look at your positioning. Bad positioning is the most expensive luxury a business can afford.",
    ],
  },
  {
    id: "virality-is-a-piece-of-art",
    number: "04",
    title: "Virality is a piece of art",
    subtitle: "Why reach is rarely accidental—and why attention still needs a commercial role.",
    category: "Content",
    readTime: "5 min read",
    date: "January 2026",
    summary: "Getting a million views is a creative achievement; converting those views into brand equity and paying customers is a disciplined science.",
    takeaways: [
      "Virality without commercial infrastructure is vanity.",
      "Engineering shareable ideas requires understanding human social currency.",
      "Build capture funnels before initiating high-reach awareness campaigns.",
    ],
    content: [
      "In the age of short-form algorithms, brands obsess over viral reach. An agency promises 'organic explosion,' creates a clever video, and hits three million views. The founders celebrate—until they look at the Shopify dashboard and see no incremental lift in revenue.",
      "Attention without direction is waste. The art of virality is not simply creating an entertaining hook; it is creating content where the brand’s core proposition is inseparable from the entertainment value.",
      "When people share a piece of content, they are trading social currency. They are saying: 'This represents my taste, my intelligence, or my humor.' If your brand can be the vehicle for that expression, reach becomes natural.",
      "More importantly, ensure you have an architectural capture engine ready. Without email capture, retargeting pools, and an intuitive landing page, viral attention vanishes in 48 hours.",
    ],
  },
  {
    id: "conversion-is-a-context-problem",
    number: "05",
    title: "Conversion is a context problem",
    subtitle: "The checkout is rarely the only place to look when a commerce journey underperforms.",
    category: "E-commerce",
    readTime: "5 min read",
    date: "December 2025",
    summary: "Treating conversion rate optimization (CRO) as merely moving button colors or adding countdown timers misses the emotional mindset of the buyer.",
    takeaways: [
      "Conversion is determined by the expectation set before the click.",
      "Contextual friction is mental, not just technical.",
      "Align the ad angle directly with the first fold experience of the landing page.",
    ],
    content: [
      "When a founder complains that their e-commerce conversion rate is sitting below 1.5%, the standard reaction is to hire a CRO specialist to tweak button contrast, install urgency countdown timers, or redesign the checkout page.",
      "In my experience, 80% of conversion issues occur before the user ever adds a product to the cart. Conversion is fundamentally a context alignment problem.",
      "If a user clicks an ad anticipating a luxurious sustainable fabric, but lands on a page shouting 50% discount offers and aggressive pop-ups, a subconscious cognitive dissonance is created. The trust evaporates instantly.",
      "Examine the connective tissue between the hook, the click, the landing fold, and the payment button. When the narrative context remains unbroken, conversion happens effortlessly.",
    ],
  },
];

export const FAQS: FaqItem[] = [
  {
    number: "01",
    question: "When is the right time to bring in a growth strategist?",
    answer: "The ideal moment is when you have initial traction (or a proven product) but your growth has either plateaued, become prohibitively expensive, or is preparing for a major market transition (such as entering a new category, transitioning from D2C to omnichannel, or raising growth capital). Bringing in strategy before scaling spend protects capital and prevents months of costly trial-and-error.",
  },
  {
    number: "02",
    question: "Do you work with early-stage founders or established brands?",
    answer: "Both. For early-stage venture-backed founders, the focus is on Go-to-Market architecture, initial positioning, and designing the first sustainable traction engine. For established market leaders and legacy brands, the work focuses on category repositioning, modernizing digital commerce, and breaking through customer acquisition plateaus.",
  },
  {
    number: "03",
    question: "What does an engagement usually begin with?",
    answer: "Every partnership begins with an initial Diagnostic Session to understand the business reality, review unit economics, and identify the true commercial bottleneck. From there, we either execute a focused 30-day Strategic Sprint (Diagnostic & Blueprint) or establish an ongoing quarterly advisory engagement.",
  },
  {
    number: "04",
    question: "Is this strategy only, or can your team execute too?",
    answer: "This is what makes the practice unique. While Arhaan works directly with founders as an executive strategist, he is also the founder of The Bombay Digital Company—a full-service execution engine across brand, content, digital, and performance. We can provide pure strategic advisory for your internal team, or deploy our specialist agency ecosystem to execute every phase flawlessly.",
  },
  {
    number: "05",
    question: "Which areas can you help with?",
    answer: "The practice spans six connected disciplines: Go-to-Market Strategy, Growth Strategy, E-commerce & Quick Commerce Architecture, Marketing Strategy, Brand Positioning, and Digital Transformation. Because modern business problems rarely fit neatly into one bucket, we connect these disciplines into one coherent commercial roadmap.",
  },
  {
    number: "06",
    question: "How do we know what to fix first?",
    answer: "Through our structured Audit phase. We separate visible symptoms (like declining ROAS or slow sales) from root-cause barriers (such as unclear positioning, leaky funnel UX, or uncompetitive unit economics). We prioritize actions by commercial impact vs. operational friction, ensuring your team focuses only on what moves the needle.",
  },
];

export const TESTIMONIALS = [
  {
    quote: "Arhaan brought clarity to our business when we were overwhelmed with conflicting marketing opinions. In 60 days, we restructured our entire GTM and saw our acquisition costs drop while average order value surged.",
    author: "Karan Mehta",
    title: "Co-Founder & CEO",
    company: "D2C Wellness Collective",
    badge: "Verified Client",
  },
  {
    quote: "What sets Arhaan apart is that he doesn't just hand you an ivory-tower slide deck and leave. Because he runs The Bombay Digital Company, his strategic advice is grounded in what a modern team can actually execute and scale.",
    author: "Radhika Singhania",
    title: "Chief Marketing Officer",
    company: "Heritage Consumer Lifestyle",
    badge: "Verified Client",
  },
  {
    quote: "Our e-commerce store was leaking intent at every stage. Arhaan connected our brand narrative directly into our Shopify UX. Conversion rate doubled within weeks of rolling out the new framework.",
    author: "Aditya Shah",
    title: "Founder",
    company: "Urban Apparel Group",
    badge: "Verified Client",
  },
];
