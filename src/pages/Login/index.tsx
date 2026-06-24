import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, User, Building, Eye, EyeOff, ArrowRight } from 'lucide-react';
import { Button } from '../../components/shared/Button';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setShowPassword(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(isLogin ? "Login successful! (UI Demo)" : "Registration successful! (UI Demo)");
  };

  return (
    <div className="min-h-[calc(100vh-80px)] bg-[#070b14] flex items-center justify-center p-4 py-12 lg:py-24 relative overflow-hidden">
      {/* Background Ambient Effects */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-6xl bg-[#111827]/80 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden flex flex-col lg:flex-row relative z-10">
        
        {/* Left Side - Branding / Context */}
        <div className="w-full lg:w-5/12 bg-gradient-to-br from-[#0B1120] to-[#1e1b4b] p-12 lg:p-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10 relative overflow-hidden">
          {/* Abstract background shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10">
            <h2 className="text-3xl font-['Exo',sans-serif] font-bold tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 mb-2">
              INFOCERA
            </h2>
            <p className="text-xs uppercase tracking-[0.3em] text-gray-400 font-semibold mb-12">
              Enterprise Portal
            </p>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={isLogin ? 'login-text' : 'register-text'}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                  {isLogin ? 'Welcome back to excellence.' : 'Join the enterprise ecosystem.'}
                </h1>
                <p className="text-lg text-gray-400 leading-relaxed">
                  {isLogin 
                    ? 'Access your unified dashboard to monitor deployments, manage active projects, and access premium analytics.' 
                    : 'Create a secure enterprise account to unlock world-class engineering teams, automated infrastructure, and custom solutions.'}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="relative z-10 mt-16 hidden lg:block">
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <Lock className="w-4 h-4" />
              <span>Secured by enterprise-grade SOC 2 compliance.</span>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full lg:w-7/12 p-8 md:p-12 lg:p-16">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-white mb-3">
                {isLogin ? 'Sign In' : 'Create Account'}
              </h2>
              <p className="text-gray-400">
                {isLogin ? "Don't have an account? " : "Already have an account? "}
                <button 
                  onClick={toggleAuthMode}
                  className="text-indigo-400 font-semibold hover:text-indigo-300 transition-colors focus:outline-none focus:underline"
                >
                  {isLogin ? 'Register now' : 'Sign in instead'}
                </button>
              </p>
            </div>

            {/* Social Logins */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <button className="flex items-center justify-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-white font-medium group">
                <svg className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Google
              </button>
              <button className="flex items-center justify-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-white font-medium group">
                <svg className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </button>
            </div>

            <div className="relative flex items-center py-4 mb-8">
              <div className="flex-grow border-t border-white/10"></div>
              <span className="flex-shrink-0 mx-4 text-gray-500 text-sm font-medium uppercase">Or continue with email</span>
              <div className="flex-grow border-t border-white/10"></div>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <AnimatePresence mode="popLayout">
                {!isLogin && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                    animate={{ opacity: 1, height: 'auto', marginBottom: 20 }}
                    exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                    className="space-y-5"
                  >
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <User className="h-5 w-5 text-gray-500" />
                        </div>
                        <input
                          type="text"
                          className="block w-full pl-11 pr-4 py-3 bg-[#0B1120] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Company Name <span className="text-gray-500">(Optional)</span></label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Building className="h-5 w-5 text-gray-500" />
                        </div>
                        <input
                          type="text"
                          className="block w-full pl-11 pr-4 py-3 bg-[#0B1120] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
                          placeholder="Acme Corp"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Work Email</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-500" />
                  </div>
                  <input
                    type="email"
                    className="block w-full pl-11 pr-4 py-3 bg-[#0B1120] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
                    placeholder="name@company.com"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-medium text-gray-300">Password</label>
                  {isLogin && (
                    <a href="#" className="text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors">
                      Forgot password?
                    </a>
                  )}
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-500" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    className="block w-full pl-11 pr-12 py-3 bg-[#0B1120] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-500 hover:text-gray-300 transition-colors focus:outline-none"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                {!isLogin && (
                  <p className="mt-2 text-xs text-gray-500">
                    Must be at least 8 characters long and contain a number and symbol.
                  </p>
                )}
              </div>

              <div className="pt-4">
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white border-0 py-3.5 text-lg"
                  rightIcon={<ArrowRight className="w-5 h-5" />}
                >
                  {isLogin ? 'Sign In to Dashboard' : 'Create Enterprise Account'}
                </Button>
              </div>

              {!isLogin && (
                <p className="text-xs text-center text-gray-500 mt-6">
                  By creating an account, you agree to our{' '}
                  <a href="#" className="text-indigo-400 hover:underline">Terms of Service</a> and{' '}
                  <a href="#" className="text-indigo-400 hover:underline">Privacy Policy</a>.
                </p>
              )}
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}
