import Bhu32 from "../assets/sites/BhuCityCen32.avif";
import BhuAst from "../assets/sites/BhuAst.jpeg";
import M3M72 from "../assets/sites/M3M72.webp";
import M3MJewel from "../assets/sites/M3MJewel.webp";
import Dasnac72 from "../assets/sites/Dasnac72.jpg";
import VVIP from "../assets/sites/VVIP.webp";
import County151 from "../assets/sites/County151.webp";
import RGGroup from "../assets/sites/RGGroup.jpeg";
import Sobha from "../assets/sites/Sobha.jpeg";
import M3M37 from "../assets/sites/M3M37.jpeg";
import DasnacWest from "../assets/sites/DasnacWest.jpg";
import JimCor from "../assets/sites/JimCor.avif";
import GoldCityAli from "../assets/sites/GoldCityAli.webp";

const properties = [
  // Commercial Projects
  {
    id: '1',
    title: 'Bhutani City Center 32',
    type: 'commercial',
    location: 'Noida, Uttar Pradesh',
    area: '50,000 - 100,000 sq ft',
    price: '₹25 Crore+',
    roi: '12-15% p.a',
    description: 'Premium commercial space in the heart of Noida',
    img: Bhu32
  },
  {
    id: '2',
    title: 'Bhutani Astrathum',
    type: 'commercial',
    location: 'Noida, Uttar Pradesh',
    area: '40,000 - 80,000 sq ft',
    price: '₹20 Crore+',
    roi: '11-14% p.a',
    description: 'State-of-the-art commercial complex with modern amenities',
    img: BhuAst
  },
  {
    id: '3',
    title: 'M3M Line - Sector 72',
    type: 'commercial',
    location: 'Sector 72, Noida',
    area: '60,000 - 120,000 sq ft',
    price: '₹30 Crore+',
    roi: '13-16% p.a',
    description: 'Prime commercial corridor with high footfall',
    img: M3M72
  },
  {
    id: '4',
    title: 'M3M Jewel Crest',
    type: 'commercial',
    location: 'Sector 97, Noida',
    area: '30,000 - 70,000 sq ft',
    price: '₹18 Crore+',
    roi: '12-15% p.a',
    description: 'Luxury commercial development with premium finishes',
    img: M3MJewel
  },
  {
    id: '5',
    title: 'Dasnac ARC',
    type: 'commercial',
    location: 'Sector 72, Noida',
    area: '45,000 - 90,000 sq ft',
    price: '₹22 Crore+',
    roi: '11-14% p.a',
    description: 'Advanced commercial infrastructure with IT-enabled facilities',
    img: Dasnac72
  },

  // Residential Projects
  {
    id: '6',
    title: 'VVIP Residency',
    type: 'residential',
    location: 'Noida',
    beds: '2-4',
    baths: '2-3',
    area: '1,200 - 2,500 sq ft',
    price: '₹1.5 - 3.5 Crore',
    roi: '8-11% p.a',
    description: 'Ultra-luxury residential complex with world-class amenities',
    img: VVIP
  },
  {
    id: '7',
    title: 'County Sector 151',
    type: 'residential',
    location: 'Sector 151, Noida',
    beds: '3-4',
    baths: '2-3',
    area: '1,400 - 2,200 sq ft',
    price: '₹1.2 - 2.8 Crore',
    roi: '8-10% p.a',
    description: 'Gated community with extensive recreational facilities',
    img: County151
  },
  {
    id: '8',
    title: 'RG Group Residences',
    type: 'residential',
    location: 'Greater Noida',
    beds: '2-3',
    baths: '2',
    area: '900 - 1,500 sq ft',
    price: '₹80 Lac - 1.8 Crore',
    roi: '7-9% p.a',
    description: 'Contemporary living spaces with modern infrastructure',
    img: RGGroup
  },
  {
    id: '9',
    title: 'Sobha Realty',
    type: 'residential',
    location: 'Bangalore & NCR',
    beds: '2-4',
    baths: '2-3',
    area: '1,100 - 2,400 sq ft',
    price: '₹1.3 - 3.2 Crore',
    roi: '9-12% p.a',
    description: 'Premium residential developer with pan-India presence',
    img: Sobha
  },
  {
    id: '10',
    title: 'M3M Jacob & Co.',
    type: 'residential',
    location: 'Sector 37D, Noida',
    beds: '3-4',
    baths: '2-3',
    area: '1,500 - 2,300 sq ft',
    price: '₹1.6 - 2.9 Crore',
    roi: '9-11% p.a',
    description: 'Iconic luxury residential development with signature design',
    img: M3M37
  },
  {
    id: '11',
    title: 'Dasnac Westminster',
    type: 'residential',
    location: 'Sector 151, Noida',
    beds: '2-3',
    baths: '2',
    area: '1,000 - 1,800 sq ft',
    price: '₹90 Lac - 2.2 Crore',
    roi: '8-10% p.a',
    description: 'Premium residential township with clubhouse facilities',
    img: DasnacWest
  },
  {
    id: '12',
    title: 'Jim Corbett Cottage',
    type: 'residential',
    location: 'Uttarakhand',
    beds: '2-3',
    baths: '2',
    area: '1,200 - 1,800 sq ft',
    price: '₹60 Lac - 1.2 Crore',
    roi: '7-9% p.a',
    description: 'Luxury cottages in nature with premium amenities and forest views',
    img: JimCor
  },
  {
    id: '13',
    title: 'Golden City - Aligarh Highway',
    type: 'residential',
    location: 'Aligarh Highway, UP',
    beds: '2-3',
    baths: '2',
    area: '800 - 1,500 sq ft',
    price: '₹45 Lac - 1 Crore',
    roi: '6-8% p.a',
    description: 'Affordable luxury residential community on Aligarh Highway',
    img: GoldCityAli
  }
]

export default properties
