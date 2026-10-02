/* =========================================================
   BUFT AMT SPA Controller
   Vanilla JS only — route views are generated dynamically.
   ========================================================= */

const app = document.getElementById("app");
const nav = document.getElementById("mainNav");
const menuToggle = document.getElementById("menuToggle");
const header = document.getElementById("siteHeader");
const progress = document.getElementById("progress");

const officialAdmission = "https://admission.buft.edu.bd/";
const amtBanner = "https://buft.edu.bd/images/amt-teachers/amt-banner.jpg";

const faculty = [
  ["Prof. Dr. Engr. Mohammed Rubaiyat Chowdhury","Professor & Dean","rubaiyat@buft.edu.bd"],
  ["Md. Monirul Islam Rajib","Assistant Professor & Head","monirulislam@buft.edu.bd"],
  ["Umme Magreba Takebira","Associate Professor","magreba@buft.edu.bd"],
  ["Ishrat Jahan","Assistant Professor","ishratjahannadia@buft.edu.bd"],
  ["Ummelewara Bristi","Assistant Professor","ummelewara@buft.edu.bd"],
  ["Sonjit Kumar Saha","Assistant Professor","sonjitkumar@buft.edu.bd"],
  ["Champa Saha","Assistant Professor","champa439@buft.edu.bd"],
  ["Md. Golam Robbani","Lecturer","golamrobbani@buft.edu.bd"],
  ["Md. Abdul Mukit","Lecturer","mukit@buft.edu.bd"],
  ["Shadman Quamar Mahir","Lecturer","shadman@buft.edu.bd"],
  ["Md. Nurul Haque Samdany","Lecturer","nurul.samdany@buft.edu.bd"],
  ["Mahbuba Sultana Mukta","Lecturer","mahbuba.sultana@buft.edu.bd"]
];

const courseGroups = {
  majors: {
    label:"Majors • 81 Credits",
    items:[
      ["Introduction to Textile Science","Foundation","Builds fundamental understanding of textile materials and their behavior."],
      ["Sewing Technology","Manufacturing","Introduces sewing systems, machines, processes and industrial applications."],
      ["Apparel Production Process and Details","Production","Covers apparel production stages and the relationship between processes."],
      ["Basic Garment Construction","Construction","Develops practical understanding of garment construction and assembly."],
      ["Cutting Room Technology","Production","Explores spreading, cutting and cutting-room technology used in apparel production."],
      ["Pattern Grading & CAD (Lectra & Gerber)","CAD","Introduces grading and computer-aided apparel development using industry tools."],
      ["Apparel Production Engineering","Engineering","Connects manufacturing engineering concepts with apparel production systems."],
      ["ISO, Compliance & Safety Management","Compliance","Covers quality, compliance, workplace safety and responsible production."],
      ["Supply Chain Management","Management","Explores movement and coordination of materials, information and products."],
      ["Product Development & Re-engineering","Product","Focuses on developing, improving and re-engineering apparel products."],
      ["Research Methodology","Research","Introduces structured approaches for academic and industry research."],
      ["Final Year Project","Capstone","A supervised final project demonstrating integrated learning."]
    ]
  },
  specialization:{
    label:"Deepening Specializations • 17 Credits",
    items:[
      ["Advanced Garment Construction","Specialization","Advanced construction concepts and practical garment development."],
      ["Apparel Quality Management","Quality","Quality systems and management approaches for apparel products."],
      ["Sewing Machine Engineering & Attachments","Technology","Machine fundamentals, attachments and their production applications."],
      ["Industrial Garment Washing & Care Labelling","Processing","Industrial washing concepts and appropriate garment care information."],
      ["Apparel Production Planning & Operations Management","Operations","Planning, scheduling and operational management for apparel production."],
      ["Apparel Merchandising Management","Business","Merchandising concepts connected with apparel business operations."]
    ]
  },
  minors:{
    label:"Interdisciplinary Minors • 11 Credits",
    items:[
      ["Elements of Design & Fashion Illustration Lab","Design","Develops visual and design fundamentals that complement apparel technology."],
      ["Fabric Structure & Analysis","Textile","Examines fabric structures and their properties."],
      ["Testing of Textiles","Testing","Introduces testing concepts used to evaluate textile materials."],
      ["Fully-fashioned Knitting Techniques","Knitting","Provides exposure to fully-fashioned knit production techniques."],
      ["Cut & Sew Knitting Techniques","Knitting","Explores cut-and-sew approaches for knitted products."]
    ]
  }
};

