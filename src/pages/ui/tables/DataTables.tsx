import React, { useRef, useEffect } from "react";
import { Grid } from "gridjs-react";
import "gridjs/dist/theme/mermaid.min.css";
import { RowSelection } from "gridjs/plugins/selection";
import { _ } from "gridjs-react";
import { RiMore2Fill } from 'react-icons/ri';
import './Custom-themes.css'
import { FiFilter } from 'react-icons/fi';
import { Link } from "react-router-dom";

import { RiDeleteBin2Line, RiEdit2Line } from 'react-icons/ri';



// Define the interface for a row
interface Row {
  cells: { data: string }[];
}



const DataTables = () => {
  const gridRef = useRef<Grid>(null); // Explicitly specify the type of gridRef

  const handleEdit = (row: Row) => {
    console.log("Action", row);
  };

  useEffect(() => {
    const currentGrid = gridRef.current?.getInstance();
    if (currentGrid) {
      currentGrid.forceRender(); // Force re-render to ensure Grid.js functionalities work properly
    }
  }, [gridRef.current]);

  return (
    <>
	<div className="card">
  <div className="flex items-center">
    <h4 className="card-title ml-5" style={{ marginTop: '40px', marginRight: '72%' }}>Total patients: 200</h4>
    <div className="mr-9 flex items-center">
      <button style={{ backgroundColor: 'white', color: 'black', border: '1px solid black', display: 'flex', alignItems: 'center', padding: '8px 12px', marginRight: '10px', borderRadius:'10px'}}>
        <FiFilter style={{ marginRight: '5px' }} /> 
        Filter
      </button>
      <Link to="/ui/forms/validation" style={{ textDecoration: 'none' }}>
            <button style={{ backgroundColor: 'blue', color: 'white', border: 'none', padding: '8px 12px', display: 'flex', alignItems: 'center' , borderRadius:'10px'}}>
              + New patient
            </button>
        </Link>
    </div>
  </div>
	

      <Grid
        ref={gridRef}
		search={{
			enabled: true,
		}}
		style={{
			table: {
			  border: "1px solid #ccc",
			//   "margin-top": "1rem"
			
			},
			th: {
			  "background-color": "rgba(0, 0, 0, 0.1)",
			  color: "#000",
			  "border-bottom": "1px solid #ccc",
			  "text-align": "center"
			},
			td: {
			  "text-align": "left",
			  color: "#000",
			}

		  }}
        pagination={{
          enabled: true,
          limit: 12
        }}
        sort={true}
        data={dataTableRecords.map(record => [
          record.MRN,
          record.Date,
          record.Time,
          record.Status,
          record.OrderingDr // Include the ID for actions
        ])}
        columns={[
          {
            id: "chkbox",
            name: () => {
              return (
                <input
                  type="checkbox"
                  onChange={(e) => {
                    const checked = e.target.checked;
                    const currentGrid = gridRef.current?.getInstance();
                    if (currentGrid) {
                      currentGrid.row().toggleSelect(checked);
                    }
                  }}
                />
              );
            },
            plugin: {
              // install the RowSelection plugin
              component: RowSelection
            }
          },
          "MRN",
          "DOB",
          "Time to resolve",
          "Status",
		  "OrderingDr",
          {
			name: "Actions",
			width: "120px", 
			formatter: (_cell: any, row: Row) => { 
			  return _(
				<div className="flex justify-center space-x-4">
					<RiEdit2Line
				  	className="text-blue-600 cursor-pointer text-lg"
				  	onClick={() => handleEdit(row)}
				/>
				<RiDeleteBin2Line
				  	className="text-red-600 cursor-pointer text-lg"
				  	onClick={() => handleEdit(row)}
				/>
				</div>
			  );
			}
		  }
        ]}
      />
	  </div>
    </>
  );
};

export default DataTables;

const dataTableRecords = [
	{
	  MRN: "4353456",
	  Date: "20 Feb 2024",
	  Time: "10 Mins",
	  Status: "Scanning Information",
	  OrderingDr: "John"
	},
	{
	  MRN: "1234567",
	  Date: "21 Feb 2024",
	  Time: "15 Mins",
	  Status: "Completed",
	  OrderingDr: "Smith"
	},
	{
	  MRN: "9876543",
	  Date: "22 Feb 2024",
	  Time: "20 Mins",
	  Status: "Pending",
	  OrderingDr: "Doe"
	},
	{
	  MRN: "2468101",
	  Date: "23 Feb 2024",
	  Time: "12 Mins",
	  Status: "Cancelled",
	  OrderingDr: "Brown"
	},
	{
	  MRN: "5678901",
	  Date: "24 Feb 2024",
	  Time: "18 Mins",
	  Status: "Scanning Information",
	  OrderingDr: "John"
	},
	{
	  MRN: "1122334",
	  Date: "25 Feb 2024",
	  Time: "8 Mins",
	  Status: "Completed",
	  OrderingDr: "Smith"
	},
	{
	  MRN: "9871234",
	  Date: "26 Feb 2024",
	  Time: "14 Mins",
	  Status: "Pending",
	  OrderingDr: "Doe"
	},
	{
	  MRN: "9998887",
	  Date: "27 Feb 2024",
	  Time: "22 Mins",
	  Status: "Cancelled",
	  OrderingDr: "Brown"
	},
	{
	  MRN: "7777777",
	  Date: "28 Feb 2024",
	  Time: "9 Mins",
	  Status: "Scanning Information",
	  OrderingDr: "John"
	},
	{
	  MRN: "5555555",
	  Date: "29 Feb 2024",
	  Time: "16 Mins",
	  Status: "Completed",
	  OrderingDr: "Smith"
	},
	{
	  MRN: "8888888",
	  Date: "1 Mar 2024",
	  Time: "19 Mins",
	  Status: "Pending",
	  OrderingDr: "Doe"
	},
	{
	  MRN: "3333333",
	  Date: "2 Mar 2024",
	  Time: "11 Mins",
	  Status: "Cancelled",
	  OrderingDr: "Brown"
	}
  ];
  
  

export type Employee = {
  PatientName: string;
  Date: string;
  Time: string;
  Status: string;
};

// import { Grid } from 'gridjs-react'

// // Components
// import { PageBreadcrumb } from '../../../components'

// //dummy data
// import { dataTableRecords } from './data'

// const DataTables = () => {
// 	return (
// 		<>
// 			<div className="flex flex-col gap-6">
// 				<div className="card">
// 					<div className="p-6">
// 							<h4 className="card-title">Basic</h4>
// 							<Grid data={dataTableRecords} pagination={{ enabled: true, limit: 5 }} search={true} sort={true} />
// 					</div>
// 				</div>

// 		</div>
// 		</>
// 	)
// }

// export default DataTables

