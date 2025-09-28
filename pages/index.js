import Head from "next/head";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
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
        <title>Prashant Sahlot Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Welcome to My Hub</h1>
        <div className="buttons">
          <a className="btn" href="https://prashant-portfolio-main.com" target="_blank">Portfolio</a>
          <a className="btn" href="https://github.com/prashant-sahlot" target="_blank">GitHub</a>
          <a className="btn" href="https://www.linkedin.com/in/prashant-sahlot/" target="_blank">LinkedIn</a>
          <a className="btn" href="mailto:prashantsahlot@outlook.com">Contact</a>
        </div>
      </main>
      <style jsx>{`
        main {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
          color: white;
          text-align: center;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          overflow: hidden;
        }
        h1 {
          font-size: 3rem;
          margin-bottom: 50px;
          animation: fadeIn 2s ease forwards;
        }
        .buttons {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .btn {
          position: relative;
          padding: 20px 50px;
          font-size: 1.2rem;
          font-weight: bold;
          color: white;
          text-decoration: none;
          border: 2px solid white;
          border-radius: 50px;
          overflow: hidden;
          background: transparent;
          cursor: pointer;
          transition: transform 0.2s, color 0.3s;
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
          transition: width 0.3s ease, height 0.3s ease;
          z-index: 0;
        }
        .btn:hover::before {
          width: 300px;
          height: 300px;
        }
        .btn:hover {
          color: #0f2027;
          transform: scale(1.05);
          background: rgba(255,255,255,0.1);
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-30px);}
          to { opacity: 1; transform: translateY(0);}
        }
      `}</style>
    </>
  );
}
