import { TGetProductResponse } from "./types";

export async function getProducts() {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  try {
    const response = await fetch(`./data.json`);

    if (!response.ok) {
      throw new Error(
        `Network response was not ok, status: ${response.status}`,
      );
    }
    const res: TGetProductResponse = await response.json();

    if (!res || res.result === 0 || res.data === undefined) {
      throw new Error("Invalid data format");
    }
    return res.data.map((product) => ({
      id: product.id,
      title: product.title,
      price: product.price,
      description: product.description,
      image: product.image,
      qty: 1,
    }));
  } catch (error) {
    console.error("An error occurred:", error);
  }
}
