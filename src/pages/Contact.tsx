import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  // NEW: State to track which form is visible
  const [activeForm, setActiveForm] = useState<"volunteer" | "partner" | null>(null);

  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    toast({
      title: "Asante sana!",
      description: "Your message has been sent. We'll get back to you soon!",
    });
    
    setFormData({ name: "", email: "", message: "" });
  };

  // NEW: Toggle form visibility
  const toggleForm = (formType: "volunteer" | "partner") => {
    setActiveForm(activeForm === formType ? null : formType);
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-amber-900 mb-6 animate-fade-in">
            Get in Touch
          </h1>
          <p className="text-xl text-amber-800 max-w-3xl mx-auto">
            Ready to join us in preserving Swahili culture? We'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-orange-200 shadow-xl">
            <div className="bg-gradient-to-r from-orange-600 to-red-700 p-6 text-white rounded-t-lg">
              <h2 className="text-2xl font-bold mb-2">Send Us a Message</h2>
              <p className="text-orange-100">Get in touch or join us in preserving Swahili culture</p>
            </div>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-amber-900 mb-2">
                    Your Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-amber-900 mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-amber-900 mb-2">
                    Your Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                    placeholder="Tell us how you'd like to get involved or ask us any questions..."
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white text-lg py-3"
                >
                  Send Message <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="border-orange-200 shadow-xl">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-amber-900 mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-amber-900 mb-1">Our Location</h4>
                      <p className="text-amber-700">Mombasa, Kenya</p>
                      <p className="text-sm text-amber-600">Swahili Coast Cultural Hub</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-amber-900 mb-1">Email Us</h4>
                      <a href="mailto:info@milazetu.org" className="text-amber-700 hover:text-orange-600 transition-colors">
                        info@milazetu.org
                      </a>
                      <p className="text-sm text-amber-600">We'll respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-amber-900 mb-1">Call Us</h4>
                      <a href="tel:+254732889048" className="text-amber-700 hover:text-orange-600 transition-colors">
                        +254 732 889 048
                      </a>
                      <p className="text-sm text-amber-600">Monday - Friday, 9 AM - 5 PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="border-orange-200 shadow-xl">
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-orange-100 to-amber-100 h-64 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                    <h4 className="text-lg font-semibold text-amber-900 mb-2">Find Us in Mombasa</h4>
                    <p className="text-amber-700">Located in the heart of Kenya's coastal cultural center</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Office Hours */}
            <Card className="border-orange-200 shadow-xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-amber-900 mb-4">Office Hours</h3>
                <div className="space-y-2 text-amber-700">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-2xl p-8 mt-16 text-center">
          <h2 className="text-3xl font-bold text-amber-900 mb-4">Ready to Join Our Mission?</h2>
          <p className="text-lg text-amber-800 mb-6 max-w-3xl mx-auto">
            Whether you're interested in learning traditional crafts, volunteering, or partnering with us, 
            there are many ways to be part of preserving Swahili coastal heritage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-orange-600 hover:bg-orange-700 text-white"
              onClick={() => toggleForm("volunteer")}
            >
              Volunteer With Us
            </Button>
            <Button 
              variant="outline" 
              className="border-orange-300 text-orange-700 hover:bg-orange-100"
              onClick={() => toggleForm("partner")}
            >
              Partner With Mila Zetu
            </Button>
          </div>

          {/* NEW: Volunteer Form */}
          {activeForm === "volunteer" && (
            <div className="mt-8 bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-amber-900 mb-4">Volunteer Application</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-amber-900 mb-1">Full Name</label>
                    <Input type="text" placeholder="Your full name" className="border-orange-200" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-amber-900 mb-1">Email</label>
                    <Input type="email" placeholder="your.email@example.com" className="border-orange-200" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-amber-900 mb-1">Phone Number</label>
                  <Input type="tel" placeholder="+254 700 000 000" className="border-orange-200" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-amber-900 mb-1">Skills/Interests</label>
                  <Textarea 
                    placeholder="Tell us about your skills and how you'd like to volunteer" 
                    rows={3} 
                    className="border-orange-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-amber-900 mb-1">Availability</label>
                  <Input type="text" placeholder="When are you available to volunteer?" className="border-orange-200" />
                </div>
                <Button type="submit" className="bg-orange-600 hover:bg-orange-700 mt-4">
                  Submit Application
                </Button>
              </form>
            </div>
          )}

          {/* NEW: Partner Form */}
          {activeForm === "partner" && (
            <div className="mt-8 bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-amber-900 mb-4">Partnership Inquiry</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-amber-900 mb-1">Organization Name</label>
                    <Input type="text" placeholder="Your organization" className="border-orange-200" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-amber-900 mb-1">Contact Person</label>
                    <Input type="text" placeholder="Your name" className="border-orange-200" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-amber-900 mb-1">Email</label>
                    <Input type="email" placeholder="contact@organization.com" className="border-orange-200" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-amber-900 mb-1">Phone</label>
                    <Input type="tel" placeholder="Organization phone number" className="border-orange-200" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-amber-900 mb-1">Partnership Type</label>
                  <select className="w-full border border-orange-200 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-500">
                    <option value="">Select partnership type</option>
                    <option value="financial">Financial Sponsorship</option>
                    <option value="event">Event Collaboration</option>
                    <option value="media">Media Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-amber-900 mb-1">Proposal</label>
                  <Textarea 
                    placeholder="Tell us about your partnership proposal" 
                    rows={4} 
                    className="border-orange-200"
                  />
                </div>
                <Button type="submit" className="bg-orange-600 hover:bg-orange-700 mt-4">
                  Submit Partnership Request
                </Button>
              </form>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Contact;