import styles from "../styles/Footer.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
	return (
		<main>
			<footer className={styles.footer}>
				<div className={styles.footer1}>
					<h2>MINTY SOLUTIONS</h2>
					<ul>
						<li>Kemp House</li>
						<li>160 City Road</li>
						<li>London, EC1V 2NX</li>
						<li>United Kingdom</li>
						<br />
						<li>For inquiries: adam@mintysolutions.com</li>
					</ul>
				</div>
				<div className={styles.footer2}>
					<ul>
						<li>
							<Link href="/">Home</Link>
						</li>
						<li>
							<Link href="/services">Services</Link>
						</li>
						<li>
							<Link href="/casestudies">Case Studies</Link>
						</li>
						<li>
							<Link href="/contact">Contact</Link>
						</li>
					</ul>
				</div>
				<div className={styles.footer3}>
					<ul>
						<li>
							<a
								href="https://twitter.com/MintySolutions"
								className={styles.mintySocialsTwitter}>
								<FaTwitter /> Twitter
							</a>{" "}
						</li>
						<li>
							<a
								href="https://www.linkedin.com/company/minty-marketing-solutions-ltd"
								className={styles.mintySocialsLinkedin}>
								<FaLinkedin /> Linkedin
							</a>{" "}
						</li>
					</ul>
				</div>
			</footer>
			<div className={styles.copyright}>
				<p>© 2022 Minty Marketing Solutions LTD. All right reserved.</p>
			</div>
		</main>
	);
}

export default Footer;
