import React from 'react';
import { Zap, Code, RefreshCw, ArrowRight, Shield, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';

export default function LLMInfographic() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-8 overflow-auto">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-8">
        
        {/* Header */}
        <div className="text-center mb-6 border-b-4 border-blue-600 pb-4">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">
            Leveraging LLMs in Engineering Workflows
          </h1>
          <p className="text-lg text-slate-600 font-semibold">
            The Productivity Leap You Can't Afford to Miss
          </p>
        </div>

        {/* TL;DR Box */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-6">
          <p className="text-sm text-slate-700 leading-relaxed">
            <strong>TL;DR:</strong> LLMs are transforming software engineering productivity. They understand codebases, migrate legacy systems, and generate production code. Risks are manageable through testing and validation. The real risk? Choosing slower development while competitors move faster.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          
          {/* Left Column - What LLMs Enable */}
          <div>
            <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-3 rounded-t-lg">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Zap className="w-5 h-5" />
                What LLMs Actually Enable
              </h2>
            </div>
            <div className="bg-slate-50 p-4 rounded-b-lg space-y-3">
              <div className="flex gap-3">
                <Code className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Codebase Understanding</h3>
                  <p className="text-xs text-slate-600">Navigate unfamiliar code, understand architecture across thousands of files</p>
                </div>
              </div>
              <div className="flex gap-3">
                <RefreshCw className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Intelligent Refactoring</h3>
                  <p className="text-xs text-slate-600">Generate cleaner alternatives while preserving functionality</p>
                </div>
              </div>
              <div className="flex gap-3">
                <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Migration & Modernization</h3>
                  <p className="text-xs text-slate-600">Systematically convert legacy code to modern tech stacks</p>
                </div>
              </div>
              <div className="flex gap-3">
                <TrendingUp className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Spec-to-Code Translation</h3>
                  <p className="text-xs text-slate-600">Production-ready code from PRDs and style guides</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Risk Management */}
          <div>
            <div className="bg-gradient-to-r from-amber-600 to-amber-500 text-white p-3 rounded-t-lg">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Managing Risk
              </h2>
            </div>
            <div className="bg-slate-50 p-4 rounded-b-lg">
              <div className="mb-3">
                <h3 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  How We Mitigate
                </h3>
                <ul className="text-xs text-slate-600 space-y-1 ml-6">
                  <li>• Comprehensive test suites catch errors</li>
                  <li>• Code review provides human oversight</li>
                  <li>• Monitoring detects production issues</li>
                  <li>• Incremental adoption builds confidence</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-600" />
                  Risk of NOT Using LLMs
                </h3>
                <ul className="text-xs text-slate-600 space-y-1 ml-6">
                  <li>• Moving slower than competitors</li>
                  <li>• Lower team productivity</li>
                  <li>• Wasted hours on automation-ready tasks</li>
                  <li>• Missing ambitious project opportunities</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg p-4 mb-6">
          <div className="text-center">
            <p className="text-3xl font-bold mb-1">55%</p>
            <p className="text-sm">Faster task completion with GitHub Copilot</p>
            <p className="text-xs mt-2 opacity-90">Major tech companies report similar productivity gains</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-slate-100 p-4 rounded-lg">
            <h3 className="font-bold text-slate-900 mb-2 text-sm">The Productivity Gap</h3>
            <p className="text-xs text-slate-600">
              Engineers using LLMs solve problems faster, write better code, and spend more time on high-value creative work instead of repetitive tasks.
            </p>
          </div>
          <div className="bg-blue-100 p-4 rounded-lg">
            <h3 className="font-bold text-slate-900 mb-2 text-sm">The Path Forward</h3>
            <p className="text-xs text-slate-600">
              This is the most significant productivity leap since high-level languages and modern IDEs. The time to start is now.
            </p>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-6 text-center bg-slate-900 text-white py-4 rounded-lg">
          <p className="font-bold text-lg">The tools are here. The benefits are proven.</p>
          <p className="text-sm mt-1">Start integrating LLMs into your workflow today.</p>
        </div>
      </div>
    </div>
  );
}