function escapeHTML(str){
  return String(str).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
}

function layout(inner){
  return `<div class="page view-enter">${inner}</div>`;
}

function sectionHead(eyebrow,title,text){
  return `<div class="section-head"><span class="eyebrow">${eyebrow}</span><h2>${title}</h2><p class="lead">${text}</p></div>`;
}

const views = {

home(){
return layout(`
<section class="hero">
  <div class="hero-inner">
    <div class="hero-copy">
      <span class="eyebrow">Faculty of Apparel Studies • BUFT</span>
      <h1>Build the technology behind <span>what the world wears.</span></h1>
      <p class="hero-text">Explore the B.Sc. in Apparel Manufacturing & Technology — an interdisciplinary program connecting apparel production, product development, quality, operations, business and modern technical practice.</p>
      <div class="btn-row">
        <a class="btn btn-primary" href="#curriculum" data-route="curriculum">Explore Curriculum →</a>
        <a class="btn btn-light" href="#admission" data-route="admission">Admission & Fees</a>
      </div>
      <div class="hero-kpis">
        <div class="kpi"><strong>145</strong><span>Total Credits</span></div>
        <div class="kpi"><strong>8</strong><span>Semesters</span></div>
        <div class="kpi"><strong>4 Years</strong><span>Standard Duration</span></div>
        <div class="kpi"><strong>8 Weeks</strong><span>Internship</span></div>
      </div>
    </div>
  </div>
  <div class="scroll-note">Discover AMT ↓</div>
</section>

<section class="stat-strip">
  <div class="container stats">
    <div class="stat"><strong>43</strong><span>Major Courses</span></div>
    <div class="stat"><strong>17</strong><span>Specialization Credits</span></div>
    <div class="stat"><strong>11</strong><span>Interdisciplinary Minor Credits</span></div>
    <div class="stat"><strong>145</strong><span>Total Program Credits</span></div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead("Why AMT","A technical degree built around the apparel industry","AMT combines manufacturing technology with management, communication and interdisciplinary learning so graduates can work across the apparel value chain.")}
    <div class="cards">
      <article class="card"><div class="icon-box">01</div><h3>Industry-oriented learning</h3><p>The department highlights continuous industry interaction and visits to leading manufacturing units as part of the learning environment.</p></article>
      <article class="card"><div class="icon-box">02</div><h3>Technology + business</h3><p>Production, quality, supply chain, product development, merchandising, ERP and business administration are connected across the program.</p></article>
      <article class="card"><div class="icon-box">03</div><h3>Practical capability</h3><p>Apparel manufacturing labs, practical coursework, industrial training and a final project help connect academic concepts with application.</p></article>
    </div>
  </div>
</section>

<section class="section dark">
  <div class="container split">
    <div>
      <span class="eyebrow" style="color:#e9b6bf">The program at a glance</span>
      <h2>From fabric and pattern to production and leadership.</h2>
      <p class="lead">The curriculum spans apparel product development and construction, production engineering, quality, sustainability, supply chain, business communication and management.</p>
      <div class="btn-row"><a class="btn btn-primary" href="#about" data-route="about">Discover AMT →</a></div>
    </div>
    <div class="visual" role="img" aria-label="BUFT AMT student activity">
      <div class="visual-note"><strong>Learn. Make. Optimize.</strong><span>Technical knowledge designed for the evolving apparel and allied industries.</span></div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="cta">
      <div><span class="eyebrow" style="color:#e9b6bf">Your next step</span><h2>Ready to explore a future in apparel manufacturing technology?</h2><p>Check the current eligibility, tuition and official application information before applying.</p></div>
      <div class="btn-row"><a class="btn btn-primary" href="#admission" data-route="admission">View Admission</a><a class="btn btn-light" href="${officialAdmission}" target="_blank" rel="noopener">Official Portal ↗</a></div>
    </div>
  </div>
</section>
`);
},

about(){
return layout(`
<section class="section">
  <div class="container">
    ${sectionHead("About AMT","A department designed for a changing apparel industry","The Department of Apparel Manufacturing & Technology focuses on key technological functions of apparel industries, industrial engineering and ergonomics, production planning, operations and quality management.")}
    <div class="split">
      <div>
        <div class="card">
          <span class="eyebrow">Vision</span>
          <h3>Globally integrated technical excellence</h3>
          <p>“To evolve into a globally integrated technical department contributing towards technical education, technical consultancy, research, leadership and corporate excellence.”</p>
        </div>
        <br>
        <div class="card">
          <span class="eyebrow">Mission</span>
          <div class="check-list">
            <div class="check"><b>01</b><p>Provide in-depth knowledge so students can add value to apparel manufacturing technology.</p></div>
            <div class="check"><b>02</b><p>Promote lateral thinking and enquiry to create simple solutions to complex technical problems.</p></div>
            <div class="check"><b>03</b><p>Deliver multidisciplinary knowledge with ethics and social commitment as core principles.</p></div>
          </div>
        </div>
      </div>
      <div>
        <h3 style="font:800 30px Manrope;margin-bottom:15px">What students learn to connect</h3>
        <div class="cards" style="grid-template-columns:1fr 1fr">
          <div class="card"><h3>Product</h3><p>Pattern, construction, product development and re-engineering.</p></div>
          <div class="card"><h3>Production</h3><p>Manufacturing processes, planning, operations and production engineering.</p></div>
          <div class="card"><h3>Quality</h3><p>Quality management, ISO, compliance, safety and testing.</p></div>
          <div class="card"><h3>Business</h3><p>Supply chain, merchandising, negotiation, marketing and communication.</p></div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section dark">
  <div class="container">
    ${sectionHead("Program Profile","B.Sc. in Apparel Manufacturing & Technology","The official program profile identifies AMT as a four-year, eight-semester degree delivered in English, with 145 credits and an 8-week company internship followed by a Bachelor's Thesis/Final Project.")}
    <div class="cards">
      <div class="card"><h3>Degree</h3><p>B.Sc. in Apparel Manufacturing & Technology (Code: 101)</p></div>
      <div class="card"><h3>Academic structure</h3><p>Majors, Deepening Specializations, Interdisciplinary Minors and General Electives.</p></div>
      <div class="card"><h3>Completion</h3><p>8-week industrial internship followed by a Bachelor's Thesis/Final Project.</p></div>
    </div>
  </div>
</section>
`);
},

curriculum(){
const renderGroup = (key) => courseGroups[key].items.map((c,i)=>`
  <div class="acc-item">
    <button class="acc-head" type="button"><span>${escapeHTML(c[0])}</span><span>+</span></button>
    <div class="acc-body"><div class="acc-body-inner"><strong>${escapeHTML(c[1])}</strong><br>${escapeHTML(c[2])}<div class="btn-row"><button class="btn btn-outline course-detail" data-course="${key}-${i}" type="button">Quick details</button></div></div></div>
  </div>`).join("");

return layout(`
<section class="section">
  <div class="container">
    ${sectionHead("Curriculum","145 credits. One connected learning journey.","The official structure contains 70 courses across majors, deepening specializations, interdisciplinary minors and general electives. The list below uses the published course extracts and is designed for easy exploration.")}
    <div class="curriculum-grid">
      <div>
        <div class="pill-tabs" id="courseTabs">
          <button class="active" data-group="majors">Majors</button>
          <button data-group="specialization">Specializations</button>
          <button data-group="minors">Interdisciplinary Minors</button>
        </div>
        <div class="accordion" id="courseAccordion">${renderGroup("majors")}</div>
      </div>
      <aside class="curriculum-side">
        <h3>Credit architecture</h3>
        <div class="credit-row"><strong>Majors</strong><span>43 • 81 credits</span></div>
        <div class="credit-row"><strong>General Electives</strong><span>14 • 36 credits</span></div>
        <div class="credit-row"><strong>Specializations</strong><span>7 • 17 credits</span></div>
        <div class="credit-row"><strong>Interdisciplinary Minors</strong><span>6 • 11 credits</span></div>
        <div class="credit-row"><strong>Total</strong><span>70 • 145 credits</span></div>
        <div class="btn-row"><a class="btn btn-light" href="#admission" data-route="admission">See program facts →</a></div>
      </aside>
    </div>
  </div>
</section>
`);
},

admission(){
return layout(`
<section class="section">
  <div class="container">
    ${sectionHead("Admission","Everything you need before you apply.","Admission rules and dates can change by intake. The information below reflects BUFT's published general undergraduate eligibility and the AMT program profile; always verify the current intake on the official admission portal.")}
    <div class="split">
      <div>
        <div class="timeline">
          <div class="timeline-item"><div class="timeline-dot"></div><h3>1. Check eligibility</h3><p>For undergraduate programs, BUFT states a minimum GPA of 2.50 in both SSC and HSC/equivalent; Science is required for AMT.</p></div>
          <div class="timeline-item"><div class="timeline-dot"></div><h3>2. Check admission test route</h3><p>BUFT states that undergraduate selection is based on admission test/viva and academic results, with specified direct-admission criteria for eligible candidates.</p></div>
          <div class="timeline-item"><div class="timeline-dot"></div><h3>3. Apply through the official portal</h3><p>Complete the current online application and follow the intake-specific instructions, deadlines and payment requirements.</p></div>
          <div class="timeline-item"><div class="timeline-dot"></div><h3>4. Confirm enrollment</h3><p>Follow BUFT's admission office instructions for document submission, payment and registration.</p></div>
        </div>
        <div class="btn-row"><a class="btn btn-primary" href="${officialAdmission}" target="_blank" rel="noopener">Open Official Admission Portal ↗</a></div>
      </div>

      <div class="fee-card">
        <span class="eyebrow">Published AMT tuition</span>
        <div class="price">৳7,58,300 <small>total</small></div>
        <p class="lead" style="font-size:13px">B.Sc. in Apparel Manufacturing & Technology • 145 credits</p>
        <div style="margin-top:20px">
          <div class="fee-row"><strong>Program</strong><span>B.Sc. in AMT</span></div>
          <div class="fee-row"><strong>Credits</strong><span>145</span></div>
          <div class="fee-row"><strong>Total tuition fees</strong><span>BDT 758,300</span></div>
          <div class="fee-row"><strong>Coverage</strong><span>Registration, tuition, supervision, examinations & graduation</span></div>
          <div class="fee-row"><strong>Student access</strong><span>Library & Students' Clubs membership</span></div>
        </div>
        <p style="font-size:11px;color:var(--muted);margin-top:18px">Fees are subject to official university updates. Confirm the current rate before enrollment.</p>
      </div>
    </div>
  </div>
</section>

<section class="section dark">
  <div class="container">
    <div class="cta" style="background:linear-gradient(125deg,#132f52,#0b1f3a)">
      <div><span class="eyebrow" style="color:#e9b6bf">Current information</span><h2>Use BUFT's official portal for the intake-specific deadline and application status.</h2><p>Admission dates, notices, scholarships and application requirements can change between semesters.</p></div>
      <a class="btn btn-primary" href="${officialAdmission}" target="_blank" rel="noopener">Check BUFT Admission ↗</a>
    </div>
  </div>
</section>
`);
},

faculty(){
return layout(`
<section class="section">
  <div class="container">
    ${sectionHead("Faculty Directory","Meet the AMT academic team.","Faculty information below is based on BUFT's published AMT teaching-staff directory. Image areas are intentionally designed as clean placeholders so the department can insert approved faculty portraits later.")}
    <div class="faculty-grid">
      ${faculty.map((f,i)=>`
        <article class="faculty-card">
          <div class="faculty-photo">Approved Portrait<br>Placeholder</div>
          <div class="faculty-info">
            <h3>${escapeHTML(f[0])}</h3>
            <span class="role">${escapeHTML(f[1])}</span>
            <a href="mailto:${escapeHTML(f[2])}">${escapeHTML(f[2])}</a>
          </div>
        </article>`).join("")}
    </div>
  </div>
</section>
`);
},

careers(){
const roles = ["Teaching","Merchandiser","Supply Chain Manager","Factory Manager","Production Manager","R&D Manager","Planning Manager","Country Manager","Washing Manager","Entrepreneur","Apparel Technician","Product Developer","Sample Developer","Garment Technologist","Pattern Master","Quality Controller","Welfare Officer","Wash Technician"];
return layout(`
<section class="section">
  <div class="container">
    ${sectionHead("Career Pathways","One degree. Multiple directions.","BUFT's published AMT career pathways include technical, production, management, quality, product-development, supply-chain, teaching and entrepreneurship roles.")}
    <div class="career-map">
      ${roles.map((r,i)=>`<div class="role-card"><span>${String(i+1).padStart(2,"0")}</span><strong>${r}</strong><span>AMT pathway</span></div>`).join("")}
    </div>
  </div>
</section>

<section class="section dark">
  <div class="container split">
    <div>
      <span class="eyebrow" style="color:#e9b6bf">Skills that travel</span>
      <h2>Technical depth with business fluency.</h2>
      <p class="lead">The published graduate profile emphasizes contemporary technical knowledge, problem solving, modern tool usage, people management, communication, teamwork, sustainability, ethics and project management.</p>
    </div>
    <div class="cards">
      <div class="card"><h3>Technical</h3><p>Manufacturing, quality, CAD, production engineering and product development.</p></div>
      <div class="card"><h3>Operational</h3><p>Planning, supply chain, compliance, safety and process optimization.</p></div>
      <div class="card"><h3>Professional</h3><p>Communication, negotiation, teamwork, management and lifelong learning.</p></div>
    </div>
  </div>
</section>
`);
},

gallery(){
return layout(`
<section class="section">
  <div class="container">
    ${sectionHead("Departmental Gallery","A visual window into the AMT learning environment.","Use this gallery as the front-end shell for approved departmental photography. The current concept uses BUFT's published AMT banner image and keeps captions ready for verified lab/classroom/student-activity media.")}
    <div class="gallery">
      <div class="gallery-item"><span class="gallery-caption">AMT Student Life</span></div>
      <div class="gallery-item"><span class="gallery-caption">Apparel Manufacturing Labs</span></div>
      <div class="gallery-item"><span class="gallery-caption">Practical Learning</span></div>
      <div class="gallery-item"><span class="gallery-caption">Campus Experience</span></div>
      <div class="gallery-item"><span class="gallery-caption">Industry-oriented Learning</span></div>
    </div>
    <div class="btn-row"><a class="btn btn-outline" href="https://buft.edu.bd/infrastructure-facilities/" target="_blank" rel="noopener">View BUFT Facilities ↗</a></div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead("Alumni Stories","Add verified stories. Build real trust.","A high-conversion departmental site should feature genuine alumni outcomes rather than invented testimonials. This section is therefore structured as a publication-ready placeholder.")}
    <div class="quote-grid">
      ${["Alumni name + current role","Alumni name + company / sector","Alumni name + career highlight"].map((x,i)=>`
        <article class="quote">
          <span class="placeholder-tag">Verified story needed</span>
          <div class="quote-mark">“</div>
          <p>Replace this space with a short, permission-approved alumni quote describing how AMT learning supported the graduate's career journey.</p>
          <small>${x}</small>
        </article>`).join("")}
    </div>
  </div>
</section>
`);
}
};

