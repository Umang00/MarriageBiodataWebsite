import { motion } from 'framer-motion';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

const events: TimelineEvent[] = [
  {
    year: '1999',
    title: 'A Promising Start',
    description: 'Born in Gujarat, setting the stage for a life of growth, discipline, and success.'
  },
  {
    year: '2007',
    title: 'The Karate Chapter Begins',
    description: 'Began learning Karate, marking the start of my passion for sports and self-improvement.'
  },
  {
    year: '2011',
    title: 'International Victory',
    description: 'Represented India in Karate and secured a gold medal at the international level.'
  },
  {
    year: '2013',
    title: 'Sports Milestones',
    description: 'Achieved Pro Black Belt in Karate and competed at the state level in Basketball.'
  },
  {
    year: '2014',
    title: 'Karate Judge',
    description: 'Became a judge for state-level Karate competitions in Gujarat.'
  },
  {
    year: '2015',
    title: 'Entrepreneurial Beginnings',
    description: 'Started a small business venture with friends, gaining early entrepreneurial experience despite challenges.'
  },
  {
    year: '2017',
    title: 'Engineering and Investments',
    description: 'Began B.Tech in Computer Science and Engineering and started my investment journey in the equity market.'
  },
  {
    year: '2019',
    title: 'Internships and Early Experiences',
    description: 'Interned as an Application Tester at MGVCL and as a Web Developer at StrikingWeb, building a strong technical foundation.'
  },
  {
    year: '2021',
    title: 'Graduation and Transition',
    description: 'Graduated with a 9.4 CGPA in Computer Science and began exploring cybersecurity and content writing as new avenues of passion.'
  },
  {
    year: '2022',
    title: 'A Breakthrough Year',
    description: 'Started freelancing for global clients, spoke at Encrypt 2022, hosted weekly crypto and finance sessions, and joined an EdTech company as a Content Writer.'
  },
  {
    year: '2023',
    title: 'Strategic Role',
    description: 'Promoted to Content Strategist at Hunch, driving global campaigns and boosting engagement.'
  },
];

export function Timeline() {
  return (
    <div className="py-12">
      <h2 className="text-3xl font-serif text-center mb-8">My Journey</h2>
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-yellow-400/30" />
        {events.map((event, index) => (
          <motion.div
            key={event.year}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            className={`relative flex items-center mb-12 ${
              index % 2 === 0 ? 'justify-start' : 'justify-end'
            }`}
            aria-label={`${event.year}: ${event.title}`}
          >
            <div
              className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}
            >
              <div
                className="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-yellow-400 rounded-full shadow-lg"
                style={{ [index % 2 === 0 ? 'right' : 'left']: 'calc(50% - 0.5rem)' }}
              />
              <span className="text-yellow-400 font-bold text-lg">{event.year}</span>
              <h3 className="text-xl font-serif mb-2">{event.title}</h3>
              <p className="text-gray-400">{event.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
