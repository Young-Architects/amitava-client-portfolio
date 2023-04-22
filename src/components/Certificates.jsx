import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import  SectionWrapper  from "../hoc/SectionWrapper";
//import SectionWrapper from "../hoc/SectionWrapper";
import { Certificate, projects } from "../consants";
import { fadeIn, textVariant } from "../utils/motion";

const CertificateCard = ({
  index,
  name,
  tags,
  description,
  image
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        {/* <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div> */}
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Career Achievements</p>
        <h2 className={`${styles.sectionHeadText}`}>Certificates.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Here are some of my top career achievements and some certificates that highlight my expertise as a Trainer and Developer.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {Certificate.map((Certificate, index) => (
          <CertificateCard key={`Certificate-${index}`} index={index} {...Certificate} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");