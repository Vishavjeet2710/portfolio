import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

export default function App() {

  // Featured projects with descriptions
  const featuredProjects = [
    {
      name: "CWDSS",
      description: "Data Science project using Jupyter Notebook for comprehensive data analysis and visualization.",
      language: "Jupyter Notebook",
      url: "https://github.com/Vishavjeet2710/CWDSS"
    },
    {
      name: "Movie-Recommender",
      description: "Intelligent movie recommendation system built with R, providing personalized movie suggestions.",
      language: "R",
      url: "https://github.com/Vishavjeet2710/Movie-Recommender"
    },
    {
      name: "Hackathon--A-fine-Windy-day",
      description: "Wind power prediction model that forecasts power generation (KW/h) based on various environmental features.",
      language: "R",
      url: "https://github.com/Vishavjeet2710/Hackathon--A-fine-Windy-day"
    },
    {
      name: "design-patterns",
      description: "Comprehensive collection of real-life implementations of various design patterns in software development.",
      language: "Java",
      url: "https://github.com/Vishavjeet2710/design-patterns"
    },
    {
      name: "POS",
      description: "Point of Sale system built with Java, demonstrating practical application development skills.",
      language: "Java",
      url: "https://github.com/Vishavjeet2710/POS"
    },
    {
      name: "employee",
      description: "Employee management system showcasing Java development and database management skills.",
      language: "Java",
      url: "https://github.com/Vishavjeet2710/employee"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 text-gray-900 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-blue-600">VS</h1>
            <div className="flex gap-6">
              <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
              <a href="#experience" className="hover:text-blue-600 transition-colors">Experience</a>
              <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
              <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-32 bg-gradient-to-b from-blue-100 via-white to-blue-50">
        <div className="relative">
          <img
            src="/profile-photo.jpg"
            alt="Vishavjeet Singh"
            className="w-48 h-48 rounded-full border-4 border-blue-500 shadow-2xl object-cover"
            onLoad={(e) => {
              console.log('✅ Image loaded successfully:', e.target.src);
              e.target.style.opacity = '1';
            }}
            onError={(e) => {
              console.error('❌ Image failed to load:', e.target.src);
              // Try the fallback
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
            style={{ 
              opacity: 0, 
              transition: 'opacity 0.3s ease',
              objectPosition: 'center 30%',
              transform: 'scale(1.2)'
            }}
          />
          <div 
            className="w-48 h-48 rounded-full border-4 border-blue-500 shadow-2xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center text-4xl font-bold text-blue-600"
            style={{ display: 'none' }}
          >
            VS
          </div>
          <div className="absolute -bottom-2 -right-2 bg-green-500 text-white rounded-full p-2">
            <div className="w-4 h-4"></div>
          </div>
        </div>
        <h1 className="text-6xl font-extrabold mt-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Vishavjeet Singh
        </h1>
        <p className="text-xl mt-4 max-w-3xl text-gray-700 leading-relaxed">
          Software Development Engineer II @ Increff | Backend Systems Specialist | CodeChef 5⭐
          <br />
          Passionate about building scalable distributed systems, cloud infrastructure, and developer productivity tools.
        </p>
        <div className="flex gap-6 mt-8">
          <a 
            href="https://github.com/Vishavjeet2710" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            <Github className="w-5 h-5" />
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/vishavjeet-singh-791b311b3/" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </a>
          <a 
            href="mailto:vishavjeet27102000@gmail.com"
            className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            <Mail className="w-5 h-5" />
            Email
          </a>
          <a 
            href="tel:+917696689410"
            className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Phone
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-8 text-center">
          <span className="border-b-4 border-blue-500 pb-2">About Me</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="leading-relaxed text-lg text-gray-700 mb-6">
              I'm a Software Development Engineer with 3.5+ years of experience at Increff, where I've 
              grown from SDE-1 to SDE-2. My expertise centers on building scalable backend systems, 
              cloud infrastructure, and developer productivity tools. I specialize in Java, Spring Boot, 
              Kubernetes, and distributed architectures.
            </p>
            <p className="leading-relaxed text-lg text-gray-700 mb-6">
              Throughout my career, I've led critical infrastructure projects including Kubernetes 
              migration initiatives, re-architected core services for better scalability, and built 
              automation tools that improved team productivity by 60%. I'm passionate about solving 
              complex technical challenges and mentoring junior developers.
            </p>
            <p className="leading-relaxed text-lg text-gray-700">
              Beyond my professional work, I'm a competitive programmer with CodeChef 5⭐ rating and 
              enjoy contributing to open source projects (eg CWDSS). I'm always eager to learn new technologies 
              and take on challenging engineering problems.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-blue-600">Quick Facts</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="font-medium">Experience:</span>
                <span>3.5+ years</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Current Role:</span>
                <span>SDE-2 @ Increff</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">CodeChef Rating:</span>
                <span>5⭐</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Location:</span>
                <span>India</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Interests:</span>
                <span>Backend Systems, Cloud</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="border-b-4 border-blue-500 pb-2">Skills & Technologies</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center">
              <h3 className="font-semibold text-blue-800 mb-2">Backend</h3>
              <p className="text-sm text-gray-600">Java, Spring Boot, Hazelcast, MySQL</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl text-center">
              <h3 className="font-semibold text-green-800 mb-2">DevOps</h3>
              <p className="text-sm text-gray-600">Kubernetes, Docker, Jenkins, ArgoCD</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl text-center">
              <h3 className="font-semibold text-purple-800 mb-2">Data Science</h3>
              <p className="text-sm text-gray-600">Python, R, Jupyter, ML</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl text-center">
              <h3 className="font-semibold text-orange-800 mb-2">Cloud & Tools</h3>
              <p className="text-sm text-gray-600">Google Cloud, ELK, Git</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="border-b-4 border-blue-500 pb-2">Professional Experience</span>
        </h2>
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-blue-500">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold text-blue-600">Software Development Engineer II</h3>
                <p className="text-lg text-gray-600">Increff • 2024 - Present</p>
              </div>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Current</span>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li>• Led Kubernetes migration initiative, improving deployment efficiency by 40%</li>
              <li>• Re-architected scheduler service for better scalability and performance</li>
              <li>• Built version tracking automation reducing manual work by 60%</li>
              <li>• Delivered critical sprint features ahead of schedule</li>
              <li>• Mentored junior developers and improved team productivity</li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-green-500">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold text-green-600">Software Development Engineer I</h3>
                <p className="text-lg text-gray-600">Increff • 2022 - 2024</p>
              </div>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li>• Built core fulfillment features including ASN, combos, and order hopping</li>
              <li>• Scaled inventory sync system using multithreading, improving performance by 3x</li>
              <li>• Migrated audit logs to Elasticsearch for better searchability</li>
              <li>• Optimized database migrations reducing downtime by 70%</li>
              <li>• Improved API modularity and maintainability</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="border-b-4 border-blue-500 pb-2">Featured Projects</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-800">{project.name}</h3>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                    {project.language}
                  </span>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                >
                  View Project <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Achievements Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="border-b-4 border-blue-500 pb-2">Achievements & Recognition</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-blue-600 mb-6">Professional Achievements</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">🏆</span>
                  <div>
                    <strong>Winner - Increff Hackathon</strong>
                    <p className="text-gray-600">Customer Success Automation Project</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 text-xl">⭐</span>
                  <div>
                    <strong>CodeChef 4⭐ Rating</strong>
                    <p className="text-gray-600">Competitive Programming Excellence</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 text-xl">🎖️</span>
                  <div>
                    <strong>NCC C-Certificate Holder</strong>
                    <p className="text-gray-600">National Cadet Corps Achievement</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-purple-600 mb-6">Personal Interests</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">💃</span>
                  <div>
                    <strong>Bhangra Champion</strong>
                    <p className="text-gray-600">Cultural Dance Performance</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-500 text-xl">🧠</span>
                  <div>
                    <strong>Problem Solving</strong>
                    <p className="text-gray-600">LeetCode & Competitive Programming</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">🌱</span>
                  <div>
                    <strong>Open Source</strong>
                    <p className="text-gray-600">Active GitHub Contributor</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gradient-to-br from-gray-900 to-blue-900 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Connect!</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            I'm always interested in new opportunities, collaborations, and interesting projects. 
            Feel free to reach out!
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <Mail className="w-8 h-8 mx-auto mb-4 text-blue-400" />
              <h3 className="font-semibold mb-2">Email</h3>
              <a href="mailto:vishavjeet27102000@gmail.com" className="text-blue-400 hover:text-blue-300">
                vishavjeet27102000@gmail.com
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <Github className="w-8 h-8 mx-auto mb-4 text-blue-400" />
              <h3 className="font-semibold mb-2">GitHub</h3>
              <a href="https://github.com/Vishavjeet2710" target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-300">
                @Vishavjeet2710
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <Linkedin className="w-8 h-8 mx-auto mb-4 text-blue-400" />
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <a href="https://www.linkedin.com/in/vishavjeet-singh-791b311b3/" target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-300">
                Connect on LinkedIn
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <div className="w-8 h-8 mx-auto mb-4 text-blue-400 flex items-center justify-center">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <a href="tel:+917696689410" className="text-blue-400 hover:text-blue-300">
                +91 76966 89410
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center">
        <p>&copy; 2024 Vishavjeet Singh. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
}
