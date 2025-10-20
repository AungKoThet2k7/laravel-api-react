import React from "react";

const ProductTableRow = ({ product }) => {
  return (
    <tr className="hover:bg-gray-100">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
        {product.id}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
        {product.name}
      </td>
      <td className="px-6 py-4 text-end whitespace-nowrap text-sm text-gray-800">
        {product.show_price}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
        <span
          className={`${
            product.stock_status === "available"
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          } inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-lg text-xs font-medium bg-blue-100 text-blue-800`}
        >
          {product.stock_status}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
        <button
          type="button"
          className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-hidden focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
        >
          Delete
        </button>
      </td>
      <td className="px-6 py-4 text-end whitespace-nowrap text-sm text-gray-800">
        <p>{product.date}</p>
        <p>{product.time}</p>
      </td>
    </tr>
  );
};

export default ProductTableRow;
