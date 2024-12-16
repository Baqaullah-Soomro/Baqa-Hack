import Image from "next/image";

import Header from "@/components/header";
import Brands from "@/components/brands";
import NewArrivals from "@/components/NewArrivals";
import TopSellers from "@/components/TopSellers";
import Style from "@/components/style";
import Customers from "@/components/Customers";
import Link from "next/link";





export default function Home() {
  return (
    <div>
      
      <Header />
      <Brands />
      <NewArrivals />
      <TopSellers />
      <Style />
      <Customers />
      
      
      
    </div>
    
  );
}
