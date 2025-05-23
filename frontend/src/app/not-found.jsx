"use client"

import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <div className="error-code">
          <span>4</span>
          <div className="zero">
            <div className="zero-inner"></div>
          </div>
          <span>4</span>
        </div>
        <h2>Page Not Found</h2>
        <p>Oops! The page you're looking for doesn't exist.</p>
        <Link href="/" className="home-button">
          Return Home
        </Link>
      </div>

      <style jsx>{`
        .not-found-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #191919;
          color: white;
          text-align: center;
          padding: 20px;
          position: relative;
          overflow: hidden;
        }

        .not-found-container::before {
          content: '';
          position: absolute;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle at center, rgba(255, 86, 187, 0.1) 0%, transparent 70%);
          animation: rotate 20s linear infinite;
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .not-found-content {
          max-width: 600px;
          position: relative;
          z-index: 1;
        }

        .error-code {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          margin-bottom: 30px;
        }

        .error-code span {
          font-size: 120px;
          font-weight: bold;
          background: linear-gradient(135deg, #FF56BB, #FF8F77);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
        }

        .zero {
          width: 120px;
          height: 120px;
          position: relative;
          background: linear-gradient(135deg, #6E56FF, #B073FF);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .zero-inner {
          width: 100px;
          height: 100px;
          background: #191919;
          border-radius: 50%;
        }

        h2 {
          font-size: 32px;
          margin: 20px 0;
          color: #fff;
          font-weight: 600;
        }

        p {
          font-size: 18px;
          color: #B7B7B7;
          margin-bottom: 30px;
        }

        .home-button {
          display: inline-block;
          padding: 15px 40px;
          background: linear-gradient(135deg, #56C2FF, #48FE9C);
          color: white;
          text-decoration: none;
          border-radius: 30px;
          font-weight: bold;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(86, 194, 255, 0.3);
        }

        .home-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(86, 194, 255, 0.4);
        }

        @media (max-width: 768px) {
          .error-code span {
            font-size: 80px;
          }
          .zero {
            width: 80px;
            height: 80px;
          }
          .zero-inner {
            width: 60px;
            height: 60px;
          }
          h2 {
            font-size: 24px;
          }
          p {
            font-size: 16px;
          }
        }
      `}</style>
    </div>
  )
} 