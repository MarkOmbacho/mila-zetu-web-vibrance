
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Hassan Mohammed Hassan",
      title: "Executive Director",
      description: "Maritime logistics expert and cultural strategist,merges his finance acumen with polyglot diplomacy as MILA ZETU’s Executive Director, championing Mombasa’s heritage through inclusive preservation and global collaboration."
    },
    {
      name: "Khadija Abubakar Salim",
      title: "Head of Programs",
      description: "Healthcare professional and Bajuni cultural steward, harmonizes her nursing expertise with passionate leadership at MILA ZETU, revitalizing Swahili heritage through events, education, and community advocacy."
    },
    {
      name: "Rukia Ali Jassi",
      title: "Finance and Admin",
      description: "Dedicated to mentoring young people and creating engaging programs that connect youth with their cultural roots."
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
              <div className="grid md:grid-cols-2 gap-8">
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
            {teamMembers.map((member, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-orange-200">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-2xl">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
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
            <div className="text-center">
              <h3 className="text-xl font-semibold text-amber-900 mb-3">Preservation</h3>
              <p className="text-amber-800">Protecting and maintaining our cultural heritage for future generations</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-amber-900 mb-3">Empowerment</h3>
              <p className="text-amber-800">Building capacity and confidence within our communities</p>
            </div>
            <div className="text-center">
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
