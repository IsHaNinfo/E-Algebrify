"use client";

import { useState, useMemo } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search, Download, Eye, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// Mock data for demonstration
const mockVideos = [
  {
    id: 1,
    title: "Introduction to Algebra",
    thumbnail: "https://img.youtube.com/vi/NybHckSEQBI/maxresdefault.jpg",
    duration: "10:30",
    views: "1.2K",
    channel: "Math Academy",
    videoId: "2770dd7e-be74-48eb-892e-422f39f1537f",
    blob: "https://www.youtube.com/embed/NybHckSEQBI",
  },
  {
    id: 2,
    title: "Algebra Basics - Part 1",
    thumbnail: "https://img.youtube.com/vi/LDIiYKYvvdA/maxresdefault.jpg",
    duration: "15:45",
    views: "3.5K",
    channel: "Math Academy",
    videoId: "LDIiYKYvvdA",
    blob: "https://www.youtube.com/embed/LDIiYKYvvdA",
  },
  {
    id: 3,
    title: "Algebra Basics - Part 2",
    thumbnail: "https://img.youtube.com/vi/9Uc62CuQjc4/maxresdefault.jpg",
    duration: "12:20",
    views: "2.8K",
    channel: "Math Academy",
    videoId: "9Uc62CuQjc4",
    blob: "https://www.youtube.com/embed/9Uc62CuQjc4",
  },
  {
    id: 4,
    title: "Solving Linear Equations",
    thumbnail: "https://img.youtube.com/vi/ntzgiu7Ta0s/maxresdefault.jpg",
    duration: "18:15",
    views: "4.2K",
    channel: "Math Academy",
    videoId: "ntzgiu7Ta0s",
    blob: "https://www.youtube.com/embed/ntzgiu7Ta0s",
  },
  {
    id: 5,
    title: "Quadratic Equations",
    thumbnail: "https://img.youtube.com/vi/r59oLimduIM/maxresdefault.jpg",
    duration: "20:30",
    views: "5.1K",
    channel: "Math Academy",
    videoId: "r59oLimduIM",
    blob: "https://www.youtube.com/embed/r59oLimduIM",
  },
  {
    id: 6,
    title: "Polynomial Functions",
    thumbnail: "https://img.youtube.com/vi/d6vyYvx8URw/maxresdefault.jpg",
    duration: "16:45",
    views: "3.9K",
    channel: "Math Academy",
    videoId: "d6vyYvx8URw",
    blob: "https://www.youtube.com/embed/d6vyYvx8URw",
  },
];

const mockDocuments = [
  {
    id: 1,
    title: "Algebra Basics",
    type: "pdf",
    size: "2.5MB",
    date: "2024-03-15",
    url: "/documents/pdf/algebra-basics.pdf", // Path to your PDF file
  },
  {
    id: 2,
    title: "Algebra Advanced",
    type: "pdf",
    size: "2.5MB",
    date: "2024-03-15",
    url: "/documents/pdf/algebra-basics.pdf", // Path to your PDF file
  },
  {
    id: 3,
    title: "Sine and Cosine",
    type: "pdf",
    size: "2.5MB",
    date: "2024-03-15",
    url: "/documents/pdf/algebra-basics.pdf", // Path to your PDF file
  },
  {
      id: 4,
    title: "Simultaneous Equations",
    type: "pdf",
    size: "2.5MB",
    date: "2024-03-15",
    url: "/documents/pdf/algebra-basics.pdf", // Path to your PDF file
  },
  // Add more mock documents as needed
];

const mockPPTs = [
  {
    id: 1,
    title: "Algebraic Expressions",
    slides: 25,
    size: "4.8MB",
    date: "2024-03-15",
    url: "/documents/ppts/algebraic-expressions.pptx", // Path to your PPT file
  },
  // Add more mock PPTs as needed
];

