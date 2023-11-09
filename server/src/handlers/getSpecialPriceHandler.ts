import { Request, Response } from "express";
import User from "../models/Users";
import getBasePriceController from "../controllers/getBasePriceController";

export const getSpecialPriceHandler = async (
  req: Request,
  res: Response
): Promise<void> => {
  const userId = req.params.user_id;
  const productName = req.params.nombre_producto;
  try {
    const user = await User.findById(userId);
    console.log(user?.metadata);
    if (!user || !user.metadata || !user.metadata.precios_especiales) {
      res
        .status(404)
        .json({
          error: "cliente no encontrado o no tiene precios especiales.",
        });
      return;
    }

    const specialPrice = user?.metadata?.precios_especiales.find(
      (price) => price.nombre_producto === productName
    );

    if (!specialPrice) {
      const basePrice = await getBasePriceController(productName);
      res.status(404).json({ producto: basePrice });
    }
    res.json(specialPrice);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: `${error}` });
  }
};
