import { FiArrowUpRight } from "react-icons/fi";

const Footer = () => {
    return (
        <footer className="footer footer-center max-w-lg mx-auto py-6 text-base-content">
            <div>
                <div className="flex gap-6">
                    <a className="link" href="mailto:fadidajunaedy@gmail.com" target="_blank" rel="noreferrer">email<FiArrowUpRight className="inline" /></a>
                    <a className="link" href="https://www.linkedin.com/in/fadida-junaedy-742652167/" target="_blank" rel="noreferrer">linkedin<FiArrowUpRight className="inline" /></a>
                    <a className="link" href="https://github.com/fadidajunaedy" target="_blank" rel="noreferrer">github<FiArrowUpRight className="inline" /></a>
                </div>
                <p>copyright © 2023 - all right reserved by fadidajunaedy</p>
            </div>
        </footer>
    )
}

export default Footer;