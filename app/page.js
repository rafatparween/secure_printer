import Image from "next/image";

import Banner from "./components/Banner";
import Product from "./components/Product";
import JivoChat from "./JivoChat";





export default function Home() {
  return (
    <>
      <Banner/>
      {/* <Product/> */}
      {/* <PrinterProductList/> */}
      <Product/>
      <JivoChat/>
     
    
      
    
     
    </>
  );
}
