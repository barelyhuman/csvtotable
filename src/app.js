import React, { useState } from "react";
import { render } from "react-dom";
import JSONInput from './JSONInput';
import Table from './Table';

const App = () => {
    const [tableData, setTableData] = useState([]);
    return <div>
        <JSONInput onCoversion={(e) => setTableData(e)} />
        {tableData ? <Table data={tableData} /> : null}
    </div>

}

render(<App />, document.getElementById("app"));
