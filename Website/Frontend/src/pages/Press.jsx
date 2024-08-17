import styles from './press.module.scss';
import SingleBlock from '../components/SingleBlock.jsx';
import DoubleBlock from '../components/DoubleBlock.jsx';
import { Image, Button } from 'react-bootstrap';

const pressTitle = "Idori's Performance: Celebrating Successes and Awards in Sustainability and Education";

function Press() {
    document.title = pressTitle;

    return (<>
        <SingleBlock mt="10" mb="0" content={<>
            <h1 className="text-primary">Celebrating Early Successes and <br />Awards in Sustainable Education</h1>
            <p className="text-primary">As a testament to our dedication to sustainability education, we have received prestigious awards and <br />accolades for our innovative approach in fostering environmental awareness among children.</p>
        </>} />
        <DoubleBlock mt="10" mb="0" left={<>
            <Image src="https://idori.com/cdn/shop/files/Screen_Shot_2024-06-30_at_5.24.12_PM.png?v=1719782667" fluid />
        </>} right={<>
            <h1 className="text-primary">Collegepreneur <br />Podcast</h1>
            <p className="text-primary">Philip Eviston interviews Idori Founder and CEO, Noah<br /> Sorin, on the Collegepreneur Podcast to learn about his<br /> journey as a student entrepreneur.</p>
            <Button target="_blank" href="https://www.youtube.com/watch?v=YhSTaA2P9Rw" className="text-light" variant="primary">Watch Now</Button>
        </>} />
        <DoubleBlock mt="10" mb="0" left={<>
            <Image src="https://idori.com/cdn/shop/files/Screen_Shot_2024-06-30_at_5.06.00_PM.png?v=1719781697&width=750" fluid />
        </>} right={<>
            <h1 className="text-primary">Canvas Rebel <br />Feature</h1>
            <p className="text-primary">Canvas Rebel interviews Idori Founder and CEO, Noah Sorin, in order to learn more about the backstory of Idori, how it got started, and where he hopes to take it.</p>
            <Button target="_blank" href="https://canvasrebel.com/meet-noah-sorin/" className="text-light" variant="primary">Read More</Button>
        </>} />
        <DoubleBlock mt="10" mb="0" left={<>
            <Image src="https://idori.com/cdn/shop/files/Screen_Shot_2023-09-11_at_4.20.17_PM.png?v=1694463625&width=750" fluid />
        </>} right={<>
            <h1 className="text-primary">BU Today Article</h1>
            <p className="text-primary">BU Today features Idori and talks about founder Noah Sorin's journey through this entrepreneurial experience. Click the button below to read more about Noah's journey and how he got to where he is today.</p>
            <Button target="_blank" href="https://www.bu.edu/articles/2023/bu-student-creates-idori-to-teach-kids-sustainability/" className="text-light" variant="primary">Read More</Button>
        </>} />
        <DoubleBlock mt="10" mb="0" left={<>
            <Image src="https://idori.com/cdn/shop/files/PoetsandQuants-for-Undergrads-MostDisruptiveStartups-2022-13-Collage-copy.jpg?v=1688654688&width=750" fluid />
        </>} right={<>
            <h1 className="text-primary">Poets and Quants Most Disruptive <br />Undergraduate Startups of 2022</h1>
            <p className="text-primary">Idori named one of Poets and Quants' Most Disruptive Undergraduate Startups of 2022, recognizing their innovative approach to sustainability education.</p>
            <Button target="_blank" href="https://poetsandquantsforundergrads.com/students/2022-most-disruptive-business-school-startups-idori-boston-university-questrom/" className="text-light" variant="primary">Read More</Button>
        </>} />
        <DoubleBlock mt="10" mb="0" left={<>
            <Image src="https://idori.com/cdn/shop/files/Scb-x48s_400x400_d601ae15-cdc1-4db3-9ff9-b5abbb352418.jpg?v=1688654726" fluid />
        </>} right={<>
            <h1 className="text-primary">Daily Free Press</h1>
            <p className="text-primary">Idori featured in the Daily Free Press, highlighting their pioneering efforts in sustainability education and their significant impact on young learners.</p>
            <Button target="_blank" href="https://dailyfreepress.com/2023/02/03/questrom-students-featured-in-poets-quants-most-disruptive-business-school-startups/" className="text-light" variant="primary">Read More</Button>
        </>} />
        <DoubleBlock mt="10" mb="10" left={<>
            <Image src="https://idori.com/cdn/shop/files/websitemetatag2022.png?v=1688654795&width=750" fluid />
        </>} right={<>
            <h1 className="text-primary">Mass Challenge</h1>
            <p className="text-primary">Idori selected for MassChallenge 2023 Early Stage Growth Cohort on the social impact track, recognizing their exceptional potential and commitment to making a positive difference through sustainability education.</p>
            <Button target="_blank" href="https://more.masschallenge.org/uses-2023-cohort?utm_campaign=2023%20US%20Early%20Stage%20Applications&utm_source=hootsuite&utm_medium=social&utm_term=cohort%20announcement" className="text-light" variant="primary">Read More</Button>
        </>} />
    </>);
}

export default Press;