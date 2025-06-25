import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      
      // Store in database
      const contact = await storage.createContactSubmission(validatedData);
      
      // Send to HubSpot Forms API
      const hubspotPortalId = "146428330";
      const hubspotFormId = "c9a2bd57-28a9-41e6-b555-41f30448dfda";
      const hubspotUrl = `https://api.hsforms.com/submissions/v3/integration/submit/${hubspotPortalId}/${hubspotFormId}`;
      
      try {
        const hubspotPayload = {
          fields: [
            { name: "firstname", value: validatedData.nome.split(' ')[0] },
            { name: "lastname", value: validatedData.nome.split(' ').slice(1).join(' ') || '' },
            { name: "email", value: validatedData.email },
            { name: "phone", value: validatedData.telefone || '' },
            { name: "company", value: validatedData.empresa || '' },
            { name: "message", value: `Serviço: ${validatedData.servico}\n\nMensagem: ${validatedData.mensagem}` }
          ],
          context: {
            pageUri: "https://moderniza.pt/",
            pageName: "Contact Form"
          }
        };

        const hubspotResponse = await fetch(hubspotUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(hubspotPayload),
        });

        if (!hubspotResponse.ok) {
          console.error("HubSpot submission failed:", await hubspotResponse.text());
        }
      } catch (hubspotError) {
        console.error("HubSpot error:", hubspotError);
        // Continue even if HubSpot fails
      }

      res.json({ 
        success: true, 
        message: "Pedido enviado com sucesso! Entraremos em contacto em breve.",
        id: contact.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Dados inválidos", 
          errors: error.errors 
        });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({ 
          success: false, 
          message: "Erro interno do servidor" 
        });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
