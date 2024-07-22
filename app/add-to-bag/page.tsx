import BackPage from "../components/BackPage";
import AddToBag from "../components/AddToBag/AddToBag";

import image1 from "../../assets/add-to-bag/jersey1.png";
import image2 from "../../assets/add-to-bag/jersey2.png";
import image3 from "../../assets/add-to-bag/jersey3.png";

function page() {
  const product = {
    name: "denver nuggets swingman jersey city edition",
    brand: "NIKE - NBA",
    description:
      "Nike Dri-FIT technology moves sweat away from your skin for quicker evaporation, helping you stay dry and comfortable. Breathable mesh  helps keep you cool on or off the court.",
    price: 105,
    discount: 0.25,
    images: [image1, image2, image3],
    sizes: [
      {
        label: "s",
        enabled: false,
      },
      {
        label: "m",
        enabled: true,
      },
      {
        label: "l",
        enabled: true,
      },
      {
        label: "xl",
        enabled: true,
      },
      {
        label: "xxl",
        enabled: true,
      },
    ],
  };

  return (
    <div>
      <BackPage />
      <AddToBag
        name={product.name}
        brand={product.brand}
        description={product.description}
        discount={product.discount}
        price={product.price}
        images={product.images}
        sizes={product.sizes}
      />
    </div>
  );
}

export default page;