export default function KnowledgeHub() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [selectedDoc, setSelectedDoc] = useState<string | null>(null);
  const [selectedPPT, setSelectedPPT] = useState<string | null>(null);

  // Filter videos based on search query
  const filteredVideos = useMemo(() => {
    if (!searchQuery) return mockVideos;
    const query = searchQuery.toLowerCase();
    return mockVideos.filter(
      (video) =>
        video.title.toLowerCase().includes(query) ||
        video.channel.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  // Filter documents based on search query
  const filteredDocuments = useMemo(() => {
    if (!searchQuery) return mockDocuments;
    const query = searchQuery.toLowerCase();
    return mockDocuments.filter((doc) =>
      doc.title.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  // Filter presentations based on search query
  const filteredPPTs = useMemo(() => {
    if (!searchQuery) return mockPPTs;
    const query = searchQuery.toLowerCase();
    return mockPPTs.filter((ppt) => ppt.title.toLowerCase().includes(query));
  }, [searchQuery]);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            type="text"
            placeholder="Search for videos, documents, or presentations..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="videos" className="w-full">
        <TabsList className="w-full justify-start mb-8">
          <TabsTrigger value="videos">
            Videos {filteredVideos.length > 0 && `(${filteredVideos.length})`}
          </TabsTrigger>
          <TabsTrigger value="documents">
            Documents {filteredDocuments.length > 0 && `(${filteredDocuments.length})`}
          </TabsTrigger>
          <TabsTrigger value="ppts">
            Presentations {filteredPPTs.length > 0 && `(${filteredPPTs.length})`}
          </TabsTrigger>
        </TabsList>

        {/* Videos Tab */}
        <TabsContent value="videos">
          <ScrollArea className="h-[calc(100vh-300px)]">
            {filteredVideos.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                No videos found matching your search.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredVideos.map((video) => (
                  <div
                    key={video.id}
                    className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <Dialog>
                      <DialogTrigger asChild>
                        <div className="relative aspect-video cursor-pointer group">
                          <img
                            src={video.thumbnail}
                            alt={video.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <Play className="w-12 h-12 text-white" />
                          </div>
                          <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                            {video.duration}
                          </div>
                        </div>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl">
                        <DialogHeader>
                          <DialogTitle>{video.title}</DialogTitle>
                        </DialogHeader>
                        <div className="aspect-video w-full">
                          <iframe
                            src={video.blob}
                            className="w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                      </DialogContent>
                    </Dialog>
                    <div className="p-4">
                      <h3 className="font-semibold mb-1">{video.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {video.channel} • {video.views} views
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </ScrollArea>
        </TabsContent>

        {/* Documents Tab */}
        <TabsContent value="documents">
          <ScrollArea className="h-[calc(100vh-300px)]">
            {filteredDocuments.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                No documents found matching your search.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDocuments.map((doc) => (
                  <div
                    key={doc.id}
                    className="bg-card rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <span className="text-primary font-semibold">PDF</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{doc.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {doc.size} • {doc.date}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl h-[80vh]">
                            <DialogHeader>
                              <DialogTitle>{doc.title}</DialogTitle>
                            </DialogHeader>
                            <iframe
                              src={`${doc.url}#toolbar=0`}
                              className="w-full h-full"
                            />
                          </DialogContent>
                        </Dialog>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => window.open(doc.url, "_blank")}
                        >
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </ScrollArea>
        </TabsContent>

        {/* Presentations Tab */}
        <TabsContent value="ppts">
          <ScrollArea className="h-[calc(100vh-300px)]">
            {filteredPPTs.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                No presentations found matching your search.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPPTs.map((ppt) => (
                  <div
                    key={ppt.id}
                    className="bg-card rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <span className="text-primary font-semibold">PPT</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{ppt.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {ppt.slides} slides • {ppt.size} • {ppt.date}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl h-[80vh]">
                            <DialogHeader>
                              <DialogTitle>{ppt.title}</DialogTitle>
                            </DialogHeader>
                            <iframe
                              src={`https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(
                                window.location.origin + ppt.url
                              )}`}
                              className="w-full h-full"
                            />
                          </DialogContent>
                        </Dialog>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => window.open(ppt.url, "_blank")}
                        >
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </div>
  );
}