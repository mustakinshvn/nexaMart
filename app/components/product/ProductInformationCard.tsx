"use client";

import { BoldTitle } from "../ui/BoldTitle";
import { DescriptionCard } from "../ui/DescriptionCard";
import RatingStars from "../ui/RatingStars";
import { ImageGallery } from "./ImageGallery";
import { PriceCard } from "./PriceCard";
import { colors } from "@/app/data/Colors";
import { cn } from "@/app/lib/utils";
import { Button } from "../ui/Button";
import { useState } from "react";
import { QuantityButton } from "../ui/QuantityButton";
import { useCart } from "@/app/contexts/CartContext";
import toast from "react-hot-toast";
import { ProductProps } from "@/app/type/Product";
import { ColorButton } from "../ui/ColorButton";
import { SetSizeButton } from "../ui/SizeButtons";
import { sizes } from "@/app/data/sizes";

export const ProductInformationCard = ({
  id,
  title,
  description,
  rating,
  className,
  price,
  discountedPrice,
  images,
}: ProductProps) => {
  const cart = useCart();
  const itemInCart = cart.getItemById(id);
  const [colorsState, setColorsState] = useState(
    itemInCart ? itemInCart.color : 0,
  );
  const [sizesState, setSizesState] = useState(
    itemInCart ? itemInCart.size : 0,
  );
  const [quantity, setQuantity] = useState(
    itemInCart ? itemInCart.quantity : 1,
  );

  const existingVariant = cart.getItemByIdSizeColor(
    id,
    sizesState,
    colorsState,
  );

  const handleColorChange = (colorId: number) => {
    setColorsState(colorId);
    const variant = cart.getItemByIdSizeColor(id, sizesState, colorId);
    setQuantity(variant?.quantity ?? 1);
  };

  const handleSizeChange = (sizeId: number) => {
    setSizesState(sizeId);
    const variant = cart.getItemByIdSizeColor(id, sizeId, colorsState);
    setQuantity(variant?.quantity ?? 1);
  };

  const handleAddToCart = () => {
    if (existingVariant) {
      const presentQuantity = existingVariant.quantity;
      if (presentQuantity === quantity) {
        toast.error("No changes made to update");
        return;
      }
      cart.updateItemQuantity(
        cart.getIndex(id, sizesState, colorsState),
        quantity,
      );
      toast.success("Updated quantity in cart");
      return;
    }

    cart.addItem({
      id,
      title,
      quantity,
      price,
      size: sizesState,
      color: colorsState,
      discountedPrice,
      images,
      rating,
      description,
    });
    toast.success("Item added to cart");
  };
  return (
    <div
      className={cn(
        "flex flex-col md:flex-row gap-4 justify-center items-center sm:px-3",
        className,
      )}
    >
      <ImageGallery images={images} />

      <div className="divide-y divide-gray-300 px-4 flex flex-col md:max-w-1/2 ">
        <div className="flex flex-col gap-2 ">
          <BoldTitle label={title} className="text-lg sm:text-xl lg:text-2xl" />
          {rating && <RatingStars rating={rating.rate} showRating={true} />}
          <PriceCard price={price} discountedPrice={discountedPrice} />
          {description && (
            <DescriptionCard description={description} classname="pb-3" />
          )}
        </div>

        <div className="flex flex-col">
          <p className="text-gray-600 my-3">Select Color</p>
          <div className="flex gap-4 mb-5">
            {colors.map((color) => (
              <ColorButton
                key={color.id}
                className={color.color}
                isActive={colorsState === color.id}
                onClick={() =>
                  handleColorChange(colorsState === color.id ? 0 : color.id)
                }
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col mb-4">
          <p className="text-gray-600 my-3">Choose Size</p>
          <div className="flex flex-wrap gap-4 mb-5 ">
            {sizes.map((size) => (
              <SetSizeButton
                key={size.id}
                size={size.size}
                isActive={sizesState === size.id}
                onClick={() =>
                  handleSizeChange(sizesState === size.id ? 0 : size.id)
                }
              />
            ))}
          </div>
        </div>
        <div className="flex gap-3 justify-between items-center">
          <QuantityButton
            quantity={quantity}
            onChange={setQuantity}
            className="min-w-35"
          />
          <Button
            label={existingVariant ? "Update Cart" : "Add to Cart"}
            className=" w-full py-4"
            onClick={handleAddToCart}
          />
        </div>
      </div>
    </div>
  );
};
