"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";

const PopUp = ({
  initialNews = [],
  speed = 1.5,
  direction = "left",
  backgroundColor = "#f59e0b",
  textColor = "#1f2937",
  labelText = "🔥 BREAKING NEWS",
  labelColor = "#ef4444",
}) => {
  const [newsItems, setNewsItems] = useState(
    initialNews.length > 0
      ? initialNews
      : [
          "🏗️ Pembangunan infrastruktur jalan raya Desa Belung senilai Rp 3,2 miliar telah dimulai",
          "🌾 Program bantuan benih padi gratis untuk 200 petani telah dibuka pendaftaran",
          "🏥 Klinik kesehatan desa dengan fasilitas modern akan beroperasi bulan September",
          "🎓 Beasiswa pendidikan untuk siswa berprestasi tersedia dengan total dana Rp 500 juta",
          "💻 Layanan digital village tersedia 24/7 untuk kemudahan administrasi warga",
          "🏪 Festival UMKM dan produk lokal akan digelar tanggal 20-22 Agustus 2025",
          "🍚 Distribusi bantuan pangan untuk keluarga pra-sejahtera dimulai minggu depan",
          "📚 Perpustakaan desa dengan koleksi 5000 buku telah resmi dibuka untuk umum",
        ]
  );

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const currentSpeed = speed;

  const tickerRef = useRef(null);
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const positionRef = useRef(0);
  const isInitialized = useRef(false);

  // Detect mobile screen size
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const initTicker = useCallback(() => {
    if (!tickerRef.current || !containerRef.current) return;
    const containerWidth = containerRef.current.offsetWidth;
    const tickerWidth = tickerRef.current.scrollWidth;
    positionRef.current = direction === "left" ? containerWidth : -tickerWidth;
    isInitialized.current = true;
  }, [direction]);

  const animate = useCallback(() => {
    if (!isInitialized.current || !tickerRef.current || !containerRef.current)
      return;
    const containerWidth = containerRef.current.offsetWidth;
    const tickerWidth = tickerRef.current.scrollWidth / 2;

    if (direction === "left") {
      positionRef.current -= currentSpeed;
      if (positionRef.current <= -tickerWidth) {
        positionRef.current = containerWidth;
      }
    } else {
      positionRef.current += currentSpeed;
      if (positionRef.current >= containerWidth) {
        positionRef.current = -tickerWidth;
      }
    }
    tickerRef.current.style.transform = `translateX(${positionRef.current}px)`;
    if (isPlaying) {
      animationRef.current = requestAnimationFrame(animate);
    }
  }, [currentSpeed, direction, isPlaying]);

  const startAnimation = useCallback(() => {
    if (animationRef.current) cancelAnimationFrame(animationRef.current);
    animate();
  }, [animate]);

  const stopAnimation = useCallback(() => {
    if (animationRef.current) cancelAnimationFrame(animationRef.current);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      initTicker();
      if (isPlaying) startAnimation();
    }, 100);
    return () => {
      clearTimeout(timer);
      stopAnimation();
    };
  }, [newsItems, initTicker, startAnimation, stopAnimation, isPlaying]);

  useEffect(() => {
    if (isPlaying) {
      startAnimation();
    } else {
      stopAnimation();
    }
  }, [isPlaying, startAnimation, stopAnimation]);

  useEffect(() => {
    const handleResize = () => {
      stopAnimation();
      setTimeout(() => {
        initTicker();
        startAnimation();
      }, 100);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [initTicker, startAnimation, stopAnimation]);

  const duplicatedNews =
    newsItems.length > 0 ? [...newsItems, ...newsItems] : [];

  const getResponsiveStyles = () => {
    const height = isMobile ? "45px" : "60px";
    const labelWidth = isMobile ? "100px" : "180px";
    const arrowSize = isMobile ? "6px" : "10px";

    return {
      tickerContainer: {
        background: `linear-gradient(90deg, ${backgroundColor} 0%, ${backgroundColor}dd 50%, ${backgroundColor} 100%)`,
        color: textColor,
        overflow: "hidden",
        position: "relative",
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        width: "100%",
      },
      tickerWrapper: {
        display: "flex",
        alignItems: "center",
        height: height,
        position: "relative",
        width: "100%",
      },
      tickerLabel: {
        background: labelColor,
        color: "white",
        padding: isMobile ? "0 8px" : "0 20px",
        height: "100%",
        display: "flex",
        alignItems: "center",
        fontWeight: "bold",
        fontSize: isMobile ? "10px" : "16px",
        textTransform: "uppercase",
        letterSpacing: isMobile ? "0.5px" : "1px",
        position: "relative",
        minWidth: labelWidth,
        maxWidth: labelWidth,
        justifyContent: "center",
        zIndex: 10,
        flexShrink: 0,
        whiteSpace: "nowrap",
        textAlign: "center",
      },
      labelArrow: {
        position: "absolute",
        right: `-${arrowSize}`,
        top: "0",
        width: "0",
        height: "0",
        borderLeft: `${arrowSize} solid ${labelColor}`,
        borderTop: `${parseInt(height) / 2}px solid transparent`,
        borderBottom: `${parseInt(height) / 2}px solid transparent`,
      },
      tickerContent: {
        flex: 1,
        overflow: "hidden",
        height: "100%",
        position: "relative",
        minWidth: 0,
      },
      tickerItems: {
        display: "flex",
        alignItems: "center",
        height: "100%",
        whiteSpace: "nowrap",
        position: "absolute",
        left: 0,
        top: 0,
      },
      tickerItem: {
        display: "inline-flex",
        alignItems: "center",
        padding: isMobile ? "0 15px" : "0 40px",
        fontSize: isMobile ? "12px" : "16px",
        fontWeight: "500",
        height: "100%",
        lineHeight: "1.4",
      },
      separator: {
        marginLeft: isMobile ? "15px" : "40px",
        color: textColor,
        fontSize: isMobile ? "8px" : "12px",
        opacity: 0.7,
      },
    };
  };

  const styles = getResponsiveStyles();

  return (
    <div style={styles.tickerContainer}>
      <div style={styles.tickerWrapper}>
        <div style={styles.tickerLabel}>
          {isMobile ? "BREAKING NEWS" : labelText}
          <div style={styles.labelArrow}></div>
        </div>
        <div style={styles.tickerContent} ref={containerRef}>
          <div style={styles.tickerItems} ref={tickerRef}>
            {duplicatedNews.map((news, index) => (
              <div key={index} style={styles.tickerItem}>
                {news}
                {index < duplicatedNews.length - 1 && (
                  <span style={styles.separator}>●</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
