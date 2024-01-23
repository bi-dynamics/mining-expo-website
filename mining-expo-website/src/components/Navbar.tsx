"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import ExpoLogo from "../../public/mining-expo-logo-nobg.png";
import Image from "next/image";

const conference: { title: string; href: string; description: string }[] = [
  {
    title: "Programme",
    href: "/docs/primitives/alert-dialog",
    description: "Mining conference programme information.",
  },
  {
    title: "Speakers",
    href: "/docs/primitives/hover-card",
    description: "List of speakers attending the conference.",
  },
];

const marketing_opportunities: {
  title: string;
  href: string;
  description: string;
}[] = [
  {
    title: "Supplier's Platform",
    href: "/docs/primitives/alert-dialog",
    description:
      "Presentation area for exhibitors to display services and product offerings.",
  },
  {
    title: "B2B",
    href: "/docs/primitives/hover-card",
    description:
      "Platform for exhibitors to engage directly with potential customers.",
  },
];

const past_events: {
  title: string;
  href: string;
  description: string;
}[] = [
  {
    title: "Supplier's Platform",
    href: "/docs/primitives/alert-dialog",
    description:
      "Presentation area for exhibitors to display services and product offerings.",
  },
  {
    title: "Speakers",
    href: "/docs/primitives/hover-card",
    description: "List of speakers attending the conference.",
  },
];

const Navbar = () => {
  return (
    <nav className="flex z-10 items-center fixed py-8 w-full bg-transparent">
      <div className="flex mx-24 justify-between items-center w-full">
        {/* LOGO */}
        <div className="flex items-center justify-center">
          <Image src={ExpoLogo} alt="Mining Expo Logo" height={80} />
        </div>
        <div className="flex flex-row gap-8">
          {/* Links */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-bold text-base">
                  Mining Expo
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <div className="h-6 w-6" />
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Mining Expo & Conference 2024
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            <ul>
                              <li>7-8 August</li>
                              <div className="h-2 w-full"></div>
                              <li>Windhoek Show Grounds</li>
                              <div className="h-2 w-full"></div>
                              <li>Free Entrance to Public</li>
                            </ul>
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/docs" title="Main Event Programme">
                      Event schedule for August 7 & 8.
                    </ListItem>
                    <ListItem
                      href="/docs/installation"
                      title="Registration and Info"
                    >
                      Conference registration and exhibitor information.
                    </ListItem>
                    <ListItem
                      href="/docs/primitives/typography"
                      title="Floor Plans"
                    >
                      Floor plans for all venues.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-base font-bold">
                  Conference
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {conference.map((conference) => (
                      <ListItem
                        key={conference.title}
                        title={conference.title}
                        href={conference.href}
                      >
                        {conference.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-base font-bold">
                  Marketing Opportunities
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="flex flex-col w-[250px] left-5 gap-3 py-4 px-3 md:w-[350px] md:grid-cols-2 lg:w-[600px] ">
                    {marketing_opportunities.map((marketing_opportunities) => (
                      <ListItem
                        key={marketing_opportunities.title}
                        title={marketing_opportunities.title}
                        href={marketing_opportunities.href}
                      >
                        {marketing_opportunities.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-base font-bold">
                  Past Events
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 py-4 px-3 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {past_events.map((past_events) => (
                      <ListItem
                        key={past_events.title}
                        title={past_events.title}
                        href={past_events.href}
                      >
                        {past_events.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/docs" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <div className="font-bold text-base">Contact</div>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA */}
          <div>
            <Button size="lg">Registration</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