function routeFromHash(){
  const route = location.hash.replace("#","") || "home";
  return views[route] ? route : "home";
}

function render(route){
  app.innerHTML = views[route]();
  document.title = ({
    home:"AMT | Apparel Manufacturing & Technology — BUFT",
    about:"About AMT | BUFT",
    curriculum:"Curriculum | B.Sc. AMT — BUFT",
    admission:"Admission & Tuition | AMT — BUFT",
    faculty:"Faculty Directory | AMT — BUFT",
    careers:"Career Pathways | AMT — BUFT",
    gallery:"Gallery & Alumni | AMT — BUFT"
  })[route];

  document.querySelectorAll("[data-route]").forEach(el=>{
    el.addEventListener("click",e=>{
      const target=el.dataset.route;
      if(target){
        e.preventDefault();
        history.pushState({}, "", `#${target}`);
        render(target);
        window.scrollTo({top:0,behavior:"smooth"});
        closeMobileNav();
      }
    });
  });

  document.querySelectorAll(".acc-head").forEach(btn=>{
    btn.addEventListener("click",()=>{
      const item=btn.closest(".acc-item");
      const body=item.querySelector(".acc-body");
      const isOpen=item.classList.contains("open");
      document.querySelectorAll(".acc-item.open").forEach(open=>{
        open.classList.remove("open");
        open.querySelector(".acc-body").style.maxHeight=null;
      });
      if(!isOpen){
        item.classList.add("open");
        body.style.maxHeight=body.scrollHeight+"px";
      }
    });
  });

  document.querySelectorAll("#courseTabs button").forEach(btn=>{
    btn.addEventListener("click",()=>{
      document.querySelectorAll("#courseTabs button").forEach(b=>b.classList.remove("active"));
      btn.classList.add("active");
      const group=courseGroups[btn.dataset.group];
      document.getElementById("courseAccordion").innerHTML=group.items.map((c,i)=>`
        <div class="acc-item">
          <button class="acc-head" type="button"><span>${escapeHTML(c[0])}</span><span>+</span></button>
          <div class="acc-body"><div class="acc-body-inner"><strong>${escapeHTML(c[1])}</strong><br>${escapeHTML(c[2])}<div class="btn-row"><button class="btn btn-outline course-detail" data-course="${btn.dataset.group}-${i}" type="button">Quick details</button></div></div></div>
        </div>`).join("");
      bindAccordion();
      bindCourseDetails();
    });
  });

  bindAccordion();
  bindCourseDetails();
  setActiveNav(route);
}

