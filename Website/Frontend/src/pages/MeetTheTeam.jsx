import styles from './meettheteam.module.scss';
import SingleBlock from '../components/SingleBlock.jsx';
import TripleBlock from '../components/TripleBlock.jsx';
import { Card } from 'react-bootstrap';

const teamTitle = "Meet the Dedicated Team Behind Idori | Get to Know Our Passionate Experts";

function MeetTheTeam() {
    document.title = teamTitle;

    return (<>
        <SingleBlock mt="10" mb="0" content={<>
            <h1 className="text-start text-primary">Meet Our Amazing Team!</h1>
        </>} />
        <TripleBlock mt="10" mb="0" left={<>
            <Card className="text-primary">
                <Card.Img variant="top" height="400svh" src="https://idori.com/cdn/shop/files/Screen_Shot_2024-07-02_at_2.15.04_AM.png?v=1719900913" />
                <Card.Body>
                    <Card.Title>Noah Sorin <br />Founder/CEO</Card.Title>
                    <Card.Text style={{height: "45svh"}}>
                        Noah is an early childhood educator, a children's book author, a social entrepreneur, an activist, and an avid environmentalist. After growing up on a farm in Montgomery, VT, and then moving to Boston, Noah became determined to spread his love for nature and sustainability to children all around the world using the magic of storytelling!
                    </Card.Text>
                </Card.Body>
            </Card>
        </>} middle={<>
            <Card className="text-primary">
                <Card.Img variant="top" height="400svh" src="https://idori.com/cdn/shop/files/Screen_Shot_2022-06-07_at_1.54.49_AM.png?v=1654581298" />
                <Card.Body>
                    <Card.Title>Shumita Littlefield - Head of Creative Design/Illustration</Card.Title>
                    <Card.Text style={{height: "45svh"}}>
                        Shumita has always been drawn to children’s books, toys, art, and other media. Conceptualizing and illustrating fictional characters and creatures has been an enduring hobby for her. Through her illustrations she hopes to fascinate and inspire children, and excite imaginations.
                    </Card.Text>
                </Card.Body>
            </Card>
        </>} right={<>
            <Card className="text-primary">
                <Card.Img variant="top" height="400svh" src="https://idori.com/cdn/shop/files/Screen_Shot_2023-06-30_at_7.38.26_PM.png?v=1688168331" />
                <Card.Body>
                    <Card.Title>Alia Bringas <br />Toy Designer</Card.Title>
                    <Card.Text style={{height: "45svh"}}>
                        Aliaa is an Industrial design student at RISD focused primarily around sustainability and human centered design. Born and raised in Vermont, with a passion for the outdoors, she is always striving to make the planet a healthier and happier place in a fun and interesting way!
                    </Card.Text>
                </Card.Body>
            </Card>
        </>} />
        <TripleBlock mt="10" mb="0" left={<>
            <Card className="text-primary">
                <Card.Img variant="top" height="400svh" src="https://idori.com/cdn/shop/files/Screen_Shot_2023-07-01_at_4.09.34_PM.png?v=1688242311&width=710" />
                <Card.Body>
                    <Card.Title>Mackenzie Farley - Social Media Coordinator</Card.Title>
                    <Card.Text style={{height: "45svh"}}>
                        As someone who hopes for a sustainable future, Mackenzie believes that teaching children about the environment is crucial for creating a future generation that understands and values our planet. From her experience, she has found entertainment to be an engaging medium for children.
                    </Card.Text>
                </Card.Body>
            </Card>
        </>} middle={<>
            <Card className="text-primary">
                <Card.Img variant="top" height="400svh" src="https://idori.com/cdn/shop/files/Screen_Shot_2024-07-02_at_2.07.21_AM.png?v=1719900474&width=710" />
                <Card.Body>
                    <Card.Title>Levy Te - Business Development Coordinator</Card.Title>
                    <Card.Text style={{height: "45svh"}}>
                        Levy Te grew up in Lowell, MA, and is the daughter of Cambodian immigrants. She has an MBA and is a scientist by training. She is dedicated to making a positive impact on her community by educating the younger generation through fun and engaging activities like community service, interactive workshops, and mentorship.
                    </Card.Text>
                </Card.Body>
            </Card>
        </>} right={<>
            <Card className="text-primary">
                <Card.Img variant="top" height="400svh" src="https://idori.com/cdn/shop/files/Screen_Shot_2024-07-03_at_11.17.00_AM.png?v=1720019834&width=710" />
                <Card.Body>
                    <Card.Title>Bobby Chen - Business Development Intern</Card.Title>
                    <Card.Text style={{height: "45svh"}}>
                        Bobby is deeply committed to giving back to the communities he grew up in. With a strong focus on early childhood education, he aims to provide opportunities for all children to be successful, healthy, and thoughtful. 
                    </Card.Text>
                </Card.Body>
            </Card>
        </>} />
        <TripleBlock mt="10" mb="10" left={<>
            <Card className="text-primary">
                <Card.Img variant="top" height="400svh" src="https://idori.com/cdn/shop/files/Screen_Shot_2023-07-01_at_4.13.10_PM.png?v=1688242397" />
                <Card.Body>
                    <Card.Title>Wayne Wang - Game Designer and Developer</Card.Title>
                    <Card.Text style={{height: "45svh"}}>
                        Wayne has been concerned about the harmful effects of climate change since he witnessed a forest fire decimate a small town in British Colombia called Lytton. He was surprised by the lack of urgency he saw to fix this problem, so he's now devoted to spreading awareness on the importance of sustainability.
                    </Card.Text>
                </Card.Body>
            </Card>
        </>} middle={<>
            <Card className="text-primary">
                <Card.Img variant="top" height="400svh" src="https://idori.com/cdn/shop/files/Screen_Shot_2024-07-08_at_3.54.50_PM.png?v=1720468575&width=710" />
                <Card.Body>
                    <Card.Title>Jasmine Gohil - Business Development Intern</Card.Title>
                    <Card.Text style={{height: "45svh"}}>
                        Jasmine Gohil, a Master of Science candidate in Business Analytics with a passion for early childhood education. She previously served as a mentor, fostering the social and emotional development of a child in need. This experience, coupled with her interest in the environment, fuels her desire to cultivate a generation of responsible and environmentally conscious young minds.
                    </Card.Text>
                </Card.Body>
            </Card>
        </>} right={<>
            <Card className="text-primary">
                <Card.Img variant="top" height="400svh" src="https://idori.com/cdn/shop/files/Screen_Shot_2024-07-08_at_11.51.16_AM.png?v=1720453894&width=710" />
                <Card.Body>
                    <Card.Title>Myles St. Jean - Software Engineer</Card.Title>
                    <Card.Text style={{height: "45svh"}}>
                    Myles's enthusiasm for environmental sustainability stems from a strong belief in our duty to make the world a better place today and forever. He is committed to sparking children's interest in the environment through fun and interactive education, viewing it as essential for building a sustainable tomorrow.
                    </Card.Text>
                </Card.Body>
            </Card>
        </>} />
    </>);
}

export default MeetTheTeam;