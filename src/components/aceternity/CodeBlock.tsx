"use client";
import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

export const CodeBlock = () => {
  const [copied, setCopied] = useState(false);

  const codeString = `// About Muhammad Ahmad Tahir
const developer = {
  name: "Muhammad Ahmad Tahir",
  role: "CEO & Founder at MATalogics",
  location: "Pakistan",
  
  expertise: [
    "Full Stack Development (MERN)",
    "Mobile Development (Flutter)",
    "AI/ML/DL Implementation",
    "Automation & Integration"
  ],
  
  philosophy: "Technology should amplify human potential",
  
  currentFocus: [
    "Leading technical innovation at MATalogics",
    "Building scalable enterprise solutions", 
    "Exploring cutting-edge AI technologies",
    "Mentoring next-gen developers"
  ],
  
  getInTouch: () => "ahmad@matalogics.com"
};

// Always learning, always building 🚀`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      className="relative overflow-hidden rounded-xl border-elegant glass-elegant"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-muted/20">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>
        <div className="text-xs font-mono text-muted-foreground">
          developer.js
        </div>
        <button
          onClick={handleCopy}
          className="p-2 rounded-lg hover:bg-muted/20 transition-colors"
        >
          {copied ? (
            <Check className="w-4 h-4 text-green-400" />
          ) : (
            <Copy className="w-4 h-4 text-muted-foreground" />
          )}
        </button>
      </div>

      {/* Code Content */}
      <div className="p-6 overflow-x-auto">
        <pre className="text-sm font-mono leading-relaxed">
          <code className="text-muted-foreground">
            <span className="text-green-400">
              // About Muhammad Ahmad Tahir
            </span>
            <br />
            <span className="text-blue-400">const</span>{" "}
            <span className="text-yellow-400">developer</span> = {"{"}
            <br />
            {"  "}
            <span className="text-red-300">name</span>:{" "}
            <span className="text-green-300">"Muhammad Ahmad Tahir"</span>,
            <br />
            {"  "}
            <span className="text-red-300">role</span>:{" "}
            <span className="text-green-300">
              "CEO & Founder at MATalogics"
            </span>
            ,<br />
            {"  "}
            <span className="text-red-300">location</span>:{" "}
            <span className="text-green-300">"Pakistan"</span>,<br />
            <br />
            {"  "}
            <span className="text-red-300">expertise</span>: [<br />
            {"    "}
            <span className="text-green-300">
              "Full Stack Development (MERN)"
            </span>
            ,<br />
            {"    "}
            <span className="text-green-300">
              "Mobile Development (Flutter)"
            </span>
            ,<br />
            {"    "}
            <span className="text-green-300">"AI/ML/DL Implementation"</span>,
            <br />
            {"    "}
            <span className="text-green-300">"Automation & Integration"</span>
            <br />
            {"  "}],
            <br />
            <br />
            {"  "}
            <span className="text-red-300">philosophy</span>:{" "}
            <span className="text-green-300">
              "Technology should amplify human potential"
            </span>
            ,<br />
            <br />
            {"  "}
            <span className="text-red-300">achievements</span>: {"{"}
            <br />
            {"    "}
            {/* <span className="text-red-300">certifications</span>:{" "}
            <span className="text-purple-400">8</span>,<br />
            {"    "}
            <span className="text-red-300">projectsCompleted</span>:{" "}
            <span className="text-purple-400">50</span>,<br />
            {"    "}
            <span className="text-red-300">yearsExperience</span>:{" "}
            <span className="text-purple-400">5</span>,<br />
            {"    "}
            <span className="text-red-300">clientSatisfaction</span>:{" "}
            <span className="text-green-300">"100%"</span>
            <br /> */}
            {"  "}
            {"}"}, <br />
            <br />
            {"  "}
            <span className="text-red-300">currentFocus</span>: [<br />
            {"    "}
            <span className="text-green-300">
              "Leading technical innovation at MATalogics"
            </span>
            ,<br />
            {"    "}
            <span className="text-green-300">
              "Building scalable enterprise solutions"
            </span>
            ,<br />
            {"    "}
            <span className="text-green-300">
              "Exploring cutting-edge AI technologies"
            </span>
            ,<br />
            {"    "}
            <span className="text-green-300">
              "Mentoring next-gen developers"
            </span>
            <br />
            {"  "}],
            <br />
            <br />
            {"  "}
            <span className="text-red-300">getInTouch</span>: () =&gt;{" "}
            <span className="text-green-300">"ahmad@matalogics.com"</span>
            <br />
            {"}"};<br />
            <br />
            <span className="text-green-400">
              // Always learning, always building
            </span>
          </code>
        </pre>
      </div>
    </motion.div>
  );
};
