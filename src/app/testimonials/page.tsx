import Navbar from '@/components/Navbar';

export default function Testimonials() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-white dark:bg-black transition-colors duration-300">
      {/* Geist-style background */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-50/50 via-white to-white dark:from-green-950/20 dark:via-black dark:to-black">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-green-500/5 dark:bg-green-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="flex flex-col items-center justify-center min-h-screen">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-black/50 backdrop-blur-sm">
              <span className="text-xs font-medium text-gray-700 dark:text-gray-300">What Clients Say</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-gray-900 dark:text-gray-50 mb-6">
              Client Testimonials
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Hear what our clients have to say about us
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl animate-fade-in-delay">
            {[
              { 
                quote: "Exceptional work! They delivered beyond our expectations and on time.",
                author: "Sarah Johnson",
                role: "CEO, TechCorp",
                avatar: "SJ"
              },
              { 
                quote: "The team's attention to detail and technical expertise is outstanding.",
                author: "Michael Chen",
                role: "CTO, StartupX",
                avatar: "MC"
              },
              { 
                quote: "Professional, responsive, and delivered exactly what we needed.",
                author: "Emily Rodriguez",
                role: "Product Manager, InnovateLabs",
                avatar: "ER"
              },
              { 
                quote: "A pleasure to work with. They truly understand modern development.",
                author: "David Park",
                role: "Founder, DevHub",
                avatar: "DP"
              },
            ].map((testimonial, index) => (
              <div 
                key={index}
                className="group p-8 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-black hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 hover:shadow-lg"
              >
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-900 flex items-center justify-center text-sm font-medium text-gray-700 dark:text-gray-300">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">{testimonial.author}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Navbar />
    </main>
  );
}
