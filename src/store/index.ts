import { writable } from "svelte/store";

interface IAddressInfo {
  country: string;
  city: string;
}

interface IContact {
  iconName: string;
  text: string;
  src: string;
}

export interface IPeriodBlock {
  period: {
    from: string;
    to: string;
  };
  title: string;
  description?: string;
  achivements?: string[];
}

export interface IData {
  fullName: string;
  profession: string;
  addressInfo: IAddressInfo;
  contacts:IContact[];
  workExp: IPeriodBlock[];
  education: IPeriodBlock[];
  skills: string[];
}

const initialData: IData = {
  fullName: 'Aleksey Shirokov',
  profession: 'Software Developer',
  addressInfo: {
    country: 'Georgia',
    city: 'Tbilisi'
  },
  contacts: [
    {iconName: 'phone', text: '+995 511-104-420', src: 'tel:+995511104420'},
    {iconName: 'email', text: 'shirokovaloff@gmail.com', src: 'mailto:shirokovaloff@gmail.com&body=Привет?subject=vacancy'},
    {iconName: 'linkedIn', text: '@alexey-shirokov-4a79921b4', src: 'https://www.linkedin.com/in/alexey-shirokov-4a79921b4'},
    {iconName: 'github', text: '@alexfromearth', src: 'https://github.com/alexfromearth'},
  ],
  workExp: [
    {
      period: {
        from: 'February 2021',
        to: 'Present',
      },
      title: 'Frontend Engineer @ Wink TV',
      description: 'Development of Wink media service for SmartTV(Tizen, WebOS). Code review. Design review. Bundling. CI/CD. Unit/integration/E2E testing. TDD.',
      achivements: [
        'Developed complex UI',
        'Refactored data fetching approach(caching, invalidation, etc.)',
        'Improved performance of app(first start, relayouts, repaints, composite, renders, memoization)',
        'Refactored and optimized lists of media data'
      ]
    },
    {
      period: {
        from: 'September 2020',
        to: 'February 2021',
      },
      title: 'Frontend Engineer @ MTS',
      description: 'Been working on:',
      achivements: [
       "Reusable micro-frontends using Typescript, React.",
        "Developed complex reusable forms builder.",
        "Developed host module to work with micro-frontends developed using web components.",
       "Complex system integration with Camunda Modeler and wide range of external API's."
      ]
    },
    {
      period: {
        from: 'July 2018',
        to: 'August 2020',
      },
      title: 'Full-Stack Engineer @ Self Employed',
      description: 'Developed projects for customers using Javascript, React, React Native, Node.js, Express.js, MongoDB, HTML, CSS stack.',
      achivements: [
        "Development of UI using React, React Native.",
        "Development of reusable React components.",
        "External API integrations.",
        "Development of RESTful API using Node.js, Express.js.",
        "Database design."
      ]
    }
  ],
  education: [
    {
      title: 'Belgorod State Technological University. V.G. Shukhov',
      period: {
        from: 'September 2012',
        to: 'July 2018',
      },
    }
  ],
  skills: [
    'Typescript',
    'JavaScript',
    'React',
    'Next.js',
    'Svelte',
    'Redux',
    'RxJs',
    'Cypress',
    'Webpack',
    'Node.JS',
  ]
}

export const storeData = writable(initialData);