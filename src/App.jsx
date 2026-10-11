import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('all');

  const skills = [
    { name: 'HTML5 & CSS3', level: '95%', category: 'frontend', icon: '🌐' },
    { name: 'JavaScript (ES6+)', level: '90%', category: 'frontend', icon: '⚡' },
    { name: 'TypeScript', level: '80%', category: 'frontend', icon: '📘' },
    { name: 'React JS', level: '88%', category: 'frontend', icon: '⚛️' },
    { name: 'Next.js', level: '75%', category: 'fullstack', icon: '▲' },
    { name: 'Git & GitHub', level: '85%', category: 'tools', icon: '🐙' },
    { name: 'Tailwind CSS', level: '90%', category: 'frontend', icon: '🎨' },
    { name: 'VS Code & Tools', level: '95%', category: 'tools', icon: '💻' }
  ];

  const projects = [
    {
      title: 'Cyber Security Portal',
      description: 'Axborot xavfsizligi va himoya tizimlari bo‘yicha ma’lumot beruvchi zamonaviy veb-ilova.',
      tech: ['React', 'TypeScript', 'Tailwind'],
      link: '#'
    },
    {
      title: 'E-Commerce Store',
      description: 'Shopify va zamonaviy talablarga moslashgan internet do‘kon interfeysi.',
      tech: ['React JS', 'JavaScript', 'CSS'],
      link: '#'
    },
    {
      title: 'Interactive Particle Canvas',
      description: 'HTML Canvas va JavaScript yordamida yaratilgan dinamik sichqoncha animatsiyasi.',
      tech: ['HTML5', 'JavaScript', 'Canvas'],
      link: '#'
    }
  ];

  const filteredSkills = activeTab === 'all' 
    ? skills 
    : skills.filter(s => s.category === activeTab);

  return (
    <div className="portfolio-container">
      {/* HEADER / NAVBAR */}
      <header className="navbar">
        <div className="logo">Bekzodbek<span>.uz</span></div>
        <nav>
          <a href="#about">Men haqimda</a>
          <a href="#skills">Ko‘nikmalar</a>
          <a href="#projects">Loyihalar</a>
          <a href="#contact" className="contact-btn">Aloqa</a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <span className="badge">Frontend & Cybersecurity Enthusiast</span>
          <h1>Salom, men <span className="highlight">Bekzodbekman</span></h1>
          <p>
            Zamonaviy, tez ishlaydigan va foydalanuvchiga qulay veb-ilovalar yarataman. 
            HTML, CSS, JavaScript, TypeScript, React JS va Next.js texnologiyalarini mukammal egallab boryapman.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn primary">Loyihalarni ko'rish</a>
            <a href="#contact" className="btn secondary">Bog'lanish</a>
          </div>
        </div>
        <div className="hero-img-box">
          <div className="code-card">
            <code>
              <span className="keyword">const</span> developer = &#123;<br/>
              &nbsp;&nbsp;name: <span className="string">"Bekzodbek Shonazarov"</span>,<br/>
              &nbsp;&nbsp;stack: [<span className="string">"React"</span>, <span className="string">"Next.js"</span>, <span className="string">"TypeScript"</span>],<br/>
              &nbsp;&nbsp;status: <span className="string">"Ready to Code"</span><br/>
              &#125;;
            </code>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="skills-section">
        <h2>Mening Ko'nikmalarim</h2>
        <p className="section-subtitle">Texnologiyalar va vositalar bo'yicha bilim darajam</p>
        
        <div className="filter-buttons">
          <button className={activeTab === 'all' ? 'active' : ''} onClick={() => setActiveTab('all')}>Barchasi</button>
          <button className={activeTab === 'frontend' ? 'active' : ''} onClick={() => setActiveTab('frontend')}>Frontend</button>
          <button className={activeTab === 'tools' ? 'active' : ''} onClick={() => setActiveTab('tools')}>Qurollar</button>
        </div>

        <div className="skills-grid">
          {filteredSkills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-icon">{skill.icon}</div>
              <div className="skill-info">
                <h3>{skill.name}</h3>
                <div className="progress-bar">
                  <div className="progress" style={{ width: skill.level }}></div>
                </div>
              </div>
              <span className="skill-level">{skill.level}</span>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="projects-section">
        <h2>Tanlangan Loyihalar</h2>
        <p className="section-subtitle">Amalda bajarib kelayotgan ishlarimdan namunalar</p>
        
        <div className="projects-grid">
          {projects.map((proj, idx) => (
            <div className="project-card" key={idx}>
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              <div className="tech-tags">
                {proj.tech.map((t, i) => (
                  <span key={i} className="tag">{t}</span>
                ))}
              </div>
              <a href={proj.link} className="project-link">Loyihani ko'rish &rarr;</a>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
     {/* CONTACT SECTION */}
      <section id="contact" className="contact-section">
        <h2>Bog'lanish</h2>
        <p>Savollaringiz bormi yoki birga ishlaymizmi? Menga yozing!</p>
        <div className="contact-box">
          <p>📧 Email: <a href="mailto:bekzodbekshonazarov573@gmail.com"><strong>bekzodbekshonazarov573@gmail.com</strong></a></p>
          <p>✈️ Telegram: <a href="https://t.me/bekzodbek0907" target="_blank" rel="noreferrer"><strong>@bekzodbek0907</strong></a></p>
          <p>🐙 GitHub: <a href="https://github.com/bekzodbekshonazarov573-lgtm" target="_blank" rel="noreferrer"><strong>github.com/bekzodbekshonazarov573-lgtm</strong></a></p>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <p>&copy; 2026 Bekzodbek Shonazarov. Barcha huquqlar himoyalangan.</p>
      </footer>
    </div>
  );
}

export default App;