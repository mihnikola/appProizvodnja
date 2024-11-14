import React, { useState } from 'react';


const DataGridCurrent = ({ data, onSelect, currentEmployees }) => {
    const [filter, setFilter] = useState('');
    const [sortField, setSortField] = useState('radni_nalog');
    const [sortOrder, setSortOrder] = useState('asc');
    console.log("currentEmployees", currentEmployees)
    // Filtered and sorted data
    const filteredData = data
        .filter(item =>
            item.sifra_proizvoda.toLowerCase().includes(filter.toLowerCase())
        )
        .sort((a, b) => {
            if (sortField === 'kolicina_dela') {
                return sortOrder === 'asc' ? a[sortField] - b[sortField] : b[sortField] - a[sortField];
            }
            return sortOrder === 'asc'
                ? a[sortField].localeCompare(b[sortField])
                : b[sortField].localeCompare(a[sortField]);
        });

    const handleSort = (field) => {
        setSortField(field);
        setSortOrder(sortField === field && sortOrder === 'asc' ? 'desc' : 'asc');
    };

    return (
        <>
            {currentEmployees.length > 0 &&

                <div className="flex flex-col justify-center min-h-screen bg-gray-100 mx-auto">
                    <div className="text-md mb-4 items-start w-4/5 mx-auto">
                        <span className='font-bold'>Radnici:</span>
                        {currentEmployees.map((item) => (
                            <span> {item.name} {" ; "}</span>
                        ))}
                    </div>
                    <h2 className="text-2xl font-bold mb-4 items-start w-4/5 mx-auto">Trenutne operacije</h2>

                    <input
                        type="text"
                        placeholder="Unesi šifru dela..."
                        className="mb-4 p-2 border rounded w-4/5 mx-auto"
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                    />
                    <div className="overflow-x-auto  w-4/5 mx-auto">
                        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md  mx-auto">
                            <thead>
                                <tr className="bg-gray-200 text-gray-600 uppercase text-[12px] leading-normal">
                                    <th className="py-3 px-6 text-left cursor-pointer" onClick={() => handleSort('radni_nalog')}>Radni Nalog</th>
                                    <th className="py-3 px-6 text-left cursor-pointer" onClick={() => handleSort('sifra_proizvoda')}>Šifra Proizvoda</th>
                                    <th className="py-3 px-6 text-left cursor-pointer" onClick={() => handleSort('sifra_dela')}>Šifra Dela</th>
                                    <th className="py-3 px-6 text-left cursor-pointer" onClick={() => handleSort('naziv_dela')}>Naziv Dela</th>
                                    <th className="py-3 px-6 text-left cursor-pointer" onClick={() => handleSort('kolicina_dela')}>Količina Dela</th>
                                    <th className="py-3 px-6 text-left cursor-pointer" onClick={() => handleSort('vreme_pocetka')}>Vreme početka</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-600 text-sm font-light">
                                {filteredData.map((item) => (
                                    <tr key={item.radni_nalog} className=" cursor-pointer border-b border-gray-300 hover:bg-gray-100" onClick={() => onSelect(item)}>
                                        <td className="py-3 px-6">{item.radni_nalog}</td>
                                        <td className="py-3 px-6">{item.sifra_proizvoda}</td>
                                        <td className="py-3 px-6">{item.sifra_dela}</td>
                                        <td className="py-3 px-6">{item.naziv_dela}</td>
                                        <td className="py-3 px-6">{item.kolicina_dela}</td>
                                        <td className="py-3 px-6">{item.vreme_pocetka}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            }
        </>

    );
};

export default DataGridCurrent;