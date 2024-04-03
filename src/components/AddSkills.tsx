'use client'
import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';

interface AddSkillsProps {
    onSkillsChange: (skills: string[]) => void,
    cls?: string
}

const AddSkills = ({ onSkillsChange, cls }: AddSkillsProps) => {
    const [inputSkill, setInputSkill] = useState<string>('');
    const [skills, setSkills] = useState<string[]>([]);
    const [filteredOptions, setFilteredOptions] = useState<string[]>([]);

    const options = [
        'React', 'React Native', 'Angular', 'Vue.js', 'Ember.js', 'Backbone.js', 'jQuery',
        'Node.js', 'Express.js', 'Next.js', 'Nest.js', 'Django', 'Flask', 'FastAPI',
        'Ruby on Rails', 'ASP.NET', 'Spring Boot', 'Hibernate', 'Struts', 'Play Framework',
        'Laravel', 'Symfony', 'CodeIgniter', 'Zend Framework', 'Express.js', 'Meteor.js',
        'Java', 'JavaScript', 'TypeScript', 'Python', 'Ruby', 'PHP', 'C#', 'C++', 'C',
        'Go', 'Swift', 'Kotlin', 'Objective-C', 'Scala', 'Rust', 'Perl', 'Haskell',
        'HTML', 'CSS', 'Sass', 'Less', 'Bootstrap', 'Tailwind CSS', 'Material UI',
        'Semantic UI', 'Foundation', 'Bulma', 'Ant Design', 'Flutter', 'Dart',
        'MySQL', 'PostgreSQL', 'MongoDB', 'SQLite', 'MariaDB', 'Oracle', 'SQL Server',
        'Firebase', 'Amazon RDS', 'DynamoDB', 'Elasticsearch', 'Redis', 'Neo4j',
        'GraphQL', 'RESTful API', 'SOAP', 'gRPC', 'Socket.io', 'WebSockets', 'AJAX',
        'JSON', 'XML', 'YAML', 'Protobuf', 'Apache Kafka', 'RabbitMQ', 'ActiveMQ',
        'Git', 'GitHub', 'GitLab', 'Bitbucket', 'SVN', 'Mercurial', 'Jenkins',
        'CircleCI', 'Travis CI', 'TeamCity', 'Bamboo', 'Docker', 'Kubernetes',
        'Vagrant', 'Ansible', 'Puppet', 'Chef', 'Terraform', 'AWS', 'Azure', 'Google Cloud',
        'Heroku', 'Netlify', 'DigitalOcean', 'Firebase', 'Nginx', 'Apache HTTP Server',
        'HAProxy', 'Microsoft IIS', 'Elastic Stack', 'Splunk', 'Sumo Logic', 'Grafana',
        'Prometheus', 'Kibana', 'Logstash', 'Jira', 'Confluence', 'Trello', 'Asana',
        'Slack', 'Microsoft Teams', 'Zoom', 'Google Meet', 'Skype', 'Discord', 'Twitch',
        'WordPress', 'Drupal', 'Joomla', 'Magento', 'Shopify', 'PrestaShop', 'WooCommerce',
        'BigCommerce', 'Squarespace', 'Wix', 'Weebly', 'Ghost', 'Jekyll', 'Hugo',
        'Adobe Photoshop', 'Adobe Illustrator', 'Adobe XD', 'Sketch', 'Figma', 'InVision',
        'Zeplin', 'Marvel', 'Balsamiq', 'Axure', 'Microsoft Office', 'Google Workspace',
        'LibreOffice', 'OpenOffice', 'Dropbox', 'Google Drive', 'OneDrive', 'Box',
        'Trello', 'Monday.com', 'Notion', 'Evernote', 'Microsoft OneNote', 'Bear',
        'Todoist', 'Wunderlist', 'TickTick', 'Asana', 'Jira', 'Basecamp', 'Slack',
        'Microsoft Teams', 'Zoom', 'Google Meet', 'Skype', 'Discord', 'Twitch',
        'Agile', 'Scrum', 'Kanban', 'Lean', 'Waterfall', 'Extreme Programming (XP)',
        'DevOps', 'Continuous Integration (CI)', 'Continuous Delivery (CD)', 'GitOps',
        'Test-Driven Development (TDD)', 'Behavior-Driven Development (BDD)',
        'Domain-Driven Design (DDD)', 'Microservices', 'Serverless Architecture',
        'Containerization', 'Cloud Computing', 'Machine Learning', 'Deep Learning',
        'Artificial Intelligence (AI)', 'Natural Language Processing (NLP)',
        'Computer Vision', 'Reinforcement Learning', 'Big Data', 'Data Science',
        'Data Engineering', 'Data Analytics', 'Data Warehousing', 'Data Mining',
        'Business Intelligence (BI)', 'ETL (Extract, Transform, Load)',
        'Predictive Analytics', 'Quantitative Analysis', 'Statistical Modeling',
        'Blockchain', 'Smart Contracts', 'Cryptocurrency', 'Decentralized Finance (DeFi)',
        'Non-Fungible Tokens (NFTs)', 'Ethereum', 'Bitcoin', 'Polkadot', 'Cardano',
        'Chainlink', 'Cosmos', 'Solana', 'Avalanche', 'Tezos', 'Algorand', 'Tron',
        'Web Development', 'Mobile Development', 'Desktop Development', 'Game Development',
        'Cloud Development', 'Embedded Development', 'Full-Stack Development',
        'Front-End Development', 'Back-End Development', 'UI/UX Design',
        'Product Management', 'Project Management', 'Quality Assurance (QA)',
        'Software Testing', 'Technical Writing', 'Technical Support', 'Systems Administration',
        'Network Administration', 'Database Administration', 'Cybersecurity',
        'Information Security', 'Penetration Testing', 'Incident Response',
        'Security Operations (SecOps)', 'Governance, Risk, and Compliance (GRC)',
        'Regulatory Compliance', 'Privacy Compliance', 'Accessibility',
        'Internationalization (i18n)', 'Localization (l10n)', 'Performance Optimization',
        'Code Refactoring', 'Code Review', 'Code Documentation', 'Code Versioning',
        'API Design', 'Microservices Architecture', 'System Design', 'Design Patterns',
        'Algorithms', 'Data Structures', 'Object-Oriented Programming (OOP)',
        'Functional Programming', 'Aspect-Oriented Programming (AOP)', 'Event-Driven Programming',
        'Model-View-Controller (MVC)', 'Model-View-ViewModel (MVVM)', 'Observer Pattern',
        'Singleton Pattern', 'Factory Pattern', 'Abstract Factory Pattern',
        'Builder Pattern', 'Prototype Pattern', 'Adapter Pattern', 'Bridge Pattern',
        'Composite Pattern', 'Decorator Pattern', 'Facade Pattern', 'Flyweight Pattern',
        'Proxy Pattern', 'Command Pattern', 'Interpreter Pattern', 'Iterator Pattern',
        'Mediator Pattern', 'Memento Pattern', 'Observer Pattern', 'State Pattern',
        'Strategy Pattern', 'Template Method Pattern', 'Visitor Pattern', 'Concurrency',
        'Parallelism', 'Asynchronous Programming', 'Multi-Threading', 'Multi-Processing',
        'Distributed Computing', 'High-Performance Computing', 'Real-Time Computing',
        'Fault Tolerance', 'Performance Monitoring', 'Load Balancing', 'Scalability',
        'Reliability', 'Security', 'Agility', 'Resilience', 'Interoperability',
        'Usability', 'Accessibility', 'Compatibility']


    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            const updatedSkills = [...skills, inputSkill];
            setSkills(updatedSkills);
            setInputSkill('');
            onSkillsChange(updatedSkills);
        }
    };

    const handleSkillRemove = (index: number) => {
        const updatedSkills = [...skills];
        updatedSkills.splice(index, 1);
        setSkills(updatedSkills);
        onSkillsChange(updatedSkills);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        setInputSkill(inputValue);
        const filtered = options.filter(option =>
            option.toLowerCase().includes(inputValue.toLowerCase())
        ).slice(0, 6);
        setFilteredOptions(filtered);
    };

    const handleOptionClick = (option: string) => {
        const updatedSkills = [...skills, option];
        setSkills(updatedSkills);
        setInputSkill('');
        setFilteredOptions([]);
        onSkillsChange(updatedSkills);
    };

    return (
        <div className={`${cls} h-full`}>
            <div className="w-full flex flex-row gap-3 items-center flex-wrap border-[1px] border-solid border-neutral-200 rounded-[5px] p-2">
                {skills.map((skill, index) => (
                    <div className="px-2 flex flex-row gap-3 items-center rounded-[5px] bg-red-200 capitalize p-1" key={index}>
                        <span className="text-sm font-bold">{skill}</span>
                        <IoMdClose onClick={() => handleSkillRemove(index)} className="cursor-pointer" />
                    </div>
                ))}
                <input
                    type="text"
                    placeholder="Add Skills"
                    value={inputSkill}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    className="focus:outline-none p-2 w-full"
                />
            </div>

            {filteredOptions?.length > 0 && inputSkill &&
                <div className='w-full flex flex-col gap-[1px] border-[1px] border-solid border-neutral-100 rounded-[5px] mt-1'>
                    {filteredOptions?.map((option, index) => (
                        <span className='p-2 w-full hover:bg-neutral-200 cursor-pointer border-b-[1px] border-solid border-neutral-100' onClick={() => handleOptionClick(option)} key={index}>{option}</span>
                    ))}
                </div>
            }
        </div>
    );
};

export default AddSkills;