function bindAccordion(){
  document.querySelectorAll(".acc-head").forEach(btn=>{
    btn.addEventListener("click",()=>{
      const item=btn.closest(".acc-item"), body=item.querySelector(".acc-body");
      const open=item.classList.contains("open");
      document.querySelectorAll(".acc-item.open").forEach(x=>{
        x.classList.remove("open");
        x.querySelector(".acc-body").style.maxHeight=null;
      });
      if(!open){item.classList.add("open");body.style.maxHeight=body.scrollHeight+"px";}
    });
  });
}

function bindCourseDetails(){
  document.querySelectorAll(".course-detail").forEach(btn=>{
    btn.addEventListener("click",()=>{
      const [group,index]=btn.dataset.course.split("-");
      const c=courseGroups[group].items[Number(index)];
      openModal(c[0],c[2],[
        `Area: ${c[1]}`,
        courseGroups[group].label
      ]);
    });
  });
}

const modal=document.getElementById("courseModal");
const modalTitle=document.getElementById("modalTitle");
const modalText=document.getElementById("modalText");
const modalCategory=document.getElementById("modalCategory");
const modalMeta=document.getElementById("modalMeta");

function openModal(title,text,meta=[]){
  modalTitle.textContent=title;
  modalText.textContent=text;
  modalCategory.textContent="AMT Curriculum";
  modalMeta.innerHTML=meta.map(x=>`<span>${escapeHTML(x)}</span>`).join("");
  modal.classList.add("open");
  modal.setAttribute("aria-hidden","false");
  document.body.classList.add("modal-open");
}
function closeModal(){
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden","true");
  document.body.classList.remove("modal-open");
}
document.querySelectorAll("[data-close-modal]").forEach(x=>x.addEventListener("click",closeModal));
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});

function setActiveNav(route){
  document.querySelectorAll(".main-nav a[data-route]").forEach(a=>{
    a.classList.toggle("active",a.dataset.route===route);
  });
}

function closeMobileNav(){
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded","false");
}
menuToggle.addEventListener("click",()=>{
  const open=nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded",String(open));
});

window.addEventListener("hashchange",()=>render(routeFromHash()));
window.addEventListener("popstate",()=>render(routeFromHash()));

window.addEventListener("scroll",()=>{
  header.classList.toggle("scrolled",window.scrollY>10);
  const max=document.documentElement.scrollHeight-window.innerHeight;
  progress.style.width=(max>0?(window.scrollY/max)*100:0)+"%";
});

render(routeFromHash());
