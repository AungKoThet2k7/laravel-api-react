import reactUseCookie from "react-use-cookie";
import api from "../../../services/api";
import useSWR from "swr";
import ProgressBar from "../../../components/progressbar";
import ProductTableRow from "../components/ProductTableRow";

const ProductPage = () => {
  const [tokenCookie] = reactUseCookie("token");

  const fetcher = (url) =>
    api
      .get(url, { headers: { Authorization: `Bearer ${tokenCookie}` } })
      .then((res) => res.data);
  const { data, isLoading } = useSWR("/products", fetcher);

  if (isLoading) {
    return <ProgressBar />;
  }

  return (
    <div className=" rounded-lg bg-white p-5 shadow-md m-18">
      <h1 className="text-3xl font-bold mb-2">Product List</h1>

      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Id
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Stock
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
                    >
                      Action
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
                    >
                      Create At
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {data?.data?.length > 0 && data?.data.map((product, i) => (
                    <ProductTableRow key={i} product={product} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
