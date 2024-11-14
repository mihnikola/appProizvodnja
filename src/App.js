import React, { useEffect, useState } from "react";
import Login from "./components/Login/Login";
import MainPage from "./components/MainPage/MainPage";
import ButtonGrid from "./components/ButtonGrid/ButtonGrid";
import DataGrid from "./components/DataGrid/DataGrid";
import DataGridCurrent from "./components/DataGridCurrent/DataGridCurrent";
import MsgBox from "./components/messageBox/MsgBox";

const places = [
  {
    id: 1,
    place_code: "abcdefg1",
    place_title: "Krpljenje 1",
  },
  {
    id: 2,
    place_code: "hijklm2n",
    place_title: "Krpljenje 10",
  },
  {
    id: 3,
    place_code: "opqrst3u",
    place_title: "Programer",
  },
  {
    id: 4,
    place_code: "vwxyz4ab",
    place_title: "Sef racunovodstva",
  },
];

const operationsData = [
  {
    radni_nalog: "RN001",
    sifra_proizvoda: "SP001",
    sifra_dela: "SD001",
    naziv_dela: "Sorg unutrašnji",
    kolicina_dela: 10,
  },
  {
    radni_nalog: "RN002",
    sifra_proizvoda: "SP002",
    sifra_dela: "SD002",
    naziv_dela: "Sorg spoljašnji",
    kolicina_dela: 5,
  },
  {
    radni_nalog: "RN003",
    sifra_proizvoda: "SP003",
    sifra_dela: "SD003",
    naziv_dela: "Kutija fioke",
    kolicina_dela: 20,
  },
  {
    radni_nalog: "RN004",
    sifra_proizvoda: "SP004",
    sifra_dela: "SD004",
    naziv_dela: "Ploča stola",
    kolicina_dela: 15,
  },
  {
    radni_nalog: "RN005",
    sifra_proizvoda: "SP005",
    sifra_dela: "SD005",
    naziv_dela: "Korpus",
    kolicina_dela: 8,
  },
];

const operationsDataCurrent = [
  {
    radni_nalog: "RN001",
    sifra_proizvoda: "SP001",
    sifra_dela: "SD001",
    naziv_dela: "Vijak",
    kolicina_dela: 10,
    vreme_pocetka: "2024-10-11 13:57:44",
  },
  {
    radni_nalog: "RN002",
    sifra_proizvoda: "SP002",
    sifra_dela: "SD002",
    naziv_dela: "Sorg spoljašnji",
    kolicina_dela: 5,
    vreme_pocetka: "2024-10-11 13:57:44",
  },
  {
    radni_nalog: "RN003",
    sifra_proizvoda: "SP003",
    sifra_dela: "SD003",
    naziv_dela: "Škafiškafnjak",
    kolicina_dela: 20,
    vreme_pocetka: "2024-10-11 13:57:44",
  },
  {
    radni_nalog: "RN004",
    sifra_proizvoda: "SP004",
    sifra_dela: "SD004",
    naziv_dela: "Prolajali vijak",
    kolicina_dela: 15,
    vreme_pocetka: "2024-10-11 13:57:44",
  },
  {
    radni_nalog: "RN005",
    sifra_proizvoda: "SP005",
    sifra_dela: "SD005",
    naziv_dela: "Ugradnji zid za vilu na Novom Beogradu",
    kolicina_dela: 8,
    vreme_pocetka: "2024-10-11 13:57:44",
  },
];

