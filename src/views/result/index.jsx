import { PieChart } from '@mui/x-charts';
import { BarChart } from '@mui/x-charts/BarChart';
import { useState } from 'react';

const Results = () => {
    const [type, setType] = useState('pie');
    const [ageGroup, setAgeGroup] = useState('18-30');
    const [party, setParty] = useState('PMLN');
    const [gender, setGender] = useState('Male');

    const handleType = (value) => {
        setType(value);
    };

    const handleAgeGroupChange = (event) => {
        setAgeGroup(event.target.value);
    };

    const handlePartyChange = (event) => {
        setParty(event.target.value);
    };

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };

    const mockData = {
        '18-30': {
            Male: {
                PMLN: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55],
                PTI: [5, 25, 15, 20, 30, 10, 15, 20, 25, 30],
                PPP: [8, 12, 18, 22, 28, 18, 24, 28, 32, 36],
            },
            Female: {
                PMLN: [12, 18, 22, 28, 34, 38, 42, 46, 50, 54],
                PTI: [7, 28, 14, 25, 35, 12, 18, 24, 30, 36],
                PPP: [9, 15, 20, 26, 32, 22, 27, 32, 37, 42],
            },
        },
        '30-45': {
            Male: {
                PMLN: [14, 20, 16, 24, 30, 36, 42, 48, 54, 60],
                PTI: [10, 30, 20, 28, 38, 18, 24, 30, 36, 42],
                PPP: [12, 18, 24, 30, 36, 26, 32, 38, 44, 50],
            },
            Female: {
                PMLN: [16, 24, 20, 28, 36, 40, 46, 52, 58, 64],
                PTI: [12, 32, 18, 30, 40, 20, 26, 32, 38, 44],
                PPP: [15, 20, 25, 34, 40, 30, 35, 40, 45, 50],
            },
        },
        '45-60': {
            Male: {
                PMLN: [20, 25, 30, 35, 40, 45, 50, 55, 60, 65],
                PTI: [15, 35, 25, 30, 40, 20, 30, 35, 40, 45],
                PPP: [18, 22, 28, 34, 38, 28, 36, 42, 48, 54],
            },
            Female: {
                PMLN: [22, 28, 32, 38, 44, 48, 52, 58, 64, 70],
                PTI: [17, 38, 22, 34, 44, 24, 32, 38, 44, 50],
                PPP: [19, 24, 30, 38, 42, 34, 38, 44, 50, 56],
            },
        },
        '60-75': {
            Male: {
                PMLN: [25, 30, 35, 40, 45, 50, 55, 60, 65, 70],
                PTI: [20, 40, 30, 35, 45, 25, 35, 40, 45, 50],
                PPP: [22, 28, 34, 40, 44, 32, 38, 42, 48, 54],
            },
            Female: {
                PMLN: [28, 34, 38, 44, 50, 54, 58, 64, 70, 75],
                PTI: [22, 42, 28, 40, 50, 30, 38, 44, 50, 56],
                PPP: [25, 30, 35, 42, 46, 38, 42, 48, 54, 60],
            },
        },
        '75+': {
            Male: {
                PMLN: [30, 35, 40, 45, 50, 55, 60, 65, 70, 75],
                PTI: [25, 45, 35, 40, 50, 30, 40, 45, 50, 55],
                PPP: [28, 34, 40, 46, 50, 38, 44, 50, 55, 60],
            },
            Female: {
                PMLN: [32, 38, 42, 48, 54, 58, 62, 68, 74, 80],
                PTI: [28, 48, 34, 46, 56, 36, 44, 50, 56, 62],
                PPP: [30, 35, 40, 48, 52, 42, 46, 52, 58, 64],
            },
        },
    };
    
    

    const selectedData = mockData[ageGroup][gender][party];

    return (
        <div>
            <h1 className="rounded-tl-3xl rounded-br-3xl mx-[0.5rem] my-[0.5rem] p-[1rem] text-themePurple text-[2.25rem] font-[500] bg-white">
                Result
            </h1>

            <div className="flex items-center justify-between w-2/5 mx-auto mt-8 bg-themePurple rounded-xl">
                <button
                    onClick={() => handleType('pie')}
                    className={`w-1/2 py-3 transition delay-75 hover:bg-white hover:text-themePurple rounded-tl-xl rounded-bl-xl ${
                        type === 'pie' ? 'bg-white text-themePurple' : 'text-white'
                    }`}
                >
                    Pie Chart
                </button>
                <button
                    onClick={() => handleType('bar')}
                    className={`w-1/2 py-3 transition delay-75 hover:bg-white hover:text-themePurple rounded-tr-xl rounded-br-xl ${
                        type === 'bar' ? 'bg-white text-themePurple' : 'text-white'
                    }`}
                >
                    Bar Graph
                </button>
            </div>

            <div className="flex flex-col justify-center items-center m-[1rem]">
                <div className="flex mb-4 space-x-16">
                    <div className="flex flex-col items-start">
                        <label htmlFor="ageGroup" className="mb-2 font-bold">
                            Age Group
                        </label>
                        <select id="ageGroup" value={ageGroup} onChange={handleAgeGroupChange} className="p-2 border rounded">
                            <option value="18-30">18-30</option>
                            <option value="30-45">30-45</option>
                            <option value="45-60">45-60</option>
                        </select>
                    </div>
                    <div className="flex flex-col items-start">
                        <label htmlFor="party" className="mb-2 font-bold">
                            Party
                        </label>
                        <select id="party" value={party} onChange={handlePartyChange} className="p-2 border rounded">
                            <option value="PMLN">PMLN</option>
                            <option value="PTI">PTI</option>
                            <option value="PPP">PPP</option>
                        </select>
                    </div>
                    <div className="flex flex-col items-start">
                        <label htmlFor="gender" className="mb-2 font-bold">
                            Gender
                        </label>
                        <select id="gender" value={gender} onChange={handleGenderChange} className="p-2 border rounded">
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                </div>

                {type === 'pie' ? (
                    <PieChart
                        series={[
                            {
                                data: selectedData.map((value, index) => ({
                                    id: index,
                                    value,
                                    label: `Candidate ${index + 1}`, // More descriptive labels
                                })),
                            },
                        ]}
                        width={800}
                        height={600}
                    />
                ) : null}

                {type === 'bar' ? (
                    <BarChart
                        xAxis={[{ scaleType: 'band', data: ['PMLN', 'PTI', 'PPP'] }]} // More descriptive labels
                        series={[{ data: selectedData, label: 'Votes Count' }]} // Adding label to the series
                        width={800}
                        height={600}
                    />
                ) : null}
            </div>
        </div>
    );
};

export default Results;
