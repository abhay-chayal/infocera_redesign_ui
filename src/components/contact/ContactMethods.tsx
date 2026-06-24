import { contactPageData } from '../../data/contactPageData';
import { Card } from '../shared/Card';

export const ContactMethods = () => {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden bg-[#0B1120]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactPageData.methods.map((method) => (
            <Card 
              key={method.id}
              variant="interactive"
              themeColor="indigo"
              className="group p-8 flex flex-col items-start text-left h-full"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-indigo-500/20 group-hover:border-indigo-500/50 transition-all duration-500 shadow-inner group-hover:scale-110">
                <method.icon className="w-7 h-7 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
              </div>
              
              <h3 className="text-lg font-bold text-white mb-2">
                {method.title}
              </h3>
              
              {method.action ? (
                <a 
                  href={method.action}
                  target={method.action.startsWith('http') ? '_blank' : '_self'}
                  rel="noreferrer"
                  className="text-base md:text-lg font-semibold text-gray-300 hover:text-fuchsia-400 transition-colors mb-4 break-words w-full"
                >
                  {method.value}
                </a>
              ) : (
                <div className="text-base md:text-lg font-semibold text-gray-300 mb-4 break-words w-full">
                  {method.value}
                </div>
              )}
              
              <p className="text-sm text-gray-400 mt-auto">
                {method.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
