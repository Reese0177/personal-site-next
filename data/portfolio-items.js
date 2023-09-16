import el from '../images/el.PNG';
import rs from '../images/rs.png';
import st from '../images/st.PNG';
import mm from '../images/mm.png';

const items = [
    {   
        title: "Stuffi",
        href: "https://stuffi.app/",
        image: st,
        alt: "Stuffi Website",
        desc: "Stuffi allows users to organize and sort item based on any properties they choose! It is especially useful when weighing a large purchase, such as a car or house. Simply create an account, then create some items and tags. From there, you'll be able to sort and filters your items based on the tags you assign them. As an added bonus, you are able to use OpenAI's DALL-E to generate images for your items based off the description or title you provide.",
        git: 'https://github.com/multiverse-stuffi/stuffi'
    },
    {
        title: "Multiverse Messenger",
        image: mm,
        alt: 'Multiverse Messenger Website',
        desc: "Multiverse Messenger allows users to create an account and log in, send messages, create groups, add/remove users from groups, and delete groups. The messages are instant, and the website has functioning authentication to ensure privacy of user messages. Unfortunately, the deployed version is no longer functional due to the expiration of a free trial we were using for the backend. However, the code is available on Github!",
        git: 'https://github.com/Multiverse-Messenger/Multiverse-Messenger'
    },
    {
        title: "EdgeLedger",
        href: "https://reese0177.github.io/swe_us_2022_landing_page_starter/",
        image: el,
        alt: "EdgeLedger Website",
        desc: "The EdgeLedger site was a front-end project from my Multiverse bootcamp. The assignment was to replicate the CSS of the example we were given, without any access to the code. As such, the site is non-functional and has no back-end.",
        git: 'https://github.com/Reese0177/swe_us_2022_landing_page_starter'
    },
    {
        title: "React Store",
        href: "https://test.d3sdcani5maaj3.amplifyapp.com/",
        image: rs,
        alt: "React Store Project",
        desc: "This store is the first project I ever made in React. I worked on it in order to gain some initial experience with React, and it was based on an online course I took as an intro to front-end React development. Unfortunately, I've lost the files for it, but it is still available hosted on AWS."
    }
]

export {items};