// "use client";

// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Badge } from "@/components/ui/badge";
// import { Card, CardHeader } from "@/components/ui/card";
// import { cn } from "@/lib/utils";
// import { motion } from "framer-motion";
// import { ChevronRightIcon } from "lucide-react";
// import Link from "next/link";
// import React from "react";

// interface ResumeCardProps {
//   logoUrl: string;
//   altText: string;
//   title: string;
//   subtitle?: string;
//   href?: string;
//   badges?: readonly string[];
//   period: string;
//   description?: string;
// }
// export const ResumeCard = ({
//   logoUrl,
//   altText,
//   title,
//   subtitle,
//   href,
//   badges,
//   period,
//   description,
// }: ResumeCardProps) => {
//   const [isExpanded, setIsExpanded] = React.useState(false);

//   const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
//     if (description) {
//       e.preventDefault();
//       setIsExpanded(!isExpanded);
//     }
//   };

//   return (
//     <Link
//       href={href || "#"}
//       className="block cursor-pointer"
//       onClick={handleClick}
//     >
//       <Card className="flex">
//         <div className="flex-none">
//           <Avatar className="border size-12 m-auto bg-muted-background dark:bg-foreground">
//             <AvatarImage
//               src={logoUrl}
//               alt={altText}
//               className="object-contain"
//             />
//             <AvatarFallback>{altText[0]}</AvatarFallback>
//           </Avatar>
//         </div>
//         <div className="flex-grow ml-4 items-center flex-col group">
//           <CardHeader>
//             <div className="flex items-center justify-between gap-x-2 text-base">
//               <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
//                 {title}
//                 {badges && (
//                   <span className="inline-flex gap-x-1">
//                     {badges.map((badge, index) => (
//                       <Badge
//                         variant="secondary"
//                         className="align-middle text-xs"
//                         key={index}
//                       >
//                         {badge}
//                       </Badge>
//                     ))}
//                   </span>
//                 )}
//                 <ChevronRightIcon
//                   className={cn(
//                     "size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100",
//                     isExpanded ? "rotate-90" : "rotate-0"
//                   )}
//                 />
//               </h3>
//               <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
//                 {period}
//               </div>
//             </div>
//             {subtitle && <div className="font-sans text-xs">{subtitle}</div>}
//           </CardHeader>
//           {description && (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{
//                 opacity: isExpanded ? 1 : 0,

//                 height: isExpanded ? "auto" : 0,
//               }}
//               transition={{
//                 duration: 0.7,
//                 ease: [0.16, 1, 0.3, 1],
//               }}
//               className="mt-2 text-xs sm:text-sm"
//             >
//               {description}
//             </motion.div>
//           )}
//         </div>
//       </Card>
//     </Link>
//   );
// };


"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import Markdown from "react-markdown";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
}

export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (description) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <Link
      href={href || "#"}
      className="block cursor-pointer"
      onClick={handleClick}
    >
      <Card className="flex">
        <div className="flex-none p-4">
          <Avatar className="border size-12 m-auto bg-muted-background dark:bg-foreground">
            <AvatarImage
              src={logoUrl}
              alt={altText}
              className="object-contain"
            />
            <AvatarFallback>{altText[0]}</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex-grow pr-4 flex-col group">
          <CardHeader className="p-4 pb-2">
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
                {title}
                <ChevronRightIcon
                  className={cn(
                    "size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100",
                    isExpanded ? "rotate-90" : "rotate-0"
                  )}
                />
              </h3>
              <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                {period}
              </div>
            </div>
            {subtitle && <div className="font-sans text-xs mt-1">{subtitle}</div>}
            {badges && badges.length > 0 && (
              <div className="flex flex-wrap gap-1 mt-2">
                {badges.map((badge, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="text-xs px-2 py-0.5"
                  >
                    {badge}
                  </Badge>
                ))}
              </div>
            )}
          </CardHeader>
          {description && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isExpanded ? 1 : 0,
                height: isExpanded ? "auto" : 0,
              }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="overflow-hidden"
            >
              <CardContent className="p-4 pt-0">
                <Markdown className="prose prose-sm max-w-full dark:prose-invert">
                  {description}
                </Markdown>
              </CardContent>
            </motion.div>
          )}
        </div>
      </Card>
    </Link>
  );
};