import Head from "next/head";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Mouse hover effect for buttons
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(btn => {
      btn.addEventListener("mousemove", (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        btn.style.setProperty("--x", x + "px");
        btn.style.setProperty("--y", y + "px");
      });
    });
  }, []);

  return (
    <>
      <Head>
        <title>Prashant Sahlot | Portfolio Hub</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="overlay"></div>
        <h1 className="title">Prashant Sahlot</h1>
        <p className="subtitle">Full Stack & Backend Engineer | Distributed Systems | Cloud & Automation</p>
        <div className="buttons">
          <a className="btn" href="https://prashant-portfolio.kustbotsweb.workers.dev/" target="_blank">Portfolio</a>
          <a className="btn" href="https://github.com/kustbots" target="_blank">GitHub</a>
          <a className="btn" href="https://www.linkedin.com/in/prashant-sahlot/" target="_blank">LinkedIn</a>
        </div>
      </main>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
        main {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: radial-gradient(circle at top left, #1e3c72, #2a5298);
          overflow: hidden;
          font-family: 'Montserrat', sans-serif;
          color: #fff;
          position: relative;
          text-align: center;
        }
        .overlay {
          position: absolute;
          width: 100%;
          height: 100%;
          background: url('https://images.unsplash.com/photo-1605902711622-cfb43c443fd7?auto=format&fit=crop&w=1950&q=80') center/cover no-repeat;
          opacity: 0.1;
          z-index: 0;
        }
        .title {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          z-index: 1;
          animation: fadeInDown 1s ease forwards;
        }
        .subtitle {
          font-size: 1.2rem;
          margin-bottom: 3rem;
          z-index: 1;
          animation: fadeIn 2s ease forwards;
        }
        .buttons {
          display: flex;
          flex-direction: row;
          gap: 25px;
          z-index: 1;
        }
        .btn {
          position: relative;
          padding: 15px 45px;
          font-size: 1rem;
          font-weight: 700;
          color: #fff;
          text-decoration: none;
          border-radius: 50px;
          border: 2px solid #fff;
          overflow: hidden;
          transition: 0.4s ease;
          cursor: pointer;
        }
        .btn::before {
          content: '';
          position: absolute;
          top: var(--y, 50%);
          left: var(--x, 50%);
          transform: translate(-50%, -50%);
          width: 0;
          height: 0;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          transition: 0.3s ease;
          z-index: 0;
        }
        .btn:hover::before {
          width: 300px;
          height: 300px;
        }
        .btn:hover {
          color: #1e3c72;
          background: rgba(255,255,255,0.15);
          transform: scale(1.05);
        }
        @keyframes fadeInDown {
          0% {opacity: 0; transform: translateY(-50px);}
          100% {opacity: 1; transform: translateY(0);}
        }
        @keyframes fadeIn {
          0% {opacity: 0;}
          100% {opacity: 1;}
        }
        @media (max-width: 768px) {
          .buttons {
            flex-direction: column;
          }
        }
      `}</style>
    </>
  );
}
