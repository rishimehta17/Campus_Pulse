import React, { useMemo, useState } from "react";

const IMAGES = {
  campus: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
  pantry: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=1200&q=80",
  wellbeing: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80",
  scholarships: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
};

const studentProfile = {
  interests: ["Career", "Food", "Well-being", "Scholarship"],
  year: "Graduate Student",
  major: "Engineering / Robotics",
  needs: ["Funding", "Networking", "Stress Support", "Free Resources"],
};

const reelItems = [
  {
    id: 1,
    type: "Event",
    category: "Social",
    title: "UMD Spring Music Night",
    date: "April 28, 2026 • 6:00 PM",
    location: "McKeldin Mall",
    description: "Student performances, food trucks, and a relaxed outdoor community night on campus.",
    tag: "Campus life",
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80",
    likes: 234,
    comments: 45,
    relevanceTags: ["Social", "Networking", "Food"],
  },
  {
    id: 2,
    type: "Scholarship",
    category: "Funding",
    title: "First-Gen Student Grant",
    date: "Deadline: May 3, 2026",
    location: "Online application",
    description: "Small emergency and academic support grants for first-generation students needing books, fees, or supplies.",
    tag: "Apply now",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1200&q=80",
    likes: 567,
    comments: 89,
    relevanceTags: ["Scholarship", "Funding", "Free Resources"],
  },
  {
    id: 3,
    type: "Well-being",
    category: "Mental Health",
    title: "Drop-in Meditation",
    date: "Daily • 12:15 PM",
    location: "Health Center Room 210",
    description: "A 20-minute guided breathing session for stress relief. No registration, no experience needed.",
    tag: "Walk in",
    image: IMAGES.wellbeing,
    likes: 189,
    comments: 23,
    relevanceTags: ["Well-being", "Stress Support", "Mental Health"],
  },
  {
    id: 4,
    type: "Campus Pantry",
    category: "Food Support",
    title: "UMD Campus Pantry Pickup",
    date: "Mon–Fri • 10 AM–5 PM",
    location: "Campus Pantry",
    description: "Find free groceries, hygiene products, and emergency food support without judgment or complicated steps.",
    tag: "Food support",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80",
    likes: 412,
    comments: 67,
    relevanceTags: ["Food", "Free Resources", "Campus Pantry"],
  },
  {
    id: 5,
    type: "Event",
    category: "Career",
    title: "Engineering Resume Sprint Lab",
    date: "Friday • 2:00 PM",
    location: "Career Center",
    description: "Bring your resume and get fast feedback from peer mentors and career advisors before internship deadlines.",
    tag: "Career help",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    likes: 298,
    comments: 34,
    relevanceTags: ["Career", "Networking", "Engineering"],
  },
  {
    id: 6,
    type: "Event",
    category: "TerpLink",
    title: "Find a Student Org on TerpLink",
    date: "Updated weekly",
    location: "TerpLink discovery page",
    description: "Browse UMD student organizations, club events, leadership opportunities, and community groups in one place.",
    tag: "Explore clubs",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
    likes: 376,
    comments: 58,
    relevanceTags: ["Social", "Networking", "TerpLink"],
  },
];

const scholarships = [
  {
    title: "Presidential Excellence Scholarship",
    amount: "$10,000",
    deadline: "May 15, 2026",
    category: "Merit-Based",
    fit: "3.8+ GPA, all majors, leadership potential.",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "STEM Innovation Grant",
    amount: "$7,500",
    deadline: "June 1, 2026",
    category: "Major-Specific",
    fit: "STEM majors with strong academic or project work.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "First-Generation Student Award",
    amount: "$5,000",
    deadline: "May 30, 2026",
    category: "Need-Based",
    fit: "First-generation students needing academic support funding.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Community Service Leadership",
    amount: "$6,000",
    deadline: "June 15, 2026",
    category: "Service",
    fit: "Students with volunteering, mentoring, or campus leadership experience.",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=900&q=80",
  },
];

