import Link from "next/link";
import React from "react";

function List() {
  return (
    <div className="flex justify-center mt-10">
      <div className="w-96 flex flex-col gap-2">
        <h1 className="text-xl">Challenges:</h1>
        <ul className="px-2">
          <li>
            Day 01 -{" "}
            <Link
              href={"/profile-card"}
              className="hover:underline hover:text-orange-300"
            >
              Profile Card
            </Link>
          </li>

          <li>
            Day 02 -{" "}
            <Link
              href={"/add-to-bag"}
              className="hover:underline hover:text-orange-300"
            >
              Add to Bag
            </Link>
          </li>

          <li>
            Day 03 -{" "}
            <Link
              href={"/mobile-navigation"}
              className="hover:underline hover:text-orange-300"
            >
              Mobile Navigation
            </Link>
          </li>

          <li>
            Day 04 -{" "}
            <Link
              href={"/contact-us"}
              className="hover:underline hover:text-orange-300"
            >
              Contact Us
            </Link>
          </li>

          <li>
            Day 05 -{" "}
            <Link
              href={"/recipe"}
              className="hover:underline hover:text-orange-300"
            >
              Recipe
            </Link>
          </li>

          <li>
            Day 06 -{" "}
            <Link
              href={"/image-carousel"}
              className="hover:underline hover:text-orange-300"
            >
              Image Carousel
            </Link>
          </li>

          <li>
            Day 07 -{" "}
            <Link
              href={"/create-account"}
              className="hover:underline hover:text-orange-300"
            >
              Create Account
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default List;
