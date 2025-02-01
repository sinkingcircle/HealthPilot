import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { useRef, useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
 
export function SplineSceneBasic() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          controls.start({ opacity: 1, y: 0 });
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [controls]);

  return (
    <Card className="w-full h-[400px] md:h-[500px] bg-gradient-to-br from-white via-blue-50 to-blue-100 relative overflow-hidden">
      <motion.div 
        ref={containerRef} 
        className="relative w-full h-full"
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Spotlight
          className="opacity-70"
          size={300}
          fill="#00B2FF"
        />
        
        <div className="flex flex-col md:flex-row h-full">
          {/* Left content */}
          <div className="w-full md:w-1/2 p-6 md:p-8 relative z-10 flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00B2FF] to-blue-600">
              Your AI HealthPilot
            </h1>
            <p className="mt-4 text-gray-600 max-w-lg text-base md:text-lg">
              Experience healthcare reimagined with our advanced AI chatbot assistant.
            </p>
            <div className="mt-6 md:mt-8">
              <button className="w-full md:w-auto px-6 py-3 bg-[#00B2FF] text-white rounded-lg hover:bg-blue-500 transition-colors duration-200 font-medium">
                Try AI Assistant
              </button>
            </div>
          </div>

          {/* Right content */}
          <div className="w-full md:w-1/2 h-[300px] md:h-full relative">
            {isVisible && (
              <SplineScene 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            )}
          </div>
        </div>
      </motion.div>
    </Card>
  );
}