import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface TeamMember {
  name: string;
  title: string;
  description: string;
  image: string;
}

const About = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Hassan Mohammed Hassan",
      title: "Executive Director",
      description: "Maritime logistics expert and cultural strategist, merges his finance acumen with polyglot diplomacy as MILA ZETU's Executive Director, championing Mombasa's heritage through inclusive preservation and global collaboration.",
      image: "/team/hassan-mohammed.jpg"
    },
    {
      name: "Khadija Abubakar Salim",
      title: "Head of Programs",
      description: "Healthcare professional and Bajuni cultural steward, harmonizes her nursing expertise with passionate leadership at MILA ZETU, revitalizing Swahili heritage through events, education, and community advocacy.",
      image: "/team/khadija-abubakar.jpg"
    },
    {
      name: "Rukia Ali Jassi",
      title: "Finance and Admin",
      description: "Digo community health nurse and cultural logistics architect, merges her healthcare precision with Swahili heritage stewardship, orchestrating MILA ZETU's events and operations with community-centered rigor.",
      image: "/team/rukia-ali.jpg"
    },
    {
      name: "Radhia Ibrahim",
      title: "Partnerships and Fundraising Officer",
      description: "Swahili fashion virtuoso and cultural storyteller, weaves textiles, henna, and coastal aesthetics into vibrant programs at MILA ZETU, transforming traditional adornment into living narratives of identity.",
      image: "/team/radhia-ibrahim.jpg"
    },
    {
      name: "Bahati Ndonga",
      title: "M & E",
      description: "Celebrated Swahili chef and culinary ambassador, melds coastal Kenyan, Arab, and Turkish traditions at MILA ZETU, transforming ancestral recipes into living legacies through workshops, feasts, and her beloved Mombasa restaurant.",
      image: "/team/bahati-ndonga.jpg"
    },
    {
      name: "Mark Ombacho",
      title: "Data and IT Personnel",
      description: "Digital pioneer crafting immersive platforms that bring coastal culture to life through innovative technology and storytelling.",
      image: "/team/mark-ombacho.jpg"
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-amber-900 mb-6 animate-fade-in">
            About Mila Zetu
          </h1>
          <p className="text-xl text-amber-800 max-w-3xl mx-auto">
            Preserving the rich heritage of the Swahili Coast through culture, community, and connection
          </p>
        </div>

        {/* Who We Are */}
        <section className="mb-16">
          <Card className="overflow-hidden border-orange-200 shadow-xl">
            <div className="bg-gradient-to-r from-orange-600 to-red-700 p-8 text-white">
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 mr-3" />
                <h2 className="text-3xl font-bold">Who We Are</h2>
              </div>
            </div>
            <CardContent className="p-8">
              <p className="text-lg text-amber-800 leading-relaxed mb-6">
                Mila Zetu is a nonprofit organization founded in 2024 in the beautiful coastal city of Mombasa, Kenya. 
                Our name, which means "Our Traditions" in Swahili, reflects our core mission of celebrating and preserving 
                the rich cultural heritage of the Swahili Coast.
              </p>
              <p className="text-lg text-amber-800 leading-relaxed">
                We believe that culture is not just about the past—it's a living, breathing force that shapes our 
                identity and guides our future. Through our various programs and initiatives, we work to ensure that 
                the beautiful traditions, crafts, languages, and customs of the Swahili Coast continue to thrive in 
                the modern world.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* What We Do */}
        <section className="mb-16">
          <Card className="overflow-hidden border-orange-200 shadow-xl">
            <div className="bg-gradient-to-r from-amber-600 to-orange-700 p-8 text-white">
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 mr-3" />
                <h2 className="text-3xl font-bold">What We Do</h2>
              </div>
            </div>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-amber-900 mb-3">Cultural Programs</h3>
                  <p className="text-amber-800 mb-4">
                    From traditional Swahili cooking classes to authentic kofia-making workshops, we offer hands-on 
                    experiences that allow participants to learn directly from master craftspeople and cultural experts.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-amber-900 mb-3">Youth Mentorship</h3>
                  <p className="text-amber-800 mb-4">
                    We empower young people to become cultural ambassadors, providing them with the skills and 
                    knowledge needed to carry on traditions while embracing innovation and modern opportunities.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-amber-900 mb-3">Community Events</h3>
                  <p className="text-amber-800 mb-4">
                    Our festivals, workshops, and cultural gatherings bring communities together to celebrate shared 
                    heritage and create new memories while honoring ancient traditions.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-amber-900 mb-3">Educational Outreach</h3>
                  <p className="text-amber-800 mb-4">
                    We work with schools, universities, and community centers to integrate cultural education into 
                    learning environments, ensuring traditions are passed on to future generations.
                  </p>
                </div>
              </div>
              <Button 
                className="w-full sm:w-auto mx-auto bg-orange-600 hover:bg-orange-700 text-white"
                size="lg"
              >
                Check Out Our Programs
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Meet the Team */}
        <section className="mb-16">
          <div className="text-left mb-12">
            <div className="flex items-left justify-start mb-4">
              <Award className="h-8 w-8 text-orange-600 mr-3" />
              <h2 className="text-3xl font-bold text-amber-900">Meet Our Team</h2>
            </div>
            <p className="text-lg text-amber-800">
              The passionate individuals behind Mila Zetu's mission
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.name} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-orange-200">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-2 border-orange-300 relative">
                    <Image
                      src={member.image}
                      alt={`Portrait of ${member.name}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = '/team/placeholder.jpg';
                      }}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-amber-900 mb-2">{member.name}</h3>
                  <h4 className="text-orange-600 font-medium mb-3">{member.title}</h4>
                  <p className="text-amber-700 text-sm leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-amber-900 mb-4">Our Values</h2>
            <p className="text-lg text-amber-800">The principles that guide everything we do</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 hover:border-orange-300 border border-transparent">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-3">Preservation</h3>
              <p className="text-amber-800">Protecting and maintaining our cultural heritage for future generations</p>
            </div>
            <div className="text-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 hover:border-orange-300 border border-transparent">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-3">Empowerment</h3>
              <p className="text-amber-800">Building capacity and confidence within our communities</p>
            </div>
            <div className="text-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 hover:border-orange-300 border border-transparent">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-3">Unity</h3>
              <p className="text-amber-800">Bringing people together through shared cultural experiences</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;