const App = () => {
  const [credentials, setCredentials] = useState(null);
  const [placesValue, setPlacesValue] = useState([]);
  const [operations, setOperations] = useState([]);
  const [operationsCurrent, setOperationsCurrent] = useState([]);
  const [inputValue, setInputValue] = useState(0);
  const [modalData, setModalData] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalEmpOpen, setIsModalEmpOpen] = useState(false);
  const [selectedEmployees, setSelectedEmployees] = useState([]);
  const [optValues, setOptValues] = useState([]);
  const [submitModalOpen, setModalSubmitOpen] = useState(false);
  const [isSuccessBoxOpen, setIsSuccessBoxOpen] = useState(false);
  
  const employees = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Alice Johnson" },
    { id: 4, name: "Bob Brown" },
    { id: 5, name: "Charlie Davis" },
  ];


  const optionsSubmitValues = [
    { value: "1", label: "U kvalitetu" },
    { value: "2", label: "Neusaglasenost" },
    { value: "3", label: "Otezan rad" },
    { value: "4", label: "Dorada" },
  ]

  const [currentTableData, setCurrentTableData] = useState([]);

  const closeModal = () => setIsModalOpen(false);
  const closeModalSubmit = () => setModalSubmitOpen(false);

  useEffect(() => {
    const credentials = localStorage.getItem("credentials");
    if (credentials) {
      setCredentials(credentials);
    }
  }, []);

  const handleKeyPress = (key) => {
    if (key === "Backspace") {
      setInputValue(inputValue.slice(0, -1));
    } else {
      setInputValue(inputValue + key);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSelectEmployees = (selectedIds) => {
    setSelectedEmployees(selectedIds);
  };

  const handleLogin = (data) => {
    localStorage.setItem("credentials", JSON.stringify(data));
    setCredentials(data);
    console.log("Login Data:", data);
  };

  const loadOperationHandler = () => {
    setOperations(operationsData);
  };

  const startHandler = (e) => {
    e.preventDefault();

    console.log("startHandler");
    setPlacesValue(places);
  };

  const chooseHandler = (data) => {
    const now = new Date();
    const dateString =
      now.toISOString().split("T")[0] +
      " " +
      now.toISOString().split("T")[1].substring(0, 8); // "2024-11-13"
    console.log(dateString);
    const currentData = {
      ...data,
      vreme_pocetka: dateString,
    };
    setCurrentTableData((prev) => [...prev, currentData]);
    // console.log("chooseHandler", data);
    // setInputValue("");
    // setModalData(data);
    setIsModalEmpOpen(true);
    

  };


  const closeHandlerEmp = (data) => {
    setIsModalEmpOpen(false);
  }

  const submitModalHandler = () => {
    setIsModalOpen(false);
    setOptValues(optionsSubmitValues);
    setModalSubmitOpen(true);


  };

  const submitDataCurrentHandler = (data) => {
    setIsModalOpen(true);
    setModalData(data);
  }

  const submitHandler = (data) => {
    console.log("submitHandler", data);
  };
  const openSubmitHandler = (data) => {
    console.log("submitHandler", data);
  };

  const openSuccessBoxHandler = () => {
    setModalSubmitOpen(false)
    setIsSuccessBoxOpen(true);
  }

  return (
    <div>
      {!credentials && <Login onLogin={handleLogin} />}
      {operations.length === 0 && placesValue.length === 0 && credentials && (
        <MainPage data={credentials} start={startHandler} />
      )}
      {operations.length === 0 && placesValue.length > 0 && (
        <ButtonGrid data={placesValue} loadOperation={loadOperationHandler} />
      )}

      {operations.length > 0 && currentTableData.length === 0 && (
        <DataGrid data={operationsData} onSelect={chooseHandler} />
      )}
      {currentTableData.length > 0 && (
        <DataGridCurrent currentEmployees={selectedEmployees} data={currentTableData} onSelect={submitDataCurrentHandler} />
      )}

      {/* <Register onRegister={handleRegister} /> */}
      {/* <DataGridCurrent data={operationsCurrent} />  */}

      {/* {currentTableData.length > 0 && (
        <Regis
      )} */}
      <div
        className="flex items-center justify-center max-h-[1366px]"
        onClose={closeModal}
      >
        <Modal
          isOpen={isModalOpen}
          data={modalData}
          inputValue={inputValue}
          onClose={closeModal}
          onOpen={submitModalHandler}
          onKeyPress={handleKeyPress}
        />
      </div>
      <div
        className="flex items-center justify-center max-h-[1366px]"
        onClose={handleCloseModal}
      >
        <ModalEmployees
          isOpen={isModalEmpOpen}
          onClose={closeHandlerEmp}
          employees={employees}
          onSelectEmployees={handleSelectEmployees}
        />
      </div>
      <div
        className="flex items-center justify-center max-h-[1366px]"
        onClose={closeModalSubmit}
      >
        <ModalSubmit
          isOpen={submitModalOpen}
          data={optValues}
          onClose={closeModalSubmit}
          handleSave={openSuccessBoxHandler}
        />
      </div>
      {isSuccessBoxOpen && 
      <>
      <div
        className="flex items-center justify-center max-h-[1366px]"
      >
        <MsgBox message="Uspešno prijavljen učinak" onClose={() => setIsSuccessBoxOpen(false)} />
      </div>
      </>}
    </div>
  );
};

export default App;

const Modal = ({ data, isOpen, onClose, onKeyPress, inputValue, onOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 shadow-lg w-2/3">
        <h2 className="text-lg font-bold mb-4">{data.radni_nalog}</h2>
        <div className="flex flex-col">
          <div className="flex flex-col mb-4">
            <label className="text-lg font-bold mb-2">
              Naziv dela: {data.naziv_dela}
            </label>
            <label className="text-lg font-bold mb-2">
              Sifra dela: {data.sifra_dela}
            </label>
            <label className="text-lg font-bold mb-2">
              Kolicina: {data.kolicina_dela}
            </label>
          </div>
        </div>
        <input
          type="text"
          className="w-full p-2 border rounded mb-4"
          placeholder="Unesi količinu..."
          value={inputValue}
        />
        <Keyboard onKeyPress={onKeyPress} />
        <div className="m-2 text-center text-xl flex justify-around">
          <button
            onClick={onClose}
            className="mt-4 px-4 py-2 bg-red-500  text-white rounded hover:bg-red-600"
          >
            Odustani
          </button>
          <button
            onClick={() => onOpen(data)}
            className="mt-4 px-4 py-2 bg-green-500  text-white rounded hover:bg-green-600"
          >
            Potvrdi
          </button>
        </div>
      </div>
    </div>
  );
};

const Keyboard = ({ onKeyPress }) => {
  const keys = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    ",",
    "Backspace",
  ];

  return (
    <div className="grid grid-cols-3 gap-5 mt-4">
      {keys.map((key) => (
        <button
          key={key}
          onClick={() => onKeyPress(key)}
          className="bg-gray-300 p-5 rounded shadow hover:bg-gray-600 hover:text-white text-3xl"
        >
          {key === "Space" ? " " : key === "Backspace" ? "<-" : key}
        </button>
      ))}
    </div>
  );
};

