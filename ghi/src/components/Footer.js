import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/facebook.png";
import navIcon2 from "../assets/img/instagram.png";
import navIcon3 from "../assets/img/twitter.png";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} sm={0} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.facebook.com/towzonealerts/?show_switched_toast=0&show_invite_to_follow=0&show_switched_tooltip=0&show_podcast_settings=0&show_community_review_changes=0&show_community_rollback=0&show_follower_visibility_disclosure=0"><img src={navIcon1} alt="Icon" /></a>
                            <a href="https://www.instagram.com/towzone.alerts/"><img src={navIcon2} alt="Icon" /></a>
                            <a href="https://twitter.com/towzonealerts"><img src={navIcon3} alt="Icon" /></a>
                        </div>
                        <p>Copyright 2023. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}