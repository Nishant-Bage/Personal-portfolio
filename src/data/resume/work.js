/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Metafic',
    position: 'Senior Software Developer',
    url: 'https://metafic.co/',
    startDate: '2022-03-11',
    summary: `As a Senior Software Engineer, I excel in leading teams and delivering high-impact software solutions.
     With extensive experience in architecting and managing the entire development lifecycle,
      I have successfully led a team of developers, bringing complex projects from initial concept to successful deployment.
      Throughout my career, I have developed and deployed numerous web applications, including Learning Management Systems (LMS),
       Human Resource Management Systems (HRMS), interactive dashboards, and admin panels. My expertise in technologies like React,
        Angular, Node.js, and Firebase ensures that the applications I build are performant, reliable, and user-friendly.`,
    highlights: [
      'Leadership & Team Management: Led a team of developers, guiding them through the complete software development process, from initial planning to final deployment.',
      'Full-Stack Development: Developed and deployed seven major web applications, ensuring seamless integration of front-end and back-end technologies.',
      'Cross-Functional Collaboration: Worked closely with cross-functional teams to align technical solutions with business objectives, ensuring high-quality outcomes.',
      'Mentorship & Training: Actively mentored and onboarded new hires and freshers, fostering a collaborative and productive team environment.',
      'Versatility & Innovation: Contributed to diverse projects across various industries, from education to sustainability and healthcare, leveraging a wide range of technologies to solve complex problems.',
    ],
  },
  {
    name: 'Blacksof',
    position: 'Associate Software Engineer',
    url: 'https://arthena.com',
    startDate: '2021-03-03',
    endDate: '2022-03-11',
    summary: `I played a pivotal role in developing and launching blacksof.com, the main website for the company, which has significantly bolstered our online presence and user engagement.
     This project was a true collaborative effort, where I worked closely with designers and developers to bring the vision to life.
      A key aspect of this project was ensuring that the site was fully responsive, offering a smooth and consistent user experience across all devices,
       from desktops to smartphones. Beyond this, I have also spearheaded the development of several smaller web projects, each contributing to the growth of my coding expertise and broadening my understanding of different web technologies.`,
    highlights: [
      "Boosted Online Presence: Led the development of blacksof.com, enhancing the company's visibility and engaging a wider audience.",
      'Responsive Design: Ensured that the website performs seamlessly on all devices, providing users with a consistent and reliable experience.',
      'Skill Growth: Through working on a range of web projects, I continually refined my technical skills, gaining deeper insights into various aspects of web development.',
      'Collaboration: Fostered a strong collaborative environment, working hand-in-hand with designers and developers to achieve a common goal.',
      'Innovation: Embraced new challenges with each project, using them as opportunities to innovate and improve.',
    ],
  },

];

export default work;
