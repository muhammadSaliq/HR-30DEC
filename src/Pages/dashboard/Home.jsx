import React, { useEffect, useState } from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { Bar, Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import axios from 'axios';

function Home() {

  const [allemployees, setallemployees] = useState([]);
  const [alleducationield, setalleducationield] = useState([]);

  const getAllemployeedep = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/employeedepartmentstotal`);
      console.log("response: ", response);
      setallemployees(response.data);
    } catch (error) {
      console.log("error in getting all Departments", error);
    }
  };

  const employeeducationfieldtotal = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/employeeducationfieldtotal`);
      console.log("response:2 ", response);
      setalleducationield(response.data);
      console.log("res2", response.data.lstotal);
    } catch (error) {
      console.log("error in getting all Departments", error);
    }
  };
  useEffect(() => {
    console.log('asdasd')
    getAllemployeedep()
    employeeducationfieldtotal()

}, [])


  const barChartData = {
    labels: ['HR Department', 'IT Department', 'Financial department', 'Strategic division', 'Kiet Departments of Sciences', 'IT'],
    datasets: [
      {
        label: 'Employees Per Department',
        data: [`${allemployees.hrtotal}`, `${allemployees.itreasult}`, `${allemployees.fitotal}`, `${allemployees.sttotal}`, `${allemployees.kitotal}`, `${allemployees.itdeptotal}`],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  const pieChartData = {
    labels: ['Life Sciences', 'Medical', 'Marketing', 'Technical Degree', 'Human Resources', 'Other'],
    datasets: [

      {
        label: 'My First Dataset',
        data: [`${alleducationield.lstotal}`, `${alleducationield.mereasult}`, `${alleducationield.martotal}`, `${alleducationield.tdtotal}`, `${alleducationield.hrtotal}`, `${alleducationield.ottotal}`],

        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const barContainerStyle = {
    width: '100%',
    height: '60px', // Width for bar chart container
    paddingBottom: '45%', // Maintain a 1:1 aspect ratio for the chart (adjust as needed)
    position: 'relative', // Position relative to allow for absolute positioning of the chart
    marginBottom: '20px', // Add space between charts
  };

  const pieContainerStyle = {
    width: '60%', // Width for pie chart container
    height: '40px',
    paddingBottom: '45%', // Maintain a 1:1 aspect ratio for the chart (adjust as needed)
    position: 'relative', // Position relative to allow for absolute positioning of the chart
    marginBottom: '20px', // Add space between charts
  };

  const chartStyle = {
    position: 'absolute', // Position the chart absolutely within its container
    width: '100%', // Chart takes up 100% width of the container
    height: '100%', // Chart takes up 100% height of the container
  };

    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
      const containerStyle = {

        height: '150px',
      };

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards'>
        <Link to="/department">

            <div className='card' style={containerStyle}>
                <div className='card-inner'>
                    <h3>DEPARTMENTS</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h1>6</h1>
            </div>
            </Link>
            <Link to="/AllEmployee">

            <div className='card' style={containerStyle}>
                <div className='card-inner'>
                    <h3>EMPLOYEES</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>500</h1>
            </div>
                        </Link>

            <div className='card' style={containerStyle}>
                <div className='card-inner'>
                    <h3>VACANCIES</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>33</h1>
            </div>
            <div className='card' style={containerStyle}>
                <div className='card-inner'>
                    <h3>ALERTS</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1>42</h1>
            </div>
        </div>

        <div className='charts'>
        <div style={{ ...barContainerStyle, maxWidth: '500px' }}>
          <Bar data={barChartData} style={chartStyle} />
        </div>
        <div style={{ ...pieContainerStyle, maxWidth: '500px' }}>
          <Pie data={pieChartData} style={chartStyle} />
        </div>
      </div>
    </main>
  )
}

export default Home