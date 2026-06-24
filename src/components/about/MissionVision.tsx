import { aboutData } from '../../data/aboutData';

export const MissionVision = () => {
  return (
    <section className="py-24 lg:py-32 border-t border-white/5 relative overflow-hidden bg-[#0a0f1c]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left: Mission & Vision */}
          <div className="flex flex-col justify-center space-y-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-4">
                <span className="w-12 h-px bg-purple-500" />
                {aboutData.missionVision.mission.title}
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed">
                {aboutData.missionVision.mission.content}
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-4">
                <span className="w-12 h-px bg-indigo-500" />
                {aboutData.missionVision.vision.title}
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed">
                {aboutData.missionVision.vision.content}
              </p>
            </div>
          </div>

          {/* Right: Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 content-center">
            {aboutData.missionVision.metrics.map((metric, idx) => (
              <div 
                key={idx} 
                className={`p-10 rounded-3xl bg-[#1e293b]/20 border border-white/5 backdrop-blur-sm flex flex-col justify-center items-center text-center hover:bg-[#1e293b]/40 transition-colors duration-500 ${idx === 2 ? 'sm:col-span-2' : ''}`}
              >
                <div className="text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 mb-4">
                  {metric.value}
                </div>
                <div className="text-gray-400 font-semibold tracking-wide uppercase text-sm">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
