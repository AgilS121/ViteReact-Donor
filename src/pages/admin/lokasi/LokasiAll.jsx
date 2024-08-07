import LayoutAdmin from "../components/LayoutAdmin";
import DataTable from "react-data-table-component";
import { LokasiAllData } from "../../../controllers/LokasiData";
import { useNavigate } from "react-router-dom";
import useTokenRefresh from "../../../controllers/useToken";
import { useEffect, useState } from "react";

const LokasiAll = () => {
  const { datatabel, columns} = LokasiAllData()
  const navigate = useNavigate()
  const {data, refreshToken} = useTokenRefresh()
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    refreshToken();
  }, []);

  useEffect(() => {
    if (data && data.role !== undefined) {
      setIsLoading(false);
    }
  }, [data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (data.role !== 'admin') {
    return navigate('/');
  }

  return (
    <LayoutAdmin>
      <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
        <section className="p-8 ">
          <h1 className="pb-3 font-semibold text-xl text-gray-900">Data Lokasi</h1>
          <DataTable columns={columns} data={datatabel} pagination highlightOnHover />
        </section>
      </div>
    </LayoutAdmin>
  );
};

export default LokasiAll;
