export default {
  heroSection: {
    subtextUnderSlogan: `Hi, we are pioneers in manufacturing solid waste management and urban maintainance products.
    We aim to provide engineering goods and services that can provide efficiency.`,
    downloadBrochureBtn: 'Download Brochure',
  },
  aboutSection: {
    title: 'About Us',
    about: `Founded on 20th July, 2005 it has been our constant endeavour to introduce more 
    efficient and cost effective technology to our clients to optimize workload. Our engineers 
    are working 24x7 to give a new look to a more efficient and green future.`,
    learnMoreBtn: 'Learn More',
  },
  productSection: {
    cards: [
      {
        id: 1,
        title: 'Cesspool Cleaner',
        subtitle: 'upto 3000lt capacity',
        image: `/resources/products/cesspool/3.png`,
        description: `Contrary to popular belief, Lorem Ipsum is not
        simply random text.It has  roots in a piece of classical 
        Latin literature from 45 BC, making it over 2000 years`,
      },
      {
        id: 2,
        title: 'Sky jacker',
        subtitle: 'upto 15ft height',
        image: '/resources/products/skyjacker/1.png',
        description: `Contrary to popular belief, Lorem Ipsum is not
        simply random text.It has  roots in a piece of classical 
        Latin literature from 45 BC, making it over 2000 years`,
      },
      {
        id: 3,
        title: 'Tipper',
        subtitle: 'lorem ipsum',
        image: '/resources/products/tipper/1.png',
        description: `Contrary to popular belief, Lorem Ipsum is not
        simply random text.It has  roots in a piece of classical 
        Latin literature from 45 BC, making it over 2000 years`,
      },
    ],
    buttons: ['KNOW MORE', 'download'],
  },
  accredits: [
    {
      isIcon: false,
      image: '/resources/icons/fieo.png',
      stat: false,
      text: 'Recognised Govt. of India Exporter',
    },
    {
      isIcon: false,
      stat: false,
      image: '/resources/icons/iso_logo.png',
      text: 'ISO:9000 Certified',
    },
    {
      isIcon: true,
      stat: '50+',
      image: 'account_balance',
      text: 'Municipalities and Organisations',
    },
    {
      isIcon: true,
      stat: '15+',
      image: 'access_time_filled',
      text: 'Years of Experience',
    },
    {
      isIcon: true,
      stat: false,
      image: 'high_quality',
      text: 'Excellence & Quality',
    },
    {
      isIcon: true,
      stat: false,
      image: 'precision_manufacturing',
      text: 'Recognised Manufacturer',
    },
  ],
  research: [
    {
      title: 'Sutainable Energy',
      subtitle: 'Portable Solar Energy',
      text: `Contrary to popular belief, Lorem Ipsum is not
      simply random text.It has  roots in a piece of classical 
      Latin literature from 45 BC, making it over 2000 years`,
      image:
        process.env.PUBLIC_URL + '/resources/research/sustainable-energy.jpeg',
    },
    {
      title: 'Recycle and Reuse',
      subtitle: 'Cleaner and Greener',
      text: `Contrary to popular belief, Lorem Ipsum is not
      simply random text.It has  roots in a piece of classical 
      Latin literature from 45 BC, making it over 2000 years`,
      image: process.env.PUBLIC_URL + '/resources/research/recycle.jpg',
    },
    {
      title: 'IT Infrastructure and Development',
      subtitle: 'Cutting Edge Integrations',
      text: `Contrary to popular belief, Lorem Ipsum is not
      simply random text.It has  roots in a piece of classical 
      Latin literature from 45 BC, making it over 2000 years`,
      image: process.env.PUBLIC_URL + '/resources/research/it.jpeg',
    },
  ],
  contact: {
    mapUrl: process.env.PUBLIC_URL + '/placeholder/map.png',
  },
};
