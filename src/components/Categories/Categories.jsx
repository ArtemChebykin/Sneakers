import React from "react";

const Categories = () => {
  const typesBrends = [
    "Все",
    "Nike",
    "Adidas",
    "Reebok",
    "ASICS",
    "Puma",
    "Saucony",
    "Premiata",
  ];

  return (
    <div className="categories">
      <ul>
        {typesBrends.map((brend) => (
          <li>{brend}</li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
