import { Request, Response } from "express";
import Products from "../models/Products";

export const getStockHandler = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const products = await Products.find({ existencia: { $gt: 0 } });

    res.json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: `${error}` });
  }
};
