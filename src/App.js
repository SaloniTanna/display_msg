import React  from "react";
function LSDemo()
{
  const[value,setValue] = React.useState("");

  React.useEffect(() => {
    getData();
  },[]);
  
  function saveData()
  {
    var mydata = {
      name:"Saloni Tanna",
      gender:"Female",
      mobileno:9409102000
    }
    var a = JSON.stringify(mydata);
    localStorage.setItem("userData",a);
    setValue("Data Stored");
  }

function getData()
{
  var a = localStorage.getItem("userData");
  if(a)
  {
    var details = JSON.parse(a);
    var msg = `Name is  : ${details.name} Gender is : ${details.gender} Mobile No is :${details.mobileno}`
    setValue("Details is:" +msg);
  }
  else
  {
    setValue("No Value");
  }
}
function removeData()
{
  localStorage.removeItem("userData");
  setValue("Data Removed");
}

return(
  <>
  <h2>Local Storage</h2>
  {value} <br />
  <button onClick={saveData}>Save</button>
  <button onClick={getData}>Display</button>
  <button onClick={removeData}>Delete</button>
  </>
);
}
export default LSDemo;
