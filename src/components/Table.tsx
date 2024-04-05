import { useState } from "react";
import DataTable from "react-data-table-component";

const columns = [
  {
    name: "ID",
    selector: (row) => row.id,
    sortable: true,
  },
  {
    name: "Full Name",
    selector: (row) => row.fullName,
    sortable: true,
  },
  {
    name: "Height",
    selector: (row) => row.height,
    sortable: true,
  },
  {
    name: "Weight",
    selector: (row) => row.weight,
    sortable: true,
  },
];

const rows = [
  {
    personID:  "com.time.Lotlux",
    fullName: "Genni Harvett",
    height: "1.80mt",
    eyeColor: "blue",
  },
  {
    personID:  "com.fc2.Lotstring",
    fullName: "Torr Giurio",
    height: "1.80mt",
    eyeColor: "blue",
  },
  {
    personID:  "edu.columbia.Job",
    fullName: "Ariana Olpin",
    height: "1.80mt",
    eyeColor:  "blue",
  },
  {
    personID:  "au.gov.privacy.Solarbreeze",
    fullName: "Lezlie Cowburn",
    height:"1.80mt",
    eyeColor:  "blue",
  },
  {
    personID:  "de.t-online.Matsoft",
    fullName: "Bronson Timmens",
    height: "1.80mt",
    eyeColor:  "blue",
  },
  {
    personID:  "com.go.Toughjoyfax",
    fullName: "Rebbecca Chmarny",
    height: "1.80mt",
    eyeColor: "red",
  },
  {
    personID:  "edu.uiuc.Keylex",
    fullName: "Benjie Yushankin",
    height: "1.80mt",
    eyeColor: "red",
  },
  {
    personID:  "com.dailymotion.Treeflex",
    fullName: "Sabine Runge",
    height: "1.80mt",
    eyeColor: "red",
  },
  {
    personID:  "com.sun.Transcof",
    fullName: "Kayle Klamp",
    height: "1.58mt",
    eyeColor:"red",
  },
  {
    personID:  "com.purevolume.Opela",
    fullName: "Marillin Kesley",
    height: "1.58mt",
    eyeColor: "red",
  },
  {
    personID:  "com.discovery.Zamit",
    fullName: "Andie Shelton",
    height: "1.58mt",
    eyeColor: "yellow",
  },
  {
    personID:  "io.soup.Stim",
    fullName: "Noby O' Ronan",
    height: "1.89mt",
    eyeColor: "yellow",
  },
  {
    personID:  "gov.ca.Namfix",
    fullName: "Cherianne Falk",
    height: "1.89mt",
    eyeColor: "yellow",
  },
  {
    personID:  "com.artisteer.Subin",
    fullName: "Kelli Jacquemot",
    height: "1.89mt",
    eyeColor: "yellow",
  },
  {
    personID:  "edu.arizona.Bamity",
    fullName: "Boycie Kinkade",
    height: "1.89mt",
    eyeColor:"yellow",
  },
  {
    personID:  "com.wikia.Transcof",
    fullName: "Goldarina Haker",
    height: "1.89mt",
    eyeColor: "yellow",
  },
  {
    personID:  "com.phpbb.Ventosanzap",
    fullName: "Kathleen Alderman",
    height: "1.89mt",
    eyeColor: "yellow",
  },
  {
    personID:  "com.bing.Home Ing",
    fullName: "Boonie Gentery",
    height: "1.89mt",
    eyeColor:"yellow",
  },
  {
    personID:  "com.cafepress.Konklux",
    fullName: "Nichol Kolyagin",
    height: "1.89mt",
    eyeColor: "yellow",
  },
  {
    personID:  "com.cyberchimps.Bitwolf",
    fullName: "Jody Dyster",
    height: "1.89mt",
    eyeColor: "yellow",
  },
];





const Table = () => {
  const [data, setData] = useState(rows);
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    let searchValue: boolean;
    let personIDValue: boolean;
    let fullNameValue: boolean;
    let heightValue: boolean;
    let eyeColorValue: boolean;
  
    const newRows = rows.filter((row) => {
      personIDValue = row.personID
        .toString()
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
      fullNameValue = row.fullName
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
      heightValue = row.height
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
      eyeColorValue = row.eyeColor
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
  
      if (personIDValue) {
        searchValue = personIDValue;
      } else if (fullNameValue) {
        searchValue = fullNameValue;
      } else if (heightValue) {
        searchValue = heightValue;
      } else {
        searchValue = eyeColorValue;
      }
  
      return searchValue;
  });
  setData (newRows)
  };

  return (
    <div className="container my-5">
      <div className="input-group">
        <input
          type="search"
          className="border ps-3 form-control-sm"
          placeholder="Search"
          onChange={handleSearch}
        />
      </div>
      <DataTable
        columns={columns}
        data={data}
        fixedHeader
        title="My first table"
        pagination
        selectableRows
      />
    </div>
  );
};

export default Table;
