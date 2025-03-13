
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import GlassCard from "@/components/ui/GlassCard";
import { Input } from "@/components/ui/input";
import { Search, Calendar, User, ArrowRight, Tag } from "lucide-react";

const Blog = () => {
  const featuredPost = {
    id: "1",
    title: "The Future of Skills in a Digital World",
    excerpt: "Exploring how technology is reshaping the skills landscape and what students need to know to thrive.",
    date: "June 15, 2023",
    author: "Dr. Emma Johnson",
    category: "Education Technology",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  };
  
  const recentPosts = [
    {
      id: "2",
      title: "How Blockchain Is Transforming Educational Credentials",
      excerpt: "Discover how blockchain technology is revolutionizing the way we verify and share educational achievements.",
      date: "May 28, 2023",
      author: "Michael Chen",
      category: "Blockchain",
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: "3",
      title: "5 Strategies for Effective Mentorship Relationships",
      excerpt: "Learn how to build and maintain meaningful mentorship connections that drive career growth.",
      date: "May 12, 2023",
      author: "Sarah Williams",
      category: "Mentorship",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: "4",
      title: "Project-Based Learning: Why It Works",
      excerpt: "Research shows that hands-on projects lead to deeper understanding and better skill retention.",
      date: "April 30, 2023",
      author: "Dr. Robert Garcia",
      category: "Learning Methods",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    }
  ];
  
  const categories = [
    "Education Technology",
    "Blockchain",
    "Mentorship",
    "Learning Methods",
    "Career Development",
    "Skill Building",
    "Industry Insights"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container px-4 sm:px-6 mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold">EmpowerEd Blog</h1>
              <div className="relative w-64 hidden md:block">
                <Input 
                  type="text" 
                  placeholder="Search articles..." 
                  className="pr-8"
                />
                <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </div>
            </div>
            
            {/* Mobile Search - Only visible on mobile */}
            <div className="relative w-full mb-6 md:hidden">
              <Input 
                type="text" 
                placeholder="Search articles..." 
                className="pr-8"
              />
              <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
            
            {/* Featured Post */}
            <GlassCard className="mb-10 p-0 overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title} 
                    className="h-64 md:h-full w-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-6 md:p-8 flex flex-col">
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-empowered-100 dark:bg-empowered-800/30 text-empowered-600 dark:text-empowered-400">
                      {featuredPost.category}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-3">{featuredPost.title}</h2>
                  <p className="text-muted-foreground mb-4">{featuredPost.excerpt}</p>
                  <div className="flex items-center text-sm text-muted-foreground mb-6">
                    <User className="h-4 w-4 mr-1" />
                    <span className="mr-4">{featuredPost.author}</span>
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="mt-auto">
                    <Button asChild className="bg-empowered-500 hover:bg-empowered-600">
                      <Link to={`/blog/${featuredPost.id}`}>
                        Read Article
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </GlassCard>
            
            {/* Recent Posts and Sidebar */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold mb-6">Recent Articles</h2>
                <div className="space-y-6">
                  {recentPosts.map((post) => (
                    <GlassCard key={post.id} className="p-0 overflow-hidden" hoverEffect>
                      <div className="sm:flex">
                        <div className="sm:w-1/3">
                          <img 
                            src={post.image} 
                            alt={post.title} 
                            className="h-48 sm:h-full w-full object-cover"
                          />
                        </div>
                        <div className="sm:w-2/3 p-5 flex flex-col">
                          <div className="mb-2">
                            <span className="inline-block px-2 py-1 text-xs rounded-full bg-empowered-100 dark:bg-empowered-800/30 text-empowered-600 dark:text-empowered-400">
                              {post.category}
                            </span>
                          </div>
                          <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                          <p className="text-sm text-muted-foreground mb-3">{post.excerpt}</p>
                          <div className="flex items-center text-xs text-muted-foreground mb-3">
                            <User className="h-3 w-3 mr-1" />
                            <span className="mr-3">{post.author}</span>
                            <Calendar className="h-3 w-3 mr-1" />
                            <span>{post.date}</span>
                          </div>
                          <div className="mt-auto">
                            <Button 
                              asChild 
                              variant="ghost" 
                              size="sm" 
                              className="px-0 text-empowered-500 hover:text-empowered-600 hover:bg-transparent"
                            >
                              <Link to={`/blog/${post.id}`}>
                                Read More →
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </GlassCard>
                  ))}
                </div>
                
                <div className="mt-8 flex justify-center">
                  <Button variant="outline">
                    View All Articles
                  </Button>
                </div>
              </div>
              
              {/* Sidebar */}
              <div>
                <GlassCard className="mb-6">
                  <h3 className="text-lg font-semibold mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <Link key={category} to={`/blog/category/${category.toLowerCase().replace(/ /g, '-')}`} className="flex items-center group">
                        <Tag className="h-4 w-4 mr-2 text-muted-foreground group-hover:text-empowered-500 transition-colors" />
                        <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                          {category}
                        </span>
                      </Link>
                    ))}
                  </div>
                </GlassCard>
                
                <GlassCard>
                  <h3 className="text-lg font-semibold mb-4">Subscribe to Newsletter</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Stay updated with our latest articles and educational resources.
                  </p>
                  <form className="space-y-3">
                    <Input 
                      type="email" 
                      placeholder="Your email address" 
                      required
                    />
                    <Button type="submit" className="w-full bg-empowered-500 hover:bg-empowered-600">
                      Subscribe
                    </Button>
                  </form>
                </GlassCard>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
