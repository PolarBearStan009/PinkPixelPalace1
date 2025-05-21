import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Project routes
  app.get('/api/projects', (_req, res) => {
    // Demo projects for the portfolio
    const projects = [
      {
        id: 1,
        title: "Kawaii Weather App",
        description: "A super cute weather application that shows forecasts with adorable pixel art characters that change based on the weather conditions!",
        imageUrl: "https://images.unsplash.com/photo-1600456899121-68eda5705257?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
        technologies: ["HTML", "CSS", "JavaScript"],
        link: "#"
      },
      {
        id: 2,
        title: "Pixel Pet Simulator",
        description: "A virtual pet simulator where you can adopt adorable pixel creatures! Feed them, play with them, and watch them grow!",
        imageUrl: "https://images.unsplash.com/photo-1615751072497-5f5169febe17?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
        technologies: ["HTML5", "CSS3", "React"],
        link: "#"
      },
      {
        id: 3,
        title: "Y2K Music Player",
        description: "A retro-style music player with visualizations and skins inspired by classic media players from the early 2000s!",
        imageUrl: "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
        technologies: ["JavaScript", "Web Audio API", "Canvas"],
        link: "#"
      },
      {
        id: 4,
        title: "Digital Sticker Book",
        description: "An interactive digital sticker collection app where you can collect, trade, and arrange cute digital stickers in your own virtual book!",
        imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
        technologies: ["Vue.js", "Firebase", "Drag & Drop API"],
        link: "#"
      }
    ];
    
    res.json(projects);
  });

  const httpServer = createServer(app);

  return httpServer;
}
