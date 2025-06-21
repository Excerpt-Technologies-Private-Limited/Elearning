import React, { useState } from "react";
import ReactApexChart from 'react-apexcharts';

import AdminSideNavaBar from "../AdminSideNavaBar/AdminSideNavaBar";
import DashBoard1 from "../../../pages/DashBoard/DashBoard";
import SideNavBar1 from "../../../pages/SideNavBar/SideNavBar";
import Header1 from "../../../pages/Header/Header";

const DashBoard = () => {
  const chartData = {
    series: [70, 55, 80, 45],
    options: {
      chart: {
        height: 350,
        type: 'radialBar',
      },
      colors: ['#140342', '#643efa', '#02e07c', '#F3C623'], // ✅ Custom colors
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: '22px',
            },
            value: {
              fontSize: '16px',
            },
            total: {
              show: true,
              label: 'Total Performance',
              formatter: function () {
                return "85%";
              },
            },
          },
        },
      },
      labels: ['Total Sales', 'Total Courses', 'Total Students', 'Total Instructors'],
    },
  };

  const chartDataBar = {
    series: [
      {
        name: 'Free Cash Flow',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
      }
    ],
    options: {
      chart: {
        type: 'bar',
        height: 350,
      },
      colors:['#140342'],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          borderRadius: 5,
          borderRadiusApplication: 'end',
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
      },
      
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands";
          },
        },
      },
    }
  };
  return (
    
    <div  id="layout-wrapper">
      
     {/* <AdminHeader/> */}
      <Header1/>
      <SideNavBar1/>
      <DashBoard1/>
      
  </div>
  );
};

export default DashBoard;
