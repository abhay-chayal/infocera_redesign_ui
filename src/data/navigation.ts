export interface NavLink {
  label: string;
  path: string;
}

export interface MegaMenuColumn {
  title: string;
  items: NavLink[];
}

export interface NavItem {
  label: string;
  path: string;
  isMegaMenu?: boolean;
  children?: NavLink[];
  megaMenuColumns?: MegaMenuColumn[];
}

export const navigationData: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  {
    label: 'Services',
    path: '/services',
    children: [
      { label: 'Custom Software Development', path: '/services/custom-software-development' },
      { label: 'Mobile App Development', path: '/services/mobile-app-development' },
      { label: 'Cloud Solutions', path: '/services/cloud-solutions' },
      { label: 'AI & Machine Learning', path: '/services/ai-ml-solutions' },
      { label: 'DevOps & Automation', path: '/services/devops-automation' },
      { label: 'Data Engineering', path: '/services/data-engineering' },
    ],
  },
  {
    label: 'Technologies',
    path: '#',
    isMegaMenu: true,
    megaMenuColumns: [
      {
        title: 'UI DESIGN',
        items: [
          { label: 'HTML/HTML5, CSS3', path: '/technologies/html-css' },
          { label: 'AngularJS, JS', path: '/technologies/angular-js' },
          { label: 'React Development', path: '/technologies/react-development' },
          { label: 'WordPress', path: '/technologies/wordpress' },
        ],
      },
      {
        title: 'CLOUD COMPUTING',
        items: [
          { label: 'AWS Development', path: '/technologies/aws' },
          { label: 'Google Cloud', path: '/technologies/google-cloud' },
          { label: 'Go Daddy', path: '/technologies/godaddy' },
        ],
      },
      {
        title: 'SERVER SIDE SCRIPTING',
        items: [
          { label: 'PHP', path: '/technologies/php' },
          { label: 'Python', path: '/technologies/python' },
          { label: 'NodeJS Development', path: '/technologies/nodejs' },
          { label: 'Spring, Struts, Hibernate', path: '/technologies/java' },
        ],
      },
      {
        title: 'WEB SERVER TECHNOLOGY',
        items: [
          { label: 'JBoss', path: '/technologies/jboss' },
          { label: 'Apache', path: '/technologies/apache' },
          { label: 'IIS', path: '/technologies/iis' },
        ],
      },
      {
        title: 'DATA MINING AND ANALYTICS',
        items: [
          { label: 'Oracle / SQL Database', path: '/technologies/database' },
          { label: 'MongoDB', path: '/technologies/mongodb' },
          { label: 'IoT Solutions', path: '/technologies/iot' },
          { label: 'Blockchain Development', path: '/technologies/blockchain' },
        ],
      },
      {
        title: 'TESTING & SOFTWARE PROCESS',
        items: [
          { label: 'Software Testing', path: '/technologies/software-testing' },
          { label: 'Integration Testing', path: '/technologies/integration-testing' },
          { label: 'Deployment Automation Support', path: '/technologies/deployment-automation' },
        ],
      },
    ],
  },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Careers', path: '/careers' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];
