import { image } from "framer-motion/client";
import buysell from "../assets/static/BuySell.png";
import interior from "../assets/static/HomeInterior.jpg";
import homeloan from "../assets/static/HomeLoan.jpg";
import vastu from "../assets/static/Vastu.webp";

export const services = [
  {
    id: 1,
    title: 'Real Estate Buy & Sell',
    icon: '🏠',
    image: buysell,
    description: 'Comprehensive real estate solutions for buying and selling properties',
    details: [
      'Property valuation and market analysis',
      'Legal documentation assistance',
      'Buyer and seller representation',
      'Negotiation support',
      'Property inspection coordination',
      'Registration and title verification'
    ],
    fullDescription: 'We provide end-to-end real estate transaction services. Whether you\'re buying your dream property or selling an existing one, our experienced team ensures smooth, transparent, and profitable transactions with complete legal support.'
  },
  {
    id: 2,
    title: 'Vastu Astrology',
    icon: '🧿',
    image: vastu,
    description: 'Expert Vastu consultation for residential and commercial properties',
    details: [
      'Vastu analysis of existing properties',
      'Property selection guidance',
      'Layout optimization recommendations',
      'Energy flow assessment',
      'Remedial solutions',
      'Online consultation available'
    ],
    fullDescription: 'Our certified Vastu experts provide personalized consultation to align your living and working spaces with ancient Vastu principles. Enhance positive energy, prosperity, and harmony in your property with our expert guidance.'
  },
  {
    id: 3,
    title: 'Home Interior Design',
    icon: '🎨',
    image: interior,
    description: 'Professional interior design services for modern living spaces',
    details: [
      'Space planning and layout design',
      'Color and material consultation',
      'Furniture and decor selection',
      '3D visualization',
      'Budget-friendly options available',
      'Project execution support'
    ],
    fullDescription: 'Transform your living space into a beautiful, functional home. Our interior designers work with you to create stunning designs that reflect your style while maximizing space and comfort.'
  },
  {
    id: 4,
    title: 'Home Loan Assistance',
    icon: '💳',
    image: homeloan,
    description: 'Expert guidance for home loan processing and approvals',
    details: [
      'Loan eligibility assessment',
      'Best interest rate comparison',
      'Documentation preparation',
      'Bank coordination',
      'Loan approval acceleration',
      'Financial planning advice'
    ],
    fullDescription: 'Simplify your home loan journey with our expert assistance. We help you navigate the lending process, secure the best rates, and expedite approvals so you can focus on your new home.'
  }
];