const meditationSlots = [
  { title: "5-Minute Calm", time: "Anytime", place: "Guided session", mood: "Quick Reset", minutes: 5, image: "https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&w=900&q=80" },
  { title: "Lunch Breathing Break", time: "12:15 PM", place: "Health Center", mood: "Stress Relief", minutes: 20, image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=80" },
  { title: "Evening Decompress", time: "5:30 PM", place: "Counseling Center", mood: "After Classes", minutes: 30, image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=900&q=80" },
];

const pantryItems = [
  "Fresh produce and shelf-stable food",
  "Personal hygiene essentials",
  "Emergency grocery support",
  "Simple anonymous resource guidance",
];

const scholarshipCategories = ["All", "Merit-Based", "Need-Based", "Major-Specific", "Service"];

const scholarshipSteps = [
  "Create or update your student profile with major, GPA, year, interests, and financial need.",
  "Use profile-based matches first instead of applying randomly.",
  "Prepare one strong personal statement that can be reused and customized.",
  "Collect your resume, transcript, recommendation contact, and project/leadership examples.",
  "Apply before the deadline and save confirmation screenshots or emails.",
];

const scholarshipGuideImages = [
  { title: "Build your profile", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80" },
  { title: "Prepare documents", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80" },
  { title: "Submit before deadline", image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80" },
];

function getScholarshipMatchScore(item) {
  let score = 55;
  const text = `${item.title} ${item.fit} ${item.category}`.toLowerCase();
  if (text.includes("stem") || text.includes("major")) score += 18;
  if (text.includes("need") || text.includes("first")) score += 15;
  if (text.includes("leadership") || text.includes("service")) score += 10;
  if (studentProfile.major.toLowerCase().includes("engineering") && text.includes("stem")) score += 12;
  if (studentProfile.needs.includes("Funding")) score += 8;
  return Math.min(score, 99);
}

function getRelevanceScore(item) {
  let score = 50;
  item.relevanceTags.forEach((tag) => {
    if (studentProfile.interests.includes(tag)) score += 18;
    if (studentProfile.needs.includes(tag)) score += 16;
    if (tag === "Engineering" && studentProfile.major.includes("Engineering")) score += 12;
  });
  if (item.type === "Scholarship") score += 8;
  if (item.type === "Campus Pantry") score += 6;
  return Math.min(score, 99);
}

function filterReels(items, filter, query, aiSort = true) {
  const filtered = items.filter((item) => {
    const matchesFilter = filter === "All" || item.type === filter;
    const searchableText = `${item.title} ${item.description} ${item.tag} ${item.location} ${item.category}`.toLowerCase();
    const matchesQuery = searchableText.includes(query.trim().toLowerCase());
    return matchesFilter && matchesQuery;
  });
  if (!aiSort) return filtered;
  return [...filtered].sort((a, b) => getRelevanceScore(b) - getRelevanceScore(a));
}

function filterScholarships(items, search, category) {
  return items.filter((item) => {
    const matchesSearch = `${item.title} ${item.fit} ${item.category}`.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || item.category === category;
    return matchesSearch && matchesCategory;
  });
}

if (typeof window !== "undefined") {
  console.assert(filterReels(reelItems, "All", "").length === 6, "Test failed: All filter should show every reel.");
  console.assert(filterReels(reelItems, "Event", "", false).length === 3, "Test failed: Event filter should show three event reels.");
  console.assert(filterReels(reelItems, "Scholarship", "first-gen").length === 1, "Test failed: Scholarship search should find First-Gen grant.");
  console.assert(filterReels(reelItems, "Well-being", "meditation").length === 1, "Test failed: Well-being search should find meditation.");
  console.assert(filterReels(reelItems, "Campus Pantry", "food").length === 1, "Test failed: Pantry search should find food support.");
  console.assert(getRelevanceScore(reelItems[1]) > 70, "Test failed: AI relevance should prioritize scholarship/funding content.");
  console.assert(filterScholarships(scholarships, "stem", "All").length === 1, "Test failed: Scholarship search should find STEM scholarship.");
  console.assert(filterScholarships(scholarships, "", "Need-Based").length === 1, "Test failed: Need-Based category should show one scholarship.");
  console.assert(getScholarshipMatchScore(scholarships[1]) > getScholarshipMatchScore(scholarships[0]), "Test failed: Engineering profile should rank STEM scholarship highly.");
  console.assert(Object.values(IMAGES).every((url) => url.startsWith("https://")), "Test failed: All section images should be valid HTTPS URLs.");
  console.assert(scholarships.every((item) => item.image), "Test failed: Every scholarship should have an image.");
  console.assert(meditationSlots.every((item) => item.image), "Test failed: Every meditation slot should have an image.");
  console.assert(scholarshipGuideImages.length === 3, "Test failed: How-to-apply should have three guide images.");
}

function Icon({ name, size = 22, className = "" }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    "aria-hidden": true,
  };

  const paths = {
    calendar: <><path d="M8 2v4" /><path d="M16 2v4" /><rect x="3" y="4" width="18" height="18" rx="3" /><path d="M3 10h18" /></>,
    cap: <><path d="M22 10 12 5 2 10l10 5 10-5Z" /><path d="M6 12v5c3 2 9 2 12 0v-5" /></>,
    heart: <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z" />,
    pantry: <><path d="M4 8h16l-1.5 13h-13L4 8Z" /><path d="M8 8a4 4 0 0 1 8 0" /><path d="M9 13h6" /><path d="M12 10v6" /></>,
    link: <><path d="M10 13a5 5 0 0 0 7.1 0l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1" /><path d="M14 11a5 5 0 0 0-7.1 0l-2 2A5 5 0 0 0 12 20.1l1.1-1.1" /></>,
    reels: <><rect x="4" y="3" width="16" height="18" rx="4" /><path d="M8 3l3 6" /><path d="M14 3l3 6" /><path d="M4 9h16" /><path d="m10 13 5 3-5 3v-6Z" /></>,
    map: <><path d="M12 21s7-5.2 7-12a7 7 0 1 0-14 0c0 6.8 7 12 7 12Z" /><circle cx="12" cy="9" r="2.5" /></>,
    search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    bookmark: <path d="M6 3h12v18l-6-4-6 4V3Z" />,
    sparkles: <><path d="M12 3 14 9l6 2-6 2-2 6-2-6-6-2 6-2 2-6Z" /><path d="M19 3v4" /><path d="M21 5h-4" /></>,
    users: <><path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" /><circle cx="9.5" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.8" /><path d="M16 3.2a4 4 0 0 1 0 7.6" /></>,
    close: <><path d="M18 6 6 18" /><path d="m6 6 12 12" /></>,
    message: <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />,
    share: <><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><path d="M8.6 13.5 15.4 17.5" /><path d="M15.4 6.5 8.6 10.5" /></>,
    checklist: <><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></>,
    profile: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>,
    play: <path d="m8 5 11 7-11 7V5Z" />,
  };

  return <svg {...common}>{paths[name] || paths.sparkles}</svg>;
}

function Button({ children, className = "", ...props }) {
  return (
    <button {...props} className={`inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-semibold transition active:scale-95 ${className}`}>
      {children}
    </button>
  );
}

function InfoCard({ icon, title, text, iconClass, onClick }) {
  return (
    <button onClick={onClick} className="group rounded-3xl border border-white/10 bg-white/10 p-5 text-left text-white transition hover:-translate-y-1 hover:bg-white/15 hover:shadow-2xl">
      <Icon name={icon} className={`mb-3 ${iconClass}`} />
      <div className="text-2xl font-bold">{title}</div>
      <p className="text-sm text-slate-300">{text}</p>
      <div className="mt-4 text-xs font-black uppercase tracking-wide text-cyan-200 opacity-0 transition group-hover:opacity-100">Open page →</div>
    </button>
  );
}

function TypeBadge({ type }) {
  const styles = {
    Event: "bg-orange-100 text-orange-700",
    Scholarship: "bg-blue-100 text-blue-700",
    "Well-being": "bg-emerald-100 text-emerald-700",
    "Campus Pantry": "bg-lime-100 text-lime-800",
  };
  return <span className={`rounded-full px-3 py-1 text-xs font-semibold ${styles[type] || "bg-white text-slate-900"}`}>{type}</span>;
}

function ReelsModal({ onClose }) {
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");
  const [aiSort, setAiSort] = useState(true);
  const [liked, setLiked] = useState({});
  const [saved, setSaved] = useState({});
  const filteredItems = useMemo(() => filterReels(reelItems, filter, query, aiSort), [filter, query, aiSort]);

  const toggleLike = (id) => setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
  const toggleSave = (id) => setSaved((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-2 backdrop-blur-md">
      <div className="relative w-full max-w-md">
        <Button onClick={onClose} className="absolute right-2 top-2 z-30 h-12 w-12 rounded-full bg-white/20 p-0 text-white hover:bg-white/30">
          <Icon name="close" />
        </Button>

        <div className="absolute left-2 right-2 top-2 z-20">
          <div className="mb-2 rounded-2xl bg-black/50 p-2 text-white shadow-xl ring-1 ring-white/10 backdrop-blur-md">
            <div className="flex items-center gap-2 px-2 py-2">
              <Icon name="search" size={16} />
              <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search UMD reels..." className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/70" />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-1">
              {["All", "Event", "Scholarship", "Well-being", "Campus Pantry"].map((item) => (
                <Button key={item} onClick={() => setFilter(item)} className={`shrink-0 px-3 py-1 text-xs ${filter === item ? "bg-white text-black" : "bg-white/20 text-white"}`}>
                  {item}
                </Button>
              ))}
            </div>
            <button onClick={() => setAiSort(!aiSort)} className={`mt-2 flex w-full items-center justify-center gap-2 rounded-xl px-3 py-2 text-xs font-bold ${aiSort ? "bg-cyan-400 text-slate-950" : "bg-white/10 text-white"}`}>
              <Icon name="sparkles" size={14} /> AI relevance ranking {aiSort ? "ON" : "OFF"}
            </button>
          </div>
        </div>

        <div className="h-[90vh] w-full snap-y snap-mandatory overflow-y-scroll rounded-3xl bg-black" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          {filteredItems.map((item) => (
            <div key={item.id} className="relative flex h-[90vh] snap-start snap-always flex-col justify-end overflow-hidden p-6 text-white">
              <img src={item.image} alt={item.title} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/85" />

              <div className="absolute right-4 top-1/2 z-10 flex -translate-y-1/2 flex-col gap-5">
                <button onClick={() => toggleLike(item.id)} className="flex flex-col items-center gap-1 rounded-full bg-black/30 p-3 backdrop-blur-md active:scale-90">
                  <Icon name="heart" className={liked[item.id] ? "fill-red-500 text-red-500" : "text-white"} />
                  <span className="text-[11px] font-bold">{item.likes + (liked[item.id] ? 1 : 0)}</span>
                </button>
                <button className="flex flex-col items-center gap-1 rounded-full bg-black/30 p-3 backdrop-blur-md"><Icon name="message" /><span className="text-[11px] font-bold">{item.comments}</span></button>
                <button className="flex flex-col items-center gap-1 rounded-full bg-black/30 p-3 backdrop-blur-md"><Icon name="share" /><span className="text-[11px] font-bold">Share</span></button>
                <button onClick={() => toggleSave(item.id)} className="flex flex-col items-center gap-1 rounded-full bg-black/30 p-3 backdrop-blur-md"><Icon name="bookmark" className={saved[item.id] ? "fill-yellow-300 text-yellow-300" : "text-white"} /><span className="text-[11px] font-bold">Save</span></button>
              </div>

              <div className="relative z-10 pr-20">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <TypeBadge type={item.type} />
                  <span className="rounded-full bg-black/45 px-3 py-1 text-xs font-bold backdrop-blur-md">{item.category}</span>
                  <span className="rounded-full bg-cyan-300 px-3 py-1 text-xs font-black text-slate-950">{getRelevanceScore(item)}% match</span>
                </div>
                <div className="rounded-3xl bg-black/40 p-5 backdrop-blur-md">
                  <div className="mb-2 text-xs font-bold uppercase tracking-wide text-white/80">{item.tag}</div>
                  <h2 className="text-3xl font-black leading-tight">{item.title}</h2>
                  <div className="mt-2 space-y-1 text-sm text-white/90">
                    <div className="flex items-center gap-2"><Icon name="clock" size={14} /> {item.date}</div>
                    <div className="flex items-center gap-2"><Icon name="map" size={14} /> {item.location}</div>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-white/90">{item.description}</p>
                  <Button className="mt-4 w-full bg-white py-3 font-black text-black">View details</Button>
                </div>
              </div>
            </div>
          ))}
          {filteredItems.length === 0 && <div className="flex h-full items-center justify-center text-white">No reels found</div>}
        </div>
      </div>
    </div>
  );
}

function PageShell({ title, subtitle, icon, children, onBack }) {
  return (
    <div className="min-h-screen bg-slate-950 px-4 py-6 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-col justify-between gap-4 rounded-[2rem] bg-white/5 p-6 ring-1 ring-white/10 md:flex-row md:items-center">
          <div>
            <button onClick={onBack} className="mb-4 rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-cyan-200 hover:bg-white/20">← Back to Campus Pulse</button>
            <div className="flex items-center gap-3"><Icon name={icon} className="text-cyan-200" /><h1 className="text-3xl font-black md:text-5xl">{title}</h1></div>
            <p className="mt-3 max-w-3xl text-slate-300">{subtitle}</p>
          </div>
          <Button onClick={onBack} className="bg-white px-5 py-3 font-black text-slate-950 hover:bg-slate-100">Home</Button>
        </div>
        {children}
      </div>
    </div>
  );
}

function TerpLinkDummyCard() {
  return (
    <section className="rounded-[2rem] bg-white p-6 text-slate-950 shadow-xl">
      <img src={IMAGES.campus} alt="Campus students" className="mb-5 h-56 w-full rounded-3xl object-cover" />
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-black">TerpLink Discovery</h2>
          <p className="text-sm text-slate-500">Dummy TerpLink preview with real context for UMD clubs, events, and student organizations.</p>
        </div>
        <Icon name="link" className="text-red-600" />
      </div>
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50">
        <div className="flex items-center justify-between bg-red-700 px-4 py-3 text-white">
          <div className="font-black">TerpLink @ UMD</div>
          <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-red-700">Dummy link</span>
        </div>
        <div className="p-5">
          <div className="rounded-3xl bg-white p-5 shadow-sm">
            <div className="mb-2 text-sm font-bold uppercase tracking-wide text-red-700">Featured student orgs</div>
            <h3 className="text-xl font-black">Find your campus community</h3>
            <p className="mt-2 text-sm text-slate-600">Search student organizations, upcoming meetings, leadership opportunities, cultural groups, engineering clubs, and service events.</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {["Robotics Club", "First-Gen Network", "Meditation Group"].map((org) => (
                <div key={org} className="rounded-2xl bg-slate-100 p-3 text-sm font-bold">{org}</div>
              ))}
            </div>
            <a href="#terplink-demo" className="mt-5 inline-flex w-full items-center justify-center rounded-2xl bg-slate-950 px-4 py-3 text-sm font-black text-white">Open dummy TerpLink page</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function PantryPageContent() {
  return (
    <section className="rounded-[2rem] bg-lime-50 p-6 text-slate-950 shadow-xl">
      <img src={IMAGES.pantry} alt="Food pantry" className="mb-5 h-56 w-full rounded-3xl object-cover" />
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-black">Campus Pantry Support</h2>
          <p className="text-sm text-slate-600">Food and essential resources presented in a simple, stigma-free way.</p>
        </div>
        <Icon name="pantry" className="text-lime-700" />
      </div>
      <div className="grid gap-5 lg:grid-cols-[1fr_0.8fr]">
        <div className="rounded-3xl bg-white p-5 shadow-sm">
          <div className="mb-3 text-sm font-bold uppercase tracking-wide text-lime-700">Available support</div>
          <div className="space-y-3">
            {pantryItems.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl bg-lime-50 p-3 text-sm font-medium text-slate-700"><span className="mt-1 h-2 w-2 rounded-full bg-lime-600" />{item}</div>
            ))}
          </div>
          <Button className="mt-5 w-full bg-lime-600 py-4 font-bold text-white hover:bg-lime-700">Check pantry hours / request support</Button>
        </div>
        <div className="rounded-3xl bg-white p-5 shadow-sm">
          <h3 className="font-black">Why this matters</h3>
          <p className="mt-2 text-sm text-slate-600">Students should not have to search across disconnected sites to find basic food support. This page makes pantry help visible, simple, and low-pressure.</p>
          <div className="mt-4 rounded-2xl bg-lime-100 p-4 text-sm font-bold text-lime-800">Suggested AI feature: recommend pantry resources when a student searches “free food,” “groceries,” or “emergency help.”</div>
        </div>
      </div>
    </section>
  );
}

function WellBeingPageContent() {
  return (
    <section className="rounded-[2rem] bg-emerald-50 p-6 text-slate-950 shadow-xl">
      <img src={IMAGES.wellbeing} alt="Meditation" className="mb-5 h-56 w-full rounded-3xl object-cover" />
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-black">Drop-in Well-being</h2>
          <p className="text-sm text-slate-600">Meditation, breathing breaks, and support without complicated sign-ups.</p>
        </div>
        <Icon name="heart" className="text-emerald-700" />
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {meditationSlots.map((slot) => (
          <div key={slot.title} className="overflow-hidden rounded-3xl bg-white shadow-sm">
            <img src={slot.image} alt={slot.title} className="h-36 w-full object-cover" />
            <div className="p-5">
              <h3 className="font-black">{slot.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{slot.place}</p>
              <div className="mt-4 text-2xl font-black text-emerald-700">{slot.time}</div>
              <div className="text-xs text-slate-500">{slot.mood} • {slot.minutes} min</div>
              <Button className="mt-4 bg-emerald-600 text-white"><Icon name="play" size={14} className="mr-2" /> Start</Button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <div className="mb-3 flex items-center gap-2 font-black text-emerald-800"><Icon name="users" /> Connect with an Advisor</div>
          <p className="text-sm text-slate-600">Talk to a campus counselor, academic advisor, or peer support mentor. Get guidance for stress, academics, or personal concerns.</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2"><Button className="bg-emerald-600 text-white">Book Counseling Session</Button><Button className="bg-slate-900 text-white">Chat with Peer Mentor</Button></div>
          <div className="mt-4 rounded-2xl bg-emerald-100 p-4 text-sm font-semibold text-emerald-800">Typical response time: &lt; 24 hrs • Walk-in support available at Counseling Center</div>
        </div>
        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <h3 className="font-black">Quick help</h3>
          <p className="mt-2 text-sm text-slate-600">If you're feeling overwhelmed right now, connect instantly.</p>
          <Button className="mt-4 w-full bg-red-500 text-white">Immediate support</Button>
          <Button className="mt-3 w-full bg-slate-200 text-slate-900">Email advisor</Button>
        </div>
      </div>
      <div className="mt-6 rounded-3xl bg-slate-950 p-5 text-white"><div className="flex items-center gap-2 font-bold"><Icon name="users" size={18} /> Anonymous check-in idea</div><p className="mt-2 text-sm text-slate-300">Students can select their stress level and the site recommends a quick resource, meditation slot, or campus support office.</p></div>
    </section>
  );
}

function ScholarshipFinder({ scholarshipSearch, setScholarshipSearch, scholarshipCategory, setScholarshipCategory }) {
  const [activeTab, setActiveTab] = useState("apply");
  const filteredScholarships = filterScholarships(scholarships, scholarshipSearch, scholarshipCategory)
    .slice()
    .sort((a, b) => getScholarshipMatchScore(b) - getScholarshipMatchScore(a));
  const tabs = [
    { id: "apply", label: "How to Apply", icon: "play" },
    { id: "search", label: "Search Scholarships", icon: "search" },
    { id: "profile", label: "Profile Match", icon: "profile" },
  ];

  return (
    <section className="rounded-[2rem] bg-white p-6 text-slate-950 shadow-xl">
      <div className="mb-5 flex items-center justify-between">
        <div><h2 className="text-2xl font-black">Scholarship Finder</h2><p className="text-sm text-slate-500">Learn how to apply, search scholarships, and get profile-based matches.</p></div>
        <Icon name="cap" className="text-blue-600" />
      </div>
      <div className="mb-6 grid gap-2 rounded-3xl bg-slate-100 p-2 md:grid-cols-3">
        {tabs.map((tab) => (
          <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-black transition ${activeTab === tab.id ? "bg-slate-950 text-white shadow-lg" : "text-slate-600 hover:bg-white"}`}>
            <Icon name={tab.icon} size={16} />{tab.label}
          </button>
        ))}
      </div>

      {activeTab === "apply" && (
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl bg-slate-950 text-white shadow-lg">
            <div className="relative min-h-[360px] overflow-hidden p-6">
              <img src={IMAGES.scholarships} alt="Students working together on scholarship applications" className="absolute inset-0 h-full w-full object-cover opacity-70" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-blue-900/30" />
              <div className="relative z-10 flex min-h-[310px] flex-col justify-end">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white text-slate-950 shadow-xl"><Icon name="play" size={30} /></div>
                <h3 className="text-3xl font-black">How to Apply</h3>
                <p className="mt-2 max-w-md text-sm text-white/85">Visual guide video: profile setup, documents, essay tips, deadlines, and how to improve your chances.</p>
                <Button className="mt-5 w-fit bg-white px-5 py-3 font-black text-slate-950">Watch guide</Button>
              </div>
            </div>
            <div className="grid gap-3 p-4 sm:grid-cols-3">
              {scholarshipGuideImages.map((item) => (
                <div key={item.title} className="overflow-hidden rounded-2xl bg-white/10"><img src={item.image} alt={item.title} className="h-24 w-full object-cover" /><div className="p-3 text-xs font-bold text-white">{item.title}</div></div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-blue-50 p-4">
            <div className="mb-3 flex items-center gap-2 font-black text-blue-800"><Icon name="checklist" /> Steps to apply</div>
            <div className="space-y-3">
              {scholarshipSteps.map((step, index) => (
                <div key={step} className="flex gap-3 rounded-2xl bg-white p-3 text-sm text-slate-700"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-black text-white">{index + 1}</span>{step}</div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === "search" && (
        <div>
          <div className="mb-4 space-y-3">
            <div className="flex items-center gap-2 rounded-2xl border border-slate-200 px-4 py-3"><Icon name="search" size={16} className="text-slate-400" /><input value={scholarshipSearch} onChange={(e) => setScholarshipSearch(e.target.value)} placeholder="Search scholarships..." className="w-full outline-none" /></div>
            <div className="flex flex-wrap gap-2">{scholarshipCategories.map((cat) => <button key={cat} onClick={() => setScholarshipCategory(cat)} className={`rounded-full px-3 py-1 text-xs font-bold ${scholarshipCategory === cat ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-600"}`}>{cat}</button>)}</div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {filteredScholarships.map((item) => (
              <div key={item.title} className="overflow-hidden rounded-3xl border border-slate-200"><img src={item.image} alt={item.title} className="h-36 w-full object-cover" /><div className="p-4"><div className="flex items-start justify-between gap-3"><div><h3 className="font-bold">{item.title}</h3><span className="mt-2 inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">{item.category}</span></div><span className="rounded-full bg-green-50 px-3 py-1 text-sm font-bold text-green-700">{item.amount}</span></div><p className="mt-2 text-sm text-slate-600">{item.fit}</p><div className="mt-3 text-sm font-semibold text-slate-900">Deadline: {item.deadline}</div><Button className="mt-4 w-full bg-blue-600 py-3 font-black text-white hover:bg-blue-700">Start application</Button></div></div>
            ))}
            {filteredScholarships.length === 0 && <p className="py-6 text-center text-sm text-slate-500 md:col-span-2">No scholarships found.</p>}
          </div>
        </div>
      )}

      {activeTab === "profile" && (
        <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-3xl border border-slate-200 bg-purple-50 p-4">
            <div className="mb-3 flex items-center gap-2 font-black text-purple-800"><Icon name="profile" /> Student profile</div>
            <div className="rounded-2xl bg-white p-4 text-sm text-slate-700"><div className="font-bold text-slate-950">Current demo profile</div><p className="mt-1">{studentProfile.year} • {studentProfile.major}</p><div className="mt-3 flex flex-wrap gap-2">{[...studentProfile.interests, ...studentProfile.needs].map((tag) => <span key={tag} className="rounded-full bg-purple-100 px-3 py-1 text-xs font-bold text-purple-700">{tag}</span>)}</div></div>
            <p className="mt-3 text-sm text-slate-600">The matching score ranks scholarships using major, interests, funding need, and support goals.</p>
          </div>
          <div className="space-y-4">
            {scholarships.slice().sort((a, b) => getScholarshipMatchScore(b) - getScholarshipMatchScore(a)).map((item) => (
              <div key={item.title} className="overflow-hidden rounded-3xl border border-slate-200"><img src={item.image} alt={item.title} className="h-32 w-full object-cover" /><div className="flex items-start justify-between gap-3 p-4"><div><h3 className="font-bold">{item.title}</h3><p className="mt-2 text-sm text-slate-600">{item.fit}</p></div><div className="text-right"><span className="rounded-full bg-green-50 px-3 py-1 text-sm font-bold text-green-700">{item.amount}</span><div className="mt-2 rounded-full bg-cyan-100 px-3 py-1 text-xs font-black text-cyan-800">{getScholarshipMatchScore(item)}% match</div></div></div></div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default function CampusPulse() {
  const [showReels, setShowReels] = useState(false);
  const [activePage, setActivePage] = useState("home");
  const [scholarshipSearch, setScholarshipSearch] = useState("");
  const [scholarshipCategory, setScholarshipCategory] = useState("All");
  const goHome = () => setActivePage("home");

  if (activePage === "terplink") {
    return <PageShell title="TerpLink Discovery" subtitle="Explore UMD student organizations, clubs, campus events, and community opportunities from one focused page." icon="link" onBack={goHome}><TerpLinkDummyCard /></PageShell>;
  }
  if (activePage === "pantry") {
    return <PageShell title="Campus Pantry Support" subtitle="A simple resource page for food support, hygiene essentials, and emergency student assistance." icon="pantry" onBack={goHome}><PantryPageContent /></PageShell>;
  }
  if (activePage === "scholarships") {
    return <PageShell title="Scholarship Finder" subtitle="Learn how to apply, search funding opportunities, and get profile-based scholarship matches." icon="cap" onBack={goHome}><ScholarshipFinder scholarshipSearch={scholarshipSearch} setScholarshipSearch={setScholarshipSearch} scholarshipCategory={scholarshipCategory} setScholarshipCategory={setScholarshipCategory} /></PageShell>;
  }
  if (activePage === "wellbeing") {
    return <PageShell title="Drop-in Well-being" subtitle="Meditation, breathing breaks, anonymous check-ins, and low-friction support for students." icon="heart" onBack={goHome}><WellBeingPageContent /></PageShell>;
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {showReels && <ReelsModal onClose={() => setShowReels(false)} />}
      <div className="mx-auto max-w-7xl px-4 py-6">
        <section className="rounded-[2rem] bg-white/5 p-6 shadow-2xl ring-1 ring-white/10">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
            <div>
              <div className="mb-2 flex items-center gap-2 text-sm text-cyan-200"><Icon name="sparkles" size={16} /> AI-powered UMD campus discovery</div>
              <h1 className="text-4xl font-black tracking-tight md:text-6xl">Campus Pulse</h1>
              <p className="mt-3 max-w-3xl text-base text-slate-300 md:text-lg">A student-first UMD hub for events, scholarships, TerpLink discovery, pantry support, and drop-in mental well-being resources.</p>
            </div>
            <Button onClick={() => setShowReels(true)} className="bg-gradient-to-r from-pink-500 to-orange-400 px-6 py-4 text-base font-black text-white shadow-xl hover:opacity-90"><Icon name="reels" className="mr-2" /> Scroll current campus events</Button>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            <InfoCard icon="link" title="TerpLink Discovery" text="Explore clubs, student orgs, and official campus opportunities." iconClass="text-red-300" onClick={() => setActivePage("terplink")} />
            <InfoCard icon="pantry" title="Campus Pantry Support" text="Access food, hygiene items, and essential student support resources." iconClass="text-lime-300" onClick={() => setActivePage("pantry")} />
            <InfoCard icon="cap" title="Scholarship Finder" text="Search scholarships, learn how to apply, and see profile matches." iconClass="text-blue-300" onClick={() => setActivePage("scholarships")} />
            <InfoCard icon="heart" title="Drop-in Well-being" text="Find meditation, breathing breaks, and mental health support." iconClass="text-emerald-300" onClick={() => setActivePage("wellbeing")} />
          </div>
          <div className="mt-6 rounded-3xl bg-cyan-400/10 p-5 ring-1 ring-cyan-300/20"><div className="flex items-center gap-2 font-black text-cyan-200"><Icon name="sparkles" /> AI relevance engine</div><p className="mt-2 text-sm text-slate-300">The reels rank opportunities using a mock student profile: interests, major, funding needs, free resources, networking, and stress support.</p></div>
        </section>
      </div>
    </div>
  );
}
