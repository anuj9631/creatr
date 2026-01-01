"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  PenTool,
  FileText,
  Users,
  Menu,
  X,
  Settings,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Image from "next/image";

const sidebarItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Create Post",
    href: "/dashboard/create",
    icon: PenTool,
  },
  {
    title: "My Posts",
    href: "/dashboard/posts",
    icon: FileText,
  },
  {
    title: "Followers",
    href: "/dashboard/followers",
    icon: Users,
  },
];

const Dashboardlayout = ({ children }) => {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [draftPost, setDraftPost] = useState(false);

  // Detect draft post (example using localStorage)
  useEffect(() => {
    const draft = localStorage.getItem("draft-post");
    setDraftPost(!!draft);
  }, []);

  return (
    <div className="relative min-h-screen bg-slate-900">
      {/* Mobile Top Bar */}
      <div className="fixed top-0 left-0 right-0 z-40 flex items-center gap-3 bg-slate-900/80 backdrop-blur border-b border-slate-700 px-4 py-3 lg:hidden">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsSidebarOpen(true)}
        >
          <Menu className="h-5 w-5 text-white" />
        </Button>

        <Image
          src="/logo.png"
          alt="Creatr Logo"
          width={96}
          height={32}
          className="h-8 w-auto"
        />
      </div>

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 z-50 h-full w-64 bg-slate-800/60 backdrop-blur border-r border-slate-700 transition-transform duration-300",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full",
          "lg:translate-x-0"
        )}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-700">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Creatr Logo"
              width={120}
              height={40}
              className="h-9 w-auto"
            />
          </Link>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          >
            <X className="h-5 w-5 text-white" />
          </Button>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          {sidebarItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/dashboard" &&
                pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsSidebarOpen(false)}
              >
                <div
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-xl transition-all group",
                    isActive
                      ? "bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 text-white"
                      : "text-slate-300 hover:text-white hover:bg-slate-700/50"
                  )}
                >
                  <item.icon
                    className={cn(
                      "h-5 w-5",
                      isActive
                        ? "text-purple-400"
                        : "text-slate-400 group-hover:text-white"
                    )}
                  />

                  <span className="font-medium">{item.title}</span>

                  {/* Draft Badge */}
                  {item.title === "Create Post" && draftPost && (
                    <Badge
                      variant="secondary"
                      className="ml-auto text-xs bg-orange-500/20 text-orange-300 border-orange-500/30"
                    >
                      Draft
                    </Badge>
                  )}
                </div>
              </Link>
            );
          })}
        </nav>

        {/* Sidebar Footer */}
        <div className="absolute bottom-4 left-4 right-4">
          <Link href="/dashboard/settings">
            <Button
              variant="outline"
              size="sm"
              className="w-full justify-start gap-2 text-slate-300 hover:text-white rounded-xl"
            >
              <Settings className="h-4 w-4" />
              Settings
            </Button>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="pt-16 lg:pt-0 lg:ml-64">
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
};

export default Dashboardlayout;
