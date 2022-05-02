import styles from "../styles/Footer.module.css";
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
							<a href="https://mintysolutions.com/">Home</a>
						</li>
						<li>
							<a href="https://mintysolutions.com/services">Services</a>
						</li>
						<li>
							<a href="https://mintysolutions.com/casestudies">
								Case Studies
							</a>
						</li>
						<li>
							<a href="https://mintysolutions.com/contact">Contact</a>
						</li>
					</ul>
				</div>
				<div className={styles.footer3}>
					<ul>
						<li>
							<a href="https://twitter.com" className={styles.mintySocialsTwitter}>
								<FaTwitter /> Twitter
							</a>{" "}
						</li>
						<li>
							<a href="https://linkedin.com" className={styles.mintySocialsLinkedin}>
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
