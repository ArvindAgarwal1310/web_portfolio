import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';

const renderMarkdown = (text) => {
  if (text == null) return null;
  const normalized = String(text).replace(/\\n/g, '\n');

  const parseInline = (value) => {
    const parts = [];
    const regex = /(\*\*[^*]+\*\*|\*[^*]+\*)/g;
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(value)) !== null) {
      if (match.index > lastIndex) {
        parts.push(value.slice(lastIndex, match.index));
      }
      const token = match[0];
      const content = token.startsWith('**') ? token.slice(2, -2) : token.slice(1, -1);
      const element = token.startsWith('**') ? (
        <strong key={`bold-${match.index}`}>{content}</strong>
      ) : (
        <em key={`italic-${match.index}`}>{content}</em>
      );
      parts.push(element);
      lastIndex = match.index + token.length;
    }

    if (lastIndex < value.length) {
      parts.push(value.slice(lastIndex));
    }

    return parts.length === 0 ? value : parts;
  };

  return normalized.split('\n').flatMap((line, index) => {
    const content = parseInline(line);
    if (index === 0) return [content];
    return [<br key={`br-${index}`} />, content];
  });
};

const ExperienceCard=({experience})=>(
  <VerticalTimelineElement contentStyle={{background: '#1d1836',color:'#fff'}}
  contentArrowStyle={{borderRight:'7px solid #232631'}} date={experience.date} iconStyle={{background : experience.iconBg}} icon={
  <div className="flex justify-center items-center w-full h-full">
    <img src={experience.icon} alt={experience.company_name} className="w-[80%] h-[80%] object-contain"></img>
  </div>}>
    <div>
      <h3 className="text-white text-[24px]">{renderMarkdown(experience.title)}</h3>
      <p
        className="text-secondary text-[16px] font-semibold"
        style={{ margin: 0, color: experience.company_name == "Amazon"  ? "#FF9900" : undefined }}
      >
        {renderMarkdown(experience.company_name)}
      </p>
    </div>

    {experience.additional && (
      <div className="mt-5 flex flex-wrap gap-2">
        {experience.additional.map((item, index) => (
          <span
            key={`experience-additional-${index}`}
            className="rounded-full bg-slate-900/80 px-3 py-1 text-xs font-semibold text-slate-200"
          >
            {renderMarkdown(item)}
          </span>
        ))}
      </div>
    )}

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point,index) => (
        <li
          key={`experience-point-${index}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider">
            {renderMarkdown(point)}
        </li>
      ))}

    </ul>

  </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Experience.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index)=> (
            <ExperienceCard key={index} experience={experience}/>
          ))}
        </VerticalTimeline>
      </div>

    </>
  )
}

export default SectionWrapper(Experience,"work")