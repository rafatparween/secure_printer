"use client";
import Image from "next/image";
import { useState } from "react";

export default function NortonPlans() {
  const [openFeature, setOpenFeature] = useState(null);

  const toggleFeature = (index) => {
    setOpenFeature(openFeature === index ? null : index);
  };

  const securityFeatures = [
    {
      title: "Real-time Threat Protection",
      content:
        "Advanced security helps protect your device against malware, ransomware, and viruses in real time.",
    },
    {
      title: "Secure VPN",
      content:
        "Browse anonymously and securely with a no-log VPN to help protect your data on public Wi-Fi.",
    },
    {
      title: "Dark Web Monitoring",
      content:
        "We monitor the dark web and notify you if your personal information is found.",
    },
    {
      title: "Password Manager",
      content:
        "Generate, store, and manage your passwords securely across devices.",
    },
  ];

  return (
    <main className="w-full bg-white py-16 px-4 md:px-10">
      {/* Heading */}
      <h1 className="text-center text-3xl md:text-5xl font-semibold mb-16">
        Find what fits your digital life.
      </h1>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Phone Image */}
        <div className="relative flex justify-center">
          <div className="absolute w-[420px] h-[260px] "></div>

          <Image
            src="/protected.avif" // 👉 replace with your image path
            alt="norton mobile"
            width={643}
            height={570}
            className="relative z-10"
          />
        </div>

        {/* Right Content */}
        <div>
          <p className="text-sm mb-3 text-gray-700">
            Norton™ 360 with LifeLock™ plans
          </p>

          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Devices + online privacy + identity protection
          </h2>

          <p className="text-gray-700 mb-8">
            Protect your devices, privacy, and identity in one plan. Scam
            Protection Pro blocks scam calls, detects scams online and in emails,
            and identity theft support helps restore your identity and reimburse
            stolen funds.
          </p>

          <button className="bg-yellow-400 hover:bg-yellow-500 transition px-8 py-4 rounded-full font-semibold text-lg">
            Get started
          </button>
        </div>
      </section>

      {/* Subscription Section */}
     

      {/* Security Features Dropdown */}
     
    </main>
  );
}
