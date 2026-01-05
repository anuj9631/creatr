"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Badge, CheckCircle, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  features,
  platformTabs,
  socialProofStats,
  testimonials,
} from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import path from "path";
export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

 

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-green-900/20 animate-pulse" />

      <div
        className="fixed w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl pointer-events-none z-0"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          transition: "all 0.3s ease-out",
        }}
      />

      <section className="relative z-10 mt-48 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-7xl lg:text-8xl font-black leading-none tracking-tight">
                <span className="block font-black text-white">Create.</span>
                <span className="block font-light italic text-purple-300">
                  Publish.
                </span>
                <span className="block font-black bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
                  Grow.
                </span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-2xl md:max-w-none">
                The AI-powered platform that turns your ideas into{" "}
                <span className="text-purple-300 font-semibold">
                  engaging content
                </span>{" "}
                and helps you build a thriving creator business.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 items-center lg:items-start">
              <Link href="/dashboard">
                <Button
                  size="xl"
                  variant="primary"
                  className="rounded-full w-full sm:w-auto text-white"
                >
                  Start Creating for Free
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/feed">
                <Button
                  variant="outline"
                  size="xl"
                  className="rounded-full w-full sm:w-auto"
                >
                  Explore the Feed
                </Button>
              </Link>
            </div>
          </div>

          <div>
            <Image
              src="/banner.png"
              alt="Platform Banner"
              width={500}
              height={700}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      </section>

      <section
        id="features"
        className="relative mt-14 z-10 py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-r from-gray-900/50 to-purple-900/20"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6">
              <span className="gradient-text-primary">Everything you need</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto px-4">
              From AI-powered writing assistance to advanced analytics,
              we&apos;ve built the complete toolkit for modern creators.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group transition-all duration-300 hover:scale-105 card-glass p-0"
              >
                <CardContent className="p-6 sm:p-8">
                  <div
                    className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl mb-3 sm:mb-4 text-white">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-sm sm:text-base text-gray-400">
                    {feature.desc}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6">
              <span className="gradient-text-primary">How it works</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
              Three powerful modules working together to supercharge your
              content creation.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/3">
              <div className="space-y-4">
                {platformTabs.map((tab, index) => (
                  <Button
                    key={index}
                    variant={activeTab === index ? "outline" : "ghost"}
                    onClick={() => setActiveTab(index)}
                    className="w-full justify-start h-auto p-6 "
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          activeTab === index
                            ? "bg-gradient-to-br from-purple-500 to-blue-500"
                            : "bg-muted"
                        }`}
                      >
                        <tab.icon className="w-6 h-6" />
                      </div>
                      <div className="text-left">
                        <h3 className="font-bold text-lg">{tab.title}</h3>
                      </div>
                    </div>
                  </Button>
                ))}
              </div>
            </div>

            <div className="lg:w-2/3">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">
                    {platformTabs[activeTab].title}
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-400">
                    {platformTabs[activeTab].description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {platformTabs[activeTab].features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>


      <section className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-r from-gray-900/50 to-purple-900/20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-12 sm:mb-16">
            <span className="gradient-text-primary">
              Loved by creators worldwide
            </span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 lg:gap-8">
            {socialProofStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                </div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black mb-2 gradient-text-accent">
                  {stat.metric}
                </div>
                <div className="text-gray-400 text-base sm:text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="testimonials"
        className="relative z-10 py-16 sm:py-24 px-4 sm:px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6">
              <span className="gradient-text-primary">What creators say</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="transition-all duration-300 hover:shadow-lg card-glass"
              >
                <CardContent className="p-8">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="mb-6 leading-relaxed text-gray-300">
                    &quot;{testimonial.content}&quot;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12">
                      <Image
                        src={`https://images.unsplash.com/photo-${testimonial.imageId}?w=100&h=100&fit=crop&crop=face`}
                        alt={testimonial.name}
                        fill
                        className="rounded-full border-2 border-gray-700 object-cover"
                        sizes="48px"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-gray-400 text-sm">
                        {testimonial.role}
                      </div>
                      <Badge variant="secondary" className="mt-1">
                        {testimonial.company}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

     <section className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-r from-gray-900/50 to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 sm:mb-8">
            <span className="gradient-text-primary">Ready to create?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto">
            Join thousands of creators who are already building their audience
            and growing their business with our AI-powered platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/dashboard">
              <Button
                size="xl"
                variant="primary"
                className="rounded-full text-white w-full"
              >
                Start Your Journey
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="/feed">
              <Button
                variant="outline"
                size="xl"
                className="rounded-full w-full"
              >
                Explore the Feed
              </Button>
            </Link>
          </div>
        </div>
      </section>
       <footer className="px-6 md:px-16 lg:px-24 xl:px-32 pt-6 w-full text-gray-400 mt-10">
  <div className="flex flex-col md:flex-row justify-between gap-10 border-b border-gray-500/20 pb-6">

    <div className="max-w-md">
      <Image
        src="/logo.png"
        alt="Creatr logo"
        width={140}
        height={36}
        priority
        className="cursor-pointer"
      />

      <p className="mt-4 text-sm leading-relaxed hidden md:block">
        Creatr is an AI-powered content creation platform built for modern creators.
      </p>
    </div>

    <div className="flex flex-col sm:flex-row gap-14 md:gap-20">

      <div>
        <h2 className="font-semibold mb-3 text-gray-300">Company</h2>
        <ul className="text-sm space-y-1.5">
          <li><a href="/" className="hover:text-white cursor-pointer">Home</a></li>
          <li><a href="/" className="hover:text-white cursor-pointer">About</a></li>
          <li><a href="/footer" className="hover:text-white cursor-pointer">Contact</a></li>
          <li><a href="/privacy" className="hover:text-white cursor-pointer">Privacy Policy</a></li>
        </ul>
      </div>

      <div className="max-w-sm">
        <h2 className="font-semibold text-gray-300 mb-3">
          Subscribe to our newsletter
        </h2>

        <div className="flex items-center gap-2 pt-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="border border-gray-500/30 bg-slate-900 placeholder-gray-500
                       focus:ring-2 focus:ring-indigo-600 outline-none
                       w-full h-9 rounded px-3 text-sm cursor-text"
          />
          <button
            className="bg-indigo-600 hover:bg-indigo-500 transition
                       w-24 h-9 rounded text-sm text-white font-medium cursor-pointer"
          >
            Subscribe
          </button>
        </div>
      </div>

    </div>
  </div>

  <p className="pt-3 pb-3 text-center text-xs md:text-sm">
    © 2025 <a href="/" className="hover:text-white cursor-pointer">AnujDev</a>. All rights reserved.
  </p>
</footer>
    </div>
  );
}

//final commit
