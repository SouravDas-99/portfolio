/* =====================================================================
   YOUR CONTENT — EDIT ONLY THIS BLOCK (everything between the two ===== lines)
   • Change the words inside the "quotes". Keep the quotes, commas and brackets.
   • Do NOT type a straight double quote (") inside your text. Use ’ or “ ” instead.
   • You can use <br> for a line break in a few places (marked below).
   • To ADD a project/skill/job: copy a whole { ... }, block and paste it below itself.
   • To REMOVE one: delete its whole { ... }, block.
   ===================================================================== */
const SITE = {
  // ---- Basics ----
  name: "Sourav Das",
  bigWord: "SOURAV",          // the huge vertical word in the hero
  logo: "S",                  // the letter in the small round logo
  footer: "Built with intent. Improving with every project.",

  // ---- Contact links (use full links; email is just the address) ----
  contact: {
    email: "YOUR_EMAIL@example.com",
    linkedin: "https://www.linkedin.com/in/YOUR-LINKEDIN-USERNAME/",
    youtube: "https://www.youtube.com/@YOUR-CHANNEL-HANDLE",
    label: "Have a project in mind?",
    heading: ["Let’s make", "something"], highlight: "matter.",
    text: "Looking for an entry-level digital marketing opportunity or need help with social content? Let’s talk about the goal and see if I can help."
  },

  // ---- Top section (hero) ----
  hero: {
    status: "Open to digital marketing roles",
    kicker: ["Digital marketing", "& content creator"],
    headline: ["Good ideas", "deserve to", "get noticed."],   // last line is the glowing one
    intro: "I’m Sourav — a digital marketing intern building practical experience across social media, content strategy, and performance marketing.",
    button: "VIEW WORK", link: "Get in touch ↗",
    cardTitle: ["MARKETING", "SPECIALIST"],
    cardList: ["Social media", "Content strategy", "Reels & Shorts", "SEO basics"],
    stats: [ { n: 50, plus: "+", label: "Posts & reels*" }, { n: 2, pad: 2, label: "Instagram accounts*" } ]
  },

  // ---- Scrolling strip under the hero ----
  marquee: ["Social media", "Content strategy", "Reels & Shorts", "Instagram", "YouTube", "SEO basics", "Meta Ads", "Canva", "CapCut", "Copywriting"],

  // ---- Numbers strip (k: "K" adds a K after the number, plus: "+" adds a plus) ----
  numbers: {
    items: [
      { n: 50, plus: "+", label: "Posts & reels", sub: "Internship work*" },
      { n: 2, pad: 2, label: "Instagram accounts", sub: "Managed during internship*" },
      { n: 433, k: "K", plus: "+", label: "YouTube views", sub: "DC GAMING 99*" }
    ],
    note: "*Based on figures previously shared by me; historical figures, not live analytics."
  },

  // ---- Big scroll scene (words light up as you scroll). "highlight" words glow in color ----
  scene: { label: "My approach", text: "Good ideas deserve attention. I make them easy to notice.", highlight: ["attention", "notice"] },

  // ---- About ----
  about: {
    label: "About me",
    heading: ["Creative by nature.", "Curious about what works."],
    paragraphs: [
      "I enjoy the full journey behind digital content — finding the angle, shaping the idea, creating the post or reel, publishing it, and learning from the response.",
      "My experience so far includes social media management for wedding and event brands, creative work for gaming content, and hands-on learning in digital marketing. I’m continuing to build my skills in SEO and paid media with a focus on honest testing and measurable improvement."
    ],
    sign: "Currently studying B.Com at Bangabasi Evening College", signSub: "Expected completion: 2029",
    steps: [
      ["Understand first", "Audience, goal, context — before making content."],
      ["Create with intent", "Make the message clear, useful, and consistent."],
      ["Learn from the response", "Review performance and improve the next iteration."]
    ]
  },

  // ---- Selected work ----
  work: {
    label: "Selected work",
    heading: ["Proof of work,", "not just promises."],
    intro: "A selection of projects and practical experience. Some results are observational and are labelled accordingly.",
    projects: [
      { id: "wedding", style: "w",   // style = the look of the picture: w (cream), g (dark green/purple), l (brown), s (steps)
        kicker: "Social media management",
        art: ["the art of", "celebrating<br>your story", "WEDDING · EVENTS"],   // style w: 3 lines
        metaL: "Internship experience", metaR: "Jun — Aug",
        title: "Rebuilding consistency for wedding & event pages",
        text: "Worked across two existing Instagram accounts, contributing content ideas, editing, captions, strategy, scheduling, publishing, and performance review.",
        tags: ["Content planning", "Reels", "Instagram", "Publishing"],
        // what shows in the pop-up window when someone clicks the card:
        facts: [["Role", "Social media intern"], ["Period", "Jun — Aug"], ["Accounts", "2 Instagram pages"], ["Output", "~50 posts & reels*"]],
        notes: ["Worked across two existing wedding and event accounts on content ideas, editing, captions, strategy, scheduling, publishing, and performance review.", "*Approximate, from my own records. The accounts started with small audiences and performance varied by post. No follower-growth claim is made."] },
      { id: "gaming", style: "g",
        kicker: "Creator project",
        art: ["PLAY.<br>CREATE.<br><em>REPEAT.</em>", "DC GAMING 99"],   // style g: 2 lines
        metaL: "YouTube content", metaR: "Ongoing project",
        title: "Learning content through a gaming channel",
        text: "Built experience with gaming videos and Shorts, titles, thumbnails, audience-focused ideas, and content iteration through my own channel.",
        tags: ["YouTube", "Short-form video", "Packaging"],
        facts: [["Platform", "YouTube"], ["Status", "Ongoing"], ["Channel", "DC GAMING 99"], ["Views", "433K+*"]],
        notes: ["A channel I run myself, where I practise packaging and improving content: gaming videos and Shorts, titles, thumbnails, and audience-focused ideas.", "*Figure previously shared by me; historical, not live analytics."],
        link: { label: "Visit channel ↗", to: "youtube" } },   // to: "youtube", "linkedin" or "email"
      { id: "local", style: "l",
        kicker: "Local business promotion",
        art: ["GOOD FOOD.", "GOOD MOOD.", "LOCAL SHOP PROMOTION"],   // style l: 3 lines
        metaL: "Informal project", metaR: "Organic promotion",
        title: "A simple creative push for a local food shop",
        text: "Created a promotional banner and video for a local food business as a free project, gaining practical experience translating a business into social content.",
        tags: ["Creative assets", "Video", "Local business"],
        facts: [["Type", "Free project"], ["Assets", "Banner + video"], ["For", "Local food shop"], ["Reported", "~1,000 → ~1,100"]],
        notes: ["Created a promotional banner and video, turning a local business into simple social content.", "I was told the shop’s customer count moved from roughly 1,000 to 1,100 over about a month. This is an informal observation, not independently verified, and it does not prove the promotion caused the change."] },
      { id: "strategy", style: "s",
        kicker: "Content strategy",
        art: ["01 / HOOK", "02 / STORY", "03 / ACTION ↗"],   // style s: 3 short lines
        metaL: "Creative process", metaR: "Planning & execution",
        title: "From a rough idea to a publish-ready post",
        text: "Developing social content concepts, aligning visuals and messaging, writing captions, and adapting tone to the platform and audience.",
        tags: ["Concepting", "Copywriting", "Canva", "CapCut"],
        facts: [["Step 1", "Hook"], ["Step 2", "Story"], ["Step 3", "Action"], ["Tools", "Canva, CapCut"]],
        notes: ["How I take a rough idea to a publish-ready post: the concept, matching visuals and messaging, the caption, and a tone adapted to the platform and audience.", "Approved screenshots and live examples will be added here."] }
    ]
  },

  // ---- Skills ----
  skills: {
    label: "Toolkit",
    heading: ["Skills I use.", "Skills I’m building."],
    groups: [
      { title: "Social & content", items: ["Social media management", "Content ideas", "Content calendars", "Captions", "Reels", "Publishing", "Basic performance review"] },
      { title: "Marketing fundamentals", items: ["SEO fundamentals", "Meta Ads basics", "CPC, CTR & ROAS concepts", "Audience and campaign thinking"] },
      { title: "Creative tools", items: ["Canva", "CapCut", "Adobe Express", "ChatGPT", "Basic Photoshop", "Short-form video editing"] },
      { title: "Currently learning", items: ["Deeper performance marketing", "Google Ads", "Better measurement and reporting", "Stronger case-study documentation"] }
    ],
    note: "Skill levels are represented conservatively. This portfolio does not claim advanced paid-media expertise or certified qualifications."
  },

  // ---- Experience & education (newest first is a good idea) ----
  experience: {
    label: "Experience & education",
    heading: ["Building experience", "one project at a time."],
    items: [
      { date: "JUN — AUG · YEAR TO CONFIRM", role: "Social Media Management Intern", org: "Exquisite Unison by Krista", text: "Supported two wedding and event Instagram accounts with content ideation, editing, captions, scheduling, publishing, and analysis." },
      { date: "2026 — PRESENT · DETAILS TO ADD", role: "Digital Marketing Intern", org: "Current internship", text: "Current role. Add the employer name, responsibilities, and approved examples before publishing this section." },
      { date: "EXPECTED 2029", role: "B.Com", org: "Bangabasi Evening College", text: "Undergraduate studies." }
    ]
  }
};
/* ===================== END OF YOUR CONTENT — don't edit below ===================== */
