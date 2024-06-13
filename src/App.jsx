import { useState } from "react";
import FormData from "./components/FormData";
import Listings from "./components/Listings";

function App() {
  const [dataList, setDataList] = useState([]);
  const [edit, setEdit] = useState(null);

  function addData(newData) {
    if (edit !== null) {
      const updatedList = dataList.map((item, index) => 
        index === edit ? newData : item
      );
      setDataList(updatedList);
      setEdit(null);
    } else {
      setDataList((prevData) => [...prevData, newData]);
    }
  }
  function delFn(value) {
    let newListTodo = [...dataList];
    newListTodo.splice(value, 1);
    setDataList(newListTodo);
  }

  function updateFn(indexData) {
    setEdit(indexData);
  }

  return (
    <>
      <FormData addData={addData} edit={edit !== null ? dataList[edit] : null} />
      <br />

      <h2 className="text-center text-2xl font-bold">Form Data Table</h2>
      <br />
      <table className="w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {dataList.map((listItem, i) => {
            return (
              <Listings
                key={i}
                index={i}
                item={listItem}
                delFn={delFn}
                updateFn={updateFn}
              />
            );
          })}
        </tbody>
      </table>

      {/* <Listings dataList={dataList} /> */}
    </>
  );
}

export default App;
