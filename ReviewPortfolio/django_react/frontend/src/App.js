import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import * as XLSX from 'xlsx';
import Axios from 'axios';

const App = () => {

    const [columns, setColumns] = useState([]);
    const [data, setData] = useState([]);
    //const reloadtButton = document.querySelector("#reload");
    
    //function refreshPage() {
    //  window.location.reload(false);
    //}

    //reloadButton.addEventListener("click", reload, false);

    const addFile = () => {
      
        data.forEach(function (item, index) {
          Axios.post("http://localhost:8000/api/reviews",  {
            Date: item.Date,
            P1: item.P1,
            P2: item.P2,
            P3: item.P3,
            P4: item.P4,
            P5: item.P5,
            P6: item.P6,
            P7: item.P7,
            })
        })
        //window.location.reload(true)
        setInterval('location.reload()', 20000);
        //window.location.reload(false);
    };

    const deleteFile = () => {
        //data.forEach(function (item, index) {
        Axios.delete("http://localhost:8000/api/reviews", {
          
        })
        
    };

    const processData = dataString => {
        const dataStringLines = dataString.split(/\r\n|\n/);
        const headers = dataStringLines[0].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);
     
        const list = [];
        for (let i = 1; i < dataStringLines.length; i++) {
          const row = dataStringLines[i].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);
          if (headers && row.length == headers.length) {
            const obj = {};
            for (let j = 0; j < headers.length; j++) {
              let d = row[j];
              if (d.length > 0) {
                if (d[0] == '"')
                  d = d.substring(1, d.length - 1);
                if (d[d.length - 1] == '"')
                  d = d.substring(d.length - 2, 1);
              }
              if (headers[j]) {
                obj[headers[j]] = d;
              }
            }
     
            // remove the blank rows
            if (Object.values(obj).filter(x => x).length > 0) {
              list.push(obj);
            }
          }
        }
     
        // prepare columns list from headers
      const columns = headers.map(c => ({
          name: c,
          selector: c,
      }));
     
        setData(list);
        setColumns(columns);
        console.log(data)

    }
     
      // handle file upload
      const handleFileUpload = e => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (evt) => {
          /* Parse data */
          const bstr = evt.target.result;
          const wb = XLSX.read(bstr, { type: 'binary' });
          /* Get first worksheet */
          const wsname = wb.SheetNames[0];
          const ws = wb.Sheets[wsname];
          /* Convert array of arrays */
          const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
          processData(data);
        };
        reader.readAsBinaryString(file);
      }
    
  const HomeContainer = {
    boxSizing: "borderBox",
    margin: "0",
    padding: "0",
    backgroundColor: "black", 
    //width: "1400px", 
    //height: "1000px",
    //justifyContent: "center",
    //alignItems: "center",
    //padding: "0 30px",
    //position: "relative",
    //zIndex: "1",   
  }  

  const Nav = {
    backgroundColor: "#26303A", 
    boxSizing: "border-box",
    margin: "0",
    overflow: "hidden",
    height: "80px",
    marginTop: "0px",
    display: "flex",
    justifyContent: "center",
    fontSize: "1rem",
    position: "sticky",
    top: "0px",
    zIndex: "10",
 
  }

  const NavContainer = {
    display: "flex",
    height: "80px",
    justifyContent: "space-between", 
    zIndex: "1", 
    width: "100%", 
    //padding: "0 24px", 
    maxWidth: "1100px"
  }

  const NavLogo = {
    color: "#fff", 
    justifySelf: "flex-start", 
    cursor: "pointer", 
    fontSize: "1.5rem", 
    display: "flex", 
    alignItems: "center", 
    marginLeft: "24px", 
    fontWeight: "bold",
    textDecoration: "none",

  }

  const NavButton = {
    borderRadius: "50px",
    background: "#FFBC2D",
    display: "flex",
    whiteSpace: "nowrap",
    padding: "10px 22px",
    alignItems: "center",
    marginTop: "15px",
    marginRight: "24px", 
    height: "50px",
    color: "#fff",
    fontSize: "16px",
    outline: "none",
    border: "none",
    cursor: "pointer"
  }

  const AddFileButton = {
    borderRadius: "50px",
    background: "#FF2B7F",
    display: "flex",
    whiteSpace: "nowrap",
    padding: "10px 22px",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "15px",
    //marginLeft: "300px", 
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    height: "50px",
    color: "#fff",
    fontSize: "16px",
    outline: "none",
    border: "none",
    cursor: "pointer"
  }

  const addFileSection = {
    marginTop: "50px",
    alignItems: "center",
  }

  const addFileH1 = {
    color: "#fff", 
    textAlign: "center", 
    marginTop: "80px"
  }

  const addFileHandler = {
    padding: "350px", 
    marginTop: "-300px", 
    display: "block",
    marginLeft: "auto",
    marginRight: "auto"
  }

  const file = {
    opacity: "0",
    width: "0.1px",
    height: "0.1px",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto"
  }

  const buttonAddFile = {
    display: "block",
    position: "relative",
    width: "100px",
    height: "50px",
    borderRadius: "5px",
    background: "#028EE4",
    boxShadow: "0 4px 7px rgba(0, 0, 0, 0.4)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "transform 0.2s ease-out"
  }

  return (
    <div style={HomeContainer}>
        <div style={Nav}>
            <div style={NavContainer}>
                <a style={NavLogo}>moneyfarm</a>
                <button style={NavButton}>SignOut</button>        
            </div>    
        </div>
      
        <div style={addFileSection}>
            <h1 style={addFileH1}>Add your CSV File to review the Portfolio</h1>
            <div style={addFileHandler}>
                <input 
                    type="file"
                    style={file}
                    id="file"
                    accept=".csv,.xlsx,.xls"
                    onClick={deleteFile}
                    onChange={handleFileUpload}
                    class="file"
                />

                <label
                    for="file"
                    style={buttonAddFile}
                >Select file
                </label>

                <DataTable
                    pagination
                    highlightOnHover
                    style={{backgroundColor: "#f5f5f5" }}
                    columns={columns}
                    data={data}
                />
                <button 
                onClick={addFile}
                //onClick={refreshPage}
                style={AddFileButton}
                >Get Graph</button>
            </div>
        </div>
    </div> 
  )
}

export default App