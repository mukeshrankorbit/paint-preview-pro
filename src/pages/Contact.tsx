import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import contactBg from '@/assets/contact.jpg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'support@rankorbit.com',
      description: 'We typically respond within 2 hours'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '1-800-RANKORBIT',
      description: 'Monday - Friday, 8AM - 6PM PST'
    },
    {
      icon: MapPin,
      title: 'Office',
      content: 'San Francisco, CA',
      description: 'Remote-first company'
    },
    {
      icon: Clock,
      title: 'Support Hours',
      content: '24/7 Chat Support',
      description: 'Always here when you need us'
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden bg-gradient-subtle">
          {/* Main gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.15] via-violet-500/[0.15] to-fuchsia-500/[0.15] pointer-events-none" />
          {/* Floating orbs */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
            <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl animate-float delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/3 rounded-full blur-3xl animate-float delay-500"></div>
          </div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gray-900">Let's </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-violet-500 to-primary animate-gradient-x">Talk</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Have questions about our platform? Want to see a demo? 
              We're here to help you succeed.
            </p>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-20 bg-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-10 border-2 border-gray-100/80 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Send us a message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium text-gray-700 mb-2 block">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full rounded-lg border-gray-300 focus:border-primary focus:ring-primary"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2 block">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-lg border-gray-300 focus:border-primary focus:ring-primary"
                        placeholder="john@smithpainting.com"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="company" className="text-sm font-medium text-gray-700 mb-2 block">
                      Company Name
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full rounded-lg border-gray-300 focus:border-primary focus:ring-primary"
                      placeholder="Smith Painting Co."
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm font-medium text-gray-700 mb-2 block">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full rounded-lg border-gray-300 focus:border-primary focus:ring-primary"
                      placeholder="Tell us about your painting business and how we can help..."
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-hover text-primary-foreground py-3 rounded-lg font-medium transition-all duration-200 shadow-purple"
                  >
                    Send Message
                  </Button>

                  <p className="text-sm text-gray-500">
                    By submitting this form, you agree to our privacy policy. 
                    We'll never share your information.
                  </p>
                </form>
              </div>

              {/* Contact Information */}
              <div className="relative bg-white/60 backdrop-blur-sm rounded-2xl p-10 border-2 border-gray-100/80 shadow-xl overflow-hidden">
                {/* Background image */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={contactBg} 
                    alt="Contact background"
                    className="w-full h-full object-cover opacity-30 blur-sm" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-primary/10" />
                </div>
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Get in touch
                  </h2>
                  <p className="text-gray-700 mb-8 leading-relaxed">
                    Our team is standing by to help you transform your painting business. 
                    Whether you need technical support, want to see a demo, or have questions 
                    about our plans, we're here for you.
                  </p>

                  <div className="space-y-6">
                    {contactInfo.map((info, index) => {
                      const IconComponent = info.icon;
                      return (
                        <div key={index} className="flex items-start">
                          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                            <IconComponent className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                            <p className="text-primary font-medium mb-1">{info.content}</p>
                            <p className="text-sm text-gray-600">{info.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative py-20 overflow-hidden bg-gradient-subtle">
          {/* Main gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.15] via-violet-500/[0.15] to-fuchsia-500/[0.15] pointer-events-none" />
          {/* Floating orbs */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
            <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl animate-float delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/3 rounded-full blur-3xl animate-float delay-500"></div>
          </div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Common Questions
              </h2>
              <p className="text-xl text-gray-600">
                Quick answers to questions we hear most often
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border-2 border-gray-100/80 shadow-lg">
                <h3 className="font-semibold text-gray-900 mb-3">
                  How quickly can I get started?
                </h3>
                <p className="text-gray-700">
                  You can be up and running in under 5 minutes. Sign up for your free trial, 
                  upload a photo, and start visualizing colors immediately.
                </p>
              </div>

              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border-2 border-gray-100/80 shadow-lg">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Do you offer training?
                </h3>
                <p className="text-gray-700">
                  Yes! We provide free onboarding, video tutorials, and live training sessions 
                  to help you get the most out of our platform.
                </p>
              </div>

              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border-2 border-gray-100/80 shadow-lg">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Can I cancel anytime?
                </h3>
                <p className="text-gray-700">
                  Absolutely. No contracts, no cancellation fees. You can pause or cancel 
                  your subscription at any time from your account settings.
                </p>
              </div>

              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border-2 border-gray-100/80 shadow-lg">
                <h3 className="font-semibold text-gray-900 mb-3">
                  What about technical support?
                </h3>
                <p className="text-gray-700">
                  We offer multiple support channels including email, live chat, and phone support 
                  depending on your plan. Our average response time is under 2 hours.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;