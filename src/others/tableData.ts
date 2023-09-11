type TableData = {
    [x: string]: string;
};

const enum TableKey {
    ID = "ID",
    firstName = "firstName",
    lastName = "lastName",
    score = "score",
}

type StrictTableData = {[key in TableKey]: string};

const myTableData: StrictTableData = {
    ID: "1",
    firstName: "jane",
    lastName: "doe",
    score: "100",
};

console.log(myTableData);
