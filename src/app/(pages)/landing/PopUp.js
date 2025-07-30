"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { getPopupNews } from "../../../lib/api";

// Move default news outside component to prevent recreation on every render
const DEFAULT_NEWS = [
  "🏗️ Pembangunan infrastruktur jalan raya Desa Belung senilai Rp 3,2 miliar telah dimulai",
  "🌾 Program bantuan benih padi gratis untuk 200 petani telah dibuka pendaftaran",
  "🏥 Klinik kesehatan desa dengan fasilitas modern akan beroperasi bulan September",
  "🎓 Beasiswa pendidikan untuk siswa berprestasi tersedia dengan total dana Rp 500 juta",
  "💻 Layanan digital village tersedia 24/7 untuk kemudahan administrasi warga",
  "🏪 Festival UMKM dan produk lokal akan digelar tanggal 20-22 Agustus 2025",
  "🍚 Distribusi bantuan pangan untuk keluarga pra-sejahtera dimulai minggu depan",
  "📚 Perpustakaan desa dengan koleksi 5000 buku telah resmi dibuka untuk umum",
];

const PopUp = ({
  initialNews = [],
  speed = 1.5,
  direction = "left",
  backgroundColor = "#f59e0b",
  textColor = "#1f2937",
  labelText = "🔥 BREAKING NEWS",
  labelColor = "#ef4444",
}) => {
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const currentSpeed = speed;

  const tickerRef = useRef(null);
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const positionRef = useRef(0);
  const isInitialized = useRef(false);
  const hasFetched = useRef(false); // Prevent multiple API calls

  // Fetch popup news from API - only run once
  useEffect(() => {
    async function fetchPopupNews() {
      // Prevent multiple calls
      if (hasFetched.current) return;
      hasFetched.current = true;

      try {
        setLoading(true);
        
        // Use initialNews if provided, otherwise fetch from API
        if (initialNews.length > 0) {
          setNewsItems(initialNews);
          setLoading(false);
          return;
        }

        const result = await getPopupNews({ limit: 10 });
        console.log('Fetched popup news:', result);
        
        if (result && result.items && result.items.length > 0) {
          // Extract text content from popup news items
          const newsTexts = result.items.map(item => item.text || 'Breaking news update')
            .filter(text => text && text.trim() !== '');
          
          setNewsItems(newsTexts.length > 0 ? newsTexts : DEFAULT_NEWS);
        } else {
          // Fallback to default news if no API data
          setNewsItems(DEFAULT_NEWS);
        }
        
      } catch (err) {
        console.error('Error fetching popup news:', err);
        setError(err.message);
        // Use default news on error
        setNewsItems(DEFAULT_NEWS);
      } finally {
        setLoading(false);
      }
    }

    fetchPopupNews();
  }, [initialNews]); // Empty dependency array - only run once on mount

  // Refresh popup news every 5 minutes
  useEffect(() => {
    // Don't start refresh if using manual news
    if (initialNews.length > 0) return;

    const refreshInterval = setInterval(async () => {
      try {
        const result = await getPopupNews({ limit: 10 });
        if (result && result.items && result.items.length > 0) {
          const newsTexts = result.items.map(item => item.text || 'Breaking news update')
            .filter(text => text && text.trim() !== '');
          
          if (newsTexts.length > 0) {
            setNewsItems(newsTexts);
          }
        }
      } catch (err) {
        console.log('Background refresh failed:', err);
        // Don't update on refresh failure, keep current news
      }
    }, 5 * 60 * 1000); // 5 minutes

    return () => clearInterval(refreshInterval);
  }, [initialNews]); // Include initialNews dependency

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

  // Show loading state
  if (loading) {
    return (
      <div style={styles.tickerContainer}>
        <div style={styles.tickerWrapper}>
          <div style={styles.tickerLabel}>
            {isMobile ? "LOADING..." : "🔄 LOADING NEWS"}
            <div style={styles.labelArrow}></div>
          </div>
          <div style={styles.tickerContent}>
            <div style={{ ...styles.tickerItems, position: 'static' }}>
              <div style={styles.tickerItem}>
                Memuat berita terbaru...
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Show error state briefly, then show default news
  if (error && newsItems.length === 0) {
    return (
      <div style={styles.tickerContainer}>
        <div style={styles.tickerWrapper}>
          <div style={styles.tickerLabel}>
            {isMobile ? "OFFLINE" : "📡 OFFLINE MODE"}
            <div style={styles.labelArrow}></div>
          </div>
          <div style={styles.tickerContent}>
            <div style={{ ...styles.tickerItems, position: 'static' }}>
              <div style={styles.tickerItem}>
                Menggunakan berita cadangan...
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
