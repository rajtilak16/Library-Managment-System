const constants = {
    NUMBER : "number",
    TEXT : "text",
    DATE : "date",
    BOOLEAN : "boolean"
}

const {NUMBER, TEXT, DATE, BOOLEAN} = constants;

const inputObjArr = [
    {
        key: "ISBN",
        type : NUMBER,
        id : "ISBNInput"
    },
    {   
        key : "Author Name",
        type : TEXT,
        id : "AuthorNameInput"
    },
    {
        key : "Book Name",
        type : TEXT,
        id : "BookNameInput"
    },
    {
        key : "price",
        type : NUMBER,
        id : "priceInput"
    },
    {
        key : "pages",
        type : NUMBER,
        id : "pagesInput"
    },
    {
        key :  "Discount",
        type : NUMBER,
        id : "DiscountInput"
    },
    {
        key : "Year of Publish",
        type : DATE,
        id : "YearOfPublishInput"
    },
    {
        key : "In Stock",
        type : TEXT,
        id : "InStockInput"
    }
];