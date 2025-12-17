import React from 'react';

function Connect() {
  return (
    <section className="py-24">
      <div className="text-center mb-16 reveal">
        <h2 className="text-4xl font-bold">Connect with Me</h2>
        <p className="text-lg text-foreground/70 mt-2">Find me on these platforms.</p>
        <div className="mt-4 w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
      </div>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-5 gap-8 reveal">
        {/* LinkedIn */}
        <div className="bg-card p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center">
          <img src="/linkdn.png" alt="LinkedIn Logo" className="w-16 h-16 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-card-foreground">💼 LinkedIn</h3>
          <a
            href="https://www.linkedin.com/in/md-khaja-eshaq-8862b532a"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block px-6 py-2 bg-primary text-primary-foreground font-semibold rounded-lg shadow-lg hover:bg-primary/90 transition-transform transform hover:scale-105"
          >
            Visit Profile
          </a>
        </div>

        {/* GitHub */}
        <div className="bg-card p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center">
          <img src="/github.png" alt="GitHub Logo" className="w-16 h-16 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-card-foreground">💻 GitHub</h3>
          <a
            href="https://github.com/Sohel123-code"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block px-6 py-2 bg-primary text-primary-foreground font-semibold rounded-lg shadow-lg hover:bg-primary/90 transition-transform transform hover:scale-105"
          >
            Visit Profile
          </a>
        </div>

        {/* HackerRank */}
        <div className="bg-card p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center">
          <img src="/hk logo.jpg" alt="HackerRank Logo" className="w-16 h-16 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-card-foreground">💡 HackerRank</h3>
          <a
            href="https://www.hackerrank.com/profile/mdsohel46940"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block px-6 py-2 bg-primary text-primary-foreground font-semibold rounded-lg shadow-lg hover:bg-primary/90 transition-transform transform hover:scale-105"
          >
            Visit Profile
          </a>
        </div>

        {/* CodeChef */}
        <div className="bg-card p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center">
          <img src="/codecef.jpg" alt="CodeChef Logo" className="w-16 h-16 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-card-foreground">👨‍💻 CodeChef</h3>
          <a
            href="https://www.codechef.com/users/mdsohel123"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block px-6 py-2 bg-primary text-primary-foreground font-semibold rounded-lg shadow-lg hover:bg-primary/90 transition-transform transform hover:scale-105"
          >
            Visit Profile
          </a>
        </div>

        {/* LeetCode */}
        <div className="bg-card p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center">
          <img src="/leetcode.png" alt="LeetCode Logo" className="w-16 h-16 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-card-foreground">🖥 LeetCode</h3>
          <a
            href="https://leetcode.com/u/mdsohel786/"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block px-6 py-2 bg-primary text-primary-foreground font-semibold rounded-lg shadow-lg hover:bg-primary/90 transition-transform transform hover:scale-105"
          >
            Visit Profile
          </a>
        </div>
      </div>
    </section>
  );
}

export default Connect;


