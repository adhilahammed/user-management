
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";



import { fetchUserListAction } from "../../redux/slice/userSlices/userSlices";




const UserList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserListAction());
  }, [dispatch]);
  const user = useSelector(state => state?.admin);

  const { userList, loading, appErr, serverErr } = user;
 

  return (
    <>
    <h2 className="text-center text-3xl text-red-600">
    </h2>
    <h2 className="text-center text-3xl text-green-800">
    </h2>
    <div className="flex flex-col w-5/6 mx-auto">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    E mail
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                 
                </tr>
              </thead>
              <tbody >
                {userList?.map(item => (
                  <tr className="bg-gray-50">
                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item?.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item?.Name}
                    </td>
                   

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    {/* )} */}
  </>
  );
};

export default UserList;

