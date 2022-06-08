import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import headerStyles from "../styles/Header.module.css";
import styles from "../styles/Work.module.css";
import {
	faCircleCheck,
	faCircleXmark,
	faCaretSquareRight,
} from "@fortawesome/free-regular-svg-icons";
import {
	FaTwitter,
	FaInstagram,
	FaGlobeAmericas,
	FaRegCaretSquareRight,
	FaRegCheckCircle,
	FaRegTimesCircle,
} from "react-icons/fa";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { FcManager, FcSearch, FcPanorama } from "react-icons/fc";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Typewriter from "typewriter-effect";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import HamburgerMenu from "../components/HamburgerMenu";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PreFooter from "../components/PreFooter";

export default function Home() {
	// Dark Theme
	const [darkTheme, setDarkTheme] = useState(undefined);

	const handleToggle = (event) => {
		setDarkTheme(event.target.checked);
	};

	useEffect(() => {
		if (darkTheme !== undefined) {
			if (darkTheme) {
				// Set value of  darkmode to dark
				document.documentElement.setAttribute("data-theme", "dark");
				window.localStorage.setItem("theme", "dark");
			} else {
				// Set value of  darkmode to light
				document.documentElement.removeAttribute("data-theme");
				window.localStorage.setItem("theme", "light");
			}
		}
	}, [darkTheme]);

	useEffect(() => {
		const root = window.document.documentElement;
		const initialColorValue = root.style.getPropertyValue(
			"--initial-color-mode"
		);
		// Set initial darkmode to light
		setDarkTheme(initialColorValue === "dark");
	}, []);

	// Particles Backgrounds
	const particlesInit = async (main) => {
		console.log(main);

		await loadFull(main);
	};

	const particlesLoaded = (container) => {
		console.log(container);
	};

	// Mobile Nav Bar State
	const [navbarOpen, setNavbarOpen] = useState(false);
	const burgerToggle = () => {
		setNavbarOpen((prev) => !prev);
	};

	// Mobile Nav Bar Classes
	const navLinksClasses = [
		headerStyles.navLinks,
		`${navbarOpen ? headerStyles.navActive : ""}`,
	];

	// Router variable for active nav classes
	const router = useRouter();

	return (
		<div className={styles.container}>
			<Head>
				<title>Minty Solutions - Creative Portfolio</title>
				<meta name="description" content="" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<Header title="Creative Portfolio" />

				<div className={styles.workItems}>
					<div>
						<iframe
							// width="420"
							// height="315"
							src="https://www.youtube.com/embed/y_8p5bXkzr4"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen></iframe>
					</div>

					<div>
						<iframe
							// width="420"
							// height="315"
							src="https://www.youtube.com/embed/4YGulUxP78c"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen></iframe>
					</div>

					<div>
						<iframe
							// width="420"
							// height="315"
							src="https://www.youtube.com/embed/omxbcav0EBs"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen></iframe>
					</div>

					<div>
						<iframe
							// width="420"
							// height="315"
							src="https://www.youtube.com/embed/asR3ds6mNrc"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen></iframe>
					</div>

					<div>
						<iframe
							// width="420"
							// height="315"
							src="https://www.youtube.com/embed/NEh3SpNpoxY"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen></iframe>
					</div>

					<div>
						<iframe
							// width="420"
							// height="315"
							src="https://www.youtube.com/embed/hfVlHpz6II0"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen></iframe>
					</div>
				</div>
				{/* PRE FOOTER */}
				<PreFooter />
			</main>

			<Footer />
		</div>
	);
}
