import React, { useEffect, useState } from "react";

function FormData({ addData, edit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [contact, setContact] = useState("");

  useEffect(() => {
    if (edit) {
      setName(edit.name || "");
      setEmail(edit.email || "");
      setPass(edit.pass || "");
      setContact(edit.contact || "");
    } else {
      setName("");
      setEmail("");
      setPass("");
      setContact("");
    }
  }, [edit]);

  function submitFn(e) {
    e.preventDefault();

    const formData = {
      name,
      email,
      pass,
      contact,
    };
    // console.log(formData);

    addData(formData);

    setName("");
    setEmail("");
    setPass("");
    setContact("");
  }
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center bg-gray-300">
        <div className="md:w-1/3 w-full">
          <h2 className="text-center text-2xl font-bold">CRUD APP</h2>
          <br />

          <form onSubmit={submitFn}>
            <input
              className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              required
              placeholder="Enter your Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            ></input>
            <br />
            <input
              className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="email"
              required
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
            <br />
            <input
              className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="password"
              required
              autoComplete="off"
              placeholder="Enter your Password"
              value={pass}
              onChange={(e) => {
                setPass(e.target.value);
              }}
            ></input>
            <br />

            <input
              className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              required
              placeholder="Enter your Contact Number"
              value={contact}
              onChange={(e) => {
                setContact(e.target.value);
              }}
            ></input>
            <br />

            <button
              className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
              type="submit"
            >
              {edit !== null ? "Update" : "Add"}
            </button>
          </form>
          <br />
        </div>
      </div>
    </>
  );
}

export default FormData;
