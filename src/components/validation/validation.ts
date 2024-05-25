"use client";

import { z } from "zod";

export const userCard = z.object({
  imageUrl: z.string().min(10),
  firstName: z.string().max(28),
  lastName: z.string().max(28),
  age: z.number().max(3),
  from: z.string().max(30),
  job: z.string().max(30),
  gender: z.string().max(7),
});
