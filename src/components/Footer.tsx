import react from "react"
export default function Footer() {
    return (
        <section className="footer">
            <hr className="footer-separator"/>
            <section className="footer-social-media">
                <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </section>
            <section>
                <section className="footer-info-left">
                    <section className="footer-info__name">
                        Full stack developer
                    </section>
                </section>
                <section className="footer-info__returns">
                        Returns Policy
                        <br />
                        Delivery
                    </section>
                <section className="footer-info-center">
                    <section className="footer-info__email">
                        rihambensaad@gmail.com
                    </section>
                    <section className="footer-info__terms">
                        terms and Conditions
                        <br />
                        copyright
                    </section>
                </section>
                <section className="footer-info-right">
                    <section className="footer-info__number">
                        +216 29 15 99 13
                    </section>
                    <section className="footer-info__contact">
                        My Story 
                        <br />
                        Contact Us

                    </section>
                </section>
            </section>
            <hr  className="footer-separator"/>
        </section>
    )
}
