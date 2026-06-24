import { useState } from 'react';
import { careersPageData } from '../../data/careersPageData';
import { Search, MapPin, Briefcase, ChevronDown } from 'lucide-react';
import { SectionHeader } from '../shared/SectionHeader';
import { Button } from '../shared/Button';
import { Card } from '../shared/Card';

export const OpenPositions = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeDepartment, setActiveDepartment] = useState('All');
  const [expandedRole, setExpandedRole] = useState<string | null>(null);

  const departments = ['All', ...new Set(careersPageData.openPositions.map(p => p.department))];

  const filteredRoles = careersPageData.openPositions.filter(role => {
    const matchesSearch = role.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = activeDepartment === 'All' || role.department === activeDepartment;
    return matchesSearch && matchesDept;
  });

  const toggleRole = (id: string) => {
    setExpandedRole(expandedRole === id ? null : id);
  };

  return (
    <section id="open-positions" className="py-24 lg:py-32 relative overflow-hidden bg-[#0f172a]">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        
        <SectionHeader
          title={
            <>
              Open <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Positions</span>
            </>
          }
          subtitle="Find your next role at Infocera."
          align="center"
        />

        {/* Search & Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative flex-grow">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input 
              type="text" 
              placeholder="Search roles..."
              aria-label="Search roles"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#1e293b]/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            />
          </div>
          <div className="flex overflow-x-auto pb-2 md:pb-0 gap-3 md:gap-2 no-scrollbar shrink-0">
            {departments.map(dept => (
              <Button
                key={dept}
                variant={activeDepartment === dept ? "secondary" : "outline"}
                size="sm"
                onClick={() => setActiveDepartment(dept)}
                className={`whitespace-nowrap transition-all ${
                  activeDepartment === dept 
                    ? 'bg-blue-600 hover:bg-blue-500 shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:-translate-y-0 text-white border-transparent' 
                    : 'bg-[#1e293b]/50 text-gray-400 hover:bg-[#1e293b] border-white/10'
                }`}
              >
                {dept}
              </Button>
            ))}
          </div>
        </div>

        {/* Job Board */}
        <div className="space-y-4">
          {filteredRoles.length > 0 ? (
            filteredRoles.map(role => (
              <Card 
                key={role.id}
                variant="list"
                className="p-0 overflow-hidden"
              >
                <div 
                  role="button"
                  tabIndex={0}
                  className="p-6 md:p-8 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-2xl"
                  onClick={() => toggleRole(role.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleRole(role.id);
                    }
                  }}
                  aria-expanded={expandedRole === role.id}
                  aria-controls={`details-${role.id}`}
                >
                  <div className="flex-grow">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                      {role.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-gray-400">
                      <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                        <Briefcase className="w-4 h-4 text-blue-400" />
                        {role.department}
                      </span>
                      <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                        <MapPin className="w-4 h-4 text-fuchsia-400" />
                        {role.location}
                      </span>
                      <span className="bg-white/5 px-3 py-1 rounded-full border border-white/5">
                        {role.type}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between md:justify-end gap-4 shrink-0">
                    <Button 
                      href={`/careers/${role.id}`}
                      variant="secondary"
                      size="sm"
                      className="bg-blue-600 hover:bg-blue-500 rounded-lg px-6"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View Details
                    </Button>
                    <Button 
                      variant="ghost"
                      size="icon"
                      className="rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 min-h-0 w-auto h-auto p-2"
                      aria-label={expandedRole === role.id ? "Collapse details" : "Expand details"}
                      tabIndex={-1}
                    >
                      <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${expandedRole === role.id ? 'rotate-180' : ''}`} />
                    </Button>
                  </div>
                </div>

                {/* Expanded Details */}
                <div 
                  id={`details-${role.id}`}
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    expandedRole === role.id ? 'max-h-[2000px] opacity-100 border-t border-white/5' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 md:p-8 bg-[#0B1120]/50 space-y-8">
                    <div>
                      <p className="text-gray-300 leading-relaxed text-lg">{role.description}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider text-blue-400 mb-4">Roles & Responsibilities</h4>
                        <ul className="space-y-3">
                          {role.responsibilities.map((req, i) => (
                            <li key={i} className="flex items-start gap-3 text-gray-300">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="space-y-8">
                        <div>
                          <h4 className="text-sm font-bold uppercase tracking-wider text-indigo-400 mb-4">Required Skills</h4>
                          <ul className="space-y-3">
                            {role.skills.map((skill, i) => (
                              <li key={i} className="flex items-start gap-3 text-gray-300">
                                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
                                <span>{skill}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold uppercase tracking-wider text-fuchsia-400 mb-4">Desired Qualifications</h4>
                          <ul className="space-y-3">
                            {role.qualifications.map((qual, i) => (
                              <li key={i} className="flex items-start gap-3 text-gray-300">
                                <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-500 mt-2 shrink-0" />
                                <span>{qual}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </Card>
            ))
          ) : (
            <div className="text-center py-12 bg-[#1e293b]/20 border border-white/5 rounded-2xl">
              <p className="text-gray-400 text-lg">No open positions found matching your search.</p>
              <Button 
                variant="link"
                onClick={() => { setSearchTerm(''); setActiveDepartment('All'); }}
                className="mt-4 text-blue-400 hover:text-blue-300 no-underline hover:no-underline font-medium"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
