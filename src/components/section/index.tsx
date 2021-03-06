import { FunctionComponent } from 'react';
import ActiveSection from './active-section';
import CompletedSection from './completed-section';
import classNames from './section.module.scss';

type IndexProps = {
  content: { 
    id: number;
    title: string;
    level: string;
    start_date: string;
    end_date: string;
    participants: {
      user_id: string,
      first_name: string,
      last_name: string,
      yoe: number,
      company: string,
      designation: string,
      img: string,
      github_id: string,
      linkedin_id: string,
      twitter_id: string,
      instagram_id: string,
      is_member: number,
      rds_member_id: string
    }[];
    is_active: number;
    is_user_subscribed: number; 
  }[];
  screen: string;
};

const Index: FunctionComponent<IndexProps> = ({ content, screen }) => {
  return (
    <section className={classNames.section}>
      <ActiveSection sectionContent={content} screen={screen} />
      <CompletedSection sectionContent={content} screen={screen} />
    </section>
  );
};

export default Index;
