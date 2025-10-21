import Navbar from '@/components/Navbar';

export default function Showcase() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-white dark:bg-black transition-colors duration-300">
      {/* Geist-style background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 via-white to-white dark:from-purple-950/20 dark:via-black dark:to-black">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="flex flex-col items-center justify-center min-h-screen">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-black/50 backdrop-blur-sm">
              <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Portfolio</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-gray-900 dark:text-gray-50 mb-6">
              Our Showcase
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Explore our portfolio of exceptional projects
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl animate-fade-in-delay">
            {[
              { title: 'E-Commerce Platform', category: 'Web Development', year: '2024' },
              { title: 'Banking App', category: 'Mobile', year: '2024' },
              { title: 'Analytics Dashboard', category: 'SaaS', year: '2024' },
              { title: 'Healthcare Portal', category: 'Web Development', year: '2023' },
              { title: 'Fitness Tracker', category: 'Mobile', year: '2023' },
              { title: 'Social Platform', category: 'Full Stack', year: '2023' },
            ].map((project, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 hover:shadow-lg aspect-[4/3]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100/50 to-gray-200/50 dark:from-gray-800/50 dark:to-gray-900/50 group-hover:opacity-75 transition-opacity duration-300"></div>
                <div className="relative h-full p-6 flex flex-col justify-end">
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">{project.category} • {project.year}</span>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{project.title}</h3>
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
