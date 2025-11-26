import { womanProducts } from "@/helpers/dummy-data";
import { Button, Rating } from "@mui/material";
import Image from "next/image";

export default async function womanDetailPage({ params }) {
  const { productDetail } = await params;
  const product = womanProducts.find((product) => product.id == productDetail);

  return (
    <div className="pt-24 px-4">
      <div className="mx-auto max-w-6xl grid gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div className="flex flex-col gap-4">
          <div className="relative w-full aspect-3/4 bg-[#f7f7f7] rounded-lg overflow-hidden">
            <Image src={product.image} alt={product.name} fill className="object-cover" />
          </div>

          <div className="flex gap-3">
            {[product.image, product.image, product.image].map((img, idx) => (
              <button
                key={idx}
                className="relative h-20 w-16 rounded-md overflow-hidden border border-gray-300 hover:border-gray-500"
              >
                <Image src={img} alt="thumbnail" fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">MANIER E-COMMERCE</p>

            <h1 className="mt-1 text-3xl font-bold text-gray-900">{product.name}</h1>

            <div className="mt-3 flex items-center gap-2 text-sm text-gray-600">
              <span className="font-semibold text-orange-500">4.8</span>
              <Rating name="product-rating" value={4.5} precision={0.5} readOnly size="small" />
              <span className="text-xs text-gray-500">• 41 Reviews</span>
              <span className="text-xs text-gray-400">• 4 Q&amp;A</span>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-md border border-orange-200 bg-orange-50 px-4 py-2 text-xs">
            <span className="text-lg">👀</span>
            <span>
              <span className="font-semibold">Hot product!</span> Viewed{" "}
              <span className="font-semibold text-orange-600">2.7K</span> times in the last 24 hours.
            </span>
          </div>

          <div>
            <p className="text-3xl font-bold text-orange-600">€{product.price}</p>
            <p className="mt-2 inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs text-orange-600">
              3 installments available
            </p>
          </div>

          <div className="border-t border-gray-100 pt-4">
            <p className="mb-2 text-sm font-medium text-gray-900">
              Color: <span className="font-normal">Black</span>
            </p>
            <div className="flex gap-2">
              {[product.image, product.image].map((img, idx) => (
                <button
                  key={idx}
                  className={`relative h-20 w-16 rounded-md overflow-hidden border ${
                    idx === 0 ? "border-orange-500" : "border-gray-300 hover:border-gray-500"
                  }`}
                >
                  <Image src={img} alt="color option" fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-xs text-emerald-900">
            <p className="font-semibold">
              If you order within the next 7 hours, your package ships <span className="underline">tomorrow!</span>
            </p>
            <p className="mt-2 text-[11px]">
              Estimated delivery: <b>Nov 28</b>
            </p>
          </div>

          <div className="mt-2 flex flex-wrap items-center gap-3">
            <Button variant="outlined" color="warning" className="flex-1 py-3 text-base border-2">
              Buy Now
            </Button>

            <Button variant="contained" color="warning" className="flex-1 py-3 text-base shadow-none">
              Add to Cart
            </Button>

            <button className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:bg-gray-50">
              ♥
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
