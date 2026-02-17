"use client";

import Image from "next/image";
import { useState } from "react";

export default function TableVersion() {

  const [open, setOpen] = useState(null);

  const securityFeatures = [
    {
      title: "Cloud Backup",
      content: "Prevent data loss by saving your files in the cloud."
    },
    {
      title: "Scam Protection",
      content: "Stay safer from scams online and in text."
    },
    {
      title: "Real-Time Threat Protection",
      content: "Anti-virus technology detects online threats."
    },
    {
      title: "Password Manager",
      content: "Create and store strong passwords."
    }
  ];

  const toggle = (i) => {
    setOpen(open === i ? null : i);
  };

  return (
    <main className="bg-[#f5f6f7] min-h-screen">

      {/* ================= HERO SECTION ================= */}
      <section className="max-w-[1200px] mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT TEXT */}
          <div>

            <p className="text-[18px] text-gray-700 mb-6">
              Norton™ 360 plans
            </p>

            <h1 className="text-[44px] md:text-[56px] font-bold leading-[1.1] text-[#1a1a1a] mb-8">
              Devices + online <br />
              privacy protection
            </h1>

            <p className="text-[20px] text-gray-700 leading-relaxed mb-10 max-w-[520px]">
              Genie’s AI engine scans SMS messages for sophisticated scams so you can check your texts
              with peace of mind, device security blocks hackers, and Norton VPN helps keep your online
              activity private.
            </p>

            <button className="bg-[#ffe01b] border-2 border-black px-10 py-4 rounded-full font-semibold text-[18px] hover:bg-yellow-300 transition">
              Get started
            </button>

          </div>

         
<div className="relative w-[530px] h-[530px]">
  <Image
    src="/oipboy.jpg"
    alt="family laptop"
    fill
    quality={100}
    className="rounded-3xl object-cover"
  />
</div>


        </div>

      </section>


      {/* ================= SECOND ROW ================= */}
     


      {/* ================= SECURITY FEATURES DROPDOWN ================= */}
     

    </main>
  );
}
