import Image from "next/image";

import Banner from "./components/Banner";
import Product from "./components/Product";
import JivoChat from "./JivoChat";
import NortonHero from "./components/NortonHero";
import PricingPlans from "./components/PricingPlans";
import NortonPlans from "./components/NortonPlans";
import TableVersion from "./components/TableVersion";
import AdvanceProtection from "./components/Advanceprotection";
import NortonSmallBusinessCard from "./components/NortonSmallBusinessCard";





export default function Home() {
  return (
    <>
      {/* <Banner/> */}
      <NortonHero/>
      {/* <Product/> */}
      {/* <PrinterProductList/> */}
      {/* <Product/> */}
      <PricingPlans/>
      <NortonPlans/>
      <TableVersion/>
      <AdvanceProtection/>
      <NortonSmallBusinessCard/>
      <JivoChat/>
     
    
      
    
     
    </>
  );
}
