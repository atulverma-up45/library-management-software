import {Users, Globe, } from "lucide-react";

export default function AuthContent(){
    const features = [
    { icon: Users, text: "1000+ registered library members" },
    { icon: Globe, text: "Browse and borrow books anytime, anywhere" },
    // { icon: Zap, text: "Get alerts in < 30 seconds" }
  ];
    return ( 
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-100 leading-tight">
                  Join thousands of 
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent block">
                    satisfied readers
                  </span>
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-300">
                  Manage your books and borrow anytime from our digital library platform.
                </p>
              </div>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 p-4 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-200 dark:border-slate-700 animate-fade-in hover:scale-105 transition-all duration-300"
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-xl flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="text-slate-700 dark:text-slate-300 font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl border border-blue-200 dark:border-blue-800 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Live Status</span>
                </div>
                <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">99.99% Uptime</p>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                  Last 30 days - All systems operational
                </p>
              </div> */}
            </div>
    ) 
}