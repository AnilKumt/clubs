// App.jsx
import { useLayoutEffect, useRef } from "react";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Navbar from "./Navbar.jsx";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import gdgLeft from "../assets/gdg_left.png";
import gdgRight from "../assets/gdg_right.png";
import dwImage from "../assets/dataworks_circle_3.png";
import bitsquadImage from "../assets/bitsquad_2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faYoutubeSquare, faInstagram,
  faLinkedin} from "@fortawesome/free-brands-svg-icons";
import collegeLogo from "../assets/iiitdmk.png";

// import { Home } from "lucide-react";
import Home from "./ui/home.jsx";
gsap.registerPlugin(ScrollTrigger);

function Landing() {
  useLayoutEffect(() => {
    const stackSections = gsap.utils.toArray(".stack-section");

    stackSections.forEach((section, i) => {
      gsap.set(section, { zIndex: i });

      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        start: "top top",
        pin: true,
        pinSpacing: false,
        end: "+=100%",
        pinSpacing: false,
        end: "+=100%",
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const sectionRef = useRef(null);
  const gdgLeftRef = useRef(null);
  const gdgRightRef = useRef(null);
  const gdgContentRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline controlled by scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center", // when section hits middle of screen
          end: "bottom center", // until section scrolls out
          scrub: true, // tie animation to scroll
          pin: false,
        },
      });

      // Left half (comes from top-left, rotates in)
      tl.fromTo(
        gdgLeftRef.current,
        { x: -300, y: -200, rotation: -180, opacity: 1 },
        { x: 0, y: 0, rotation: 0, opacity: 1, ease: "power2.out" },
        0
      );

      // Right half (comes from bottom-right, rotates in)
      tl.fromTo(
        gdgRightRef.current,
        { x: 300, y: 200, rotation: 180, opacity: 1 },
        { x: 0, y: 0, rotation: 0, opacity: 1, ease: "power2.out" },
        0
      );

      // Content fades in a bit later
      tl.fromTo(
        gdgContentRef.current,
        { y: 100, opacity: 1 },
        { y: 0, opacity: 1, ease: "power2.out" },
        0.3
      );
    });

    return () => ctx.revert();
  }, []);

  const dwSectionRef = useRef(null);
  const dwImageRef = useRef(null);
  const dwContentRef = useRef(null);

  // Dataworks Animation
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: dwSectionRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      });

      tl.fromTo(
        dwImageRef.current,
        { x: 300, rotation: 0, opacity: 0 },
        { x: 0, rotation: 360, opacity: 1, ease: "power2.out" },
        0
      );

      tl.fromTo(
        dwContentRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, ease: "power2.out" },
        0.3
      );
    });
    return () => ctx.revert();
  }, []);

  const bitsSectionRef = useRef(null);
  const bitsImageRef = useRef(null);
  const bitsContentRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: bitsSectionRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      });

      // Image comes from bottom-left with scale and rotation
      tl.fromTo(
        bitsImageRef.current,
        { x: -300, y: 200, rotation: -30, scale: 0.5, opacity: 0 },
        { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1, ease: "power2.out" },
        0
      );

      // Content fades in from right
      tl.fromTo(
        bitsContentRef.current,
        { x: 150, opacity: 0 },
        { x: 0, opacity: 1, ease: "power2.out" },
        0.3
      );
    });

    return () => ctx.revert();
  }, []);

  const svgRef = useRef(null);
  const colsRef = useRef([]);

  useEffect(() => {
    // Animate the SVG wave
    gsap.fromTo(
      svgRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: "power2.out" }
    );

    // Animate each column sequentially
    gsap.fromTo(
      colsRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
      }
    );
  }, []);

  const setColRef = (el, index) => {
    colsRef.current[index] = el;
  };

  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-orange-700 text-5xl text-white">
        <Home />
      </div>
      {/* GDG PAGE */}
      <div
        ref={sectionRef}
        className="stack-section flex min-h-screen bg-[#F7F4EA] items-start gap-6 pt-24"
      >
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 px-6">
          {/* GDG Logo with two parts (left column) */}
          <div className="relative flex items-center justify-center">
            <img
              ref={gdgLeftRef}
              src={gdgLeft}
              alt="GDG Left"
              className="w-72 h-72 object-contain"
            />
            <img
              ref={gdgRightRef}
              src={gdgRight}
              alt="GDG Right"
              className="w-72 h-72 object-contain -ml-8"
            />
          </div>

          {/* GDG Content (right column) */}
          <div
            ref={gdgContentRef}
            className="space-y-8 text-left max-w-2xl font-[Inter]"
          >
            <h1 className="text-5xl font-semibold tracking-tight text-gray-900">
              Google Developer Groups{" "}
              <span className="text-gray-700">(GDG)</span>
            </h1>

            <p className="text-lg leading-relaxed text-gray-600">
              🌍 Join a{" "}
              <span className="font-medium text-gray-900">community</span>
              of developers and innovators. GDG is where
              <em className="italic"> ideas turn into impact</em>, powered by
              <span className="text-gray-900 font-medium"> collaboration</span>,
              Google technologies, and your passion for learning.
            </p>

            <Button
              size="lg"
              className="rounded-xl px-8 py-4 text-base font-medium bg-gray-900 text-white hover:bg-gray-800 hover:scale-[1.02] transition-transform shadow-md"
              onClick={() => (window.location.href = "/clubs/gdg")}
            >
              🚀 Explore this Club
            </Button>
          </div>
        </div>
      </div>

      {/* DATAWORKS PAGE */}
      <div
        ref={dwSectionRef}
        className="stack-section flex min-h-screen bg-[#D5CEA3] items-start justify-center gap-6 pt-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16 max-w-6xl mx-auto px-4">
          {/* Content on Left */}
          <div
            ref={dwContentRef}
            className="space-y-6 text-left max-w-xl font-[Inter]"
          >
            <h1 className="text-5xl font-semibold tracking-tight text-gray-900">
              Dataworks <span className="text-gray-700">(DW)</span>
            </h1>

            <p className="text-lg leading-relaxed text-gray-600">
              💡 Join a vibrant community of data enthusiasts. Dataworks
              empowers students to{" "}
              <em className="italic">analyze, innovate, and solve</em>{" "}
              real-world problems using data, analytics, and AI technologies.
            </p>

            <Button
              size="lg"
              className="rounded-xl px-8 py-4 text-base font-medium bg-gray-900 text-white hover:bg-gray-800 hover:scale-[1.02] transition-transform shadow-md"
              onClick={() => (window.location.href = "/clubs/dataworks")}
            >
              🚀 Explore this Club
            </Button>
          </div>

          {/* Image on Right */}
          <div className="flex items-center justify-center">
            <img
              ref={dwImageRef}
              src={dwImage}
              alt="Dataworks Logo"
              className="w-96 h-96 object-contain"
            />
          </div>
        </div>
      </div>

      {/* Bitsquad Section */}
      <div
        ref={bitsSectionRef}
        className="stack-section flex min-h-screen bg-[#83c5be] items-center justify-center pt-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto px-4">
          {/* Left Image */}
          <div className="flex items-center justify-center">
            <img
              ref={bitsImageRef}
              src={bitsquadImage}
              alt="Bitsquad Logo"
              className="w-96 h-96 object-contain"
            />
          </div>

          {/* Right Content */}
          {/* <div
            ref={bitsContentRef}
            className="space-y-6 text-left max-w-xl font-[Inter] opacity-100 isolate"
          >
            <h1 className="text-5xl font-semibold tracking-tight text-gray-900">
              Bitsquad <span className="text-gray-700">(BSQ)</span>
            </h1>

            <p className="text-lg leading-relaxed text-gray-600">
              ⚡ Join Bitsquad, a team of tech enthusiasts and innovators
              solving real-world problems through coding, robotics, and
              cutting-edge technology.
            </p>

            <Button
              size="lg"
              className="rounded-xl px-8 py-4 text-base font-medium bg-gray-900 text-white hover:bg-gray-800 hover:scale-[1.02] transition-transform shadow-md"
              onClick={() => (window.location.href = "/clubs/bitsquad")}
            >
              🚀 Explore this Club
            </Button>
          </div> */}
          <div
            ref={dwContentRef}
            className="space-y-6 text-left max-w-xl font-[Inter]"
          >
            <h1 className="text-5xl font-semibold tracking-tight text-gray-900">
              Bitsquad <span className="text-gray-700">(BSQ)</span>
            </h1>

            <p className="text-lg leading-relaxed text-gray-600">
              ⚡ Join Bitsquad, a team of tech enthusiasts and innovators
              solving real-world problems through coding, robotics, and
              cutting-edge technology.
            </p>

            <Button
              size="lg"
              className="rounded-xl px-8 py-4 text-base font-medium bg-gray-900 text-white hover:bg-gray-800 hover:scale-[1.02] transition-transform shadow-md"
              onClick={() => (window.location.href = "/clubs/bitsquad")}
            >
              🚀 Explore this Club
            </Button>
          </div>
        </div>
      </div>

      <div className="flex min-h-screen stack-section items-center justify-center bg-orange-700 text-5xl text-white">
        <footer className="relative bg-[#7C2400] text-white">
          {/* Curved SVG */}
          <div
            className="absolute top-0 left-0 w-full overflow-hidden"
            style={{ height: "200px" }}
          >
            <svg
              ref={svgRef}
              width="100%"
              height="auto"
              viewBox="0 0 2088 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0)">
                <path
                  d="M275.254 -0.203178C276.964 -0.211728 276.964 -0.211728 278.708 -0.220451C281.112 -0.229839 283.516 -0.23641 285.921 -0.240287C289.501 -0.249889 293.082 -0.280929 296.662 -0.312553C365.652 -0.629661 430.999 21.4684 485.09 64.2265C495.756 72.6421 506.682 80.4865 518 87.9999C518.71 88.4753 519.42 88.9506 520.151 89.4404C531.773 97.2102 543.775 104.225 556 111C556.781 111.437 557.561 111.874 558.366 112.324C620.735 147.07 696.245 162.588 767 151C768.824 150.702 768.824 150.702 770.686 150.398C823.327 141.511 871.96 121.23 918.517 95.6381C975.426 64.3858 1039.47 36.1122 1105.63 35.7968C1106.62 35.7898 1107.61 35.7828 1108.62 35.7756C1111.79 35.7582 1114.96 35.7517 1118.12 35.7499C1119.21 35.7493 1120.29 35.7486 1121.4 35.7479C1136.83 35.7632 1151.81 36.0905 1167 38.9999C1167.96 39.1716 1168.91 39.3432 1169.89 39.52C1224.53 49.432 1272.01 74.3232 1316.49 106.723C1346.15 128.317 1377.2 147.523 1410 164C1410.81 164.411 1411.62 164.822 1412.46 165.245C1437.84 177.991 1464.98 187.314 1493 192C1493.7 192.119 1494.4 192.237 1495.12 192.359C1536.32 199.014 1576.58 189.171 1613.05 170.017C1615 169 1616.96 168.01 1618.93 167.023C1633.69 159.52 1647.51 150.437 1661.44 141.519C1687.15 125.07 1713.07 109.288 1740.47 95.7829C1747.61 92.246 1754.59 88.4487 1761.57 84.6059C1770.14 79.8959 1778.8 75.37 1787.48 70.871C1790.95 69.0759 1794.39 67.2597 1797.83 65.4101C1835.53 45.1301 1875.24 29.487 1918.56 29.6874C1919.4 29.6896 1920.24 29.6918 1921.1 29.694C1933.95 29.7469 1946.41 30.2459 1959 32.9999C1959.93 33.1986 1960.86 33.3973 1961.81 33.602C1985.24 38.747 2007.21 47.0869 2029 56.9999C2029.82 57.367 2030.64 57.7341 2031.48 58.1123C2051.14 66.9381 2069.44 78.0848 2088 88.9999C2088 306.14 2088 523.28 2088 747C1398.96 747 709.92 747 0 747C0 527.55 0 308.1 0 81.9999C9.27246 77.0546 18.4126 72.248 27.9375 67.8749C29.1293 67.3264 30.3211 66.7778 31.5491 66.2126C35.3608 64.4633 39.1799 62.7307 43 60.9999C43.6286 60.7142 44.2572 60.4285 44.9048 60.1342C110.193 30.4706 179.355 7.91533 251 0.999947C252.317 0.872224 252.317 0.872224 253.661 0.741921C260.869 0.0862765 268.018 -0.174067 275.254 -0.203178Z"
                  fill="#7C2400"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="2088" height="200" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>

          {/* Footer Content */}
          <div className="container mx-auto px-6 py-24 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-white">
              {/* Logo & Tagline */}
              <div ref={(el) => setColRef(el, 0)} className="space-y-3">
                <img
                  src={collegeLogo}
                  alt="Creamio Logo"
                  className="w-32"
                />
                <div className="font-semibold text-lg">Coding Clubs</div>
              </div>

              {/* Quick Links */}
              <div ref={(el) => setColRef(el, 1)} className="space-y-3">
                <div className="font-bold text-lg">Quick Links</div>
                <ul className="space-y-2">
                  {["Home", "Clubs", "Upcoming Events"].map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="hover:text-amber-400 transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Get in Touch */}
              <div ref={(el) => setColRef(el, 2)} className="space-y-3">
                <div className="font-bold text-lg">Get in Touch</div>
                <ul className="space-y-2">
                  <li>
                    <i className="fa-solid fa-phone mr-2"></i>
                    <a
                      href="tel:+12135640434"
                      className="hover:text-amber-400 transition-colors"
                    >
                      +91 12345 67890
                    </a>
                  </li>
                  <li>
                    <i className="fa-solid fa-envelope mr-2"></i>
                    <a
                      href="mailto:info@creamio.com"
                      className="hover:text-amber-400 transition-colors"
                    >
                      clubs@iiitk.ac.in
                    </a>
                  </li>
                </ul>
              </div>

              {/* Social Links */}
              <div ref={(el) => setColRef(el, 3)} className="space-y-3">
                <div className="font-bold text-lg">Follow Us</div>
                <div className="flex space-x-4 text-2xl">
                  <a
                    href="#"
                    className="hover:text-amber-400 transition-colors"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                  <a
                    href="#"
                    className="hover:text-amber-400 transition-colors"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10 text-center text-sm opacity-70">
              © 2025 IIITDMK Clubs. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Landing;

