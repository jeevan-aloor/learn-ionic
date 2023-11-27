import React, { useState } from "react";
import { IonIcon, IonText } from "@ionic/react";
import { arrowForward, chevronDownOutline } from "ionicons/icons";

const categoriesWithSubcategories = [
  {
    mainCategory: "Electronics",
    subcategories: ["Smartphones", "Laptops", "Headphones"],
  },
  {
    mainCategory: "Jewelry",
    subcategories: ["Necklaces", "Earrings", "Bracelets"],
  },
  { mainCategory: "Clothing", subcategories: ["Men", "Women", "Kids"] },
  { mainCategory: "Shoes", subcategories: ["Casual", "Sports", "Formal"] },
  {
    mainCategory: "Home",
    subcategories: ["Furniture", "Bedding", "Decorative Items"],
  },
  {
    mainCategory: "Sports",
    subcategories: ["Fitness", "Outdoor", "Team Sports"],
  },
  { mainCategory: "Beauty", subcategories: ["Skincare", "Makeup", "Haircare"] },
];

const CategoryDropdown: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <>
      <div className="flex flex-wrap  justify-center">
        {categoriesWithSubcategories.map((category, index) => (
          <div
            key={index}
            className="group relative cursor-pointer my-2 pt-2 px-1.5 text-base font-medium text-black mx-1 "
            onMouseEnter={() => setSelectedCategory(category.mainCategory)}
          >
            {category.mainCategory}
            <span className="ml-0.5">
              <IonIcon src={chevronDownOutline} />
            </span>
            {selectedCategory === category.mainCategory && (
              <div
                onMouseEnter={() => setSelectedCategory(category.mainCategory)}
                onMouseLeave={() => setSelectedCategory(null)}
                className="absolute z-50 flex flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl"
              >
                {category.subcategories.map((subcategory, subIndex) => (
                  <IonText key={subIndex} className="my-2">
                    {subcategory}
                  </IonText>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default CategoryDropdown;