const ModalClose = ({
  data,
  isOpen,
  onClose,
  onKeyPress,
  inputValue,
  onOpen,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 shadow-lg w-2/3">
        <h2 className="text-lg font-bold mb-4">{data.radni_nalog}</h2>
        <div className="flex flex-col">
          <div className="flex flex-col mb-4">
            <label className="text-lg font-bold mb-2">
              Naziv dela: {data.naziv_dela}
            </label>
            <label className="text-lg font-bold mb-2">
              Sifra dela: {data.sifra_dela}
            </label>
            <label className="text-lg font-bold mb-2">
              Kolicina: {data.kolicina_dela}
            </label>
          </div>
        </div>
        <input
          type="text"
          className="w-full p-2 border rounded mb-4"
          placeholder="Unesi količinu..."
          value={inputValue}
        />
        <Keyboard onKeyPress={onKeyPress} />
        <div className="m-2 text-center text-xl flex justify-around">
          <button
            onClick={onClose}
            className="mt-4 px-4 py-2 bg-red-500  text-white rounded hover:bg-red-600"
          >
            Odustani
          </button>
          <button
            onClick={() => onOpen(data)}
            className="mt-4 px-4 py-2 bg-green-500  text-white rounded hover:bg-green-600"
          >
            Potvrdi
          </button>
        </div>
      </div>
    </div>
  );
};

const ModalSubmit = ({
  isOpen,
  onClose,
  onOpen,
  data,
  handleSave
}) => {
  const [selectedEmployees, setSelectedEmployees] = useState([]);

  const handleChange = (e, employeeId) => {
    if (e.target.checked) {
      setSelectedEmployees((prev) => [...prev, employeeId]);
    } else {
      setSelectedEmployees((prev) => prev.filter((id) => id !== employeeId.value));
    }
  };

  // const handleSave = () => {
  //   onSelectEmployees(selectedEmployees);
  //   onClose();
  // };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        <h2 className="text-xl font-semibold mb-4">Opcija prijave učinka</h2>

        <div className="space-y-4">
          {data.map((item) => (
            <div key={item.value} className="flex items-center">
              <input
                type="checkbox"
                id={`employee-${item.value}`}
                checked={selectedEmployees.includes(item)}
                onChange={(e) => handleChange(e, item)}
                className="mr-2"
              />
              <label htmlFor={`employee-${item.value}`} className="text-lg">
                {item.label}
              </label>
            </div>
          ))}
        </div>

        <div className="mt-4 flex justify-end">
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded mr-2"
          >
            Otkaži
          </button>
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Upiši učinak
          </button>
        </div>
      </div>
    </div>
  );
};

const ModalEmployees = ({ isOpen, onClose, employees, onSelectEmployees }) => {
  // State to keep track of selected employees
  const [selectedEmployees, setSelectedEmployees] = useState([]);

  const handleChange = (e, employeeId) => {
    if (e.target.checked) {
      setSelectedEmployees((prev) => [...prev, employeeId]);
    } else {
      setSelectedEmployees((prev) => prev.filter((id) => id !== employeeId.id));
    }
  };

  const handleSave = () => {
    onSelectEmployees(selectedEmployees);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        <h2 className="text-xl font-semibold mb-4">Select Employees</h2>

        <div className="space-y-4">
          {employees.map((employee) => (
            <div key={employee.id} className="flex items-center">
              <input
                type="checkbox"
                id={`employee-${employee.id}`}
                checked={selectedEmployees.includes(employee)}
                onChange={(e) => handleChange(e, employee)}
                className="mr-2"
              />
              <label htmlFor={`employee-${employee.id}`} className="text-lg">
                {employee.name}
              </label>
            </div>
          ))}
        </div>

        <div className="mt-4 flex justify-end">
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded mr-2"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
