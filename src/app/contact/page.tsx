'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import PhoneInput from 'react-phone-number-input';
import './phone-input.css';
import { 
  User, Mail, Phone, Building2, Briefcase, 
  DollarSign, Clock, AlertCircle, Target,
  MessageSquare, Users, TrendingUp, Zap,
  CheckCircle2, ArrowRight, ArrowLeft, Loader2,
  Globe, Smartphone, ShoppingBag, Palette, Lightbulb,
  Radio, Cpu, Rocket
} from 'lucide-react';

type FormStep = 1 | 2 | 3 | 4;

interface FormData {
  // Step 1: Contact Info
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  role: string;

  // Step 2: Project Details
  projectType: string[];
  budget: string;
  timeline: string;
  urgency: string;

  // Step 3: Requirements
  description: string;
  goals: string[];
  targetAudience: string;
  competitors: string;

  // Step 4: Additional Info
  referralSource: string;
  additionalNotes: string;
  newsletter: boolean;
}

export default function Contact() {
  const [currentStep, setCurrentStep] = useState<FormStep>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    projectType: [],
    budget: '',
    timeline: '',
    urgency: '',
    description: '',
    goals: [],
    targetAudience: '',
    competitors: '',
    referralSource: '',
    additionalNotes: '',
    newsletter: false,
  });

  const updateFormData = (field: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleArrayValue = (field: 'projectType' | 'goals', value: string) => {
    setFormData(prev => {
      const currentArray = prev[field];
      const newArray = currentArray.includes(value)
        ? currentArray.filter(item => item !== value)
        : [...currentArray, value];
      return { ...prev, [field]: newArray };
    });
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep((currentStep + 1) as FormStep);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((currentStep - 1) as FormStep);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to send email');
      }

      console.log('Form submitted successfully:', result);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit form. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const projectTypes = [
    { value: 'website', label: 'Website Development', Icon: Globe },
    { value: 'webapp', label: 'Web Application', Icon: Zap },
    { value: 'mobile', label: 'Mobile App', Icon: Smartphone },
    { value: 'ecommerce', label: 'E-commerce', Icon: ShoppingBag },
    { value: 'branding', label: 'Branding & Design', Icon: Palette },
    { value: 'consulting', label: 'Consulting', Icon: Lightbulb },
  ];

  const goalOptions = [
    { value: 'increase-sales', label: 'Increase Sales', Icon: TrendingUp },
    { value: 'brand-awareness', label: 'Brand Awareness', Icon: Radio },
    { value: 'user-engagement', label: 'User Engagement', Icon: Users },
    { value: 'automation', label: 'Process Automation', Icon: Cpu },
    { value: 'modernization', label: 'Modernization', Icon: Rocket },
    { value: 'market-expansion', label: 'Market Expansion', Icon: Globe },
  ];

  const progressPercentage = (currentStep / 4) * 100;

  if (isSubmitted) {
    return (
      <main className="min-h-screen relative overflow-hidden bg-white dark:bg-black transition-colors duration-300">
        <div className="absolute inset-0 bg-gradient-to-b from-green-50 via-white to-green-50 dark:from-green-950/20 dark:via-black dark:to-green-950/20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 py-20">
          <div className="flex flex-col items-center justify-center min-h-screen text-center">
            <div className="w-20 h-20 rounded-full bg-green-500/10 dark:bg-green-500/20 flex items-center justify-center mb-6 animate-fade-in">
              <CheckCircle2 className="w-10 h-10 text-green-600 dark:text-green-500" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 dark:text-gray-50 mb-4">
              Thank You!
            </h1>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md mb-8">
              We've received your submission and will get back to you within 24 hours.
            </p>

            <div className="flex gap-4">
              <a 
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white dark:text-black bg-black dark:bg-white rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-200"
              >
                Back to Home
              </a>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setCurrentStep(1);
                  setFormData({
                    firstName: '', lastName: '', email: '', phone: '', company: '', role: '',
                    projectType: [], budget: '', timeline: '', urgency: '',
                    description: '', goals: [], targetAudience: '', competitors: '',
                    referralSource: '', additionalNotes: '', newsletter: false,
                  });
                }}
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-black rounded-full border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-200"
              >
                Submit Another
              </button>
            </div>
          </div>
        </div>
        <Navbar />
      </main>
    );
  }

  return (
    <main className="min-h-screen relative overflow-hidden bg-white dark:bg-black transition-colors duration-300">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-blue-50 dark:from-blue-950/20 dark:via-black dark:to-blue-950/20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12 pb-32">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-black/50 backdrop-blur-sm">
              <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Step {currentStep} of 4</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 dark:text-gray-50 mb-4">
              Let's Work Together
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Tell us about your project and we'll create something amazing
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-12">
            <div className="h-1.5 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-600 dark:bg-blue-500 transition-all duration-500 ease-out"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="bg-white/80 dark:bg-black/80 backdrop-blur-xl border border-gray-200 dark:border-gray-800 rounded-3xl p-8 shadow-lg">
              
              {/* Step 1: Contact Information */}
              {currentStep === 1 && (
                <div className="space-y-6 animate-fade-in">
                  <div className="flex items-center gap-3 mb-6">
                    <User className="w-6 h-6 text-blue-600 dark:text-blue-500" />
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-50">
                      Contact Information
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => updateFormData('firstName', e.target.value)}
                        className="w-full px-4 py-3 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 text-gray-900 dark:text-gray-100 transition-all"
                        placeholder="John"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => updateFormData('lastName', e.target.value)}
                        className="w-full px-4 py-3 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 text-gray-900 dark:text-gray-100 transition-all"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => updateFormData('email', e.target.value)}
                      className="w-full px-4 py-3 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 text-gray-900 dark:text-gray-100 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <PhoneInput
                      international
                      defaultCountry="US"
                      value={formData.phone}
                      onChange={(value) => updateFormData('phone', value || '')}
                      className="phone-input"
                      numberInputProps={{
                        className: "w-full px-4 py-3 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 text-gray-900 dark:text-gray-100 transition-all"
                      }}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => updateFormData('company', e.target.value)}
                        className="w-full px-4 py-3 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 text-gray-900 dark:text-gray-100 transition-all"
                        placeholder="Acme Inc."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Your Role
                      </label>
                      <input
                        type="text"
                        value={formData.role}
                        onChange={(e) => updateFormData('role', e.target.value)}
                        className="w-full px-4 py-3 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 text-gray-900 dark:text-gray-100 transition-all"
                        placeholder="CEO, Developer, etc."
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Project Details */}
              {currentStep === 2 && (
                <div className="space-y-6 animate-fade-in">
                  <div className="flex items-center gap-3 mb-6">
                    <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-500" />
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-50">
                      Project Details
                    </h2>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                      What type of project are you interested in? *
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {projectTypes.map((type) => {
                        const IconComponent = type.Icon;
                        return (
                          <button
                            key={type.value}
                            type="button"
                            onClick={() => toggleArrayValue('projectType', type.value)}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl border-2 transition-all duration-200 text-left ${
                              formData.projectType.includes(type.value)
                                ? 'border-blue-500 dark:border-blue-400 bg-blue-50 dark:bg-blue-950/20'
                                : 'border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700'
                            }`}
                          >
                            <IconComponent className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                              {type.label}
                            </span>
                            {formData.projectType.includes(type.value) && (
                              <CheckCircle2 className="ml-auto w-5 h-5 text-blue-600 dark:text-blue-500" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Budget Range *
                    </label>
                    <select
                      required
                      value={formData.budget}
                      onChange={(e) => updateFormData('budget', e.target.value)}
                      className="w-full px-4 py-3 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 text-gray-900 dark:text-gray-100 transition-all"
                    >
                      <option value="">Select budget range</option>
                      <option value="<10k">Less than R10,000</option>
                      <option value="10k-20k">R10,000 - R20,000</option>
                      <option value="20k-50k">R20,000 - R50,000</option>
                      <option value="50k-100k">R50,000 - R100,000</option>
                      <option value="100k-200k">R100,000 - R200,000</option>
                      <option value="200k+">R200,000+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Project Timeline *
                    </label>
                    <select
                      required
                      value={formData.timeline}
                      onChange={(e) => updateFormData('timeline', e.target.value)}
                      className="w-full px-4 py-3 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 text-gray-900 dark:text-gray-100 transition-all"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP (&lt; 1 month)</option>
                      <option value="1-3months">1-3 months</option>
                      <option value="3-6months">3-6 months</option>
                      <option value="6months+">6+ months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      How urgent is this project? *
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {['Low', 'Medium', 'High'].map((level) => (
                        <button
                          key={level}
                          type="button"
                          onClick={() => updateFormData('urgency', level)}
                          className={`px-4 py-3 rounded-xl border-2 text-sm font-medium transition-all duration-200 ${
                            formData.urgency === level
                              ? 'border-blue-500 dark:border-blue-400 bg-blue-50 dark:bg-blue-950/20 text-blue-700 dark:text-blue-300'
                              : 'border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700'
                          }`}
                        >
                          {level}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Requirements */}
              {currentStep === 3 && (
                <div className="space-y-6 animate-fade-in">
                  <div className="flex items-center gap-3 mb-6">
                    <Target className="w-6 h-6 text-blue-600 dark:text-blue-500" />
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-50">
                      Project Requirements
                    </h2>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Project Description *
                    </label>
                    <textarea
                      required
                      value={formData.description}
                      onChange={(e) => updateFormData('description', e.target.value)}
                      rows={6}
                      className="w-full px-4 py-3 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 text-gray-900 dark:text-gray-100 transition-all resize-none"
                      placeholder="Tell us about your project, what you're looking to build, and any specific requirements..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                      What are your main goals? *
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {goalOptions.map((goal) => {
                        const IconComponent = goal.Icon;
                        return (
                          <button
                            key={goal.value}
                            type="button"
                            onClick={() => toggleArrayValue('goals', goal.value)}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl border-2 transition-all duration-200 text-left ${
                              formData.goals.includes(goal.value)
                                ? 'border-blue-500 dark:border-blue-400 bg-blue-50 dark:bg-blue-950/20'
                                : 'border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700'
                            }`}
                          >
                            <IconComponent className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                              {goal.label}
                            </span>
                            {formData.goals.includes(goal.value) && (
                              <CheckCircle2 className="ml-auto w-5 h-5 text-blue-600 dark:text-blue-500" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Target Audience
                    </label>
                    <input
                      type="text"
                      value={formData.targetAudience}
                      onChange={(e) => updateFormData('targetAudience', e.target.value)}
                      className="w-full px-4 py-3 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 text-gray-900 dark:text-gray-100 transition-all"
                      placeholder="Who is your target audience?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Competitors or Similar Solutions
                    </label>
                    <input
                      type="text"
                      value={formData.competitors}
                      onChange={(e) => updateFormData('competitors', e.target.value)}
                      className="w-full px-4 py-3 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 text-gray-900 dark:text-gray-100 transition-all"
                      placeholder="Any competitors or similar products you admire?"
                    />
                  </div>
                </div>
              )}

              {/* Step 4: Additional Information */}
              {currentStep === 4 && (
                <div className="space-y-6 animate-fade-in">
                  <div className="flex items-center gap-3 mb-6">
                    <MessageSquare className="w-6 h-6 text-blue-600 dark:text-blue-500" />
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-50">
                      Final Details
                    </h2>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      How did you hear about us?
                    </label>
                    <select
                      value={formData.referralSource}
                      onChange={(e) => updateFormData('referralSource', e.target.value)}
                      className="w-full px-4 py-3 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 text-gray-900 dark:text-gray-100 transition-all"
                    >
                      <option value="">Select an option</option>
                      <option value="search">Search Engine</option>
                      <option value="social">Social Media</option>
                      <option value="referral">Referral</option>
                      <option value="advertising">Advertising</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Additional Notes
                    </label>
                    <textarea
                      value={formData.additionalNotes}
                      onChange={(e) => updateFormData('additionalNotes', e.target.value)}
                      rows={6}
                      className="w-full px-4 py-3 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 text-gray-900 dark:text-gray-100 transition-all resize-none"
                      placeholder="Anything else you'd like us to know?"
                    />
                  </div>

                  <div>
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={formData.newsletter}
                        onChange={(e) => updateFormData('newsletter', e.target.checked)}
                        className="mt-1 w-5 h-5 rounded border-gray-300 dark:border-gray-700 text-blue-600 focus:ring-2 focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors">
                        Subscribe to our newsletter for updates, tips, and insights about digital innovation
                      </span>
                    </label>
                  </div>

                  <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 rounded-xl">
                    <p className="text-sm text-blue-900 dark:text-blue-100">
                      <strong>Next Steps:</strong> After submission, we'll review your information and reach out within 24 hours to schedule a discovery call.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={handleBack}
                disabled={currentStep === 1}
                className={`inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-full transition-all duration-200 ${
                  currentStep === 1
                    ? 'opacity-0 pointer-events-none'
                    : 'text-gray-700 dark:text-gray-300 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700'
                }`}
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>

              {currentStep < 4 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white dark:text-black bg-black dark:bg-white rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-200"
                >
                  Next Step
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-8 py-3 text-sm font-medium text-white dark:text-black bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-500 dark:to-blue-400 rounded-full hover:from-blue-700 hover:to-blue-600 dark:hover:from-blue-600 dark:hover:to-blue-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin w-4 h-4" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Application
                      <CheckCircle2 className="w-4 h-4" />
                    </>
                  )}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>

      <Navbar />
    </main>
  );
}
