'use server'

import { prisma } from "@/lib/db/prisma";
import { redirect } from "next/navigation";


export async function addProduct(formData:FormData)
{
    const name = formData.get("name") as string;
      const description = formData.get("description") as string;
      const price = Number(formData.get("price"));
      const imageUrl = formData.get("imageUrl") as string;
      console.log(formData);
    
      if (!name || !description || !price || !imageUrl) {
        throw new Error("All fields are required");
      }
    
      await prisma.product.create({
        data: {
          name,
          description,
          imageUrl,
          price,
        },
      });
      redirect("/");
}