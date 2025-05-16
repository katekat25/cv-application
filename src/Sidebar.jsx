function Sidebar({ toggle }) {
    return <div className="sidebar">
        <h1>CV Generator</h1>
        <h2>by Kate Schumacher</h2>
        Click on text to edit it. When you're finished you can export the page as a PDF for printing.
        <button onClick={toggle}>Toggle icon</button>
        <button>Preview</button>
        <button>Export to PDF</button>
        <button>Print</button>
    </div>
}

export { Sidebar }