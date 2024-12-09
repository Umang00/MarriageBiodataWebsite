import { motion } from 'framer-motion';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

const events: TimelineEvent[] = [
  {
    year: '2017',
    title: 'Bachelor\'s Degree',
    description: 'Completed B.Tech in Computer Science with distinction'
  },
  {
    year: '2019',
    title: 'Master\'s Degree',
    description: 'Achieved M.Tech in Computer Science with specialization in AI/ML'
  },
  {
    year: '2020',
    title: 'Career Start',
    description: 'Joined Tech Solutions Inc. as Software Developer, leading key projects'
  },
  {
    year: '2023',
    title: 'Senior Position',
    description: 'Promoted to Senior Developer role, managing a team of 5 developers'
  }
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
            transition={{ delay: index * 0.2 }}
            className={`relative flex items-center mb-12 ${
              index % 2 === 0 ? 'justify-start' : 'justify-end'
            }`}
          >
            <div
              className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}
            >
              <div className="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-yellow-400 rounded-full shadow-lg"
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