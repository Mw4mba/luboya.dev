import Navbar from '@/components/Navbar';
import { Rocket, Smartphone, Palette, Cloud, Lightbulb, Settings } from 'lucide-react';

export default function Offering() {
  const services = [
    { title: 'Web Development', description: 'Custom web applications built with modern technologies', Icon: Rocket },
    { title: 'Mobile Apps', description: 'Native and cross-platform mobile solutions', Icon: Smartphone },
    { title: 'UI/UX Design', description: 'Beautiful, intuitive interfaces that users love', Icon: Palette },
    { title: 'Cloud Solutions', description: 'Scalable infrastructure and deployment strategies', Icon: Cloud },
    { title: 'Consulting', description: 'Expert guidance for your technical challenges', Icon: Lightbulb },
    { title: 'Maintenance', description: 'Ongoing support and continuous improvement', Icon: Settings },
  ];

  return (
    <main className="min-h-screen relative overflow-hidden bg-white dark:bg-black transition-colors duration-300">
      {/* Geist-style background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-white to-white dark:from-blue-950/20 dark:via-black dark:to-black">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="flex flex-col items-center justify-center min-h-screen">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-black/50 backdrop-blur-sm">
              <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Our Services</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-gray-900 dark:text-gray-50 mb-6">
              Our Offerings
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Comprehensive solutions tailored to your needs
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl animate-fade-in-delay">
            {services.map((service, index) => {
              const IconComponent = service.Icon;
              return (
                <div 
                  key={index}
                  className="group p-8 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-black hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-10 h-10 text-gray-900 dark:text-gray-100" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">{service.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Navbar />
    </main>
  );
}
