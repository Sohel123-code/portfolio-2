import React from 'react';

function Projects() {
  return (
    <section className="py-24">
      <div className="text-center mb-16 reveal">
        <h2 className="text-4xl font-bold">My Projects</h2>
        <p className="text-lg text-foreground/70 mt-2">A selection of my recent work.</p>
        <div className="mt-4 w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Project Card 1 */}
        <div className="bg-card p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 reveal">
          <div className="w-full h-48 overflow-hidden rounded-lg mb-4">
            <img src="/tic tac.avif" alt="Tic Tac Toe Game" className="w-full h-full object-cover" />
          </div>
          <h3 className="text-2xl font-bold text-card-foreground">🕹 TIC-TAC-TOE</h3>
          <p className="text-card-foreground/70 my-2">
            A classic Tic-Tac-Toe game built with HTML, CSS, and JavaScript.
          </p>
          <a
            href="https://sohel123-code.github.io/tic-tac-toe2/"
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-block px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-transform transform hover:scale-105"
          >
            View Project
          </a>
        </div>

        {/* Project Card 2 */}
        <div
          className="bg-card p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 reveal"
          style={{ transitionDelay: '150ms' }}
        >
          <div className="w-full h-48 overflow-hidden rounded-lg mb-4">
            <img src="/zomato.png" alt="Zomato Clone" className="w-full h-full object-cover" />
          </div>
          <h3 className="text-2xl font-bold text-card-foreground">🍔 ZOMATO CLONE</h3>
          <p className="text-card-foreground/70 my-2">Front-end clone of Zomato food ordering website.</p>
          <a
            href="https://sohel123-code.github.io/zomatoclone/"
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-block px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-transform transform hover:scale-105"
          >
            View Project
          </a>
        </div>

        {/* Project Card 3 */}
        <div
          className="bg-card p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 reveal"
          style={{ transitionDelay: '300ms' }}
        >
          <div className="w-full h-48 overflow-hidden rounded-lg mb-4">
            <img src="/tourist.jpg" alt="Tourist Places Website" className="w-full h-full object-cover" />
          </div>
          <h3 className="text-2xl font-bold text-card-foreground">🌍 TOURIST PLACES WEBSITE</h3>
          <p className="text-card-foreground/70 my-2">
            A website showcasing tourist destinations with beautiful UI.
          </p>
          <a
            href="https://sohel123-code.github.io/TOURIST3-PLACES/"
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-block px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-transform transform hover:scale-105"
          >
            View Project
          </a>
        </div>

        {/* Project Card 4 - Cosmo Explorer */}
        <div
          className="bg-card p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 reveal"
          style={{ transitionDelay: '450ms' }}
        >
          <div className="w-full h-48 overflow-hidden rounded-lg mb-4">
            <img
              src="https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?auto=format&fit=crop&w=1000&q=80"
              alt="Cosmo Explorer"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-2xl font-bold text-card-foreground">🚀 COSMO EXPLORER</h3>
          <p className="text-card-foreground/70 my-2">
            An interactive space exploration website showcasing planets, stars, and galaxies with stunning visuals.
          </p>
          <a
            href="https://sohel123-code.github.io/COSMO-EXPLORER--2/"
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-block px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-transform transform hover:scale-105"
          >
            View Project
          </a>
        </div>

        {/* Project Card 5 - Chalo Jharkhand */}
        <div
          className="bg-card p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 reveal"
          style={{ transitionDelay: '600ms' }}
        >
          <div className="w-full h-48 overflow-hidden rounded-lg mb-4">
            <img src="/tourist1.jpg" alt="Chalo Jharkhand" className="w-full h-full object-cover" />
          </div>
          <h3 className="text-2xl font-bold text-card-foreground">🏞️ CHALO JHARKHAND</h3>
          <p className="text-card-foreground/70 my-2">
            A tourism website highlighting the beautiful landscapes, culture, and heritage of Jharkhand state.
          </p>
          <a
            href="https://sultanam265-stack.github.io/CHALO-JHARKHAND/"
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-block px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-transform transform hover:scale-105"
          >
            View Project
          </a>
        </div>

        {/* Project Card 6 - Blood Connect */}
        <div
          className="bg-card p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 reveal"
          style={{ transitionDelay: '750ms' }}
        >
          <div className="w-full h-48 overflow-hidden rounded-lg mb-4">
            <img src="/blood.png" alt="Blood Connect" className="w-full h-full object-cover" />
          </div>
          <h3 className="text-2xl font-bold text-card-foreground">🩸 BLOOD CONNECT</h3>
          <p className="text-card-foreground/70 my-2">
            A platform to connect blood donors and recipients, making life-saving donations easier and faster.
          </p>
          <a
            href="https://blood-bank1-sandy.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-block px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-transform transform hover:scale-105"
          >
            View Project
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;


