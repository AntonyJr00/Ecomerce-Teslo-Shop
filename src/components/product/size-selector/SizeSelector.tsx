import type { Size } from "@interface/product.interface";
import clsx from "clsx";

interface Props {
  selectedSize?: Size;
  availableSizes: Size[];
  onSizeChanged: (size: Size) => void;
}

export const SizeSelector = ({
  selectedSize,
  availableSizes,
  onSizeChanged,
}: Props) => {
  return (
    <div className="my-5">
      <h3 className="font-bold mb-4">Tallas disponibles</h3>
      <div>
        {availableSizes.map((size, i) => (
          <button
            onClick={() => onSizeChanged(size)}
            className={clsx(`text-lg hover:underline mr-4 transition-all`, {
              "underline font-semibold": size === selectedSize,
            })}
            key={i}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};
