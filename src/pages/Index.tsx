import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Palette, Heart, HandCoins } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-amber-800 via-orange-700 to-red-800 text-white overflow-hidden">
        {/* Background Image with Opacity */}
        <img
          src="/home/hero-background.jpg"
          alt="Swahili cultural background"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 animate-fade-in">
              Karibu kwa{" "}
              <span className="text-orange-300">Mila Zetu</span>
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-orange-100 max-w-3xl mx-auto animate-fade-in">
              Celebrating and preserving Swahili coast heritage through art, cuisine, crafts, and youth empowerment
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/about">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
                  Learn More <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-orange-300 text-orange-100 hover:bg-orange-100 hover:text-orange-800">
                  Get Involved
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative Pattern */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-orange-50 to-transparent"></div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-amber-900 mb-4">
            Our Mission
          </h2>
          <p className="text-lg text-amber-800 max-w-4xl mx-auto leading-relaxed">
            Founded in 2024 in the vibrant city of Mombasa, Mila Zetu is dedicated to preserving and celebrating 
            the rich cultural heritage of the Swahili Coast. Through traditional crafts, culinary arts, and 
            community engagement, we empower the next generation to carry forward our timeless traditions with pride.
          </p>
        </div>

        {/* Feature Cards with Centered Text */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-orange-200">
            <CardContent className="p-5 text-center"> {/* Added text-center here */}
              <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-red-600 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <Palette className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-amber-900 mb-2">
                Traditional Crafts
              </h3>
              <p className="text-amber-700 text-sm">
                From kofia-making to pottery, we teach authentic Swahili coastal crafts passed down through generations.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-orange-200">
            <CardContent className="p-5 text-center"> {/* Added text-center here */}
              <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-red-600 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-amber-900 mb-2">
                Youth Empowerment
              </h3>
              <p className="text-amber-700 text-sm">
                Mentoring young people to become cultural ambassadors and preserving traditions for future generations.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-orange-200">
            <CardContent className="p-5 text-center"> {/* Added text-center here */}
              <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-red-600 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-amber-900 mb-2">
                Community Events
              </h3>
              <p className="text-amber-700 text-sm">
                Organizing cultural festivals, cooking classes, and workshops that bring our community together.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Compact Donation Section */}
      <section className="bg-gradient-to-br from-amber-700 to-orange-800 py-12">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-orange-300/30">
              <HandCoins className="h-8 w-8 text-orange-200" />
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Support Our Mission
          </h2>
          <p className="text-orange-100 mb-6 max-w-lg mx-auto">
            Your donation helps preserve Swahili heritage
          </p>
          
          <Card className="bg-white/5 backdrop-blur-sm border border-orange-300/20 shadow-lg">
            <CardContent className="p-6">
              <div className="space-y-4 text-center">
                <div>
                  <p className="text-orange-200 text-sm mb-1">PayBill Number</p>
                  <div className="bg-white/10 px-3 py-2 rounded-lg">
                    <p className="text-2xl font-mono font-bold text-white">400200</p>
                  </div>
                </div>
                <div>
                  <p className="text-orange-200 text-sm mb-1">Account Name</p>
                  <p className="text-lg font-semibold text-white">MILA ZETU</p>
                </div>
              </div>
              <Button className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white py-2">
                Donate Now
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Recent Event Highlight */}
      <section className="bg-gradient-to-r from-orange-100 to-amber-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-amber-900 mb-4">Recent Highlights</h2>
            <p className="text-lg text-amber-800">See what we've been up to in our community</p>
          </div>
          
          <Card className="max-w-4xl mx-auto overflow-hidden shadow-xl border-orange-200">
            <div className="md:flex">
              <div className="md:w-1/2 bg-gradient-to-br from-orange-400 to-red-600 flex items-center justify-center p-8">
                <div className="text-center text-white">
                  <h3 className="text-2xl font-bold mb-2">Pwani Innovation Week</h3>
                  <p className="text-orange-100">November 2024</p>
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <h3 className="text-2xl font-bold text-amber-900 mb-4">Celebrating Innovation and Tradition</h3>
                <p className="text-amber-700 mb-6 leading-relaxed">
                  Our recent Pwani Innovation Week brought together young entrepreneurs, traditional craftspeople, 
                  and community leaders to explore how innovation can preserve and enhance our cultural heritage. 
                  The event featured workshops on digital storytelling, traditional craft modernization, and 
                  sustainable tourism.
                </p>
                <Link to="/gallery">
                  <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                    View Gallery <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-amber-900 mb-6">Join Our Cultural Journey</h2>
          <p className="text-lg text-amber-800 max-w-3xl mx-auto mb-8 leading-relaxed">
            Be part of preserving and celebrating the beautiful traditions of the Swahili Coast. 
            Together, we can ensure these treasures are passed on to future generations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
                Get Involved
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="border-orange-300 text-orange-700 hover:bg-orange-100">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;